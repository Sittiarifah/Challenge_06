// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2fJ6k5wi_AIVQbe50wLzDM9NnemG7oQU",
  authDomain: "react-login-sosmed.firebaseapp.com",
  projectId: "react-login-sosmed",
  storageBucket: "react-login-sosmed.appspot.com",
  messagingSenderId: "88357343879",
  appId: "1:88357343879:web:d064f8cca65b50be755e22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);