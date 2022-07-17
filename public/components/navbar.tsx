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
              
                    <div className="col text-center header-top-center">
                        <div className="header-top-message text-upper">
                            <span> ارسال رایگان </span>این هفته برای سفارشات بالای 200 تومان
                        </div>
                    </div>
                 
                    <div className="col header-top-right d-none d-lg-block">
                        <div className="header-top-lan-curr d-flex justify-content-end">
                         
                            <div className="header-top-curr dropdown">
                                <button className="dropdown-toggle text-upper" data-bs-toggle="dropdown">ارز<i className="ecicon eci-caret-down" aria-hidden="true"></i></button>
                                <ul className="dropdown-menu">
                                    <li className="active"><a className="dropdown-item" href="#">دلار</a></li>
                                    <li><a className="dropdown-item" href="#">یورو</a></li>
                                </ul>
                            </div>
                            
                            <div className="header-top-lan dropdown">
                                <button className="dropdown-toggle text-upper" data-bs-toggle="dropdown">زبان<i className="ecicon eci-caret-down" aria-hidden="true"></i></button>
                                <ul className="dropdown-menu">
                                    <li className="active"><a className="dropdown-item" href="#">انگلیسی</a></li>
                                    <li><a className="dropdown-item" href="#">ایتالیایی</a></li>
                                </ul>
                            </div>
                          

                        </div>
                    </div>
                   
                    <div className="col d-lg-none ">
                        <div className="ec-header-bottons">
                          
                            <div className="ec-header-user dropdown">
                                <button className="dropdown-toggle" data-bs-toggle="dropdown"><img src="../images/icons/user.svg" className="svg_img header_svg" alt=""/></button>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="dropdown-item" href="register.html">ثبت نام</a></li>
                                    <li><a className="dropdown-item" href="checkout.html">ادامه خرید</a></li>
                                    <li><a className="dropdown-item" href="login.html">ورود</a></li>
                                </ul>
                            </div>
                          
                            <a href="wishlist.html" className="ec-header-btn ec-header-wishlist">
                                <div className="header-icon"><img src="../images/icons/wishlist.svg" className="svg_img header_svg" alt="" /></div>
                                <span className="ec-header-count">4</span>
                            </a>
                            
                            <a href="#ec-side-cart" className="ec-header-btn ec-side-toggle">
                                <div className="header-icon"><img src="../images/icons/cart.svg" className="svg_img header_svg" alt="" /></div>
                                <span className="ec-header-count cart-count-lable">3</span>
                            </a>
                        
                            <a href="#ec-mobile-menu" className="ec-header-btn ec-side-toggle d-lg-none">
                                <img src="../images/icons/menu.svg" className="svg_img header_svg" alt="icon" />
                            </a>
                           
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
                                <a href="index.html"><img src="../images/logo/logo.png" alt="لوگو سایت"/><img className="dark-logo" src="../images/logo/dark-logo.png" alt="لوگو سایت" style={{"display": "none" }}/></a>
                            </div>
                        </div>
                    
                        <div className="align-self-center">
                            <div className="header-search">
                                <form className="ec-btn-group-form" action="#">
                                    <input className="form-control" placeholder="نام محصول خود را وارد کنید ..." type="text" />
                                    <button className="submit" type="submit"><img src="../images/icons/search.svg" className="svg_img header_svg" alt="" /></button>
                                </form>
                            </div>
                        </div>
                       
                        <div className="align-self-center">
                            <div className="ec-header-bottons">

                              
                                <div className="ec-header-user dropdown">
                                    <button className="dropdown-toggle" data-bs-toggle="dropdown"><img src="../images/icons/user.svg" className="svg_img header_svg" alt=""/></button>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li><a className="dropdown-item" href="register.html">ثبت نام</a></li>
                                        <li><a className="dropdown-item" href="checkout.html">ادامه خرید</a></li>
                                        <li><a className="dropdown-item" href="login.html">ورود</a></li>
                                    </ul>
                                </div>
                              
                                <a href="wishlist.html" className="ec-header-btn ec-header-wishlist">
                                    <div className="header-icon"><img src="../images/icons/wishlist.svg" className="svg_img header_svg" alt="" /></div>
                                    <span className="ec-header-count">4</span>
                                </a>
                              
                                <a href="#ec-side-cart" className="ec-header-btn ec-side-toggle">
                                    <div className="header-icon"><img src="../images/icons/cart.svg" className="svg_img header_svg" alt="" /></div>
                                    <span className="ec-header-count cart-count-lable">3</span>
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
                            <a href="index.html"><img src="../images/logo/logo.png" alt="لوگو سایت"/><img className="dark-logo" src="../images/logo/dark-logo.png" alt="لوگو سایت" style={{"display": "none;"}}/></a>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="header-search">
                            <form className="ec-btn-group-form" action="#">
                                <input className="form-control" placeholder="نام محصول خود را وارد کنید ..." type="text" />
                                <button className="submit" type="submit"><img src="../images/icons/search.svg" className="svg_img header_svg" alt="icon"/></button>
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
                                <li><a href="index.html">خانه</a></li>
                                <li className="dropdown position-static"><a href="javascript:void(0)">دسته بندی ها</a>
                                    <ul className="mega-menu d-block">
                                        <li className="d-flex">
                                            <ul className="d-block">
                                                <li className="menu_title"><a href="javascript:void(0)">ورژن کلاسیک</a></li>
                                                <li><a href="shop-left-sidebar-col-3.html">سایدبار چپ 3 ستونه</a>
                                                </li>
                                                <li><a href="shop-left-sidebar-col-4.html">سایدبار چپ 4 ستونه</a>
                                                </li>
                                                <li><a href="shop-right-sidebar-col-3.html">سایدبار راست 3 ستونه</a>
                                                </li>
                                                <li><a href="shop-right-sidebar-col-4.html">سایدبار راست 4 ستونه</a>
                                                </li>
                                                <li><a href="shop-full-width.html">تمام عرض 4 ستونه</a></li>
                                            </ul>
                                            <ul className="d-block">
                                                <li className="menu_title"><a href="javascript:void(0)">ورژن کلاسیک</a></li>
                                                <li><a href="shop-banner-left-sidebar-col-3.html"> بنر سایدبار چپ 3 ستونه</a></li>
                                                <li><a href="shop-banner-left-sidebar-col-4.html"> بنر سایدبار چپ 4 ستونه</a></li>
                                                <li><a href="shop-banner-right-sidebar-col-3.html"> بنر سایدبار راست 3 ستونه </a></li>
                                                <li><a href="shop-banner-right-sidebar-col-4.html"> بنر سایدبار راست 4 ستونه </a></li>
                                                <li><a href="shop-banner-full-width.html"> بنر تمام عرض 4 ستونه</a>
                                                </li>
                                            </ul>
                                            <ul className="d-block">
                                                <li className="menu_title"><a href="javascript:void(0)">ورژن ستونه</a></li>
                                                <li><a href="shop-full-width-col-3.html">3 ستون تمام عرض</a></li>
                                                <li><a href="shop-full-width-col-4.html">4 ستون تمام عرض</a></li>
                                                <li><a href="shop-full-width-col-5.html">5 ستون تمام عرض</a></li>
                                                <li><a href="shop-full-width-col-6.html">6 ستون تمام عرض</a></li>
                                                <li><a href="shop-banner-full-width-col-3.html">بنر 3 ستونه</a>
                                                </li>
                                            </ul>
                                            <ul className="d-block">
                                                <li className="menu_title"><a href="javascript:void(0)">ورژن لیست</a>
                                                </li>
                                                <li><a href="shop-list-left-sidebar.html">فروشگاه با سایدبار چپ</a></li>
                                                <li><a href="shop-list-right-sidebar.html">فروشگاه با سایدبار راست</a></li>
                                                <li><a href="shop-list-banner-left-sidebar.html"> بنر سایدبار چپ </a>
                                                </li>
                                                <li><a href="shop-list-banner-right-sidebar.html">بنر سایدبار راست</a></li>
                                                <li><a href="shop-list-full-col-2.html">تمام عرض 2 ستونه</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul className="ec-main-banner w-100">
                                                <li>
                                                    <a className="p-0" href="shop-left-sidebar-col-3.html"><img className="img-responsive" src="../images/menu-banner/1.jpg" alt=""/></a>
                                                </li>
                                                <li>
                                                    <a className="p-0" href="shop-left-sidebar-col-4.html"><img className="img-responsive" src="../images/menu-banner/2.jpg" alt=""/></a>
                                                </li>
                                                <li>
                                                    <a className="p-0" href="shop-right-sidebar-col-3.html"><img className="img-responsive" src="../images/menu-banner/3.jpg" alt=""/></a>
                                                </li>
                                                <li>
                                                    <a className="p-0" href="shop-right-sidebar-col-4.html"><img className="img-responsive" src="../images/menu-banner/4.jpg" alt=""/></a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="javascript:void(0)">محصولات</a>
                                    <ul className="sub-menu">
                                        <li className="dropdown position-static"><a href="javascript:void(0)">صفحه محصولات
                                                <i className="ecicon eci-angle-left"></i></a>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><a href="product-left-sidebar.html">محصول سایدبار چپ</a></li>
                                                <li><a href="product-right-sidebar.html">محصول سایدبار راست</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static"><a href="javascript:void(0)">محصول 360 درجه
                                                <i className="ecicon eci-angle-left"></i></a>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><a href="product-360-left-sidebar.html">360 ساید بار چپ</a></li>
                                                <li><a href="product-360-right-sidebar.html">360 ساید بار راست</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static"><a href="javascript:void(0)">محصول ویدئویی
                                                <i className="ecicon eci-angle-left"></i></a>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><a href="product-video-left-sidebar.html">سایدبار چپ ویدئویی</a>
                                                </li>
                                                <li><a href="product-video-right-sidebar.html">سایدبار راست ویدئویی</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static"><a href="javascript:void(0)">گالری محصول
                                                <i className="ecicon eci-angle-left"></i></a>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><a href="product-gallery-left-sidebar.html">سایدبار چپ گالری</a>
                                                </li>
                                                <li><a href="product-gallery-right-sidebar.html">سایدبار راست گالری</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="product-full-width.html">محصول تمام عرض</a></li>
                                        <li><a href="product-360-full-width.html">360 تمام عرض</a></li>
                                        <li><a href="product-video-full-width.html">تمام عرض ویدئو </a></li>
                                        <li><a href="product-gallery-full-width.html">تمام عرض گالری</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="javascript:void(0)">صفحات</a>
                                    <ul className="sub-menu">
                                        <li><a href="about-us.html">درباره ما</a></li>
                                        <li><a href="contact-us.html">ارتباط با ما</a></li>
                                        <li><a href="cart.html">سبد خرید</a></li>
                                        <li><a href="checkout.html">ادامه خرید</a></li>
                                        <li><a href="compare.html">مقایسه</a></li>
                                        <li><a href="faq.html">سوالات متداول</a></li>
                                        <li><a href="login.html">ورود</a></li>
                                        <li><a href="register.html">ثبت نام</a></li>
                                        <li><a href="track-order.html">پیگیری سفارش</a></li>
                                        <li><a href="terms-condition.html">شرایط و ضوابط</a></li>
                                        <li><a href="privacy-policy.html">سیاست حفظ حریم خصوصی</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><span className="main-label-note-new" data-toggle="tooltip" title="NEW"></span><a href="javascript:void(0)">دیگر</a>
                                    <ul className="sub-menu">
                                        <li className="dropdown position-static"><a href="javascript:void(0)">تاییده ایمیل 
                                                <i className="ecicon eci-angle-left"></i></a>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><a href="email-template-confirm-1.html">تاییده ایمیل  1</a></li>
                                                <li><a href="email-template-confirm-2.html">تاییده ایمیل  2</a></li>
                                                <li><a href="email-template-confirm-3.html">تاییده ایمیل  3</a></li>
                                                <li><a href="email-template-confirm-4.html">تاییده ایمیل  4</a></li>
                                                <li><a href="email-template-confirm-5.html">تاییده ایمیل  5</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static"><a href="javascript:void(0)">ایمیل ریست رمزعبور
                                                <i className="ecicon eci-angle-left"></i></a>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><a href="email-template-forgot-password-1.html">ایمیل ریست رمزعبور 1</a>
                                                </li>
                                                <li><a href="email-template-forgot-password-2.html">ایمیل ریست رمزعبور 2</a>
                                                </li>
                                                <li><a href="email-template-forgot-password-3.html">ایمیل ریست رمزعبور 3</a>
                                                </li>
                                                <li><a href="email-template-forgot-password-4.html">ایمیل ریست رمزعبور 4</a>
                                                </li>
                                                <li><a href="email-template-forgot-password-5.html">ایمیل ریست رمزعبور 5</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static"><a href="javascript:void(0)">ایمیل تبلیغاتی 
                                                <i className="ecicon eci-angle-left"></i></a>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><a href="email-template-offers-1.html">ایمیل تبلیغاتی  1</a></li>
                                                <li><a href="email-template-offers-2.html">ایمیل تبلیغاتی  2</a></li>
                                                <li><a href="email-template-offers-3.html">ایمیل تبلیغاتی  3</a></li>
                                                <li><a href="email-template-offers-4.html">ایمیل تبلیغاتی  4</a></li>
                                                <li><a href="email-template-offers-5.html">ایمیل تبلیغاتی  5</a></li>
                                                <li><a href="email-template-offers-6.html">ایمیل تبلیغاتی  6</a></li>
                                                <li><a href="email-template-offers-7.html">ایمیل تبلیغاتی  7</a></li>
                                                <li><a href="email-template-offers-8.html">ایمیل تبلیغاتی  8</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static">
                                            <span className="label-note-hot"></span>
                                            <a href="javascript:void(0)">صفحات اکانت فروشنده
                                                <i className="ecicon eci-angle-left"></i></a>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><a href="vendor-dashboard.html">داشبرد فروشنده</a></li>
                                                <li><a href="vendor-profile.html">پروفایل فروشنده</a></li>
                                                <li><a href="vendor-uploads.html">آپلودهای فروشنده</a></li>
                                                <li><a href="vendor-settings.html">تنظیمات فروشنده</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static">
                                            <span className="label-note-trending"></span>
                                            <a href="javascript:void(0)">صفحات اکانت کاربر
                                                <i className="ecicon eci-angle-left"></i></a>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><a href="user-profile.html">پروفایل کاربر</a></li>
                                                <li><a href="user-history.html">تاریخچه</a></li>
                                                <li><a href="wishlist.html">علاقه مندی ها</a></li>
                                                <li><a href="track-order.html">پیگیری سفارش</a></li>
                                                <li><a href="user-invoice.html">فاکتور</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static"><a href="javascript:void(0)">صفحات ساخت و ساز
                                                <i className="ecicon eci-angle-left"></i></a>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><a href="404-error-page.html">404 صفحه خطا</a></li>
                                                <li><a href="under-maintenance.html">صفحه در حال ساخت</a></li>
                                                <li><a href="coming-soon.html">صفحه به زودی</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static">
                                            <span className="label-note-new"></span>
                                            <a href="javascript:void(0)">صفحات کاتالوگ فروشندگی
                                                <i className="ecicon eci-angle-left"></i></a>
                                            <ul className="sub-menu sub-menu-child">
                                                <li><a href="catalog-single-vendor.html">کاتالوگ تک فروشنده </a></li>
                                                <li><a href="catalog-multi-vendor.html">کاتالوگ چند فروشنده </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="javascript:void(0)">بلاگ</a>
                                    <ul className="sub-menu">
                                        <li><a href="blog-left-sidebar.html">بلاگ سایدبار چپ</a></li>
                                        <li><a href="blog-right-sidebar.html">بلاگ سایدبار راست</a></li>
                                        <li><a href="blog-detail-left-sidebar.html">جزییات بلاگ سایدبار چپ</a></li>
                                        <li><a href="blog-detail-right-sidebar.html">جزییات بلاگ سایدبار راست</a></li>
                                        <li><a href="blog-full-width.html">بلاگ تمام عرض</a></li>
                                        <li><a href="blog-detail-full-width.html">جزییات بلاگ تمام عرض</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="javascript:void(0)">عناصر</a>
                                    <ul className="sub-menu">
                                        <li><a href="elemets-products.html">محصولات</a></li>
                                        <li><a href="elemets-typography.html">تایپوگرافی</a></li>
                                        <li><a href="elemets-title.html">سرتیترها</a></li>
                                        <li><a href="elemets-categories.html">دسته بندی ها</a></li>
                                        <li><a href="elemets-buttons.html">دکمه ها</a></li>
                                        <li><a href="elemets-tabs.html">تب ها</a></li>
                                        <li><a href="elemets-accordions.html">آکاردیون</a></li>
                                        <li><a href="elemets-blog.html">بلاگ</a></li>
                                    </ul>
                                </li>
                                <li><a href="offer.html">پیشنهادات داغ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div id="ec-mobile-menu" className="ec-side-cart ec-mobile-menu">
            <div className="ec-menu-title">
                <span className="menu_title">منو</span>
                <button className="ec-close">×</button>
            </div>
            <div className="ec-menu-inner">
                <div className="ec-menu-content">
                    <ul>
                        <li><a href="index.html">خانه</a></li>
                        <li><a href="javascript:void(0)">دسته بندی ها</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="javascript:void(0)">ورژن کلاسیک</a>
                                    <ul className="sub-menu">
                                        <li><a href="shop-left-sidebar-col-3.html">سایدبار چپ 3 ستونه</a></li>
                                        <li><a href="shop-left-sidebar-col-4.html">سایدبار چپ 4 ستونه</a></li>
                                        <li><a href="shop-right-sidebar-col-3.html">سایدبار راست 3 ستونه</a></li>
                                        <li><a href="shop-right-sidebar-col-4.html">سایدبار راست 4 ستونه</a></li>
                                        <li><a href="shop-full-width.html">تمام عرض 4 ستونه</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">ورژن کلاسیک</a>
                                    <ul className="sub-menu">
                                        <li><a href="shop-banner-left-sidebar-col-3.html"> بنر سایدبار چپ  3
                                                column</a></li>
                                        <li><a href="shop-banner-left-sidebar-col-4.html"> بنر سایدبار چپ  4
                                                column</a></li>
                                        <li><a href="shop-banner-right-sidebar-col-3.html"> بنر سایدبار راست  3
                                                column</a></li>
                                        <li><a href="shop-banner-right-sidebar-col-4.html"> بنر سایدبار راست  4
                                                column</a></li>
                                        <li><a href="shop-banner-full-width.html"> بنر تمام عرض 4 ستونه</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">ورژن ستونه</a>
                                    <ul className="sub-menu">
                                        <li><a href="shop-full-width-col-3.html">3 ستون تمام عرض</a></li>
                                        <li><a href="shop-full-width-col-4.html">4 ستون تمام عرض</a></li>
                                        <li><a href="shop-full-width-col-5.html">5 ستون تمام عرض</a></li>
                                        <li><a href="shop-full-width-col-6.html">6 ستون تمام عرض</a></li>
                                        <li><a href="shop-banner-full-width-col-3.html">بنر 3 ستونه</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">ورژن لیست</a>
                                    <ul className="sub-menu">
                                        <li><a href="shop-list-left-sidebar.html">فروشگاه با سایدبار چپ</a></li>
                                        <li><a href="shop-list-right-sidebar.html">فروشگاه با سایدبار راست</a></li>
                                        <li><a href="shop-list-banner-left-sidebar.html"> بنر سایدبار چپ </a></li>
                                        <li><a href="shop-list-banner-right-sidebar.html"> بنر سایدبار راست </a></li>
                                        <li><a href="shop-list-full-col-2.html">تمام عرض 2 ستونه</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="p-0" href="shop-left-sidebar-col-3.html"><img className="img-responsive" src="../images/menu-banner/1.jpg" alt=""/></a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0)">محصولات</a>
                            <ul className="sub-menu">
                                <li><a href="javascript:void(0)">صفحه محصولات</a>
                                    <ul className="sub-menu">
                                        <li><a href="product-left-sidebar.html">محصول سایدبار چپ</a></li>
                                        <li><a href="product-right-sidebar.html">محصول سایدبار راست</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)">محصول 360 درجه</a>
                                    <ul className="sub-menu">
                                        <li><a href="product-360-left-sidebar.html">360 ساید بار چپ</a></li>
                                        <li><a href="product-360-right-sidebar.html">360 ساید بار راست</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)">محصول ویدئو</a>
                                    <ul className="sub-menu">
                                        <li><a href="product-video-left-sidebar.html">سایدبار چپ ویدئویی</a></li>
                                        <li><a href="product-video-right-sidebar.html">سایدبار راست ویدئویی</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)">محصول گالری</a>
                                    <ul className="sub-menu">
                                        <li><a href="product-gallery-left-sidebar.html">سایدبار چپ گالری</a></li>
                                        <li><a href="product-gallery-right-sidebar.html">سایدبار راست گالری</a></li>
                                    </ul>
                                </li>
                                <li><a href="product-full-width.html">محصول تمام عرض</a></li>
                                <li><a href="product-360-full-width.html">360 تمام عرض</a></li>
                                <li><a href="product-video-full-width.html">تمام عرض ویدئو </a></li>
                                <li><a href="product-gallery-full-width.html">تمام عرض گالری</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0)">دیگر</a>
                            <ul className="sub-menu">
                                <li><a href="javascript:void(0)">تاییده ایمیل </a>
                                    <ul className="sub-menu">
                                        <li><a href="email-template-confirm-1.html">تاییده ایمیل  1</a></li>
                                        <li><a href="email-template-confirm-2.html">تاییده ایمیل  2</a></li>
                                        <li><a href="email-template-confirm-3.html">تاییده ایمیل  3</a></li>
                                        <li><a href="email-template-confirm-4.html">تاییده ایمیل  4</a></li>
                                        <li><a href="email-template-confirm-5.html">تاییده ایمیل  5</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)">ایمیل فراموشی رمز عبور</a>
                                    <ul className="sub-menu">
                                        <li><a href="email-template-forgot-password-1.html">ایمیل ریست رمزعبور 1</a></li>
                                        <li><a href="email-template-forgot-password-2.html">ایمیل ریست رمزعبور 2</a></li>
                                        <li><a href="email-template-forgot-password-3.html">ایمیل ریست رمزعبور 3</a></li>
                                        <li><a href="email-template-forgot-password-4.html">ایمیل ریست رمزعبور 4</a></li>
                                        <li><a href="email-template-forgot-password-5.html">ایمیل ریست رمزعبور 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)">ایمیل تبلیغاتی</a>
                                    <ul className="sub-menu">
                                        <li><a href="email-template-offers-1.html">ایمیل تبلیغاتی  1</a></li>
                                        <li><a href="email-template-offers-2.html">ایمیل تبلیغاتی  2</a></li>
                                        <li><a href="email-template-offers-3.html">ایمیل تبلیغاتی  3</a></li>
                                        <li><a href="email-template-offers-4.html">ایمیل تبلیغاتی  4</a></li>
                                        <li><a href="email-template-offers-5.html">ایمیل تبلیغاتی  5</a></li>
                                        <li><a href="email-template-offers-6.html">ایمیل تبلیغاتی  6</a></li>
                                        <li><a href="email-template-offers-7.html">ایمیل تبلیغاتی  7</a></li>
                                        <li><a href="email-template-offers-8.html">ایمیل تبلیغاتی  8</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)">صفحات اکانت فروشنده</a>
                                    <ul className="sub-menu">
                                        <li><a href="vendor-dashboard.html">داشبرد فروشنده</a></li>
                                        <li><a href="vendor-profile.html">پروفایل فروشنده</a></li>
                                        <li><a href="vendor-uploads.html">آپلودهای فروشنده</a></li>
                                        <li><a href="vendor-settings.html">تنظیمات فروشنده</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)">صفحات اکانت کاربر</a>
                                    <ul className="sub-menu">
                                        <li><a href="user-profile.html">پروفایل کاربر</a></li>
                                        <li><a href="user-history.html">تاریخچه کاربر</a></li>
                                        <li><a href="wishlist.html">علاقه مندی ها</a></li>
                                        <li><a href="track-order.html">پیگیری سفارش</a></li>
                                        <li><a href="user-invoice.html">فاکتور کاربر</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)">صفحات ساخت و ساز</a>
                                    <ul className="sub-menu">
                                        <li><a href="404-error-page.html">404 صفحه خطا</a></li>
                                        <li><a href="under-maintenance.html">صفحه در حال ساخت</a></li>
                                        <li><a href="coming-soon.html">صفحه به زودی</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)">صفحات کاتالوگ فروشندگی</a>
                                    <ul className="sub-menu">
                                        <li><a href="catalog-single-vendor.html">کاتالوگ تک فروشنده </a></li>
                                        <li><a href="catalog-multi-vendor.html">کاتالوگ چند فروشنده </a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0)">صفحات</a>
                            <ul className="sub-menu">
                                <li><a href="about-us.html">درباره ما</a></li>
                                <li><a href="contact-us.html">ارتباط با ما</a></li>
                                <li><a href="cart.html">سبد خرید</a></li>
                                <li><a href="checkout.html">ادامه خرید</a></li>
                                <li><a href="compare.html">مقایسه</a></li>
                                <li><a href="faq.html">سوالات متداول</a></li>
                                <li><a href="login.html">ورود</a></li>
                                <li><a href="register.html">ثبت نام</a></li>
                                <li><a href="track-order.html">پیگیری سفارش</a></li>
                                <li><a href="terms-condition.html">شرایط و ضوابط</a></li>
                                <li><a href="privacy-policy.html">سیاست حفظ حریم خصوصی</a></li>
                            </ul>
                        </li>
                        <li className="dropdown"><a href="javascript:void(0)">بلاگ</a>
                            <ul className="sub-menu">
                                <li><a href="blog-left-sidebar.html">بلاگ سایدبار چپ</a></li>
                                <li><a href="blog-right-sidebar.html">بلاگ سایدبار راست</a></li>
                                <li><a href="blog-detail-left-sidebar.html">جزییات بلاگ سایدبار چپ</a></li>
                                <li><a href="blog-detail-right-sidebar.html">جزییات بلاگ سایدبار راست</a></li>
                                <li><a href="blog-full-width.html">بلاگ تمام عرض</a></li>
                                <li><a href="blog-detail-full-width.html">جزییات بلاگ تمام عرض</a></li>
                            </ul>
                        </li>
                        <li className="dropdown"><a href="javascript:void(0)">عناصر</a>
                            <ul className="sub-menu">
                                <li><a href="elemets-products.html">محصولات</a></li>
                                <li><a href="elemets-typography.html">تایپوگرافی</a></li>
                                <li><a href="elemets-title.html">سرتیترها</a></li>
                                <li><a href="elemets-categories.html">دسته بندی ها</a></li>
                                <li><a href="elemets-buttons.html">دکمه ها</a></li>
                                <li><a href="elemets-tabs.html">تب ها</a></li>
                                <li><a href="elemets-accordions.html">آکاردیون</a></li>
                                <li><a href="elemets-blog.html">بلاگ</a></li>
                            </ul>
                        </li>
                        <li><a href="offer.html">پیشنهادات داغ</a></li>
                    </ul>
                </div>
                <div className="header-res-lan-curr">
                    <div className="header-top-lan-curr">
                       
                        <div className="header-top-lan dropdown">
                            <button className="dropdown-toggle text-upper" data-bs-toggle="dropdown">زبان<i className="ecicon eci-caret-down" aria-hidden="true"></i></button>
                            <ul className="dropdown-menu">
                                <li className="active"><a className="dropdown-item" href="#">انگلیسی</a></li>
                                <li><a className="dropdown-item" href="#">ایتالیایی</a></li>
                            </ul>
                        </div>
                      
                        <div className="header-top-curr dropdown">
                            <button className="dropdown-toggle text-upper" data-bs-toggle="dropdown">ارز<i className="ecicon eci-caret-down" aria-hidden="true"></i></button>
                            <ul className="dropdown-menu">
                                <li className="active"><a className="dropdown-item" href="#">دلار</a></li>
                                <li><a className="dropdown-item" href="#">یورو</a></li>
                            </ul>
                        </div>
                       
                    </div>
                    
                    <div className="header-res-social">
                        <div className="header-top-social">
                            <ul className="mb-0">
                                <li className="list-inline-item"><a className="hdr-facebook" href="#"><i className="ecicon eci-facebook"></i></a></li>
                                <li className="list-inline-item"><a className="hdr-twitter" href="#"><i className="ecicon eci-twitter"></i></a></li>
                                <li className="list-inline-item"><a className="hdr-instagram" href="#"><i className="ecicon eci-instagram"></i></a></li>
                                <li className="list-inline-item"><a className="hdr-linkedin" href="#"><i className="ecicon eci-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
        
    </header>
    

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
  

</div> */}
    </>
  )
}
export default Navbar
