// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPnfyxpfFM2ctUaXgsWmikU9FOIgvtLSc",
  authDomain: "ecodrive-ea190.firebaseapp.com",
  projectId: "ecodrive-ea190",
  storageBucket: "ecodrive-ea190.firebasestorage.app",
  messagingSenderId: "551091755406",
  appId: "1:551091755406:web:00ec7b83b3655de20decdf",
  measurementId: "G-95S6GD8CTM"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);