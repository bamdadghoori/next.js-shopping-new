import React,{useEffect,useState} from 'react'
import {getCategories,getLotsInCategory} from "../../../utils/firebase"
import axios from 'axios'
import https from "https"
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { GetStaticPaths,GetStaticProps } from 'next';
import CategorySideBar from '../../../public/components/categoryPage/categorySideBar'
import CategoryLayout from '../../../public/components/categoryPage/categoryLayout'
import Lot from '../../../public/components/lot'

// import unorm from '@unorm'
 const Category = ({title,lotsInCategory,category,query}:{title:string,lotsInCategory:any,category:any,query:any}) => {
console.log(title)

const [loading,setLoading]=useState(false);
 
//to stop and start loading
const changeLoading=(loadingState:boolean)=>{
  setLoading(loadingState)
}

const router=useRouter();

console.log(lotsInCategory)  
if(lotsInCategory==undefined||lotsInCategory.length==0){
  console.log("x")
  router.push("/NotFound")}
else if(lotsInCategory!=undefined||lotsInCategory.length!=0){

lotsInCategory=JSON.parse(lotsInCategory);
}

// console.log('هودی بارانی'.localeCompare('تی شرت یقه گرد'))

query=JSON.parse(query)
console.log(query)
             console.log(lotsInCategory)    
          

        category=JSON.parse(category)
      
       console.log(category) 
       const [sortedItems,setSortedItems]=useState([])
useEffect(()=>{
  console.log('x')
  // changeLoading(false)


  setTimeout(()=>changeLoading(false),4000)
  },[loading])
   
  

const[limit,setLimit]:any=useState([0,0])


const handleLoadPage=(min:number,max:number)=>{
setLimit([min,max])
}
const handleRangeChange=(val:any[])=>{
    console.log(val)
    setLimit(val)
}
const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.currentTarget.value)
     if(e.target.id==`firstInput`){
        setLimit([e.target.value,limit[1]])
     }
     else{
        setLimit([limit[0],e.target.value])
     }
}



const changeSelectBox=(e:React.ChangeEvent<HTMLSelectElement>)=>{
console.log('c')

setSortedItems(lotsInCategory)
 const value=e.target.value
router.push({pathname:`/category/${title}`,query:{...query,sort:value}})



}
    
  return (
    <>
    {console.log(sortedItems)}
   
    <section className="ec-page-content section-space-p">
      

        <div className="container">
            <div className="row">
                <div className="ec-shop-rightside col-lg-9 order-lg-last col-md-12 order-md-first margin-b-30">
                   
                    <div className="ec-pro-list-top d-flex">
                        <div className="col-md-6 ec-grid-list">
                            <div className="ec-gl-btn">
                                <button className="btn btn-grid active"><img src="/images/icons/grid.svg" className="svg_img gl_svg" alt=""/></button>
                                <button className="btn btn-list"><img src="/images/icons/list.svg" className="svg_img gl_svg" alt=""/></button>
                            </div>
                        </div>
                        <div className="col-md-6 ec-sort-select">
                            <span className="sort-by">چینش بر اساس</span>
                            <div className="ec-select-inner">
                                <select name="ec-select" id="ec-select" onChange={changeSelectBox}>
                                    <option  value="1" selected={false} disabled={false}>موقعیت</option>
                                    <option value="2" >نام، الف تا ی</option>
                                    <option value="3">نام، ی تا الف</option>
                                    <option value="4">قیمت، کم به زیاد</option>
                                    <option value="5">قیمت، زیاد به کم</option>
                                </select>
                            </div>
                        </div>
                    </div>
                   

                    <div className="shop-pro-content">
                        <div className="shop-pro-inner">
                            <div className="row">

                                {loading==true ? (
                                  <h1>loading</h1>
                                ):( query.available!=undefined && query.available==`false` ? (
                                  <h1>لطفا از نوار سمت راست حداقل یک دسته را انتخاب کنید</h1>
                                ):(
                                 
                                    lotsInCategory.map((el:any)=>{
                                      return(<>
                                      {el.price!=undefined ?(
                                       el.price>=limit[0] && (el.price<=limit[1]  && (
                                          <div key={el.id} className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
                                          <Lot lot={el}/>
                                          </div>
                                       ))
  
                                       
                                      ):(
                                        el.newPrice>=limit[0] &&(el.newPrice<=limit[1] &&(
                                          <div key={el.id} className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
                                          <Lot lot={el}/>
                                          </div>
                                        ) )
                                      )
                                        }
                                      
                                     </>
                                      )
                                  })
                                
                               
                                )) 

                                
                                //to filter some lots by range slider
                               }
                           
                               
                     

                              </div>
                              </div>
                              </div>
                  </div>
               <CategorySideBar query={query} category={category} limit={limit} lotsInCategory={lotsInCategory} handleInputChange={handleInputChange} handleLoadPage={handleLoadPage} handleRangeChange={handleRangeChange} changeLoading={changeLoading}/>
               
             </div>
             </div>
             </section>
             </>
  )
}

