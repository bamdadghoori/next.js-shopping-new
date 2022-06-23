import React from 'react'
import { useEffect,useState } from 'react'
 const CountDownTimer = () => {
   const [timer,setTimer]=useState(5);
  
   useEffect(()=>{
     //timeInterval function nist moteghayer hast va nabayed ()=>{} jelosh bashe
     //@ts-ignore
const timeInterval=timer>1 && (setInterval(()=>{ setTimer(timer-1) , console.log("y")},1000))
    
    
     
       timeInterval
        //@ts-ignore
      //  clearInterval(timeInterval)
    
    
    
  
   
       return ()=>{
         
          //@ts-ignore
          clearInterval(timeInterval)
       console.log("X")
         
        
       }
   },[timer])
  return (
    <div>{timer}</div>
  )
}
export default CountDownTimer
