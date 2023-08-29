// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk7eFKzTuhIppeu11RfmbyixkeVIE5abE",
  authDomain: "e-comercecoder.firebaseapp.com",
  projectId: "e-comercecoder",
  storageBucket: "e-comercecoder.appspot.com",
  messagingSenderId: "295612256049",
  appId: "1:295612256049:web:0c849b6ed0cbb0c3f8ea10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);