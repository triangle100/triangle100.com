import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc } from "firebase/firestore";
import { getAuth, browserSessionPersistence } from "firebase/auth";

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
auth.setPersistence(browserSessionPersistence);

export async function getPosts() {
    let posts = [];

    const querySnapshot = await getDocs(collection(db, "blog"));
    querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, data: doc.data() });

        console.log(doc.id, " => ", doc.data());
    });

    return posts;
}

/** @param {string} post */
export async function getPost(post) {
    const ref = doc(db, `blog/${post}`);
    const document = await getDoc(ref);
    const res = {
        id: document.id,
        data: document.data()
    };

    return res;
}
