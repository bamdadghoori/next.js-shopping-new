
// import React,{useState,useEffect} from 'react'
// import { collection, getDocs } from 'firebase/firestore/lite';
// import {getDatabase,ref, set} from 'firebase/database'
// import { getUsers,getLots } from "../utils/manualData";
// import axios from "axios";

//  const FireUsers = () => {
//    const [users,setUsers]:any=useState()
//    const [lots,setLots]:any=useState()
// ;  // const usersCol=collection(firestore,'users')
//   // var [imgUrl,setImgUrl]=useState("")
//   // const getUsers=async()=>{
//   //   // const [users,SetUse]=useState()
   
//   //   try{
   
//   //   const response=await getDocs(usersCol)
       
//   //       console.log(response)
//   //       const usersList=response.docs.map(doc=>doc.data())
//   //       setImgUrl(usersList[0].urlImg);
       
       
//   //       console.log(usersList)




        
//   //   }
//   //  catch(er){
//   //   console.log(er)
//   //  }
//   // }
//   const getUserList=async()=>{
//     try{
//       const users=await getUsers();
//       {console.log(users)}
//       setUsers(users)
//     }
//     catch(er){
//       console.log(er)
//     }
//   }
//   const getLotsList=async()=>{
//     try{
//       const lots=await getLots();
//       {console.log(lots)}
//       setLots(lots)
//     }
//     catch(er){
//       console.log(er)
//     }
//   }

//   // const update=async()=>{
//   // const db=getDatabase();
//   //   // const lotsCol=collection(firestore,'lots')
//   //   try{

       
          
          
         
     
//   //         // console.log(lotsList)
//   //         //   return lotsList;
    
    
    
          
//   //     }
//   //    catch(er){
//   //     console.log(er)
//   //     return er
//   //    }
//   // }
 
// const  postUser=async()=>{
//      try{
      
//           // const response=await axios.post("https://console.firebase.google.com/u/0/project/online-shop-60507/firestore/data/~2Flots~2F97dLyM59X1kPIOgAe2v5",{
//           //   id:2
//           // })
//           // console.log(response)
//      }
//      catch(er){
//          console.log(er)
//      }
// }
// useEffect(()=>{
//   getUserList();
//   getLotsList();
  

// },[])
    
//   return (
//     <>
//     {console.log(users)}
//     <div>fireUsers</div>
//     {/* <img src={imgUrl} alt="" /> */}
//     </>
//   )
// }
// export default FireUsers;
