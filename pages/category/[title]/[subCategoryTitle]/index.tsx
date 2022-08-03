import React from 'react'
import { getCategories } from '../../../../utils/firebase';
import { GetStaticPaths,GetStaticProps } from 'next';
import CategoryLayout from '../../../../public/components/categoryPage/categoryLayout';
 const SubCategory= ({subCategory}:{subCategory:string}) => {
    if(subCategory){
        console.log(subCategory)
    }
   
  return (
    <div>index</div>
  )
}
export default SubCategory;

export const   getStaticPaths:GetStaticPaths=async()=> {
let categories:any=[]
let paths:any=[]
let subCategories:any=[]
let filteredCategories:any=[]
try{
          categories=await getCategories()
          categories=await categories.json()
          filteredCategories=categories.filter((el:any)=>el.subCategories)
          paths=filteredCategories.map((category:any)=>{
            category.subCategories.map((subCategory:any)=>{
                params:{
                 
                    title:category;
                    subCategoryTitle:subCategory;
                }
            })
          })
}
catch(er){
    console.log(er)
}
 
    return {
       
      paths:paths ,
      fallback: 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export  const getStaticProps=async(context:any)=> {
    let subCategory=context.params.subCategoryTitle
    return {
    
      props:  {subCategory:subCategory} ,
    }
  }
  SubCategory.Layout=CategoryLayout;