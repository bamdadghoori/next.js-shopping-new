import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'
import { useState } from 'react'
 const Items = ({currentItems}:{currentItems:any}) => {
  const [loading,setLoading]=useState(false)
   console.log(currentItems)
   const router=useRouter()
   const handleClick=(e:React.MouseEvent<HTMLElement>)=>{
     setLoading(true)
     const id=e.currentTarget.id
       router.push(`/lotDetails/${id}`)
   }
  //  const ids=currentItems.map((el:any)=>el.id)
  //  const paths=ids.map((el:any)=>{params:{id:el.toString()}})
  //  console.log(paths)
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
         
          {/* <Link href={{pathname:`/lotDetails/${el.id.toString()}`,query:{id:el.id.toString(),title:el.title,image:el.image,description:el.description.toString(),rate:el.rating.rate,count:el.rating.count,price:el.price},}} as={`/lotDetails/${el.id.toString()}`}> */}
          
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
        {/* </Link> */}
        </div>)}
        
      </div>
    </div>
    </>
  )
}
export default Items;
