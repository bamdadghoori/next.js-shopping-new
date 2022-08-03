import React,{useEffect} from 'react'
import {getCategories,getLotsInCategory} from "../../../utils/firebase"
import axios from 'axios'
import https from "https"
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { GetStaticPaths,GetStaticProps } from 'next';
import CategoryLayout from '../../../public/components/categoryPage/categoryLayout'
 const Category = ({title}:{title:string}) => {
  const lotsInCategory=useSelector((state:RootState)=>state.lots.filter((el:any)=>el.category==title))
const router=useRouter();

useEffect(()=>{
  
  if(lotsInCategory==undefined||lotsInCategory.length==0){
    console.log("x")
    router.push("/NotFound")
  }
else if(lotsInCategory[0].subCategory!=undefined){
  console.log("y")
     router.push("/NotFound")
}
},[])
    console.log(lotsInCategory)
  return (
    <div>index</div>
  )
}

export const getStaticPaths:GetStaticPaths= async()=>{
    let response:any;
   
    let paths:Array<any>=[]
    try{
          response= await getCategories();
              //coverting to json line below is very important!
          await response.json()
        // const data= response.filter((el:any)=>{return el.subCategories==undefined})
          paths= await response.map((el:any)=>{params:{title:el.categoryTitle}})
         
    }
    catch(er){
  console.log(er)
    }
     
    return {
      paths ,

      fallback:"blocking", // can also be true or 'blocking'
    }
  }
export const getStaticProps:GetStaticProps=async(context:any)=>{
   
   let lotsInCategory:any=[]

   let response:any
  try{
        // response= await getLotsInCategory(context.params.title)
        // lotsInCategory=JSON.stringify(response) 
  }
  catch(er){
   console.log(er)
   
  }
  
  
    return {
      props: {title:context.params.title,
      },
       revalidate:2
      
    }
  }
export default Category;
Category.Layout=CategoryLayout

