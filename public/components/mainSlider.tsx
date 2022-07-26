import React from 'react'
import Carousel from 'nuka-carousel'

 const MainSlider = () => {
  return (
   <>
  
   <Carousel  transitionMode="scroll3d"  autoplay=
   {true} wrapAround={true}>
    <div className="ec-slide-item swiper-slide d-flex ec-slide-1">
                    <div className="container align-self-center">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
                                <div className="ec-slide-content slider-animation">
                                    <h1 className="ec-slide-title"> مجموعه جدید مد فروش تابستان </h1>
                                    <h2 className="ec-slide-stitle">پیشنهاد خرید</h2>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                                    <a href="#" className="btn btn-lg btn-secondary">ارسال</a>
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
                                    <h1 className="ec-slide-title"> مجموعه جدید مد فروش تابستان </h1>
                                    <h2 className="ec-slide-stitle">پیشنهاد خرید</h2>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                                    <a href="#" className="btn btn-lg btn-secondary">ارسال</a>
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