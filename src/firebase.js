// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHRD7TN1fMKaMbulDjUn3jXPaWwDUE-vE",
  authDomain: "login-51fab.firebaseapp.com",
  projectId: "login-51fab",
  storageBucket: "login-51fab.appspot.com",
  messagingSenderId: "1021848979812",
  appId: "1:1021848979812:web:42d5c54f51bb2a47ba9271"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export default app