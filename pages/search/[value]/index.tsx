import React from 'react'
import axios from 'axios'
import https from "https"

import Lots from '../../lots'
 const SearchResult = ({data,value}:{data:Array<any>,value:string}) => {

     data=data.filter((el,i)=>{
         return el.title.toUpperCase().includes(value.toUpperCase())||el.category.toUpperCase().includes(value.toUpperCase())||el.description.toUpperCase().includes(value.toUpperCase())
     })
  return (
      <>
      
    {data.length==0 ? (
          <div className='not-match-search'>There is nothing matches your search!</div>

    ):(
        <Lots lots={data}/>
    )}
    </>
  )
}

axios.defaults.httpsAgent=new https.Agent({
    rejectUnauthorized:false,
  })
export const getServerSideProps=async(context:any)=>{
  
    let data=[]
    try{
        const response=await axios.get(`https://fakestoreapi.com/products`)
         data=response.data
    }
    catch(er){

    }
    return{
        props:{data,value:context.params.value}
    }

}
export default SearchResult;
