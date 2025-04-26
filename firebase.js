// Firebase modullarini import qilamiz
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Firebase konfiguratsiyasini o'rnatish (o'zingizning Firebase loyihangizdan olingan ma'lumotlarni kiriting)
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

// Firebase ilovasini ishga tushurish
const app = initializeApp(firebaseConfig);

// Firebase autentifikatsiya tizimini olish
const auth = getAuth(app);

// Google login providerini yaratish
const provider = new GoogleAuthProvider();

// auth va provider ob'ektlarini eksport qilamiz
export { auth, provider };
