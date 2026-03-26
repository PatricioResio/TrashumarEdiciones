import { useNavigate } from "react-router-dom";
import { createContext, useContext, useState, useEffect, useRef } from "react";

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
  const servicesRef = useRef(null);

  const loadFirebaseServices = async () => {
    if (servicesRef.current) return servicesRef.current;

    const [{ auth }, { db }, firestoreModule, authModule] = await Promise.all([
      import("../api/firebaseAuth"),
      import("../api/firebaseDb"),
      import("firebase/firestore"),
      import("firebase/auth"),
    ]);

    servicesRef.current = {
      auth,
      db,
      firestoreModule,
      authModule,
    };

    return servicesRef.current;
  };

  useEffect(() => {
    let unsubscribe = null;
    let isMounted = true;

    const setupAuthListener = async () => {
      const { auth, authModule } = await loadFirebaseServices();
      unsubscribe = authModule.onAuthStateChanged(auth, (user) => {
        if (!isMounted) return;
        if (!user) {
          setCurrentUser(null);
          setLoading(false);
        } else {
          setGoogleUser(user);
          setLoading(false);
        }
      });
    };

    setupAuthListener().catch(() => setLoading(false));

    return () => {
      isMounted = false;
      if (unsubscribe) unsubscribe();
    };
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
        const { db, firestoreModule } = await loadFirebaseServices();
        const userDoc = firestoreModule.doc(db, "perfiles", uidGoogleUser.uid);
        firestoreModule.getDoc(userDoc).then((response) => {
          setCurrentUser(response.data());
        });
      }
    };
    unsuscribe();
    return;
  }, [googleUser]);

  const loginWithGoogle = async () => {
    const { auth, authModule } = await loadFirebaseServices();
    const responseGoogle = new authModule.GoogleAuthProvider();
    return authModule.signInWithPopup(auth, responseGoogle);
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
      const { db, firestoreModule } = await loadFirebaseServices();
      if (!googleUser || !googleUser.uid) {
        console.error("El usuario de Google no está disponible.");
        return;
      }

      const userUID = googleUser.uid;
      const userProfileRef = firestoreModule.doc(db, "perfiles", userUID);
      const userProfileSnap = await firestoreModule.getDoc(userProfileRef);

      if (!userProfileSnap.exists()) {
        await firestoreModule.setDoc(userProfileRef, {
          ...registrerUser,
          idPerfil: userUID,
        });
        alert("¡Registro completado!");
      } else {
        await firestoreModule.setDoc(
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
    const { auth, authModule } = await loadFirebaseServices();
    const response = await authModule.signOut(auth);
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
