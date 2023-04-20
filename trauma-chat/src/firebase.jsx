
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5_LNt4A6YLY-lGLZeoTuRHmPw7EyOhII",
  authDomain: "chat-490d3.firebaseapp.com",
  projectId: "chat-490d3",
  storageBucket: "chat-490d3.appspot.com",
  messagingSenderId: "354131690211",
  appId: "1:354131690211:web:9525723fdeec6933f9fbd6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()