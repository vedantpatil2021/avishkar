// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore, collection, addDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlQwCGaJtHW0khPDXpJ3MffKPN70Ywghs",
  authDomain: "avishkar-6b1fb.firebaseapp.com",
  projectId: "avishkar-6b1fb",
  storageBucket: "avishkar-6b1fb.appspot.com",
  messagingSenderId: "368235291574",
  appId: "1:368235291574:web:8b6b04b8b45815e5c05717"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Intialize firestore
export const db = getFirestore();

export const createUserDoc = async (user,otherData) => {
  if(!user) return ;
  // const userRef = await getDocs(collection(db, "user"));
  const {email} = user.user;
  const {displayName} = otherData;
  const docRef = collection(db,'user');
  addDoc(docRef,{
    userId:user.user.uid,
    email:email,
    displayName:displayName,
    role:"User"
  })
  .then((doc) => {
    console.log("Data is created with => ",doc);
  })
}

export default app;
