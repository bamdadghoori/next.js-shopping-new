import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faClose } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect,useRef } from 'react';
import { useRouter  } from 'next/router';
import NextNProgress from "nextjs-progressbar"
import PredictSearch from './predictSearch';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getLotsInCategory,getCategories } from '../../utils/manualData';
 const SearchBox = ({searchText,demoLots,handleSearch,changeShowSearchModal,changeSearchText}:{searchText:string,demoLots:any[],handleSearch:(...args:any)=>void,changeShowSearchModal:(...args:any)=>void,changeSearchText:(...args:any)=>void}) => {
  console.log(demoLots)

        // let categories:any=[]
  //to get categories
  let categories:any=[]
    const getCategoryList=async()=>{
       categories=await getCategories()
    }

   

    
    
    const[includerCategories,setIncluderCategories]:any[]=useState([])
    const [loading,setLoading]=useState(false)
     
    const router=useRouter();
 
         //focusRef uses to set autofocus for search input
    const focusRef:any=useRef(null);
  

   const getIncluderCategories=async()=>{
     // to get categories which include the lot in the search text
   await getCategoryList()
    let i=0;
    let filteredCategories:any[]=[]
    // if(Array.isArray(categories)){

    // }
    console.log(categories)
  categories.forEach(async(el:any)=>{
    const response:any= await getLotsInCategory(el.categoryTitle)
    
   const filteredDemoLots:any[]=demoLots.filter((dl:any)=>{
    console.log(response)
    console.log(dl)
    return response.find((r:any)=> r.id==dl.id)!=undefined
   })
   console.log(filteredDemoLots)
   if(filteredDemoLots!=undefined && filteredDemoLots.length>0){
    filteredCategories[i]=el
   setIncluderCategories([...filteredCategories])
   console.log(includerCategories)
   i++;
   
  }

 
   
    
  })
  }
 
  
    
  
 
   


 useEffect(()=>{
  if(focusRef.current){
    focusRef.current.focus()
  }
  
   getIncluderCategories()
 },[searchText])


 


const handleSearchWithCategory=(e:React.MouseEvent<HTMLDivElement>,category:any)=>{
      e.preventDefault();
     setLoading(true)
    
     router.push({pathname:'/search/',query:{s:searchText,title:category.categoryTitle}})
     changeShowSearchModal(false)
}


  return (
      <>
     {console.log(includerCategories)}
     {
       loading&& (
        <NextNProgress
        color="#3474d4"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
       )
     }
  <div className='search-box'  
  >
  <div className="header-search"
 
  >
                                <form className="ec-btn-group-form" action="#">
                                    <input style={{'backgroundColor':'#fff'}} onChange={changeSearchText} className="form-control" value={searchText} placeholder="جستجو بر اساس نام محصول و یا دسته بندی" type="text"
                                   
                                   
                                    ref={focusRef}/>
                                  
                                    <button onClick={handleSearch} className="submit"><img src="/images/icons/search.svg" className="svg_img header_svg" alt="" /></button>
                                    {demoLots.length>0 && (
                                      <div className='row button-container'>
                                        <button className="ec-close" onClick={()=>{changeShowSearchModal(false)}}>×</button>
                                        </div>
                                    )  
                                  }
                                </form>
                            </div>
                            {demoLots.length>0 && (
                            <div className="row lots-in-search-box" style={{'width':'fitContent'}}>
                             
                            {demoLots.map((el:any)=>{
                              return  <div key={el.id} className="col-md-6">
                                    <div className="lot-in-search-box" onClick={()=>{
                                      setLoading(true)
                                      router.push(`/lotDetails/${el.id}`)
                                      changeShowSearchModal(false)
                                    }}> 
                                      <div className="row">
                                      <div className="col-md-5">
                                        <img src={el.imgUrl}/>
                                        </div>
                                        <div className="col-md-7 ">
                                          <div className="lot-title">
                                        {el.title}
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                              </div>
                            })}
                          
                            </div>
                            )}
                           

                                  {demoLots.length>0 &&
                                   includerCategories.map((el:any,i:number)=>{
                                    return (
                                      <>
                                      <div key={i} className="search-categories">
                                      <div className="search-category"  onClick={(e)=>handleSearchWithCategory(e,el)} >
                                        
                                        <div className='img-container'>
                                        
                                        <img src="/images/icons/search.svg" className="svg_img header_svg" alt="" />
                                        
                                        </div>
                                        <div >در دسته ی <span style={{'color':'#3474d4'}}>{el.categoryTitle}</span></div>
                                      </div>
                                      </div>
                                      </>
                                    )
                                    
                                    
                                   }
                                  )
                                  }
                              
                           


                          
            
  </div>
 
      </>
    
  )
}
export default SearchBox
