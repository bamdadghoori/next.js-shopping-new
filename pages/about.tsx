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
    <div className="about">
    {/* <Head>
      <title>about</title>
    </Head> */}
    
    <p>Created by me ((Bamdad Saremi)).You can see my github: <a href='https://github.com/bamdadghoori'>https://github.com/bamdadghoori<br/> </a>And You also can see my linkedIn page:<a href='https://www.linkedin.com/in/bamdad-saremi-342254217/'> https://www.linkedin.com/in/bamdad-saremi-342254217/</a></p>
 
    
    </div>
  )
}
export default About

