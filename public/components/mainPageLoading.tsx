import React from 'react'
import ReactLoading from 'react-loading'

 const MainPageLoading = ({count}:{count:number}) => {
   //  define array so that array.length==count 
    let loader:any[]=[]
    for(let i=0;i<count;i++){
      loader[i]=i
    }
  return (
   <>
   {console.log(count)}
  
  
<div className="row">

{loader.map((el:any,i:number)=>{
     return (<> 
    
    <div key={i} className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
    {/* <ReactLoading type='spin' color='#3474d4'  /> */}
    <span className='loader_img' style={{'height':'20vh'}}></span>
        </div>
 </>) 
    
 })}

 
</div>
   </>
  )
}
export default MainPageLoading
