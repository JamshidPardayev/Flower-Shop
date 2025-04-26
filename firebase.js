// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVz3nZXAfQQ3yCdVzQwSRnDIWkZUK6U4g",
  authDomain: "loginwith-eb949.firebaseapp.com",
  projectId: "loginwith-eb949",
  storageBucket: "loginwith-eb949.firebasestorage.app",
  messagingSenderId: "45500829661",
  appId: "1:45500829661:web:267d0127481dd1068cb034",
  measurementId: "G-2TB6B3V6QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
}

export { signInWithGoogle }
