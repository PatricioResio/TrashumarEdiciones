import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGIN_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// App Check tiene que activarse acá, antes de que cualquier otro servicio
// (Firestore, Storage) se inicialice — firestore.js y storage.js importan
// `app` desde este mismo archivo, así que el orden de evaluación de módulos
// de JS ya garantiza que esto corre primero.
//
// En desarrollo local usamos el "debug provider": corré el sitio con
// `npm run dev`, mirá la consola del navegador, vas a ver un mensaje tipo
// "App Check debug token: xxxxx-xxxx...". Copiá ese token y agregalo en
// Firebase Console → Build → App Check → tu app web → "Manage debug tokens".
// Sin esto, App Check bloquea tu propio localhost durante el desarrollo.
if (import.meta.env.DEV) {
  // eslint-disable-next-line no-undef
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

export const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY),
  isTokenAutoRefreshEnabled: true,
});