import { app } from "$lib/services/firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, query, orderBy, setDoc, serverTimestamp, deleteDoc } from "firebase/firestore";
import { generateSlug } from "$lib/utils/slugGenerator";

export const db = getFirestore(app);


export function newPost(title, content) {
    const slug = generateSlug(title);

    return new Promise((resolve, reject) => {
        if (!title) reject("missing_title");
        if (!content) reject("missing_content");

        setDoc(doc(db, "blog", slug), {
            slug: slug,
            title: title,
            content: content,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        }).then(() => {
            resolve({ slug: slug });
        }).catch((error) => {
            reject(error);
        });
    })
}

export function removePost(slug) {
    const ref = doc(db, "blog", slug);

    return new Promise((resolve, reject) => {
        deleteDoc(ref)
            .then((res) => {
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
    })
}

export async function getPosts() {
    let posts = [];

    const q = query(collection(db, "blog"), orderBy("updatedAt", "desc"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, data: doc.data() });
    });

    return posts;
}

export async function getPost(post) {
    const ref = doc(db, `blog/${post}`);
    const document = await getDoc(ref);
    const res = {
        id: document.id,
        data: document.data()
    };

    return res;
}