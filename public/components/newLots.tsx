import React from 'react'
import Items from './items';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
 const NewLots = () => {
    const newLots=useSelector((state:RootState)=>state.persistedReducer.lots.filter((el:any)=>{return el.isNew==true}))
  return (
   <>
   
   <section className="section ec-new-product section-space-p" id="newLots" 
   >
        <div className="container" >
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="section-title">
                        <h2 className="ec-bg-title">تازه رسیده ها</h2>
                        <h2 className="ec-title">تازه رسیده ها</h2>
                        <p className="sub-title"> مرور مجموعه ای از محصولات برتر </p>
                    </div>
                </div>
            </div>
            <div className="row">
               
            <Items lots={newLots}/>
                {/* <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content" data-animation="flipInY">
                    <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                            <div className="ec-pro-image">
                                <a href="product-left-sidebar.html" className="image">
                                    <img className="main-image" src="assets/images/product-image/11_1.jpg" alt="Product"/>
                                    <img className="hover-image" src="assets/images/product-image/11_2.jpg" alt="Product"/>
                                </a>
                                <span className="flags">
                                    <span className="new">جدید</span>
                                </span>
                                <a href="#" className="quickview" data-link-action="quickview" title="مشاهده" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt=""></a>
                                <div className="ec-pro-actions">
                                    <a href="compare.html" className="ec-btn-group compare" title="مقایسه"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt=""/></a>
                                    <button title="افزودن به سبد خرید" className=" add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt=""> افزودن به سبد خرید</button>
                                    <a className="ec-btn-group wishlist" title="علاقه مندی"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt=""/></a>
                                </div>
                            </div>
                        </div>
                        <div className="ec-pro-content">
                            <h5 className="ec-pro-title"><a href="product-left-sidebar.html">کیف چرم کلاسیک</a></h5>
                            <div className="ec-pro-rating">
                                <i className="ecicon eci-star fill"></i>
                                <i className="ecicon eci-star fill"></i>
                                <i className="ecicon eci-star fill"></i>
                                <i className="ecicon eci-star fill"></i>
                                <i className="ecicon eci-star"></i>
                            </div>
                            <span className="ec-price">
                                <span className="old-price">10000 تومان</span>
                            <span className="new-price">8000 تومان</span>
                            </span>
                            <div className="ec-pro-option">
                                <div className="ec-pro-color">
                                    <span className="ec-pro-opt-label">رنگ</span>
                                    <ul className="ec-opt-swatch ec-change-img">
                                        <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/11_1.jpg" data-src-hover="assets/images/product-image/11_1.jpg" data-tooltip="Gray"><span style="background-color:#dba4ff;"></span></a>
                                        </li>
                                        <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/11_2.jpg" data-src-hover="assets/images/product-image/11_2.jpg" data-tooltip="Orange"><span style="background-color:#ff4a77;"></span></a></li>
                                        <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/11_3.jpg" data-src-hover="assets/images/product-image/11_3.jpg" data-tooltip="Green"><span style="background-color:#c9ff55;"></span></a>
                                        </li>
                                        <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/11_4.jpg" data-src-hover="assets/images/product-image/11_4.jpg" data-tooltip="Sky Blue"><span style="background-color:#ffcc5e;"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content" data-animation="flipInY">
                    <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                            <div className="ec-pro-image">
                                <a href="product-left-sidebar.html" className="image">
                                    <img className="main-image" src="assets/images/product-image/12_1.jpg" alt="Product"/>
                                    <img className="hover-image" src="assets/images/product-image/12_2.jpg" alt="Product"/>
                                </a>
                                <span className="percentage">5%</span>
                                <a href="#" className="quickview" data-link-action="quickview" title="مشاهده" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt=""/></a>
                                <div className="ec-pro-actions">
                                    <a href="compare.html" className="ec-btn-group compare" title="مقایسه"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt=""/></a>
                                    <button title="افزودن به سبد خرید" className=" add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt=""/> افزودن به سبد خرید</button>
                                    <a className="ec-btn-group wishlist" title="علاقه مندی"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt=""/></a>
                                </div>
                            </div>
                        </div>
                        <div className="ec-pro-content">
                            <h5 className="ec-pro-title"><a href="product-left-sidebar.html">کفش زنانه</a></h5>
                            <div className="ec-pro-rating">
                                <i className="ecicon eci-star fill"></i>
                                <i className="ecicon eci-star fill"></i>
                                <i className="ecicon eci-star fill"></i>
                                <i className="ecicon eci-star fill"></i>
                                <i className="ecicon eci-star"></i>
                            </div>
                            <span className="ec-price">
                                <span className="old-price">10000 تومان</span>
                            <span className="new-price">8000 تومان</span>
                            </span>
                            <div className="ec-pro-option">
                                <div className="ec-pro-color">
                                    <span className="ec-pro-opt-label">رنگ</span>
                                    <ul className="ec-opt-swatch ec-change-img">
                                        <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/12_1.jpg" data-src-hover="assets/images/product-image/12_1.jpg" data-tooltip="Gray"><span style="background-color:#db9dff;"></span></a>
                                        </li>
                                        <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/12_2.jpg" data-src-hover="assets/images/product-image/12_2.jpg" data-tooltip="Orange"><span style="background-color:#00ffff;"></span></a></li>
                                        <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/12_3.jpg" data-src-hover="assets/images/product-image/12_3.jpg" data-tooltip="Green"><span style="background-color:#ffa7f3;"></span></a>
                                        </li>
                                        <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/12_4.jpg" data-src-hover="assets/images/product-image/12_4.jpg" data-tooltip="Sky Blue"><span style="background-color:#89ff7e;"></span></a></li>
                                    </ul>
                                </div>
                                <div className="ec-pro-size">
                                    <span className="ec-pro-opt-label">اندازه</span>
                                    <ul className="ec-opt-size">
                                        <li className="active"><a href="#" className="ec-opt-sz" data-old="5000 تومان" data-new="4000 تومان" data-tooltip="Small">6</a></li>
                                        <li><a href="#" className="ec-opt-sz" data-old="6000 تومان" data-new="5000 تومان" data-tooltip="Medium">7</a></li>
                                        <li><a href="#" className="ec-opt-sz" data-old="7000 تومان" data-new="6000 تومان" data-tooltip="Large">8</a></li>
                                        <li><a href="#" className="ec-opt-sz" data-old="8000 تومان" data-new="7000 تومان" data-tooltip="Extra Large">9</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content" data-animation="flipInY">
                    <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                            <div className="ec-pro-image">
                                <a href="product-left-sidebar.html" className="image">
                                    <img className="main-image" src="assets/images/product-image/13_1.jpg" alt="Product"/>
                                    <img className="hover-image" src="assets/images/product-image/13_2.jpg" alt="Product"/>
                                </a>
                                <a href="#" className="quickview" data-link-action="quickview" title="مشاهده" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt=""></a>
                                <div className="ec-pro-actions"/>
                                    <a href="compare.html" className="ec-btn-group compare" title="مقایسه"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt=""/></a>
                                    <button title="افزودن به سبد خرید" className=" add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt=""/> افزودن به سبد خرید</button>
                                    <a className="ec-btn-group wishlist" title="علاقه مندی"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt=""/></a>
                                </div>
                            </div>
                        </div>
                        <div className="ec-pro-content">
                            <h5 className="ec-pro-title"><a href="product-left-sidebar.html">کیف زنانه</a></h5>
                            <div className="ec-pro-rating">
                                <i className="ecicon eci-star fill"></i>
                                <i className="ecicon eci-star fill"></i>
                                <i className="ecicon eci-star fill"></i>
                                <i className="ecicon eci-star fill"></i>
                                <i className="ecicon eci-star"></i>
                            </div>
                            <span className="ec-price">
                                <span className="old-price">10000 تومان</span>
                            <span className="new-price">8000 تومان</span>
                            </span>
                            <div className="ec-pro-option">
                                <div className="ec-pro-color">
                                    <span className="ec-pro-opt-label">رنگ</span>
                                    <ul className="ec-opt-swatch ec-change-img">
                                        <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/13_1.jpg" data-src-hover="assets/images/product-image/13_1.jpg" data-tooltip="Gray"><span style="background-color:#deffa4;"></span></a>
                                        </li>
                                        <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/13_2.jpg" data-src-hover="assets/images/product-image/13_2.jpg" data-tooltip="Orange"><span style="background-color:#ffcdbe;"></span></a></li>
                                        <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/13_3.jpg" data-src-hover="assets/images/product-image/13_3.jpg" data-tooltip="Green"><span style="background-color:#ff94df;"></span></a>
                                        </li>
                                        <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/13_4.jpg" data-src-hover="assets/images/product-image/13_4.jpg" data-tooltip="Sky Blue"><span style="background-color:#dd9bfc;"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </div>
                    */}
                
                <div className="col-sm-12 shop-all-btn"><a href="shop-left-sidebar-col-3.html">تمامی کالکشن‌های فروشگاه</a>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}
export default NewLots;
