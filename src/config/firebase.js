// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsTy6T1XEUiq40q5JE8eudn5XDPWJp7Io",
  authDomain: "react-web-app-cb3c8.firebaseapp.com",
  projectId: "react-web-app-cb3c8",
  storageBucket: "react-web-app-cb3c8.appspot.com",
  messagingSenderId: "962344851629",
  appId: "1:962344851629:web:bc591e8ed54f4cb1edce24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
