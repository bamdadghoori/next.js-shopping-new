import React from 'react'


import Link from 'next/link'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useRouter } from 'next/router';
import NextNProgress from "nextjs-progressbar" 
import { useState,useEffect } from 'react';
import ShoppingCardModal from "./shoppingCardModal"
import NavbarCategory from './navbarCategory';
import { useContext } from 'react';
import AppContext from './context';
import SearchBox from './searchBox';
import MobileNavbar from './mobileNavbar';
const Navbar = () => {
  


  const [loading,setLoading]=useState(false)
  const [shoppingModal,setShoppingModal]=useState(false)
  const [searchText,setSearchText]:any=useState()
  const [showMobileNavbar,setShowMobileNavbar]=useState(false)

  //lots that sould be shown in the search box modal
  const [demoLots,setDemoLots]=useState([])
  const router=useRouter();
 


  const categories=useSelector(((state:RootState)=>state.persistedReducer.categories))
  const customerLots=useSelector(((state:RootState)=>state.persistedReducer.customerLots))
  const lots=useSelector(((state:RootState)=>state.persistedReducer.lots))

const {showSearchModal,changeShowSearchModal}:any=useContext(AppContext)
  
useEffect(()=>{

},[])

    
   const changeLoading=(flag:boolean)=>{
   console.log("cl")
    setLoading(flag)
   }


   


 

   //to open and close shoppingCardModal
   const openModal=(e:React.MouseEvent<HTMLAnchorElement>)=>{
    e.preventDefault();
    setShoppingModal(true)
   }
   const closeModal=()=>{
    setShoppingModal(false)
   }

// to set the search box controlled
const changeSearchText=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const value=e.target.value;
    setSearchText(value)
    if(value.length>0){
        const filteredLots=lots.filter((el:any)=>el.title.includes(value)||el.category.includes(value))
        console.log(filteredLots)
        setDemoLots(filteredLots)
    }
    else{
        setDemoLots([])
    }

    
}

