import React from 'react'
import Head from 'next/head'
import { useEffect } from 'react'
const About = () => {
  useEffect(()=>{
   //dastoor return zamani anjam mishe ke kol eleman haye safe load shode
    return()=>{
     console.log("x")
    }
    
  },[])
  return (
    <div>
    {/* <Head>
      <title>about</title>
    </Head> */}
    
    <div>about</div>

    
    </div>
  )
}
export default About

