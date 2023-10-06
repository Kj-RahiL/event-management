// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9UYWgw5poXq-CLvEfEMTSDBUdj4I86z0",
  authDomain: "social-events-bd.firebaseapp.com",
  projectId: "social-events-bd",
  storageBucket: "social-events-bd.appspot.com",
  messagingSenderId: "386247598197",
  appId: "1:386247598197:web:e5d6c6e2d9c20d746e983c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)