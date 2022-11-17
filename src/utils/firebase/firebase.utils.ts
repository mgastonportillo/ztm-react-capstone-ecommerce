import { initializeApp } from 'firebase/app';
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	User,
	NextOrObserver,
	UserCredential,
} from 'firebase/auth';
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
	QueryDocumentSnapshot,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyB1jQ9svKdPegfcygVvr11sRU1dF_-K-8U',
	authDomain: 'crwn-db-4838f.firebaseapp.com',
	projectId: 'crwn-db-4838f',
	storageBucket: 'crwn-db-4838f.appspot.com',
	messagingSenderId: '497595687451',
	appId: '1:497595687451:web:726af0be9c358ab1790ebe',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => {
	return signInWithPopup(auth, googleProvider);
};

export const signInWithGoogleRedirect = () => {
	return signInWithRedirect(auth, googleProvider);
};

export const db = getFirestore();

export type ObjectToAdd = {
	title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
	collectionKey: string,
	objectsToAdd: T[]
): Promise<void> => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log('done');
};

type CategoryItem = {
	id: number;
	imageUrl: string;
	name: string;
	price: number;
};

type CategoryData = {
	imageUrl: string;
	items: CategoryItem[];
	title: string;
};

export const getCategoriesAndDocuments = async (): Promise<CategoryData[]> => {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);

	// await Promise.reject(new Error("new fake error, woops"));
	const querySnapshot = await getDocs(q);

	return querySnapshot.docs.map(
		(docSnapshot) => docSnapshot.data() as CategoryData
	);
};

export type AdditionalInformation = {
	displayName?: string;
};

export type UserData = {
	createdAt: Date;
	displayName: string;
	email: string;
};

export const createUserDocumentFromAuth = async (
	userAuth: User,
	additionalDetails = {} as AdditionalInformation
): Promise<QueryDocumentSnapshot<UserData> | void> => {
	if (!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalDetails,
			});
		} catch (error) {
			console.log('error creating the user:', error as Error);
		}
	}

	return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (
	email: string,
	password: string
): Promise<UserCredential | void> => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (
	email: string,
	password: string
): Promise<UserCredential | void> => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async (): Promise<void> => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
	onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
	return new Promise((resolve, reject) => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(userAuth) => {
				unsubscribe();
				resolve(userAuth);
			},
			reject
		);
	});
};
