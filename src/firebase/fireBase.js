// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.APIKEY,
  authDomain: import.meta.env.AUTHDOMAIN,
  projectId: import.meta.env.PROJECTID ,
  storageBucket: import.meta.env.STORAGEBUCKET,
  messagingSenderId: import.meta.env.MESSAGINGSENDERID ,
  appId: import.meta.env.APPID ,
  measurementId: import.meta.env.MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;