// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjONP0Oyq016Hx_QkEAVO_ipa_6utbq70",
  authDomain: "cat-news2.firebaseapp.com",
  projectId: "cat-news2",
  storageBucket: "cat-news2.appspot.com",
  messagingSenderId: "651642003705",
  appId: "1:651642003705:web:45dd68a31c0269436a8228"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)