// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3L0J3TNi4svyyJvETwm9vh1BXwuHCF8s",
  authDomain: "bleach-shop.firebaseapp.com",
  projectId: "bleach-shop",
  storageBucket: "bleach-shop.appspot.com",
  messagingSenderId: "567327718859",
  appId: "1:567327718859:web:94b4620269a031a6108a4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)