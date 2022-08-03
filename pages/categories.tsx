import React from 'react'
import Category from './oldcategory'
 const Categories = ({lots}:{lots:Array<any>}) => {
    let categories:Array<any>=[]
    lots.map((el,i)=>{
      
        categories[i]=el.category
    })

    categories=categories.filter((el,i)=>{
        return categories.indexOf(el)==i
      })
   
  return (
      <>
     
        
     
      <div className="row categories">
      <h2 className='categories-title'>Categories</h2>
      {
          categories.map((el,i)=>{
             
           
              
                  
 return(
 
 
 <div key={el.id} className='col-md-3'>

 
 <Category lots={lots} category={el}/>
 </div>
 
)
          })
      }
      </div>
 </>
  )
}
export default Categories
