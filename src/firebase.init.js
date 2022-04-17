// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTtR6LWAZnfWq8aRoisNl57xo-Qsp8R-8",
  authDomain: "routes-firebase-practice-one.firebaseapp.com",
  projectId: "routes-firebase-practice-one",
  storageBucket: "routes-firebase-practice-one.appspot.com",
  messagingSenderId: "564488046301",
  appId: "1:564488046301:web:6697acf7ce5827707e3d34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;