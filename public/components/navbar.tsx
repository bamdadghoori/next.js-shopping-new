import React from 'react'
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons'
import SearchBox from './searchBox';
import { useRouter } from 'next/router';
import NextNProgress from "nextjs-progressbar" 
import { useState } from 'react';
import ShoppingCardModal from "./shoppingCardModal"
const Navbar = () => {
  const [loading,setLoading]=useState(false)
  const [shoppingModal,setShoppingModal]=useState(false)
  const router=useRouter();
  const totalCount=useSelector((state:RootState)=>state.totalCount)
  const customerLots=useSelector((state:RootState)=>state.customerLots)
  let lots=useSelector(((state:RootState)=>state.lots))
  
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
   const closeModal=()=>{
    setShoppingModal(false)
   }
  console.log(lots)
  return (
    <>
     
     {
       loading && (
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
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      {/* <li className="nav-item active">
        <link className="nav-link" href="/">Home <span className="sr-only">(current)</span></link>
      </li> */}
      {/* <li className="nav-item">
        <Link  href="/about"><a className="nav-link">about</a></Link>
      </li>
      <li className="nav-item">
        <Link href="/contact"><a className='nav-link'>contact</a></Link>
      </li>   <li className="nav-item">
        <Link href="/contact"><a className='nav-link'>contact</a></Link>
      </li>
      <li className="nav-item">
        <Link href="/countDownTimer"><a className='nav-link'>countDownTimer</a></Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */} <li className="nav-item about-item">
        <Link  href="/about"><a href="" className="nav-link">About us</a></Link>
      </li>
      <li className="nav-item search-section">
      <SearchBox />
</li>
    <li className="nav-item login-item">
        <Link  href="/"><a href="" className="nav-link">Sign in <FontAwesomeIcon icon={faUser}/></a></Link>
      </li>
     
      <li className="nav-item nav-item-shopping-basket" onClick={handleShoppingCart}>
        <FontAwesomeIcon icon={faShoppingCart}/><span className="badge bg-info text-dark">{totalCount}</span>
      </li>
      {shoppingModal && (
          <ShoppingCardModal closeModal={closeModal}/>
      )}

    </ul>
  </div>
</nav>
<div className="second-nav navbar">
 <ul>
  <li className="nav-item dropdown">
        <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categories
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {lots.map((el:any,i)=>{
            return(<>
            
            <a href="" className="dropdown-item" onClick={(e)=>handleCategoryLink(e,el)}>
              {el}
            </a>
            
            

           
            </>)
            
          }
          )}
          {/* <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a> */}
        </div>
      </li> 
      </ul>
  

</div>
    </>
  )
}
export default Navbar
