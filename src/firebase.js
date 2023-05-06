import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAxfouMrDrpmdmsu0SKXJ-Ppn07483dFhM",
    authDomain: "auth-with-123.firebaseapp.com",
    projectId: "auth-with-123",
    storageBucket: "auth-with-123.appspot.com",
    messagingSenderId: "425341845709",
    appId: "1:425341845709:web:93af43b6f59f8c75c5a984",
    measurementId: "G-D86P9L38L7"
});

const auth = app.auth();
export { auth };
export default app;