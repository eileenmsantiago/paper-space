import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDndhZWp6KH9EHQ-mebGRwjo9Gf1nIZuSs",
	authDomain: "paperspace-aff71.firebaseapp.com",
	databaseURL: "https://paperspace-aff71.firebaseio.com",
	projectId: "paperspace-aff71",
	storageBucket: "paperspace-aff71.appspot.com",
	messagingSenderId: "76347617858",
	appId: "1:76347617858:web:3efc3ea61ab1250acdb3db"
};

class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.auth.setPersistence(app.auth.Auth.Persistence.SESSION)
        this.db = app.firestore();
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
			.then(res => res)
	}

	logout() {
		return this.auth.signOut();
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		});
	}
	
	getId() {
		return this.auth.currentUser.uid;
	}

	getName() {
		return this.auth.currentUser ? this.auth.currentUser.displayName : null;
	}

	getEmail() {
		return this.auth.currentUser ? this.auth.currentUser.email : null;
	}

	getCreatedTime() {
		return this.auth.currentUser ? this.auth.currentUser.metadata.creationTime : null;
	}

	onAuthChange(user) {
		return this.auth.onAuthStateChanged(user);
	}
}

export default new Firebase();
