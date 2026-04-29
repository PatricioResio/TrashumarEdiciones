import { useNavigate } from "react-router-dom";
import { createContext, useContext, useState, useEffect, useRef } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser]   = useState(null);
  const [googleUser, setGoogleUser]     = useState(null);
  const [newUser, setNewUser]           = useState(false);
  const [loading, setLoading]           = useState(true);
  const [authError, setAuthError]       = useState(null); // ← estado de error nuevo
  const navigate                        = useNavigate();
  const servicesRef                     = useRef(null);

  const loadFirebaseServices = async () => {
    if (servicesRef.current) return servicesRef.current;

    // un solo import de firebase, no dos
    const [{ auth, db }, firestoreModule, authModule] = await Promise.all([
      import("../api/firebase"),
      import("firebase/firestore"),
      import("firebase/auth"),
    ]);

    servicesRef.current = { auth, db, firestoreModule, authModule };
    return servicesRef.current;
  };

  // listener de auth state
  useEffect(() => {
    let unsubscribe = null;
    let isMounted = true;

    const setupAuthListener = async () => {
      const { auth, authModule } = await loadFirebaseServices();
      unsubscribe = authModule.onAuthStateChanged(auth, (user) => {
        if (!isMounted) return;
        setGoogleUser(user ?? null);
        setLoading(false);
      });
    };

    setupAuthListener().catch(() => {
      if (isMounted) {
        setAuthError("No se pudo conectar con el servidor de autenticación.");
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
      if (unsubscribe) unsubscribe();
    };
  }, []);

  // cuando googleUser cambia, buscar perfil en Firestore
  useEffect(() => {
    if (!googleUser) {
      setCurrentUser(null);
      setNewUser(true);
      return;
    }

    const fetchPerfil = async () => {
      try {
        const { db, firestoreModule } = await loadFirebaseServices();
        const userDoc = firestoreModule.doc(db, "perfiles", googleUser.uid);
        const response = await firestoreModule.getDoc(userDoc);
        if (response.exists()) {
          setCurrentUser(response.data());
          setNewUser(false);
        } else {
          setCurrentUser(null);
          setNewUser(true);
        }
      } catch (error) {
        console.error("Error al obtener perfil:", error);
        setAuthError("No se pudo cargar tu perfil. Intentá de nuevo.");
      }
    };

    fetchPerfil();
  }, [googleUser]);

  const loginWithGoogle = async () => {
    const { auth, authModule } = await loadFirebaseServices();
    const provider = new authModule.GoogleAuthProvider();
    return authModule.signInWithPopup(auth, provider);
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    setAuthError(null);
    try {
      await loginWithGoogle();
      navigate("/miperfil"); // ← solo navega si el login fue exitoso
    } catch (error) {
      console.error("Error durante la autenticación con Google:", error);
      setAuthError("No se pudo iniciar sesión con Google. Intentá de nuevo.");
    }
  };

  const registrar = async (registrerUser) => {
    setAuthError(null);
    try {
      const { db, firestoreModule } = await loadFirebaseServices();
      if (!googleUser?.uid) {
        setAuthError("Tu sesión de Google no está disponible. Intentá loguearte de nuevo.");
        return;
      }

      const userProfileRef = firestoreModule.doc(db, "perfiles", googleUser.uid);
      const userProfileSnap = await firestoreModule.getDoc(userProfileRef);

      if (!userProfileSnap.exists()) {
        await firestoreModule.setDoc(userProfileRef, {
          ...registrerUser,
          idPerfil: googleUser.uid,
        });
  
      } else {
        await firestoreModule.setDoc(userProfileRef, { ...registrerUser }, { merge: true });

      }

      setCurrentUser({ ...registrerUser });

    } catch (err) {
      console.error("Error en el registro:", err);
      setAuthError("Error durante el registro. Por favor, intentá de nuevo.");
    }
  };

  const logOut = async () => {
    try {
      const { auth, authModule } = await loadFirebaseServices();
      await authModule.signOut(auth);
      setCurrentUser(null);
      setGoogleUser(null);
      setNewUser(false);
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      setAuthError("No se pudo cerrar la sesión. Intentá de nuevo.");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        newUser,
        currentUser,
        loading,
        authError,      // ← ahora los componentes pueden leer y mostrar el error
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