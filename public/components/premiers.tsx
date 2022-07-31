import React from 'react'
import  Items  from './items'
import AppContext from './context'
import { useRef,useEffect } from 'react'
import { useContext } from 'react';
 const Premiers = ({lots,setOffset}:{lots:Array<any>,setOffset:(...args:any)=>void}) => {
    //@ts-ignore
   
    {console.log(lots)}
    const myRef=useRef(null);
    const offProducts:any[]=lots.filter((el:any)=>{
      return  el.off==true
    })
    let offset;
     useEffect(()=>{
       
        if (myRef.current){
            //@ts-ignore
          offset  = myRef.current.offsetTop
          setOffset(offset)

        }
        

     },[])
    
  return (
   <>
   <section  id="premiers" className="section ec-product-tab section-space-p">
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
                <div className="row" >
                    <div className="col">
                        <div className="tab-content">
                          
                            <div className="tab-pane fade show active" id="tab-pro-for-all">
                                <div   className="row" >
                                    <Items lots={offProducts}/>
                               <div  ref={myRef} className="col-sm-12 shop-all-btn"><a href="shop-left-sidebar-col-3.html">تمامی کالکشن‌های فروشگاه</a>
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
  export default Premiers; 