// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcd062H9vSaJYwf7IR3E4JxBUH7FObzsM",
  authDomain: "social-app-af451.firebaseapp.com",
  projectId: "social-app-af451",
  storageBucket: "social-app-af451.appspot.com",
  messagingSenderId: "40410022216",
  appId: "1:40410022216:web:02edeb1e22f38532b9737d",
  measurementId: "G-BFRQQR9JY3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Firebase Storage and get a reference to the service
export const storage = getStorage(app);
export default app;
