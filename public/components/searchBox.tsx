import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faClose } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect,useRef } from 'react';
import { useRouter  } from 'next/router';
import NextNProgress from "nextjs-progressbar"
import PredictSearch from './predictSearch';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getLotsInCategory } from '../../utils/manualData';
 const SearchBox = ({searchText,demoLots,handleSearch,changeShowSearchModal,changeSearchText}:{searchText:string,demoLots:any[],handleSearch:(...args:any)=>void,changeShowSearchModal:(...args:any)=>void,changeSearchText:(...args:any)=>void}) => {
  console.log(demoLots)

  //to get from redux
    const categories=useSelector((state:RootState)=>state.persistedReducer.categories)

   

    
    
    const[includerCategories,setIncluderCategories]:any[]=useState([])
   const getIncluderCategories=()=>{
     // to get categories which include the lot in the search text
    let i=0;
    let filteredCategories:any[]=[]
  categories.forEach(async(el:any)=>{
    const response= await getLotsInCategory(el.categoryTitle)
    console.log(response)
   const filteredDemoLots=demoLots.filter((dl:any)=>{
   return  response.includes(dl)==true
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
 
  
    
  
     const [searchValue,setSearchValue]=useState("");
     const [loading,setLoading]=useState(false)
     const[predictDisplay,SetPredictDisplay]=useState(false)
     const router=useRouter();
  
          //focusRef uses to set autofocus for search input
     const focusRef:any=useRef(null);
     const [relatedLots,setRelatedLots]=useState<any[]>([])
     const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchValue(e.target.value) 
 }


 useEffect(()=>{
  if(focusRef.current){
    focusRef.current.focus()
  }
    
   getIncluderCategories()
 },[searchText])
 const handleClose=()=>{
   setSearchValue("")
   SetPredictDisplay(false)
 }


 const handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
  e.preventDefault();
  handleClose();
if(searchValue!=""){
  setLoading(true)
  router.push(`/search/${searchValue}`)
}
  
 
     
 }


 const handleKeyUp=()=>{
searchValue=="" ? (
  SetPredictDisplay(false)
):(
  SetPredictDisplay(true)
)
   
  
    // setRelatedLots(lots.filter((el:any,i)=>{
     
    //   return el.title.toUpperCase().includes(searchValue.toUpperCase())||el.category.toUpperCase().includes(searchValue.toUpperCase())||el.description.toUpperCase().includes(searchValue.toUpperCase())} ))
 }


 const handleLoading=()=>{
  setLoading(true)
 }


  return (
      <>
     {console.log(includerCategories)}
    
  <div className='search-box'>
  <div className="header-search">
                                <form className="ec-btn-group-form" action="#">
                                    <input style={{'backgroundColor':'#fff'}} onChange={changeSearchText} className="form-control" value={searchText} placeholder="جستجو بر اساس نام محصول و یا دسته بندی" type="text"
                                   
                                    onBlur={()=>{changeShowSearchModal(false)}} ref={focusRef}/>
                                    <button onClick={handleSearch} className="submit"><img src="/images/icons/search.svg" className="svg_img header_svg" alt="" /></button>
                               
                                </form>
                            </div>
                            {demoLots.length>0 && (
                            <div className="row lots-in-search-box" style={{'width':'fitContent'}}>
                            {demoLots.map((el:any)=>{
                              return  <div key={el.id} className="col-md-6">
                                    <div className="lot-in-search-box">
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
                             {includerCategories.map((el:any,i:number)=>{
                              return <div>{el.categoryTitle}</div>
                             }
                            )}
                            </div>
                            )}
                            


                          
            
  </div>
 
      </>
    
  )
}
export default SearchBox
