// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAo-22luoielYf_yRGAeuat8OTwYMRWPu8",
  authDomain: "travel-app-375305.firebaseapp.com",
  projectId: "travel-app-375305",
  storageBucket: "travel-app-375305.appspot.com",
  messagingSenderId: "997794755160",
  appId: "1:997794755160:web:b44254779ee0f3c60e902d",
  measurementId: "G-1SHCL7GTJP"
};

// Initialize Firebase
let app;
if (firebase.app.length==0){
    app = initializeApp(firebaseConfig);
}
else{
    app = firebase.app();
}
//const analytics = getAnalytics(app);
const auth = firebase.auth()

export {auth};