import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd3uiFKSipYcHLx5WTdaIV_cbXcdUFmZ8",
  authDomain: "trashumar-c8bd9.firebaseapp.com",
  databaseURL: "https://trashumar-c8bd9-default-rtdb.firebaseio.com",
  projectId: "trashumar-c8bd9",
  storageBucket: "trashumar-c8bd9.appspot.com",
  messagingSenderId: "921630332103",
  appId: "1:921630332103:web:f483d700a5697049119ae2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };