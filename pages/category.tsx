import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NextNProgress from "nextjs-progressbar"


const Category = ({lots,category}:{lots:Array<any>,category:string}) => {
  //tamame ajnasi ke dar in category hastan ro peyda kon va axe akharin jens ro (currentLot[currentLot.length-1]) bezar be onvan axe category!
  let currentLot=lots.filter((el,i)=>{return el.category===category})
 let lastValue=currentLot[currentLot.length-1]
 const [loading,setLoading]=useState(false)
   const router=useRouter()
   const handleClick=async()=>{
    setLoading(true)
    //router push ro ghablesh await bezani khoobe!/
    await router.push(`/lotsInCategory/${category.toString()}`,`/lotsInCategory/${category.toString()}`)
     setLoading(false)
   }
  return (
    
    <>
    {console.log(loading)}
    {/* <Link href={{pathname:`/lotsInCategory/${category.toString()}`, query:{category:category}}} as={`/lotsInCategory/${category.toString()}`}> */}
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
    
    {/* </Link> */}
    </>
  )
}
export default Category;
