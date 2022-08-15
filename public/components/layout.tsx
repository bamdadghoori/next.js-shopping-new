import React from 'react'
import Navbar from './navbar';
import Footer from './footer';
import {RootState} from '../../redux/store';
import {useSelector } from 'react-redux'
import { useState,useEffect } from 'react';

const Layout = ({children}:{
  children:React.ReactNode
}) => {
   
 
   const [loggedIn,setLoggedIn]=useState(false)
   useEffect(()=>{
    const token=localStorage.getItem("token")
    if(token){
setLoggedIn(true)
    }
    else{
  setLoggedIn(false)
    }
   },[])
  const categories=useSelector((state:RootState) => state.persistedReducer.categories)
 {console.log(categories)}

  return (
    <>
   
    {
      (categories.length!=undefined && (
<Navbar />
      )
      
      
      )
    }
  
  
  {children}
  <Footer/>
    </>
  )
}
export default Layout;
