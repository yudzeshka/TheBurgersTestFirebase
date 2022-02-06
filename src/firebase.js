// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJQp19-oExEmYZqLNMAabafJ6KqWWOqFU",
  authDomain: "theburgerstest.firebaseapp.com",
  projectId: "theburgerstest",
  storageBucket: "theburgerstest.appspot.com",
  messagingSenderId: "179066933265",
  appId: "1:179066933265:web:6e2857ee42c9c727b1a1b0",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
export { firebase, auth, db };
