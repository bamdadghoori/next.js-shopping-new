import {firestore} from "../utils/firebase"
import React,{useState} from 'react'
import { collection, getDocs } from 'firebase/firestore/lite';
 const FireUsers = () => {
  
  const usersCol=collection(firestore,'users')
  var imgUrl=""
  const getUsers=async()=>{
    // const [users,SetUse]=useState()
   
    try{
   
    const response=await getDocs(usersCol)
        
        console.log(response)
        const usersList=response.docs.map(doc=>doc.data())
        imgUrl=usersList[0].urlImg;
        console.log(usersList)
    }
   catch(er){
    console.log(er)
   }
  }
       getUsers();
  return (
    <>
    <div>fireUsers</div>
    <img src={imgUrl} alt="" />
    </>
  )
}
export default FireUsers;
