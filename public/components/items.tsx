import React,{useState} from 'react'
import Lot from './lot'



import MainPageLoading from './mainPageLoading';
import LoadingLot from './loadingLot'
const Items = ({lots}:{lots:any[]}) => {
  const[hasMore,setHasmore]=useState(true)
    // const [myLots,setMyLots]=useState(lots.slice(6))
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
            
           
        },2000)
    }
        else{
            setHasmore(false)
        }
      
       
    }

    
    const countOfLoadingComponent=lots.length-currentLots.length
      // define array so that array.length==count 
      let loader:any[]=[]
      for(let i=0;i<countOfLoadingComponent;i++){
        loader[i]=i
      }
      let onLoadingLots:any[]=[]
      //calcute onLoading lots so we should get lots so that is not in currentLots!
      for(let i=0;i<lots.length;i++){
              if(currentLots.includes(lots[i])==false)
              {
                onLoadingLots=[...onLoadingLots,lots[i]]
              }
      }
    return (
        <>
     {console.log(onLoadingLots)}
    <div className="row">
   <>
{currentLots.map((el:any)=>{
                                        return (
                                            <>
                                             <div  key={el.id} className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content" data-animation="fadeIn">
                                         
                                             <Lot lot={el} listStyle={false}/>
                                            
                                             </div>
                                             
                                            </>
                                        ) 
                                        
                                        
                                      
                                    })}

       {onLoadingLots.map((el:any,i:number)=>{
     return(  <>
       
            

                                     <div key={i} className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                                       <LoadingLot lot={el} hasMore={hasMore} fetchData={fetchData} currentLots={currentLots}  listStyle={false}/>



</div>
</>
) 
       })}
       </>
                                    </div>
                                    
                  
        {console.log(lots)}
    
               
                
         </>
    
         )  
}
export default Items;