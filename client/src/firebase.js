// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "senior-6695b.firebaseapp.com",
  projectId: "senior-6695b",
  storageBucket: "senior-6695b.appspot.com",
  messagingSenderId: "556236585841",
  appId: "1:556236585841:web:2c2e6a688a10e2ca31d4d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);