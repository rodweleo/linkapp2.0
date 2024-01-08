// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzBa99bpF2camKGQBCLB_5ZHQUb0CuOFY",
  authDomain: "linkapp-87f73.firebaseapp.com",
  projectId: "linkapp-87f73",
  storageBucket: "linkapp-87f73.appspot.com",
  messagingSenderId: "825819012362",
  appId: "1:825819012362:web:55b7e38b7697845931eef3",
  measurementId: "G-EPSLV068CM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
