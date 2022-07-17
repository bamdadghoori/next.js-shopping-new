// Import the functions you need from the SDKs you need

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore/lite";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLLtB9o7LXhLrfmw5CmtFWlgDoI39cRNA",
    authDomain: "online-shop-60507.firebaseapp.com",
    projectId: "online-shop-60507",
    storageBucket: "online-shop-60507.appspot.com",
    messagingSenderId: "38611456162",
    appId: "1:38611456162:web:eebde9920af686931ac7fb",
    measurementId: "G-XG3EBLC1G2"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore=getFirestore(app);

export {firestore}