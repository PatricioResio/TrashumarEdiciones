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
  const initialUser = {
    nombre: "",
    nombrePublico: "",
    avatarURL: "",
    oficio: "",
  };

  const [currentUser, setCurrentUser] = useState(null);
  const [googleUser, setGoogleUser] = useState(null);
  const [newUser, setNewUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const googleUnsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setCurrentUser(null);
      } else {
        const userGoogle = user;
        setGoogleUser(userGoogle);
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

  const getPerfil = async (uidGoogleUser) => {
    const googleUser = uidGoogleUser;
    if (googleUser) {
      const userDoc = doc(db, "perfiles", User.uid);
      getDoc(userDoc).then((response) => {
        setCurrentUser(response.data());
      });
    }
  };

  const registrar = async (registrerUser) => {
    try {
      const userUID = googleUser.uid;
      const userProfileRef = doc(db, "perfiles", userUID);
      const userProfileSnap = await getDoc(userProfileRef);
      console.log(registrerUser);

      if (!userProfileSnap.exists()) {
        await setDoc(userProfileRef, {
          ...registrerUser,
        });
        setCurrentUser(registrerUser);
        return;
      } else {
        navigate("/");
        return;
      }
    } catch (err) {
      console.error("error", err);
    } finally {
      navigate("/miperfil");
    }
  };

  const logOut = async () => {
    const response = await signOut(auth);
    setCurrentUser(null);
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
