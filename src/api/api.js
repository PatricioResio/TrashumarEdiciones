import { db } from "./firebase";
import { getDocs, collection, getDoc } from "firebase/firestore";

export const getProyectos = async () => {
  try {
    const proyectosSnapshot = await getDocs(collection(db, "proyectos"));
    return proyectosSnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener los proyectos");
  }
};

export const getPerfil = async ({ idPerfil }) => {
  try {
    const perfilesSnapshot = await getDoc(collection(db, "perfiles", idPerfil));
    return perfilesSnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener el perfil solicitado");
  }
};

export const getPerfiles = async () => {
  try {
    const perfilesSnapshot = await getDocs(collection(db, "perfiles"));
    return perfilesSnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener los perfiles");
  }
};

export const getLibros = async () => {
  try {
    const librosSnapshot = await getDocs(collection(db, "libros"));
    return librosSnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener los libros");
  }
};

/* export const setPerfil = async () = {
  try{
    const
  } catch {

  }
} */
