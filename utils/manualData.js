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

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore=getFirestore(app);
const usersCol=collection(firestore,'users')
const lotsCol=collection(firestore,'lots')
const CategoriesCol=collection(firestore,'categories')


//This file is to set manual data. I'm using manual data because I don't have Api
const testLots={"data":[{"isNew":true,"inventory":12,"imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/food%2F82_1.jpg?alt=media&token=4bc95c72-9540-480b-8b71-0e0e9109ca4b","rating":4,"title":"کیک تولد یک و نیم کیلویی","id":26,"price":88000,"category":"مواد غذایی","soldOut":71,"description":"با طعم های آلبالو توت فرنگی و شکلات ","off":false},{"rating":2,"id":4,"inventory":12,"soldOut":2,"subCategory":"مردانه","imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/clothes%2F4_1.jpg?alt=media&token=8bfbc57f-ffcd-4cdd-98bb-82f433fcbee9","isNew":false,"off":true,"oldPrice":245000,"category":"لباس","description":"کلاه آفتابگیر باکت مدل قدیمی","newPrice":220000,"title":"کلاه مدل باکت"},{"id":18,"newPrice":7190000,"category":"مبلمان","rating":5,"soldOut":65,"inventory":19,"description":"صندلی چرم مصنوعی با قابلیت تنظیم ارتفاع ","title":"صندلی اداری اوان","oldPrice":944000,"off":true,"isNew":true,"imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/furniture%2F24_2.jpg?alt=media&token=ac8d5094-9905-4ead-a52f-3cea4396b651"},{"rating":3,"size":["M","S","L"],"soldOut":78,"description":"طرح   ساده  نحوه  با بسته شدن جلو بسته","category":"لباس","imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/clothes%2F2.jpg?alt=media&token=06f7ca18-bbbc-4973-8c64-7602728bcb62","id":2,"inventory":"17","isNew":false,"title":"هودی بارانی","subCategory":"مردانه","off":false,"price":225000},{"price":4263000,"description":"تخت دو نفره با جنس پلیمر و ام دی اف","id":21,"rating":4,"imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/furniture%2F28_1.jpg?alt=media&token=e17aef27-ffcf-4c4b-a427-aa1bed42da77","category":"مبلمان","inventory":19,"soldOut":3,"off":false,"title":"تخت دو نفره مدل پریما سایز","isNew":false},{"imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/clothes%2F3.jpg?alt=media&token=e39781b0-5099-42cf-8d25-28b0f7e21f76","off":true,"inventory":12,"category":"لباس","title":"تی شرت یقه گرد","rating":4,"size":["M","S","L"],"soldOut":125,"oldPrice":220000,"id":1,"isNew":true,"subCategory":"مردانه","newPrice":190000,"description":"قد تا روی باسن  یقه ی گرد  آستین   کوتاه  مورد استفاده   روزمره  طرح   ساده"},{"imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/devices%2F1_1.jpg?alt=media&token=ea052011-c277-4c99-96cc-9c80d927ab88","title":"دسته بازی ps5 مدل dual-shock","category":"الکترونیک","price":467010,"off":false,"isNew":false,"inventory":2,"soldOut":5,"description":"رنگ مشکی مات در حد نو","rating":2,"id":14},{"isNew":false,"inventory":26,"rating":3,"description":"کوچک جمع و جور با جنس ملامینه","price":305000,"soldOut":123,"id":19,"title":"میز عسلی مدل st1","off":false,"category":"مبلمان","imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/furniture%2F25_2.jpg?alt=media&token=83294b80-b7a5-4ec7-a6ee-6452894fdbe2"},{"price":103500,"isNew":true,"rating":3,"inventory":101,"description":"دو گوشی با رابط لایتنبنگ و به شرط تست صدا ","soldOut":9,"category":"الکترونیک","off":false,"id":11,"imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/devices%2F18_4.jpg?alt=media&token=55ee7690-0cdf-4bb1-a9f8-188164320a8a","title":"هندز فری مدل input 12"},{"isNew":true,"price":3900000,"description":"با پایه ی چوبی و دارای یک کوسن ","rating":4,"category":"مبلمان","off":false,"soldOut":53,"inventory":5,"title":"مبل راحتی تک نفره مدل راک","imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/furniture%2F27_1.jpg?alt=media&token=c616b112-638d-4371-8d71-d31b1c098187","id":20},{"oldPrice":220000,"isNew":false,"imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/devices%2F10.jpg?alt=media&token=56402779-daf6-4390-b351-c139ec8d919d","rating":4,"inventory":11,"off":true,"title":"هدفون مدل فلان","description":"دارای دو گوشی با رنگ های مختلف به شرط تست  صدا","category":"الکترونیک","newPrice":170000,"id":6},{"inventory":33,"title":"کفش پیاده روی زنانه","rating":3,"off":true,"isNew":true,"soldOut":29,"description":"مقاوم در برابر سایش، قابلیت گردش هوا، کاهش فشارهای وارده","imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/clothes%2F1.jpg?alt=media&token=a481fcc6-13c2-476b-bfdd-006f76b3941e","size":[38,39,40],"id":3,"newPrice":98000,"oldPrice":122000,"subCategory":"زنانه","category":"لباس"},{"imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/furniture%2F31_1.jpg?alt=media&token=2809b0c0-088b-466b-af65-d630d1300e9d","price":87700,"isNew":false,"category":"مبلمان","inventory":74,"title":"آباژور رومیزی طرح گل","id":22,"rating":3,"off":false,"description":"آباژور متصل به کابل برق","soldOut":21},{"rating":5,"inventory":2,"soldOut":50,"off":false,"imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/food%2F85_1.jpg?alt=media&token=2494cdd4-c9b8-4a67-bc7a-56a8f3d33677","id":27,"price":67000,"title":"پنیر گودا","description":"فروش به صورت قالبی همراه با سبزیجات","category":"مواد غذایی","isNew":false},{"imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/devices%2F33_3.jpg?alt=media&token=2abcc8b5-1504-4185-916a-772575cbb7dd","description":"با فرم صفحه ی مستطیل و جنس صفحه ی سیلیکون","off":true,"isNew":false,"rating":4,"newPrice":11580000,"category":"الکترونیک","title":"ساعت هوشمند مدل فلان","inventory":2,"soldOut":98,"id":3,"oldPrice":13000000},{"imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/clothes%2F11_1.jpg?alt=media&token=e89710b3-9346-45b8-b1df-e598968240cd","inventory":3,"isNew":false,"description":"فرم کیف  مسنجر  مورد استفاده   اداری و رسمی  کشور تولید کننده   ایران","subCategory":"زنانه","off":true,"id":5,"soldOut":223,"title":"کیف رودوشی زنانه","category":"لباس","oldPrice":80000,"newPrice":56000,"rating":5},{"isNew":false,"inventory":5,"title":"سوپ قارچ فلان","description":"ترکیب قارچ . گوجه و هویج و سبزیجات معطر","off":false,"rating":3,"imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/food%2F53_1.jpg?alt=media&token=189845dc-edca-4c59-8f83-2a5b07279147","price":8000,"soldOut":12,"id":24,"category":"مواد غذایی"},{"rating":3,"isNew":true,"newPrice":99000,"description":"پودر میوه های خشک گوجی بری بری  نو","oldPrice":120000,"soldOut":3,"off":true,"category":"مواد غذایی","imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/food%2F51_1.jpg?alt=media&token=b960cf1d-94fa-4e9c-b89d-9ad0e2680fc3","title":"میکس پودر میوه","inventory":3,"id":23},{"rating":3,"soldOut":82,"imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/devices%2F3_1.jpg?alt=media&token=5340f29f-ae93-4b1b-a247-022a35899424","isNew":true,"price":995000,"inventory":5,"off":false,"title":"اسپیکر بلوتوثی قابل حمل لیتو ","id":13,"description":"  دارای میکروفون داخلی و شیار کارت حافظه   و جک 3.5 میلی متری ","category":"الکترونیک"},{"off":false,"category":"مواد غذایی","inventory":13,"id":25,"imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/food%2F76_1.jpg?alt=media&token=6097a63f-dd1b-4450-b273-e7635ed50c58","price":90000,"soldOut":5,"rating":2,"isNew":false,"title":"موز ارگانیک گلخانه ای","description":"تولید شده توسط گلخانه داران شمال کشور مازندران و گیلان- به صورت کیلویی"}],
"categories":[{"bigImg":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/categories%2F1.jpg?alt=media&token=fd695f68-ca81-4de2-87ca-c3724a956e74","imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/categories%2Fclothes.png?alt=media&token=aa3bfd86-b4b3-4614-8211-38feed8e1174","categoryTitle":"لباس","subCategories":["مردانه","زنانه"]},{"bigImg":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/categories%2FFurniture-Web-Banner-Design-scaled.jpg?alt=media&token=869cd85a-f7df-4711-97af-9cc996dc3b78","categoryTitle":"مبلمان","imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/categories%2Fbedroom-furniture.png?alt=media&token=0ad3ab79-f174-45a5-a32d-a51857e6f23b"},{"bigImg":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/categories%2Felectronic.jpg?alt=media&token=0d5cb8b4-8de4-4a52-8903-e3e7307b5733","categoryTitle":"الکترونیک","imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/categories%2Fdevice-icon.png?alt=media&token=7f6e5ce2-910f-4379-9971-cf2729bf9dd4"},{"categoryTitle":"مواد غذایی","bigImg":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/categories%2Fgrocery.jpg?alt=media&token=09485012-e5db-40ef-87d7-d60a3060901a","imgUrl":"https://firebasestorage.googleapis.com/v0/b/online-shop-60507.appspot.com/o/categories%2Ffood.png?alt=media&token=c2b22a09-8e58-450a-986e-71cb00bbac0a"}]

}

  


