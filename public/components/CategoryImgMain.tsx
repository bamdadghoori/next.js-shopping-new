import React from 'react'
import { useEffect,useState } from 'react'
 const CategoryImgMain = ({category,stopLoading,loading}:{category:any,stopLoading:(...args:any[])=>void,loading:boolean}) => {
    // useEffect(()=>{
    //  stopLoading();
    // },[])
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
  return (
   <>
   
      <div className="col-lg-9">
        
                    <div className="tab-content">
                  
                 <div className="tab-pane fade show active" id="tab-cat-1">
                            <div className="row">
                                   
<img src={loading==true ? ("../images/loading.gif"):(category.bigImg)} onLoad={handleLoad} alt="" className={loading==true ? 'loading-category-img':' '} /  >
                                
                                
                            </div>
                            <span className="panel-overlay">
                                <a href="shop-left-sidebar-col-3.html" className="btn btn-primary">مشاهده همه</a>
                            </span>
                        </div>
                   
                        
                        
                       
                        
                    </div>
                    
                </div>
   </>
  )
}
export default CategoryImgMain;