import React,{useState} from 'react'
import Lot from './lot'
//@ts-ignore
import InfiniteScroll from 'react-infinite-scroller';
const Items = ({lots}:{lots:any[]}) => {
  const[hasMore,setHasmore]=useState(true)
    const [myLots,setMyLots]=useState(lots.slice(6))
    const itemsPerPage=4;
    const pagesNumber=Math.floor(lots.length/itemsPerPage)
   
    const [currentPage,setCurrentPage]=useState(1)
    const endOfItems=itemsPerPage*currentPage
    const startOfItems=0
    
    const currentLots=lots.slice(startOfItems,endOfItems)
    const fetchData=()=>{
        console.log("x")
        
        if(currentPage<pagesNumber){
        setTimeout(()=>{
           
                setCurrentPage(currentPage+1)
            
           
        },1000)
    }
        else{
            setHasmore(false)
        }
      
       
    }
    return (
        <>
        <InfiniteScroll
  dataLength={currentLots.length} //This is important field to render the next data
  loadMore={fetchData}
  hasMore={hasMore}
  loader={<h4>Loading...</h4>}
 
  
>
    <div className="row">
   
{currentLots.map((el:any)=>{
                                        return (
                                            <>
                                             <div  key={el.id} className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content" data-animation="fadeIn">
                                             <Lot lot={el}/>
                                             </div>
                                            </>
                                        ) 
                                        
                                        
                                      
                                    })}
                                    </div>
                                    
</InfiniteScroll>
        {console.log(lots)}
        {/* {lots.map((el:any)=>{
                                        return  <Lot lot={el} key={el.id}/>
                                        
                                        
                                      
                                    })} */}
               
                
         </>
    
         )  
}
export default Items;