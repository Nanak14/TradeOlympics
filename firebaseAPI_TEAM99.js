//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDDu6jJ6sNfxBpXZ1wRnQ4Q70u6ywb9e54",
    authDomain: "tradeolypics.firebaseapp.com",
    projectId: "tradeolypics",
    storageBucket: "tradeolypics.appspot.com",
    messagingSenderId: "468777710334",
    appId: "1:468777710334:web:5275ac60ea5fbc91106baf"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();