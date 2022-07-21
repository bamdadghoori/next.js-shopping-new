import React from 'react'
import Lot from './lot'
const Items = ({lots}:{lots:any[]}) => {
  
    return (
        <>
        {console.log(lots)}
        <section className="section ec-product-tab section-space-p">
            <div className="container">
         <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h2 className="ec-bg-title">کالکشن برتر ما</h2>
                            <h2 className="ec-title">کالکشن برتر ما</h2>
                            <p className="sub-title"> مرور مجموعه ای از محصولات برتر </p>
                        </div>
                    </div>
    
                   
                    {/* <div className="col-md-12 text-center">
                        <ul className="ec-pro-tab-nav nav justify-content-center">
                            <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#tab-pro-for-all">برای همه</a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab-pro-for-men">برای مردان</a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab-pro-for-women">برای زنان</a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab-pro-for-child">برای کودکان</a></li>
                        </ul>
                    </div> */}
                   
                
                </div>
                <div className="row">
                    <div className="col">
                        <div className="tab-content">
                          
                            <div className="tab-pane fade show active" id="tab-pro-for-all">
                                <div className="row">
                                    {lots.map((el:any)=>{
                                        return  <Lot lot={el} key={el.id}/>
                                        
                                        
                                      
                                    })}
                               <div className="col-sm-12 shop-all-btn"><a href="shop-left-sidebar-col-3.html">تمامی کالکشن‌های فروشگاه</a>
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
export default Items;