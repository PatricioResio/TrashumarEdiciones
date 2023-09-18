import { db } from './firebase';
import { getDocs, collection } from 'firebase/firestore';

export const getProyectos = async () => {
  try {
    const proyectosSnapshot = await getDocs(collection(db, 'proyectos'));
    return proyectosSnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener los proyectos');
  }
};

export const getPerfiles = async () => {
  try {
    const perfilesSnapshot = await getDocs(collection(db, 'perfiles'));
    return perfilesSnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener los perfiles');
  }
};

