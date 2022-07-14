import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser } from '@fortawesome/free-regular-svg-icons'

import SearchBox from './searchBox';
import { useRouter } from 'next/router';
import NextNProgress from "nextjs-progressbar" 
import { useState } from 'react';
import ShoppingCardModal from "./shoppingCardModal"

import { useContext } from 'react';
import AppContext from './context';
const Navbar = () => {
  const [loading,setLoading]=useState(false)
  const [shoppingModal,setShoppingModal]=useState(false)
  const router=useRouter();
  const totalCount=useSelector((state:RootState)=>state.totalCount)
  const customerLots=useSelector((state:RootState)=>state.customerLots)
  let lots=useSelector(((state:RootState)=>state.lots))
  //@ts-ignore
  const {loggedIn}=useContext(AppContext)
    //@ts-ignore
    const {logOut}=useContext(AppContext)
  

  
  lots=lots.map((el=>el.category))
  
 
  lots=lots.filter((el,i)=>{
    return lots.indexOf(el)==i
  })

   const handleCategoryLink=(e:React.MouseEvent<HTMLElement>,el:string)=>{
        e.preventDefault();
        setLoading(true)
       router.push(`/lotsInCategory/${el}`)
   }


   const handleShoppingCart=()=>{
     setShoppingModal(!shoppingModal)
   }


   const handleLogOut=(e:React.MouseEvent<HTMLElement>)=>{
         e.preventDefault();
        
         localStorage.removeItem("token")
         router.push("../../")
        logOut();
       
   }
  
   const closeModal=()=>{
    setShoppingModal(false)
   }


 
  return (
    <>
 
     {
       loading&& (
        <NextNProgress
        color="rgb(255, 107, 0)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
       )
     }
   
    <nav className="navbar navbar-expand-lg navbar-light ">
  <Link  href="/"><a className="navbar-brand">Home</a></Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
       <li className="nav-item about-item">
        <Link  href="/about"><a href="" className="nav-link">About us</a></Link>
      </li>
 
  
    </ul>
    
    

  </div>
</nav>
{shoppingModal && (
          <ShoppingCardModal closeModal={closeModal}/>
      )}
<div className="nav-item login-item">
      {
      
       loggedIn==true ? (
          <Link href={"#"}><a href="" onClick={handleLogOut} className="nav-link">log out <FontAwesomeIcon icon={faUser}/></a></Link>
        ):(
        
          <Link  href={{pathname:"/login"}}><a href="" className="nav-link">Sign in <FontAwesomeIcon icon={faUser}/></a></Link>
        )
      }
        
      </div>
     
      <div className="nav-item nav-item-shopping-basket" onClick={handleShoppingCart}>
       
        <img src="../images/download.png"/>
        <span className="badge bg-info text-dark">{totalCount}</span>
      </div>
      <div className="nav-item search-section">
      <SearchBox />
</div>
<div className="second-nav navbar">
 <ul>
  <li className="nav-item dropdown">
        <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categories
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {lots.map((el:any,i)=>{
            return(
            
            <a key={i} href="" className="dropdown-item" onClick={(e)=>handleCategoryLink(e,el)}>
              {el}
            </a>
            
            

           
            )
            
          }
          )}
         
        </div>
      </li> 
      </ul>
  

</div>
    </>
  )
}
export default Navbar
