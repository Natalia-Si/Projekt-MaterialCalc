// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-Cofk_SYq_p1b_DcHbD05_86BDkJcgA4",
    authDomain: "material-calc-81ebe.firebaseapp.com",
    projectId: "material-calc-81ebe",
    storageBucket: "material-calc-81ebe.appspot.com",
    messagingSenderId: "195814002439",
    appId: "1:195814002439:web:54d5fb1410068f87e7ffa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth()

export { db };
