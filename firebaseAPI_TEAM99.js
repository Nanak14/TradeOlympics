//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBcT0_RYtb0rqM9grEoQDGeuwcFu8gDhSo",
    authDomain: "fir-comp1800-2022.firebaseapp.com",
    projectId: "fir-comp1800-2022",
    storageBucket: "fir-comp1800-2022.appspot.com",
    messagingSenderId: "506310735406",
    appId: "1:506310735406:web:781e32dc615e4447be91bf"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();