//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyAcaXNgz5YMvEs5BxPZiSsGUdkyf4kLxDg",
    authDomain: "comp1800-demo07-33973.firebaseapp.com",
    projectId: "comp1800-demo07-33973",
    storageBucket: "comp1800-demo07-33973.appspot.com",
    messagingSenderId: "865135977026",
    appId: "1:865135977026:web:0264bb366fb9b4cec3c3db"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
