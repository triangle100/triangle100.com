import { app } from "$lib/services/firebase/app";
import {
	getFirestore,
	collection,
	doc,
	getDocs,
	getDoc,
	query,
	orderBy,
	setDoc,
	serverTimestamp,
	deleteDoc,
	updateDoc,
} from "firebase/firestore";
import { generateSlug } from "$lib/utils/slugGenerator";
import { get } from "svelte/store";
import { user as userStore } from "$lib/stores/userStore";

export const db = getFirestore(app);

export function newPost(title, content) {
	const slug = generateSlug(title);

	return new Promise((resolve, reject) => {
		if (!title) reject("missing_title");
		if (!content) reject("missing_content");

		setDoc(doc(db, "blogs", slug), {
			author: get(userStore).displayName,
			slug: slug,
			title: title,
			content: content,
			createdAt: serverTimestamp(),
			updatedAt: serverTimestamp(),
		})
			.then(() => {
				resolve({ slug: slug });
			})
			.catch((error) => {
				reject(error);
			});
	});
}

export function editPost(slug, title, content) {
	const ref = doc(db, "blogs", slug);

	return new Promise((resolve, reject) => {
		updateDoc(ref, {
			title: title,
			content: content,
			updatedAt: serverTimestamp(),
		})
			.then((res) => {
				resolve(res);
			})
			.catch((error) => {
				reject(error);
			});
	});
}

export function removePost(slug) {
	const ref = doc(db, "blogs", slug);

	return new Promise((resolve, reject) => {
		deleteDoc(ref)
			.then((res) => {
				resolve(res);
			})
			.catch((error) => {
				reject(error);
			});
	});
}

export async function getPosts() {
	let posts = [];

	const q = query(collection(db, "blogs"), orderBy("updatedAt", "desc"));

	const querySnapshot = await getDocs(q);
	querySnapshot.forEach((doc) => {
		posts.push({ id: doc.id, data: doc.data() });
	});

	return posts;
}

export async function getPost(post) {
	const ref = doc(db, `blogs/${post}`);
	const document = await getDoc(ref);
	const res = {
		id: document.id,
		data: document.data(),
	};

	return res;
}
