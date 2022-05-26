import React from 'react'

const Category = ({lots,category}:{lots:Array<any>,category:string}) => {
  //tamame ajnasi ke dar in category hastan ro peyda kon va axe avalin jens ro (currentLot[0]) bezar be onvan axe category!
  let currentLot=lots.filter((el,i)=>{return el.category===category})
 
  
  return (
    
    <>
    {console.log(currentLot)}
    <div>category</div>
    <img src={currentLot[0].image}/>
    </>
  )
}
export default Category;
