  import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
   // Your web app's Firebase configuration
    apiKey: "AIzaSyDtO-lLboKHoiEx88hCfuXR7tY5bPvNmR4",
    authDomain: "contact-form-a6f1f.firebaseapp.com",
    projectId: "contact-form-a6f1f",
    storageBucket: "contact-form-a6f1f.appspot.com",
    messagingSenderId: "428478212988",
    appId: "1:428478212988:web:a9a8594613c8fd06f152f9"
});

var db = firebaseApp.firestore();

export { db };