// export const getStaticPaths:GetStaticPaths= async()=>{
//     let response:any;
   
//     let paths:Array<any>=[]
//     try{
//           response= await getCategories();
//               //converting to json line below is very important!
//           await response.json()
//         // const data= response.filter((el:any)=>{return el.subCategories==undefined})
//           paths= await response.map((el:any)=>{params:{title:el.categoryTitle}})
         
//     }
//     catch(er){
//   console.log(er)
//     }
     
//     return {
//       paths ,

//       fallback:"blocking", // can also be true or 'blocking'
//     }
//   }
// export const getStaticProps:GetStaticProps=async(context:any)=>{
//   let title=context.params.title;
//    let lotsInCategory:any=[]
//    let category:any=[]
//    let response:any
//   try{
//         response= await getLotsInCategory(context.params.title)
//         lotsInCategory=JSON.stringify(response) 
//         const categories:any=await getCategories();
//         category=categories.filter((el:any)=>el.categoryTitle==title)
//         category=category[0]
//        console.log(category)
//   }
//   catch(er){
//    console.log(er)
   
//   }
  
  
//     return {
//       props: {title:context.params.title,
//         lotsInCategory:lotsInCategory,
//         category:JSON.stringify(category)
//       },
//        revalidate:2
      
//     }
//   }

export async function getServerSideProps(context:any) {
  
    let category:any=[]
    let query:any
    if(context.query!=undefined){
      query=context.query
    }
      //function to sort array
      const sortArray=(property:any,dec:boolean)=>{
        console.log('s')
        console.log(typeof property)
        const compare=(a:any,b:any)=>{
         
          if(typeof a[property] ===`string`){
            
        console.log('string')
            if (dec==false){
          return a[property].localeCompare(b[property])
       
            }
            else{
              return b[property].localeCompare(a[property])
            }   
          }
          else{
            if (dec==false){
              console.log('number')
              return a[property]-b[property]
            
              
                
            }
            else{
              return b[property]-a[property]
              // if(a[property]<b[property]){
              //   return 1
              // }
              // else if(a[property]>b[property]){
              //   return -1
              // }
            
              //   return 0
              
               
            } 
          }
        
      
          
        }
       lotsInCategory=lotsInCategory.sort(compare)
        
      }
      //end of sortArray
    let title=context.params.title;

    let lotsInCategory:any=[]
    try{
        console.log(query)
       lotsInCategory=await getLotsInCategory(title)
 


       //if sort exists (sort is optional part of query)
if(query.sort!=undefined){
  var titles:any[]=[]
  const sort=query.sort;
//some of the lots have price ,and some other have newPrice property and we need to have the same property 
await lotsInCategory.forEach((el:any) => {
   if(el.price==undefined){
     el.price=el.newPrice
    }
});
console.log(lotsInCategory,"lic")
switch (sort){
  case `1`:
        
         break;
      
      case `2`:
        console.log(`2`)
        sortArray(`title`,false)
        break;
        case `3`:
          sortArray(`title`,true)
          break;
          case `4`:
          sortArray(`price`,false)
          break;
          case `5`:
            sortArray(`price`,true)
            break;
     
}
}


if(query.subCategory!=undefined){
  lotsInCategory=lotsInCategory.filter((el:any)=>query.subCategory.includes(el.subCategory)==true)
 }
console.log(lotsInCategory,"lic2")
    
      const categories:any=await getCategories();

     category=categories.filter((el:any)=>el.categoryTitle==title)
    category=category[0]
    
   
    
  
    console.log(lotsInCategory,`lic8`)
    
    }
    catch(er){
        console.log(er)
        console.log(`g`)
       
    }
   
    lotsInCategory=JSON.stringify(lotsInCategory)
  
    category=JSON.stringify(category)
    
    query=JSON.stringify(query) 
     
 

    
  return {
    props: {title,query,lotsInCategory,category} // will be passed to the page component as props
  }
}

export default Category;


