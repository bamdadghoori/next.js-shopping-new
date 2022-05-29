import React from 'react'
import { useState,useEffect } from 'react'
 const PaginationButtons = ({paginationButtons,currentPage,changePage,prevPage,nextPage}:{paginationButtons:any,currentPage:any,changePage:(...args: any[]) => void,prevPage:(...args:any[])=>void,nextPage:(...args:any[])=>void}) => {
   console.log(paginationButtons)
  
  return (
   <>
   <div  className='pagination-button'>
     <div className="btn btn-primary btn-prev" onClick={()=>{prevPage(currentPage)}}>
     &#60;
     </div>
   {paginationButtons.map((el:any)=>{
     
   return(
    
    <button key={el.id} className={ el==currentPage ? "active btn btn-primary":"btn btn-primary"  }onClick={()=>changePage(el)} >
    {el}
  </button>
 
   )  
    
   })}
    <div className="btn btn-primary btn-next" onClick={()=>{nextPage(currentPage)}}>&#62;</div>
    </div>
   </>
  )
}
export default PaginationButtons;