// const getUsers=async()=>{
//   // const [users,SetUse]=useState()
 
//   try{
 
//   const response=await getDocs(usersCol)
     
//       console.log(response)
//       const usersList=response.docs.map(doc=>doc.data())
      
     
     
//       console.log(usersList)
//         return usersList;



      
//   }
//  catch(er){
//   console.log(er)
//   return er
//  }

 
// }
const getLots=async()=>{
  try{
 
    // const response=await getDocs(lotsCol)
      
    //     const lotsList=response.docs.map(doc=>doc.data())
        const lotsList=testLots.data
       
       
        console.log(lotsList)
          return lotsList;
  
  
  
        
    }
   catch(er){
    console.log(er)
    return er
   }
  
}
//to get categories
const getCategories=async()=>{
  try{
 console.log(`t`)
    // const response=await getDocs(CategoriesCol)
      
    //     const categoriesList=response.docs.map(doc=>doc.data())
        const categoriesList=testLots.categories
       
       
        console.log(JSON.stringify(categoriesList))
          return categoriesList;
  
  
  
        
    }
   catch(er){
    console.log(`c`)
    console.log(er)
    return er
   }
  
}


const getLotsInCategory=async(title)=>{
  console.log(title)
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
//to get best selling lots
const getBestSellings=async()=>{
try{
  const lots=await getLots();
 const bestSellings=lots.filter((el)=>{
 return el.soldOut>=50
 }
 
 )
 console.log(bestSellings)
 return bestSellings
}
catch(er){
  console.log(er)
return(er)
}
}

//to get new lots
const getNewLots=async()=>{
  try{
   var lots=await getLots();
   lots=lots.filter((el)=>el.isNew==true)
   return lots
  }
  catch(er){
    console.log(er)
    return(er)
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



export {getLots,getCategories,getLotsInCategory,getBestSellings,getNewLots}