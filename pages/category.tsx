import React from 'react'
import { useState } from 'react'

import { useRouter } from 'next/router'
import NextNProgress from "nextjs-progressbar"


const Category = ({lots,category}:{lots:Array<any>,category:string}) => {
  //to find all of the lots in the category and show the image of last item in category(currentLot[currentLot.length-1]) as category image! 
  let currentLot=lots.filter((el,i)=>{return el.category===category})
 let lastValue=currentLot[currentLot.length-1]
 const [loading,setLoading]=useState(false)
   const router=useRouter()
   const handleClick=async()=>{
    setLoading(true)
    //it is good idea to use await before router.push!/
    await router.push(`/lotsInCategory/${category.toString()}`,`/lotsInCategory/${category.toString()}`)
     setLoading(false)
   }
  return (
    
    <>
    {console.log(loading)}
   
   {
loading==true && (
<NextNProgress
  color="rgb(255, 107, 0)"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true}
/>
  )

   
  
  
   } 
    <div className="category" onClick={handleClick}>
    <div className="img-container">
  <img src={lastValue.image}/>
  </div>
  <div className="title">
  {category}
  </div>
  </div>
    

    </>
  )
}
export default Category;
