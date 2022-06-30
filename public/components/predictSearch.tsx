import React from 'react'
import LotDetails from '../../pages/lotDetails/[id]'
import NextNProgress from 'nextjs-progressbar'
import { useState } from 'react'
import { useRouter } from 'next/router'
 const PredictSearch = ({relatedLots,handleClose,handleLoading}:{relatedLots:Array<any>,handleClose:(...args:any[])=>any,handleLoading:(...args:any[])=>void}) => {
   const [loading,setLoading]=useState(false)
   const router=useRouter()
   const handleClick=(e:React.MouseEvent<HTMLElement>)=>{
    e.preventDefault();
     setLoading(true)
     handleLoading();
        handleClose()
    const id= e.currentTarget.id;
     router.push(`/lotDetails/${id}`)
   }
  return (
    <>
    {console.log(loading)}
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
      <div className="row">
      {relatedLots.length ==0 ?(<h2>there is nothing matches your search</h2>):(relatedLots.map((el,i)=>{
     return   <div className="col-md-6" key={el.id} id={el.id} onClick={handleClick}>
     
    
         <div >
           {el.title}
         </div>
         <div>
           <img src={el.image}/>
         </div>
       </div>
       
      
      }))
     }
     </div>
   </div>
  </div>
    </>
  )
}
export default PredictSearch;