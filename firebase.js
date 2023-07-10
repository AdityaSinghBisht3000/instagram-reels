// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCJfO2lFW74vZzUC0NRf98aDKmrU95fiM",
  authDomain: "instagram-reels-9e969.firebaseapp.com",
  projectId: "instagram-reels-9e969",
  storageBucket: "instagram-reels-9e969.appspot.com",
  messagingSenderId: "261105809171",
  appId: "1:261105809171:web:435bfe960ab5f0da5b4ce6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth=getAuth();
const storage = getStorage();
const db=getFirestore();

export {Auth,storage,db};
export default app;