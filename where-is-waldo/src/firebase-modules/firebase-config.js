import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdn8AgyYI9NDaFdkZ7asqfa3K-S8iZH-o",
  authDomain: "where-is-waldo-e8757.firebaseapp.com",
  projectId: "where-is-waldo-e8757",
  storageBucket: "where-is-waldo-e8757.appspot.com",
  messagingSenderId: "509116456251",
  appId: "1:509116456251:web:38e8cee5c841e9ccf56b1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;