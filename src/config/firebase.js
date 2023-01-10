// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoQB02SME1N0erJ-rMbp_n2GrHpp6p8UE",
  authDomain: "kumpulan-photo.firebaseapp.com",
  projectId: "kumpulan-photo",
  storageBucket: "kumpulan-photo.appspot.com",
  messagingSenderId: "488915736003",
  appId: "1:488915736003:web:1ab83ccbcd7eb437edd976",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
