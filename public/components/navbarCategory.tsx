
import { useRouter } from "next/router";

import { useState } from "react";
const NavbarCategory=({category,changeLoading}:{category:any,changeLoading:(...args:any[])=>void})=>{
    const [loading,setLoading]=useState(false)
    const router=useRouter();

    const handleLinkCategory=async(e:React.MouseEvent<HTMLAnchorElement>)=>{
        e.preventDefault()
        changeLoading(true)
   await router.push(`/category/${category.categoryTitle}`)
  changeLoading(false)
    }

    const handleLinkSubCategory=async(e:React.MouseEvent<HTMLAnchorElement>,subCategory:any)=>{
        e.preventDefault()
        changeLoading(true)
        console.log(subCategory)
      await  router.push(`/category/${category.categoryTitle}/${subCategory}/`)
        changeLoading(false)
    }
    return(
        <>
        
        <li className="dropdown position-static">
        <img className="category-img" src={category.imgUrl}/>
       
            
        
            
        {category.subCategories ? ( 
        <>
        <a onClick={handleLinkCategory}>
            {category.categoryTitle}
            <i className="ecicon eci-angle-left"></i>
            </a>
            
           
            <ul className="sub-menu sub-menu-child">
                    {
                        category.subCategories.map((el:any,i:number)=>{
                           return(
                                
                           <li key={i}><a onClick={(e)=>handleLinkSubCategory(e,el)}
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
export default NavbarCategory;