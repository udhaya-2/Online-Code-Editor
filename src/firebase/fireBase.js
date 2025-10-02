import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnPL2Xi70sb4lD1jUBUnNLCu_wGFAkW1k",
  authDomain: "online-code-editor-6fba9.firebaseapp.com",
  projectId: "online-code-editor-6fba9",
  storageBucket: "online-code-editor-6fba9.firebasestorage.app",
  messagingSenderId: "6471303585",
  appId: "1:6471303585:web:4256bd488d70a5b63e4be0",
  measurementId: "G-4VLLE4MPRJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
