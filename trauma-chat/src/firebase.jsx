import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDK-rPUz6ppqO5AHS4ckMwe_LnFhmzCias",
  authDomain: "abhay-382308.firebaseapp.com",
  projectId: "abhay-382308",
  storageBucket: "abhay-382308.appspot.com",
  messagingSenderId: "846433690875",
  appId: "1:846433690875:web:c4a18044b19edb0535fc5e",
  measurementId: "G-20DDTRZ6NM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()