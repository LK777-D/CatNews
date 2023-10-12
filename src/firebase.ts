// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqj1wdhdvMPLMXNlZBm68L2Jwt2TKiyCw",
  authDomain: "cat-news-78068.firebaseapp.com",
  projectId: "cat-news-78068",
  storageBucket: "cat-news-78068.appspot.com",
  messagingSenderId: "455336175529",
  appId: "1:455336175529:web:b1839ed86bdde540d246b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)