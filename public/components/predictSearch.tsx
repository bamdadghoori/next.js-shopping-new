import React from 'react'
import LotDetails from '../../pages/lotDetails/[id]'
import NextNProgress from 'nextjs-progressbar'
import { useState } from 'react'
import { useRouter } from 'next/router'
 const PredictSearch = ({relatedLots,handleClose}:{relatedLots:Array<any>,handleClose:(...args:any[])=>any}) => {
   const [loading,setLoading]=useState(false)
   const router=useRouter()
   const handleClick=(e:React.MouseEvent<HTMLElement>)=>{
     setLoading(true)
        handleClose()
    const id= e.currentTarget.id;
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
    {console.log(relatedLots)}
   
    <div className="predict-search">
    <div className="container">
      {relatedLots.length ==0 ?(<h2>there is nothing matches your search</h2>):(relatedLots.map((el,i)=>{
     return   <div className="row" key={el.id} id={el.id} onClick={handleClick}>
     
    
         <div className="col-md-6">
           {el.title}
         </div>
         <div className="col-md-6">
           <img src={el.image}/>
         </div>
       </div>
       
      
      }))
     }
   </div>
  </div>
    </>
  )
}
export default PredictSearch;