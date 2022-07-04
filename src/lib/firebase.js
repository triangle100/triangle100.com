import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArMZxrKJ9SLGOpN22cR8NXlHnEpaHVquE",
  authDomain: "triangle100-c9280.firebaseapp.com",
  databaseURL: "https://triangle100-c9280.firebaseio.com",
  projectId: "triangle100-c9280",
  storageBucket: "triangle100-c9280.appspot.com",
  messagingSenderId: "260399017237",
  appId: "1:260399017237:web:acf61db6a5168c4d594d1c",
  measurementId: "G-XQ5Z46GPLW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();