import React from 'react'
import LotDetails from '../../pages/lotDetails/[id]'
import Link from "next/link"
 const PredictSearch = ({relatedLots}:{relatedLots:Array<any>}) => {
  return (
    <>
    {console.log(relatedLots)}
   
    <div className="predict-search">
    <div className="container">
      {relatedLots.length ==0 ?(<h2>there is nothing matches your search</h2>):(relatedLots.map((el,i)=>{
     return  <Link href={`../../lotDetails/${el.id}`}>
     
     <div className="row" key={el.id}>
         <div className="col-md-6">
           {el.title}
         </div>
         <div className="col-md-6">
           <img src={el.image}/>
         </div>
       </div>
       </Link>
      
      }))
     }
   </div>
  </div>
    </>
  )
}
export default PredictSearch;