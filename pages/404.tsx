import React from 'react'
import { useState } from 'react'
import {useRouter} from 'next/router'
import NextNProgress from 'nextjs-progressbar'
 const NotFound = () => {
    const [loading,setLoading]=useState(false)
    const router=useRouter()
    const changeLoading=()=>{
        setLoading(true)
    }
  return (
    <>
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
    <section className="ec-404-error-page-02">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center">
                    

                    <h1 className="main-title text-center">404</h1>
                    <h3 className="sub-title text-center">به نظر شما گم شده اید</h3>

                    <p className="desc-content text-center">صفحه ای که به دنبال آن هستید در دسترس نیست!</p>

                    <a className="link-404" href="#" onClick={()=>{
                         changeLoading();
                        router.push('/')
                        }}>بازکشت به صفحه اصلی </a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
export default NotFound;
