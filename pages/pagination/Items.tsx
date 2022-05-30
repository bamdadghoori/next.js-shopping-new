import React from 'react'
import Link from "next/link"
 const Items = ({currentItems}:{currentItems:any}) => {
   console.log(currentItems)
  //  const ids=currentItems.map((el:any)=>el.id)
  //  const paths=ids.map((el:any)=>{params:{id:el.toString()}})
  //  console.log(paths)
  return (
    <>
    <div className="container">
      
      <div className="row lots">
        {currentItems.map((el:any)=><div key={el.id} className="col-md-3 ">
         
          <Link href={{pathname:`/lotDetails/${el.id.toString()}`,query:{id:el.id.toString(),title:el.title,image:el.image,description:el.description.toString(),rate:el.rating.rate,count:el.rating.count,price:el.price},}} as={`/lotDetails/${el.id.toString()}`}>
          
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
        </Link>
        </div>)}
        
      </div>
    </div>
    </>
  )
}
export default Items;
