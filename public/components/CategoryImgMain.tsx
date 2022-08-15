import React from 'react'
import { useEffect,useState } from 'react'
import {useRouter} from 'next/router'
import NextNProgress from 'nextjs-progressbar'
 const CategoryImgMain = ({category,stopLoading,loading}:{category:any,stopLoading:(...args:any[])=>void,loading:boolean}) => {
  console.log(category.subCategories)
    // useEffect(()=>{
    //  stopLoading();
    // },[])
    const router=useRouter();
    const [progressLoading,setProgressLoading]=useState(false)
  const [src,setSrc]=useState("../images/loading-gif.gif")
  const [imgClass,setImgClass]=useState("loading-category-img")
    {console.log(loading)}
   //@ts-ignore
const handleLoad=(e)=>{

   stopLoading()

    
}
//@ts-ignore
const handleLoadStart=(e)=>{
    console.log("c")
    e.target.src="../images/loading-gif.gif"
}

const handleCategoryClick=(e:React.MouseEvent<HTMLAnchorElement>,category:any)=>{
 e.preventDefault();
 setProgressLoading(true)
 router.push(`/category/${category.categoryTitle}`)
 
}

// const handleSubCategoryClick=(e:React.MouseEvent<HTMLAnchorElement>,subCategory:string)=>{
//   e.preventDefault();
//   setProgressLoading(true)
//   router.push(`/category/${category.categoryTitle}/${subCategory}`)
  
// }
  return (
   <>
   {progressLoading==true && (
     <NextNProgress
     color="#3474d4"
     startPosition={0.3}
     stopDelayMs={200}
     height={3}
     showOnShallow={true}
   />
   )}
      <div className="col-lg-9">
        
                    <div className="tab-content">
                  
                 <div className="tab-pane fade show active" id="tab-cat-1">
                            <div className="row">
                                   
<img src={loading==true ? ("../images/loading.gif"):(category.bigImg)} onLoad={handleLoad} alt="" className={loading==true ? 'loading-category-img':' '} /  >
                                
                                
                            </div>
                            {/* {category.subCategories!=undefined ?(
                            <>
                             {console.log(category.subCategories)}
                             <span className="panel-overlay">
                             {/* <a   href="shop-left-sidebar-col-3.html" className="btn btn-primary">fdsf</a>
                             <a   href="shop-left-sidebar-col-3.html" className="btn btn-primary">fdsf</a>
                             <a   href="shop-left-sidebar-col-3.html" className="btn btn-primary">fdsf</a> */}
                             
                           
                            
                              
                                 
                                
                                 
                            
                              <span className="panel-overlay">
                              <a onClick={(e)=>handleCategoryClick(e,category)} href="#" className="btn btn-primary">مشاهده همه</a>
                          </span>
                          
                            )
                           
                            
                           
                        </div>
                   
                        
                        
                       
                        
                    </div>
                    
                </div>
   </>
  )
}
export default CategoryImgMain;