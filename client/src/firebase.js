// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   because we are using vite we have to add env variable using import.meta.env
  authDomain: "mern-blog-3ad88.firebaseapp.com",
  projectId: "mern-blog-3ad88",
  storageBucket: "mern-blog-3ad88.appspot.com",
  messagingSenderId: "957364933471",
  appId: "1:957364933471:web:ae355bd1409d309fa0dcea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);