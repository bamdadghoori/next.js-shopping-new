import React,{useState} from 'react'
import { getCategories } from '../../../../utils/firebase';

import Range from "rc-slider"

import { GetStaticPaths,GetStaticProps } from 'next';
import {Tooltip} from '@chakra-ui/react'
import {  RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderTrack,
    RangeSliderThumb} from "@chakra-ui/slider"


 
 



//@ts-ignore

 const SubCategory= ({subCategory}:{subCategory:string}) => {
const handleRangeChange=(val:any[])=>{
    console.log(val)
    setLimit(val)
}

  const[limit,setLimit]:any=useState([50000,1000000])
    if(subCategory){
        console.log(subCategory)
    }
   
  return (
    <>
   
  
 
      <section className="ec-page-content section-space-p">
      

        <div className="container">
            <div className="row">
                <div className="ec-shop-rightside col-lg-9 order-lg-last col-md-12 order-md-first margin-b-30">
                   
                    <div className="ec-pro-list-top d-flex">
                        <div className="col-md-6 ec-grid-list">
                            <div className="ec-gl-btn">
                                <button className="btn btn-grid active"><img src="/images/icons/grid.svg" className="svg_img gl_svg" alt=""/></button>
                                <button className="btn btn-list"><img src="/images/icons/list.svg" className="svg_img gl_svg" alt=""/></button>
                            </div>
                        </div>
                        <div className="col-md-6 ec-sort-select">
                            <span className="sort-by">چینش بر اساس</span>
                            <div className="ec-select-inner">
                                <select name="ec-select" id="ec-select">
                                    <option selected={false} disabled={false}>موقعیت</option>
                                    <option value="1"> مرتبط</option>
                                    <option value="2">نام، الف تا ی</option>
                                    <option value="3">نام، ی تا الف</option>
                                    <option value="4">قیمت، کم به زیاد</option>
                                    <option value="5">قیمت، زیاد به کم</option>
                                </select>
                            </div>
                        </div>
                    </div>
                   

                    <div className="shop-pro-content">
                        <div className="shop-pro-inner">
                            <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
                                    <div className="ec-product-inner">
                                        <div className="ec-pro-image-outer">
                                            <div className="ec-pro-image">
                                                <a href="product-left-sidebar.html" className="image">
                                                    <img className="main-image" src="/images/product-image/6_1.jpg" alt="Product"/>
                                                    <img className="hover-image" src="/images/product-image/6_2.jpg" alt="Product"/>
                                                </a>
                                                <span className="percentage">20%</span>
                                                <a href="#" className="quickview" data-link-action="quickview" title="مشاهده" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="/images/icons/quickview.svg" className="svg_img pro_svg" alt=""/></a>
                                                <div className="ec-pro-actions">
                                                    <a href="compare.html" className="ec-btn-group compare" title="مقایسه"><img src="/images/icons/compare.svg" className="svg_img pro_svg" alt=""/></a>
                                                    <button title="افزودن به سبد خرید" className=" add-to-cart"><img src="/images/icons/cart.svg" className="svg_img pro_svg" alt=""/> افزودن به کارت </button>
                                                    <a className="ec-btn-group wishlist" title="علاقه مندی"><img src="/images/icons/wishlist.svg" className="svg_img pro_svg" alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ec-pro-content">
                                            <h5 className="ec-pro-title"><a href="product-left-sidebar.html"> تی شرت یقه گرد </a></h5>
                                            <div className="ec-pro-rating">
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star"></i>
                                            </div>
                                            <div className="ec-pro-list-desc"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</div>
                                            <span className="ec-price">
                                                <span className="old-price">2700 تومان</span>
                                                <span className="new-price">2200 تومان</span>
                                            </span>
                                            <div className="ec-pro-option">
                                                <div className="ec-pro-color">
                                                    <span className="ec-pro-opt-label">رنگ</span>
                                                    <ul className="ec-opt-swatch ec-change-img">
                                                        <li className="active"><a href="#" className="ec-opt-clr-img" data-src="/images/product-image/6_1.jpg" data-src-hover="/images/product-image/6_1.jpg" data-tooltip="Gray"><span style={{"backgroundColor":"#e8c2ff;"}}></span></a></li>
                                                        <li><a href="#" className="ec-opt-clr-img" data-src="/images/product-image/6_2.jpg" data-src-hover="/images/product-image/6_2.jpg" data-tooltip="Orange"><span style={{"backgroundColor":"#9cfdd5;"}}></span></a></li>
                                                    </ul>
                                                </div>
                                                <div className="ec-pro-size">
                                                    <span className="ec-pro-opt-label">اندازه</span>
                                                    <ul className="ec-opt-size">
                                                        <li className="active"><a href="#" className="ec-opt-sz" data-old="2500 تومان" data-new="2000 تومان" data-tooltip="Small">S</a></li>
                                                        <li><a href="#" className="ec-opt-sz" data-old="2700 تومان" data-new="2200 تومان" data-tooltip="Medium">M</a></li>
                                                        <li><a href="#" className="ec-opt-sz" data-old="3000 تومان" data-new="2500 تومان" data-tooltip="Large">X</a></li>
                                                        <li><a href="#" className="ec-opt-sz" data-old="3500 تومان" data-new="3000 تومان" data-tooltip="Extra Large">XL</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                     

                              </div>
                              </div>
                              </div>
                  </div>
                  <div className="ec-shop-leftside col-lg-3 order-lg-first col-md-12 order-md-last">
                    <div id="shop_sidebar">
                        <div className="ec-sidebar-heading">
                            <h1>محصولات فیلتر شده</h1>
                        </div>
                        <div className="ec-sidebar-wrap">
                            
                            <div className="ec-sidebar-block">
                                <div className="ec-sb-title">
                                    <h3 className="ec-sidebar-title">دسته‌بندی‌ها</h3>
                                </div>
                                <div className="ec-sb-block-content">
                                    <ul>
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox" checked={false}/> <a href="#">لباس ها</a><span className="checked"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox"/> <a href="#">کیف</a><span className="checked"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox"/> <a href="#">کفش</a><span className="checked"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox"/> <a href="#">محصولات آرایشی</a><span className="checked"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox"/> <a href="#">الکترونیکی</a><span className="checked"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox" /> <a href="#">گوشی</a><span className="checked"></span>
                                            </div>
                                        </li>
                                        <li id="ec-more-toggle-content" style={{"padding":"0" , "display": "none;"}}>
                                            <ul>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <input type="checkbox"/> <a href="#">ساعت</a><span className="checked"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <input type="checkbox"/> <a href="#">قلم نوری</a><span className="checked"></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item ec-more-toggle">
                                                <span className="checked"></span><span id="ec-more-toggle">دسته‌بندی‌های بیشتر</span>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                         
                            <div className="ec-sidebar-block">
                                <div className="ec-sb-title">
                                    <h3 className="ec-sidebar-title">اندازه</h3>
                                </div>
                                <div className="ec-sb-block-content">
                                    <ul>
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox" value="" checked={false}/><a href="#">S</a><span className="checked"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox" value=""/><a href="#">M</a><span className="checked"></span>
                                            </div>
                                        </li>
                                      
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox" value=""/><a href="#">XL</a><span className="checked"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox" value=""/><a href="#">XXL</a><span className="checked"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                          
                            <div className="ec-sidebar-block ec-sidebar-block-clr">
                                <div className="ec-sb-title">
                                    <h3 className="ec-sidebar-title">رنگ</h3>
                                </div>
                                <div className="ec-sb-block-content">
                                    <ul>
                                        <li>
                                            <div className="ec-sidebar-block-item"><span style={{"backgroundColor":"#c4d6f9;"}}></span></div>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item"><span style={{"backgroundColor":"#ff748b;"}}></span></div>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item"><span style={{"backgroundColor":"#000000;"}}></span></div>
                                        </li>
                                        <li className="active">
                                            <div className="ec-sidebar-block-item"><span style={{"backgroundColor":"#2bff4a;"}}></span></div>
                                        </li>
                                       
                                      
                                      
                                      
                                    </ul>
                                </div>
                            </div>
                           
                            <div className="ec-sidebar-block">
                                <div className="ec-sb-title">
                                    <h3 className="ec-sidebar-title">قیمت</h3>
                                </div>
                                <div className='ec-sb-block-content es-price-slider ec-sidebar-dropdown'>
                                <RangeSlider aria-label={['min', 'max']} defaultValue={[50000, 1000000]}   width={`100%`}colorScheme='blue' height={`100%`} textAlign={`center`}
                                 //   onChangeEnd={(val) => console.log(val)}
                                          onChange={(val)=>handleRangeChange(val)}
                                             min={50000}
                                             max={1000000}
                                             step={50000}
                                             >
                                               <RangeSliderTrack  marginBottom={`20px`} bg={`#777777`}  height={`100%`}>
                                         <RangeSliderFilledTrack  height={`100%`} bg={`#444444`} paddingTop={'2px'} paddingBottom={`2px`} />
                                     </RangeSliderTrack>
                              <RangeSliderThumb index={0}  background={`white`} width="16px" height={"16px"} border={`2px solid #3474d4`} borderRadius={`50%`} />
                                <RangeSliderThumb index={1}  background={`white`}  width="16px" height={"16px"} border={`2px solid #3474d4`} borderRadius={`50%`}/>
</RangeSlider>
<div className="ec-price-input">
                                            <label className="filter__label">
                                            {limit[0]}
                                            </label>
                                            <span >_ </span>
                                            <label className="filter__label">
                                            {limit[1]}
                                            </label>
                                        </div>




                                </div>
           
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             </div>
             </section>
    </>
   
  )
}
export default SubCategory;

export const   getStaticPaths:GetStaticPaths=async()=> {
let categories:any=[]
let paths:any=[]
let subCategories:any=[]
let filteredCategories:any=[]
try{
          categories=await getCategories()
          categories=await categories.json()
          filteredCategories=categories.filter((el:any)=>el.subCategories)
          paths=filteredCategories.map((category:any)=>{
            category.subCategories.map((subCategory:any)=>{
                params:{
                 
                    title:category;
                    subCategoryTitle:subCategory;
                }
            })
          })
}
catch(er){
    console.log(er)
}
 
    return {
       
      paths:paths ,
      fallback: 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export  const getStaticProps=async(context:any)=> {
    let subCategory=context.params.subCategoryTitle
    return {
    
      props:  {subCategory:subCategory} ,
    }
  }
