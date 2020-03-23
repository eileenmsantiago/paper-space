import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
	apiKey: "AIzaSyDwWf2yIRbAzUEoCjq8jz-t_hkYJXa3QI4",
	authDomain: "paperspace-3fcd0.firebaseapp.com",
	databaseURL: "https://paperspace-3fcd0.firebaseio.com",
	projectId: "paperspace-3fcd0",
	storageBucket: "paperspace-3fcd0.appspot.com",
	messagingSenderId: "737561023224",
	appId: "1:737561023224:web:9c0f0fcc2f4d9133d5210d",
	measurementId: "G-MDQPXYH6WD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
