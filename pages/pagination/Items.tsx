import React from 'react'

import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'
import { useState } from 'react'
 const Items = ({currentItems}:{currentItems:any}) => {
  const [loading,setLoading]=useState(false)

   const router=useRouter()
   const handleClick=(e:React.MouseEvent<HTMLElement>)=>{
     setLoading(true)
     const id=e.currentTarget.id
       router.push(`/lotDetails/${id}`)
   }
 
  return (
    <>
     {loading==true && (
      <NextNProgress
      color="rgb(255, 107, 0)"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
    />
    )}
    <div className="container">
      
      <div className="row lots">
        {currentItems.map((el:any)=><div key={el.id} id={el.id} onClick={(e)=>handleClick(e)} className="col-md-3 ">
         
         
          
          <div className="lot">
            
        <div className="img-container">
          <img src={el.image}/>
        </div>
        <div className="title">
          {el.title}
        </div>
        <div className="price">
          <span className="price-title">Price:</span>
          <span>{el.price}</span>
          
        </div>
        </div>
     
        </div>)}
        
      </div>
    </div>
    </>
  )
}
export default Items;
