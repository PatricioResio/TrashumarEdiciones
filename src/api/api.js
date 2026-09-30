import { db } from "./firestore";
import { getDocs, collection, getDoc, doc } from "firebase/firestore/lite";
import { getCached, setCached } from "./cache";

export const getProyectos = async () => {
  const cached = getCached("proyectos");
  if (cached) return cached;
  try {
    const proyectosSnapshot = await getDocs(collection(db, "proyectos"));
    const data = proyectosSnapshot.docs.map((doc) => doc.data());
    setCached("proyectos", data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener los proyectos");
  }
};
export const getPerfil = async ({ idPerfil }) => {
  const cacheKey = `perfil:${idPerfil}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;
  try {
    const perfilSnapshot = await getDoc(doc(db, "perfiles", idPerfil)); // ← doc() no collection()
    if (!perfilSnapshot.exists()) {
      throw new Error("Perfil no encontrado");
    }
    const data = perfilSnapshot.data(); // ← .data() directo, no .docs.map()
    setCached(cacheKey, data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener el perfil solicitado");
  }
};

export const getPerfiles = async () => {
  const cached = getCached("perfiles");
  if (cached) return cached;
  try {
    const perfilesSnapshot = await getDocs(collection(db, "perfiles"));
    const data = perfilesSnapshot.docs.map((doc) => doc.data());
    setCached("perfiles", data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener los perfiles");
  }
};

export const getLibros = async () => {
  const cached = getCached("libros");
  if (cached) return cached;
  try {
    const librosSnapshot = await getDocs(collection(db, "libros"));
    const data = librosSnapshot.docs.map((doc) => doc.data());
    setCached("libros", data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener los libros");
  }
};