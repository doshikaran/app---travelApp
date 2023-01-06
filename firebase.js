// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF2_sEpAHpDKVGNbQA_Ru6xdSezi_jQ3E",
  authDomain: "travelgo-373504.firebaseapp.com",
  projectId: "travelgo-373504",
  storageBucket: "travelgo-373504.appspot.com",
  messagingSenderId: "1002366501054",
  appId: "1:1002366501054:web:87c38a982538a555c85eef",
  measurementId: "G-MMJ7WEHPQW"
};

// Initialize Firebase
let app;
if (firebase.app.length==0){
    app = initializeApp(firebaseConfig);
}
else{
    app = firebase.app();
}
const analytics = getAnalytics(app);
const auth = firebase.auth()

export {auth};