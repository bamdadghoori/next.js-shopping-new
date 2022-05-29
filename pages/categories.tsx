import React from 'react'
import Category from './category'
 const Categories = ({lots}:{lots:Array<any>}) => {
    let categories:Array<any>=[]
    lots.map((el,i)=>{
        console.log(el.category)
        categories[i]=el.category
    })
    categories=categories.filter((el,i)=>{
        return categories.indexOf(el)==i
      })
    //  lots.filter((el,i)=>{
    //       return el.category=categories[i]
    //   })
    // let a:Array<any>=[]
    // categories.forEach((el,i)=>{
    //      let a= lots.filter((element,index)=>element.category==el)
    // })
  return (
      <>
     {/* {console.log(a)} */}
        {console.log(categories)}
      {console.log(lots)}
     
      <div className="row categories">
      <h2 className='categories-title'>Categories</h2>
      {
          categories.map((el,i)=>{
             
           
              
                  
 return(
   <>
 
 <div className='col-md-3'>

 
 <Category lots={lots} category={el}/>
 </div>
 </>
)
          })
      }
      </div>
 </>
  )
}
export default Categories
