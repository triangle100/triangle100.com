import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, query, orderBy, setDoc, serverTimestamp } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { user as userStore } from "$lib/stores/userStore";

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

onAuthStateChanged(auth, (user, error) => {
    if (user) {
        userStore.set(user);
    } else if (error) {
        console.error(error);
    }
});

export async function signIn(email, password) {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                resolve(userCredential.user);
            })
            .catch((error) => {
                reject(error);
            });
    })
}

export async function signOut() {
    const firebaseAuth = await import("firebase/auth");
    firebaseAuth.signOut(auth).then(() => {
        userStore.set();
    }).catch((error) => {
        console.error(error);
    });
}

export function newPost(slug, title, content) {
    return new Promise((resolve, reject) => {
        setDoc(doc(db, "blog", slug), {
            slug: slug,
            title: title,
            content: content,
            createdAt: serverTimestamp()
        }).then((res) => {
            resolve(res);
        }).catch((error) => {
            reject(error);
        });
    })
}

export async function getPosts() {
    let posts = [];

    const q = query(collection(db, "blog"), orderBy("createdAt", "desc"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, data: doc.data() });
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
