import React from 'react'
import { useRouter } from "next/router";

import { useState } from "react";

 const MobileNavbarCategory = ({category,changeMobileNavbar,changeLoading}:{category:any,changeMobileNavbar:(...args:any[])=>void,changeLoading:(...args:any[])=>void}) => {
    const [loading,setLoading]=useState(false)
    const [isActiveSubCategories,setIsActiveSubCategories]=useState(false);

    const router=useRouter();

    const handleLinkCategory=async(e:React.MouseEvent<HTMLAnchorElement>)=>{
        e.preventDefault()
        changeLoading(true)
   await router.push(`/category/${category.categoryTitle}`)
  changeLoading(false)
  changeMobileNavbar(false)
    }

    const handleLinkSubCategory=async(e:React.MouseEvent<HTMLAnchorElement>,subCategory:any)=>{
        e.preventDefault()
        changeLoading(true)
        console.log(subCategory)
      await  router.push({pathname:`/category/${category.categoryTitle}`,query:{subCategory:subCategory}})
        changeLoading(false)
        changeMobileNavbar(false)
    }
    return(
        <>
        
        <li className={`${isActiveSubCategories==true && 'active'}`}>
       
       
            
        
            
        {category.subCategories ? ( 
        <>
        <span className="menu-toggle" onClick={()=>{setIsActiveSubCategories(!isActiveSubCategories)}}></span>
        <a onClick={handleLinkCategory}>
            {category.categoryTitle}
            
            </a>
            
           
            <ul className="sub-menu"  style={isActiveSubCategories==true ?{display:'block'}:{display:'none'} }>
                    {
                        category.subCategories.map((el:any,i:number)=>{
                           return(
                                
                           <li key={i} ><a onClick={(e)=>handleLinkSubCategory(e,el)}
                        >{el}</a></li>
                           )
                        })
                    }
                                                
                                            </ul>
        </>
            ):(
                <>
                <a onClick={handleLinkCategory}>
                {category.categoryTitle}
                     </a>
                     </>
            )}
       
        
     
        
                                              </li>
        </>
    )
}
export default MobileNavbarCategory
