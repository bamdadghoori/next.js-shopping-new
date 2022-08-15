import React,{useState} from 'react'
import Carousel from 'nuka-carousel'
import {useRouter} from 'next/router'
import NextNProgress from "nextjs-progressbar" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'
 const MainSlider = () => {
    const [loading,setLoading]= useState(false)
    const router=useRouter();
    const handleCategoryLink=(e:React.MouseEvent<HTMLAnchorElement>,categoryTitle:string)=>{
        e.preventDefault();
          setLoading(true);
             router.push(`/category/${categoryTitle}`)
    }
  return (
   <>
   {loading==true && (
      <NextNProgress
      color="#3474d4"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}/>
   )}
  {/* using hard code in this component is good idea because fetching from database causes slow loading at the top of the page and it's not user friendly! */}
   <Carousel  transitionMode="scroll3d"  autoplay=
   {true} wrapAround={true} 
 pauseOnHover={true}
   renderCenterLeftControls={({ nextSlide }) => (
    <button onClick={nextSlide}><div className="swiper-button-prev"></div></button>
  )}
  renderCenterRightControls={({ previousSlide }) => (
    <button onClick={previousSlide}><div className="swiper-button-next"></div></button>
  )}
   >
    <div className="ec-slide-item swiper-slide d-flex ec-slide-1">
                    <div className="container align-self-center">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
                                <div className="ec-slide-content slider-animation">
                                    <h1 className="ec-slide-title"> مجموعه جدید مد فروش تابستان </h1>
                                    {/* <h2 className="ec-slide-stitle">پیشنهاد خرید</h2> */}
                                    <p>حراج لباس های مردانه و زنانه</p>
                                    <a href="#" onClick={(e)=>handleCategoryLink(e,'لباس')} className="btn btn-lg btn-secondary">بازدید</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ec-slide-item swiper-slide d-flex ec-slide-2">
                    <div className="container align-self-center">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
                                <div className="ec-slide-content slider-animation">
                                    <h1 className="ec-slide-title">تازه ترین اقلام غذایی</h1>
                                    {/* <h2 className="ec-slide-stitle">پیشنهاد خرید</h2> */}
                                    <p>طرف قرارداد با فروشگاه های همواره تخفیف</p>
                                    <a href="#" onClick={(e)=>handleCategoryLink(e,'مواد غذایی')} className="btn btn-lg btn-secondary">بازدید</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ec-slide-item swiper-slide d-flex ec-slide-3">
                    <div className="container align-self-center">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
                                <div className="ec-slide-content slider-animation">
                                    <h1 className="ec-slide-title"> مبلمان و لوازم منزل</h1>
                                    {/* <h2 className="ec-slide-stitle">پیشنهاد خرید</h2> */}
                                    <p>بازار مبلمان با نازلترین قیمت</p>
                                    <a href="#" onClick={(e)=>handleCategoryLink(e,'مبلمان')} className="btn btn-lg btn-secondary">بازدید</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ec-slide-item swiper-slide d-flex ec-slide-4">
                    <div className="container align-self-center">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
                                <div className="ec-slide-content slider-animation">
                                    <h1 className="ec-slide-title"> موبایل و لوازم الکترونیکی</h1>
                                    {/* <h2 className="ec-slide-stitle">پیشنهاد خرید</h2> */}
                                    <p>بورس لوازم الکترونیکی نو و کارکرده</p>
                                    <a href="#" onClick={(e)=>handleCategoryLink(e,'الکترونیک')} className="btn btn-lg btn-secondary">بازدید</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                </Carousel>
   </>
  )
}
export default MainSlider