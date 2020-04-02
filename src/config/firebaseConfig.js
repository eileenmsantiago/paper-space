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
		this.db = app.firestore();
	}

	// Firebase authentication functions

	// Login
	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password);
		
		//TODO: persist auth in local or session storage;
		// return this.auth
		// 	.setPersistence('session')
  		// 	.then(function() {
		// 		console.log('set');
		// 		return this.auth.signInWithEmailAndPassword(email, password);
		// 	})
		// .catch(function(error) {
		// 	// Handle Errors here.
		// 	var errorCode = error.code;
		// 	var errorMessage = error.message;
		// });
		// return this.auth.signInWithEmailAndPassword(email, password);
	}

	// Logout
	logout() {
		return this.auth.signOut();
	}

	// Register
	async register(username, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: username
		});
	}

	isLoggedIn() {
		return this.auth.currentUser && this.auth.currentUser.displayName;
	}

	authChange(user) {
		return this.auth.onAuthStateChanged(user);
	}
}

export default new Firebase();
