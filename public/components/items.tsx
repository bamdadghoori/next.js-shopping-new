import React from 'react'
import Lot from './lot'
const Items = ({lots}:{lots:any[]}) => {
  
    return (
        <>
        {console.log(lots)}
        {lots.map((el:any)=>{
                                        return  <Lot lot={el} key={el.id}/>
                                        
                                        
                                      
                                    })}
               
                
         </>
    
         )  
}
export default Items;