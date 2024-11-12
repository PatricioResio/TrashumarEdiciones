import { auth, db } from "../api/firebase";
import { useNavigate } from "react-router-dom";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { createContext, useContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.log("error creando el contexto");
  } else {
    return context;
  }
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [googleUser, setGoogleUser] = useState(null);
  const [newUser, setNewUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const googleUnsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setCurrentUser(null);
        setLoading(false);
      } else {
        const userGoogle = user;
        setGoogleUser(userGoogle);
        setLoading(false);
        return;
      }
    });
    return () => googleUnsubscribe();
  }, []);

  useEffect(() => {
    if (!currentUser) {
      setNewUser(true);
      return;
    } else {
      setNewUser(false);
    }
  }, [currentUser]);

  useEffect(() => {
    const unsuscribe = async () => {
      const uidGoogleUser = googleUser;
      if (uidGoogleUser) {
        const userDoc = doc(db, "perfiles", uidGoogleUser.uid);
        getDoc(userDoc).then((response) => {
          setCurrentUser(response.data());
        });
      }
    };
    unsuscribe();
    return;
  }, [googleUser]);

  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return signInWithPopup(auth, responseGoogle);
  };

  const handleGoogle = async (e) => {
    e.preventDefault();

    try {
      await loginWithGoogle();
    } catch (error) {
      console.error("Error durante la autenticación con Google:", error);
    } finally {
      navigate("/miperfil");
    }
  };

  const registrar = async (registrerUser) => {
    try {
      if (!googleUser || !googleUser.uid) {
        console.error("El usuario de Google no está disponible.");
        return;
      }

      const userUID = googleUser.uid;
      const userProfileRef = doc(db, "perfiles", userUID);
      const userProfileSnap = await getDoc(userProfileRef);

      if (!userProfileSnap.exists()) {
        await setDoc(userProfileRef, {
          ...registrerUser,
          idPerfil: userUID,
        });
        alert("¡Registro completado!");
      } else {
        await setDoc(
          userProfileRef,
          {
            ...registrerUser,
          },
          { merge: true }
        );
        alert("¡Perfil actualizado!");
      }

      setCurrentUser({ ...registrerUser });
      navigate("/miperfil");
    } catch (err) {
      console.error("Error en el registro o actualización:", err);
      alert("Error durante el registro. Por favor, inténtalo de nuevo.");
    }
  };

  const logOut = async () => {
    const response = await signOut(auth);
    setCurrentUser(null);
    setGoogleUser(null);
    setNewUser(false);
    navigate("/");
    return response;
  };

  return (
    <AuthContext.Provider
      value={{
        newUser,
        currentUser,
        loginWithGoogle,
        logOut,
        registrar,
        handleGoogle,
        navigate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
