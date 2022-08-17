// import React,{useState,useEffect} from 'react'
// import { getCategories,getLotsInCategory } from '../../../../utils/firebase';
// import CategorySideBar from '../../../../public/components/categoryPage/categorySideBar';


// import { GetStaticPaths,GetStaticProps } from 'next';
// import { useRouter } from 'next/router'
// import { useSelector } from 'react-redux'
// import { RootState } from '../../../../redux/store'
// import Lot from '../../../../public/components/lot';

 
 



// //@ts-ignore

//  const SubCategory= ({subCategory,lotsInSubCategory,category}:{subCategory:any,lotsInSubCategory:any,category:any}) => {
//   category=JSON.parse(category)
//   subCategory=JSON.parse(subCategory)
//     {console.log(subCategory)}
//     lotsInSubCategory=JSON.parse(lotsInSubCategory)
//     {console.log(lotsInSubCategory)}
   
        

//     const router=useRouter();
  
 
//        useEffect(()=>{
//  console.log(lotsInSubCategory)
//         if(lotsInSubCategory==undefined||lotsInSubCategory.length==0){
//           console.log("x")
//           router.push("/NotFound")
//         }
    
//       },[])

//   const[limit,setLimit]:any=useState([0,0])
   
//   const handleLoadPage=(min:number,max:number)=>{
//     setLimit([min,max])
//     }
//     const handleRangeChange=(val:any[])=>{
    
//         console.log(val)
//         setLimit(val)
//     }
//     const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
//         console.log(e.currentTarget.value)
//          if(e.target.id==`firstInput`){
//             setLimit([e.target.value,limit[1]])
//          }
//          else{
//             setLimit([limit[0],e.target.value])
//          }
//     }

   

//   return (
//     <>
   
//   {console.log(limit)}
 
//       <section className="ec-page-content section-space-p">
      

//         <div className="container">
//             <div className="row">
//                 <div className="ec-shop-rightside col-lg-9 order-lg-last col-md-12 order-md-first margin-b-30">
                   
//                     <div className="ec-pro-list-top d-flex">
//                         <div className="col-md-6 ec-grid-list">
//                             <div className="ec-gl-btn">
//                                 <button className="btn btn-grid active"><img src="/images/icons/grid.svg" className="svg_img gl_svg" alt=""/></button>
//                                 <button className="btn btn-list"><img src="/images/icons/list.svg" className="svg_img gl_svg" alt=""/></button>
//                             </div>
//                         </div>
//                         <div className="col-md-6 ec-sort-select">
//                             <span className="sort-by">چینش بر اساس</span>
//                             <div className="ec-select-inner">
//                                 <select name="ec-select" id="ec-select">
//                                     <option selected={false} disabled={false}>موقعیت</option>
//                                     <option value="1"> مرتبط</option>
//                                     <option value="2">نام، الف تا ی</option>
//                                     <option value="3">نام، ی تا الف</option>
//                                     <option value="4">قیمت، کم به زیاد</option>
//                                     <option value="5">قیمت، زیاد به کم</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
                   

//                     <div className="shop-pro-content">
//                         <div className="shop-pro-inner">
//                             <div className="row">
//                             {
//                                 //to filter some lots by range slider
                                
//                                 lotsInSubCategory.map((el:any)=>{
//                                     return(<>
//                                     {el.price!=undefined ?(
                                      
//                                      el.price>=limit[0] && (el.price<=limit[1]  && (
//                                       <>
//                                       {console.log(el)}
//                                         <div key={el.id} className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
                                       
//                                         <Lot lot={el}/>
//                                         </div>
//                                         </>
//                                      ))

                                     
//                                     ):(
//                                       el.newPrice>=limit[0] &&(el.newPrice<=limit[1] &&(
//                                         <>
                                        
//                                         <div key={el.id} className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
                                           
//                                         <Lot lot={el}/>
//                                         </div>
//                                         </>
//                                       ) )
//                                     )
//                                       }
                                    
//                                    </>
//                                     )
//                                 })}
                              
                                  
//                                 </div>
                               
                     

                              
//                               </div>
//                               </div>
//                   </div>
//                <CategorySideBar category={category} limit={limit} handleLoadPage={handleLoadPage} lotsInCategory={lotsInSubCategory} handleInputChange={handleInputChange} handleRangeChange={handleRangeChange}/>
               
//              </div>
//              </div>
//              </section>
//     </>
   
//   )
// }
// export default SubCategory;

// // export const   getStaticPaths:GetStaticPaths=async()=> {
// // let categories:any=[]
// // let paths:any=[]
// // let subCategories:any=[]
// // let filteredCategories:any=[]
// // try{
// //           categories=await getCategories()
// //           categories=await categories.json()
// //           filteredCategories=categories.filter((el:any)=>el.subCategories!=undefined)
// //           paths=filteredCategories.map((category:any)=>{
// //             // category.subCategories.map((subCategory:any)=>{
// //                 params:{
// //                     subCategoryTitle:category.subCategories;
// //                     title:category.categoryTitle;
                   
// //                 }
// //             // })
// //           })
// // }
// // catch(er){
// //     console.log(er)
// // }
 
// //     return {
       
// //       paths:paths ,
// //       fallback: 'blocking'
// //     }
// //   }
  
  
// //   export  const getStaticProps=async(context:any)=> {
// //     // console.log(context.params.subCategoryTitle)
// //     let category:any=[]
// //     let subCategory=context.params.subCategoryTitle
// //     let title=context.params.title;
// //     let lotsInSubCategory:any=[]
// //     let lotsInCategory:any[]=[]
// //     try{
// //         console.log(subCategory)
// //        lotsInCategory=await getLotsInCategory(title)
// //       lotsInSubCategory=lotsInCategory.filter((el:any)=>subCategory.includes(el.subCategory)==true)
// //       const categories:any=await getCategories();
// //      category=categories.filter((el:any)=>el.categoryTitle==title)
// //      category=category[0]
// //     // console.log(category)
// //     }
// //     catch(er){
// //         console.log(er)
// //     }
// //     // console.log(JSON.stringify(lotsInSubCategory))
// //     return {
    
// //       props:  {subCategory:JSON.stringify(subCategory),
// //         lotsInSubCategory:JSON.stringify(lotsInSubCategory),
// //         category:JSON.stringify(category)
// //     } ,
// //     }
   
    
// //   }


// export async function getServerSideProps(context:any) {
//    console.log(context.params.subCategoryTitle)
//     let category:any=[]
//     let subCategory=context.params.subCategoryTitle
//     let title=context.params.title;
//     let lotsInSubCategory:any=[]
//     let lotsInCategory:any[]=[]
//     try{
//         console.log(subCategory)
//        lotsInCategory=await getLotsInCategory(title)
//       lotsInSubCategory=lotsInCategory.filter((el:any)=>subCategory.includes(el.subCategory)==true)
//       const categories:any=await getCategories();
//      category=categories.filter((el:any)=>el.categoryTitle==title)
//      category=category[0]
//     // console.log(category)
//     }
//     catch(er){
//         console.log(er)
//     }
//   return {
//     props: {subCategory,lotsInSubCategory,category}, // will be passed to the page component as props
//   }
// }