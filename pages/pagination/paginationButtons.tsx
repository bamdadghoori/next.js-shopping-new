import React from 'react'
 const PaginationButtons = ({paginationButtons,currentPage,changePage,prevPage,nextPage}:{paginationButtons:any,currentPage:any,changePage:(...args: any[]) => void,prevPage:(...args:any[])=>void,nextPage:(...args:any[])=>void}) => {
 
  
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
