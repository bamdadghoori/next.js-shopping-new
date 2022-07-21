import React from 'react'
import  Items  from './items'
 const Premiers = ({lots}:{lots:Array<any>}) => {
    {console.log(lots)}
    const offProducts:any[]=lots.filter((el:any)=>{
      return  el.off==true
    })

    
  return (
   <>
   <Items lots={offProducts}/>
   </>

     )  
  }     
  export default Premiers; 