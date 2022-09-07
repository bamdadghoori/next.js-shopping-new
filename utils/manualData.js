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
const testLots={"data":[{"isNew":true,"inventory":12,"imgUrl":"/images/current-images/food/82_1.jpg","rating":4,"title":"کیک تولد یک و نیم کیلویی","id":26,"price":88000,"category":"مواد غذایی","soldOut":71,"description":"با طعم های آلبالو توت فرنگی و شکلات ","off":false},{"rating":2,"id":4,"inventory":12,"soldOut":2,"subCategory":"مردانه","imgUrl":"/images/current-images/clothes/4_1.jpg","isNew":false,"off":true,"oldPrice":245000,"category":"لباس","description":"کلاه آفتابگیر باکت مدل قدیمی","newPrice":220000,"title":"کلاه مدل باکت"},{"id":18,"newPrice":7190000,"category":"مبلمان","rating":5,"soldOut":65,"inventory":19,"description":"صندلی چرم مصنوعی با قابلیت تنظیم ارتفاع ","title":"صندلی اداری اوان","oldPrice":944000,"off":true,"isNew":true,"imgUrl":"/images/current-images/furniture/24_1.jpg"},{"rating":3,"size":["M","S","L"],"soldOut":78,"description":"طرح   ساده  نحوه  با بسته شدن جلو بسته","category":"لباس","imgUrl":"/images/current-images/clothes/2.jpg","id":2,"inventory":"17","isNew":false,"title":"هودی بارانی","subCategory":"مردانه","off":false,"price":225000},{"price":4263000,"description":"تخت دو نفره با جنس پلیمر و ام دی اف","id":21,"rating":4,"imgUrl":"/images/current-images/furniture/28_1.jpg","category":"مبلمان","inventory":19,"soldOut":3,"off":false,"title":"تخت دو نفره مدل پریما سایز","isNew":false},{"imgUrl":"/images/current-images/clothes/3.jpg","off":true,"inventory":12,"category":"لباس","title":"تی شرت یقه گرد","rating":4,"size":["M","S","L"],"soldOut":125,"oldPrice":220000,"id":1,"isNew":true,"subCategory":"مردانه","newPrice":190000,"description":"قد تا روی باسن  یقه ی گرد  آستین   کوتاه  مورد استفاده   روزمره  طرح   ساده"},{"imgUrl":"/images/current-images/electronic/1_1.jpg","title":"دسته بازی ps5 مدل dual-shock","category":"الکترونیک","price":467010,"off":false,"isNew":false,"inventory":2,"soldOut":5,"description":"رنگ مشکی مات در حد نو","rating":2,"id":14},{"isNew":false,"inventory":26,"rating":3,"description":"کوچک جمع و جور با جنس ملامینه","price":305000,"soldOut":123,"id":19,"title":"میز عسلی مدل st1","off":false,"category":"مبلمان","imgUrl":"/images/current-images/furniture/25_2.jpg"},{"price":103500,"isNew":true,"rating":3,"inventory":101,"description":"دو گوشی با رابط لایتنبنگ و به شرط تست صدا ","soldOut":9,"category":"الکترونیک","off":false,"id":11,"imgUrl":"/images/current-images/electronic/18_4.jpg","title":"هندز فری مدل input 12"},{"isNew":true,"price":3900000,"description":"با پایه ی چوبی و دارای یک کوسن ","rating":4,"category":"مبلمان","off":false,"soldOut":53,"inventory":5,"title":"مبل راحتی تک نفره مدل راک","imgUrl":"/images/current-images/furniture/27_1.jpg","id":20},{"oldPrice":220000,"isNew":false,"imgUrl":"/images/current-images/electronic/10.jpg","rating":4,"inventory":11,"off":true,"title":"هدفون مدل فلان","description":"دارای دو گوشی با رنگ های مختلف به شرط تست  صدا","category":"الکترونیک","newPrice":170000,"id":6},{"inventory":33,"title":"کفش پیاده روی زنانه","rating":3,"off":true,"isNew":true,"soldOut":29,"description":"مقاوم در برابر سایش، قابلیت گردش هوا، کاهش فشارهای وارده","imgUrl":"/images/current-images/clothes/1.jpg","size":[38,39,40],"id":3,"newPrice":98000,"oldPrice":122000,"subCategory":"زنانه","category":"لباس"},{"imgUrl":"/images/current-images/furniture/31_1.jpg","price":87700,"isNew":false,"category":"مبلمان","inventory":74,"title":"آباژور رومیزی طرح گل","id":22,"rating":3,"off":false,"description":"آباژور متصل به کابل برق","soldOut":21},{"rating":5,"inventory":2,"soldOut":50,"off":false,"imgUrl":"/images/current-images/food/85_1.jpg","id":27,"price":67000,"title":"پنیر گودا","description":"فروش به صورت قالبی همراه با سبزیجات","category":"مواد غذایی","isNew":false},{"imgUrl":"/images/current-images/electronic/8_4.jpg","description":"با فرم صفحه ی مستطیل و جنس صفحه ی سیلیکون","off":true,"isNew":false,"rating":4,"newPrice":11580000,"category":"الکترونیک","title":"ساعت هوشمند مدل فلان","inventory":2,"soldOut":98,"id":10,"oldPrice":13000000},{"imgUrl":"/images/current-images/clothes/11_1.jpg","inventory":3,"isNew":false,"description":"فرم کیف  مسنجر  مورد استفاده   اداری و رسمی  کشور تولید کننده   ایران","subCategory":"زنانه","off":true,"id":5,"soldOut":223,"title":"کیف رودوشی زنانه","category":"لباس","oldPrice":80000,"newPrice":56000,"rating":5},{"isNew":false,"inventory":5,"title":"سوپ قارچ فلان","description":"ترکیب قارچ . گوجه و هویج و سبزیجات معطر","off":false,"rating":3,"imgUrl":"/images/current-images/food/53_1.jpg","price":8000,"soldOut":12,"id":24,"category":"مواد غذایی"},{"rating":3,"isNew":true,"newPrice":99000,"description":"پودر میوه های خشک گوجی بری بری  نو","oldPrice":120000,"soldOut":3,"off":true,"category":"مواد غذایی","imgUrl":"/images/current-images/food/51_1.jpg","title":"میکس پودر میوه","inventory":3,"id":23},{"rating":3,"soldOut":82,"imgUrl":"/images/current-images/electronic/3_1.jpg","isNew":true,"price":995000,"inventory":5,"off":false,"title":"اسپیکر بلوتوثی قابل حمل لیتو ","id":13,"description":"  دارای میکروفون داخلی و شیار کارت حافظه   و جک 3.5 میلی متری ","category":"الکترونیک"},{"off":false,"category":"مواد غذایی","inventory":13,"id":25,"imgUrl":"/images/current-images/food/76_1.jpg","price":90000,"soldOut":5,"rating":2,"isNew":false,"title":"موز ارگانیک گلخانه ای","description":"تولید شده توسط گلخانه داران شمال کشور مازندران و گیلان- به صورت کیلویی"}],
"categories":[{"bigImg":"/images/current-images/categories/1.jpg","imgUrl":"/images/current-images/categories/clothes.png","categoryTitle":"لباس","subCategories":["مردانه","زنانه"]},{"bigImg":"/images/current-images/categories/Furniture-Web-Banner-Design-scaled.jpg","categoryTitle":"مبلمان","imgUrl":"/images/current-images/categories/bedroom-furniture.png"},{"bigImg":"/images/current-images/categories/electronic.jpg","categoryTitle":"الکترونیک","imgUrl":"/images/current-images/categories/device-icon.png"},{"categoryTitle":"مواد غذایی","bigImg":"/images/current-images/categories/grocery.jpg","imgUrl":"/images/current-images/categories/food.png"}]

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
//to get one product
const getLotById=async(id)=>{
  try{
    var lots=await getLots();
    lots=lots.filter((el)=>el.id==id)
    return lots[0]
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



export {getLots,getCategories,getLotsInCategory,getBestSellings,getNewLots,getLotById}