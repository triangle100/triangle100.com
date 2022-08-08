import { app } from "$lib/services/firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { user as userStore } from "$lib/stores/userStore";

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