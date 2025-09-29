// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnPL2Xi70sb4lD1jUBUnNLCu_wGFAkW1k",
  authDomain: "online-code-editor-6fba9.firebaseapp.com",
  projectId: "online-code-editor-6fba9",
  storageBucket: "online-code-editor-6fba9.firebasestorage.app",
  messagingSenderId: "6471303585",
  appId: "1:6471303585:web:4256bd488d70a5b63e4be0",
  measurementId: "G-4VLLE4MPRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);