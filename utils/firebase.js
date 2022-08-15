// Import the functions you need from the SDKs you need

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs } from 'firebase/firestore/lite';

import { getFirestore } from "firebase/firestore/lite";
// const { getDatabase } = require('firebase-admin/database');
// import {getDatabase} from 'firebase-admin/database/lite'

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
const usersCol=collection(firestore,'users')
const lotsCol=collection(firestore,'lots')
const CategoriesCol=collection(firestore,'categories')
const getUsers=async()=>{
  // const [users,SetUse]=useState()
 
  try{
 
  const response=await getDocs(usersCol)
     
      console.log(response)
      const usersList=response.docs.map(doc=>doc.data())
      
     
     
      console.log(usersList)
        return usersList;



      
  }
 catch(er){
  console.log(er)
  return er
 }

 
}
const getLots=async()=>{
  try{
 
    const response=await getDocs(lotsCol)
      
        const lotsList=response.docs.map(doc=>doc.data())
        
       
       
        console.log(lotsList)
          return lotsList;
  
  
  
        
    }
   catch(er){
    console.log(er)
    return er
   }
  
}
const getCategories=async()=>{
  try{
 console.log(`t`)
    const response=await getDocs(CategoriesCol)
      
        const categoriesList=response.docs.map(doc=>doc.data())
        
       
       
        console.log(categoriesList)
          return categoriesList;
  
  
  
        
    }
   catch(er){
    console.log(`c`)
    console.log(er)
    return er
   }
  
}
const getLotsInCategory=async(title)=>{
      try{
        const response=await getLots();
        const lotsInCategory=response.filter((el)=>el.category==title)
        console.log(lotsInCategory)
        return lotsInCategory;
        
      }
      catch(er){
        console.log(er)
        return er
      }
}
// const db = getDatabase();
// const ref = db.ref('server/saving-data/fireblog');
// const usersRef = ref.child('users');
// const postUsers=()=>{
//   const usersRef = ref.child('users');
//   try{
//       usersRef.set({id:1})
//   }
//   catch(er){

//   }
// }
// Import Admin SDK


// Get a database reference to our blog


export {firestore}
export {getUsers,getLots,getCategories,getLotsInCategory}