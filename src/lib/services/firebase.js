import { initializeApp } from "firebase/app";
import { getFirestore, } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyArMZxrKJ9SLGOpN22cR8NXlHnEpaHVquE",
    authDomain: "triangle100-c9280.firebaseapp.com",
    databaseURL: "https://triangle100-c9280.firebaseio.com",
    projectId: "triangle100-c9280",
    appId: "1:260399017237:web:fdda69beba5983c8594d1c",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