// to handle search button
const handleSearch=async(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    setLoading(true)
    await router.push({pathname:'/search/',query:{s:searchText}})
}
   //open and close mobile side bar
 const changeMobileNavbar=(flag:boolean)=>{
    console.log('cmn')
    setShowMobileNavbar(flag)
 }
  return (
    <>
 {console.log(showSearchModal)}
     {
       loading&& (
        <NextNProgress
        color="#3474d4"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
       )
     }

    <header className="ec-header">
      
        <div className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    
                    <div className="col text-left header-top-left d-none d-lg-block">
                        <div className="header-top-social">
                            <span className="social-text text-upper">ما را دنبال کنید در:</span>
                            <ul className="mb-0">
                                <li className="list-inline-item"><a className="hdr-facebook" href="#"><i className="ecicon eci-facebook"></i></a></li>
                                <li className="list-inline-item"><a className="hdr-twitter" href="#"><i className="ecicon eci-twitter"></i></a></li>
                                <li className="list-inline-item"><a className="hdr-instagram" href="#"><i className="ecicon eci-instagram"></i></a></li>
                                <li className="list-inline-item"><a className="hdr-linkedin" href="#"><i className="ecicon eci-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
              
                    <div className="col d-lg-none ">
                        <div className="ec-header-bottons">
                          
                            <div className="ec-header-user dropdown">
                                <button className="dropdown-toggle" data-bs-toggle="dropdown" onClick={()=>{
                                    setLoading(true)
                                    router.push('/login/')
                                }
                                
                                }><img src="/images/icons/user.svg" className="svg_img header_svg" alt=""/></button>
                               
                            </div>
                          
                          
                            
                            <a href="#" onClick={openModal} className="ec-header-btn ec-side-toggle">
                                <div className="header-icon"><img src="/images/icons/cart.svg" className="svg_img header_svg" alt="" /></div>
                                <span className="ec-header-count cart-count-lable">{customerLots.length}</span>
                            </a>
                        
                        <span onClick={()=>changeMobileNavbar(true)} className="ec-header-btn ec-side-toggle d-lg-none">
                                <img src="/images/icons/menu.svg" className="svg_img header_svg" alt="icon" />
                            </span>
                           
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        
        <div className="ec-header-bottom d-none d-lg-block">
            <div className="container position-relative">
                <div className="row">
                    <div className="ec-flex">
                       
                        <div className="align-self-center">
                            <div className="header-logo">
                                <a href="index.html"><img src="/images/logo/logo.png" alt="لوگو سایت"/><img className="dark-logo" src="/images/logo/dark-logo.png" alt="لوگو سایت" style={{"display": "none" }}/></a>
                            </div>
                        </div>
                    
                        <div className="align-self-center">
                            <div className="header-search">
                                <form className="ec-btn-group-form" action="#">
                                    <input  value={searchText} onChange={changeSearchText} className="form-control" placeholder="جستجو بر اساس نام محصول و یا دسته بندی" type="text"
                                    onClick={()=>{changeShowSearchModal(true)}}
                                    // onBlur={()=>{changeShowSearchModal(false)}}
                                    />
                                    <button onClick={handleSearch} className="submit"><img src="/images/icons/search.svg" className="svg_img header_svg" alt="" /></button>
                               
                                </form>
                            </div>
                            {showSearchModal &&(
                                   <SearchBox searchText={searchText} demoLots={demoLots} handleSearch={handleSearch} changeShowSearchModal={changeShowSearchModal} changeSearchText={changeSearchText}/>
                                 )
                                 } 
                        </div>
                       
                        <div className="align-self-center">
                            <div className="ec-header-bottons">

                              
                                <div className="ec-header-user dropdown">
                                    <button className="dropdown-toggle" data-bs-toggle="dropdown"><img src="/images/icons/user.svg"   onClick={()=>{
                                    setLoading(true)
                                    router.push('/login/')
                                }
                                
                                } className="svg_img header_svg" alt=""/></button>
                                    
                                </div>
                             
                              
                                <a href="#ec-side-cart" onClick={openModal}  className="ec-header-btn ec-side-toggle">
                                    <div className="header-icon"><img src="/images/icons/cart.svg" className="svg_img header_svg" alt="" /></div>
                                    <span className="ec-header-count cart-count-lable">{customerLots.length}</span>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="ec-header-bottom d-lg-none">
            <div className="container position-relative">
                <div className="row ">

                    
                    <div className="col">
                        <div className="header-logo">
                            <a href="index.html"><img src="/images/logo/logo.png" alt="لوگو سایت"/><img className="dark-logo" src="/images/logo/dark-logo.png" alt="لوگو سایت" style={{"display": "none;"}}/></a>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="header-search">
                            <form className="ec-btn-group-form" >
                                <input className="form-control" value={searchText} onChange={changeSearchText} placeholder="نام محصول و یا دسته بندی ..." type="text" />
                                <button className="submit" onClick={handleSearch}><img src="/images/icons/search.svg" className="svg_img header_svg" alt="icon"/></button>
                            </form>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
     
        <div id="ec-main-menu-desk" className="d-none d-lg-block sticky-nav">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-md-12 align-self-center">
                        <div className="ec-main-menu">
                            <ul>
                                <li className="dropdown "><a onClick={()=>{
                                    console.log(window.location)
                                setLoading(true);
                                {/* check if we are not in the home page */}
                                if(window.location.pathname!='/'){
                                    router.push('/')
                                }
                                
                                setLoading(false)
                                }}>خانه</a></li>
                                <li className="dropdown "><a href="javascript:void(0)">دسته بندی ها</a>
                                    <ul className="sub-menu">
                                      
                                          
                                               
                                                {categories.map((el:any,i:number)=>{
                                                 return   <NavbarCategory changeLoading={changeLoading} key={i} category={el}/>
                                                 
                                             
                                                })}
                                           
                                        
                                        
                                    </ul>
                                </li>
                                <li className="dropdown"><a onClick={async()=>{
                                    changeLoading(true)
                                  await  router.push('/newLots/')
                                  changeLoading(false)
                                    }}>جدید</a> 
                                    
                                </li>
                               
                                <li className="dropdown "><a onClick={async()=>{
                                      changeLoading(true)
                                        await  router.push('/bestSelling/')
                                    changeLoading(false)
                                    }}>پر فروش ترین ها</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
       <MobileNavbar showMobileNavbar={showMobileNavbar} changeLoading={changeLoading} changeMobileNavbar={changeMobileNavbar} />
        
    </header>
   <ShoppingCardModal shoppingModal={shoppingModal} closeModal={closeModal}/> 
    
    

{/* 
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
</nav> */}
{/* {shoppingModal && (
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
       
        <img src="/images/download.png"/>
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
  

</div> */}
    </>
  )
}
export default Navbar
