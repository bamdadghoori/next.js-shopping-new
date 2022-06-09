import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useRouter } from 'next/router';
import NextNProgress from "nextjs-progressbar"
import PredictSearch from './predictSearch';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
 const SearchBox = () => {
    const lots=useSelector((state:RootState)=>state.lots)
     const [searchValue,setSearchValue]=useState("");
     const [loading,setLoading]=useState(false)
     const[predictDisplay,SetPredictDisplay]=useState(false)
     const router=useRouter();
     const [relatedLots,setRelatedLots]=useState<any[]>([])
     const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchValue(e.target.value) 
 }

 const handleClose=()=>{
   setSearchValue("")
   SetPredictDisplay(false)
 }
 const handleClick=()=>{
     setLoading(true)
     router.push(`/search/${searchValue}`)
     
 }
 const handleKeyUp=()=>{
searchValue=="" ? (
  SetPredictDisplay(false)
):(
  SetPredictDisplay(true)
)
   
   
    setRelatedLots(lots.filter((el:any,i)=>{
     
      return el.title.toUpperCase().includes(searchValue.toUpperCase())||el.category.toUpperCase().includes(searchValue.toUpperCase())||el.description.toUpperCase().includes(searchValue.toUpperCase())} ))
 }
 
  return (
      <>
     
      {/* {console.log(lots)} */}
      {loading==true && (<NextNProgress
  color="rgb(255, 107, 0)"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true}
/>)}
         <div className="input-group" >
  <div className="form-floating form-outline">
    <input type="text"  id="floatingInput" className="form-control" placeholder='search'value={searchValue} onChange={handleChange} onKeyUp={handleKeyUp} autoComplete="off" />
    <FontAwesomeIcon icon={faClose} className="close-icon" onClick={handleClose}/>
    <label className="form-label" htmlFor="floatingInput">Search</label>
  </div>
  <button type="button" className="btn btn-primary btn-search" onClick={handleClick}>
    <FontAwesomeIcon icon={faSearch} />
  </button>
  
</div>
{
   predictDisplay && <PredictSearch relatedLots={relatedLots}/>
 }
 
      </>
    
  )
}
export default SearchBox
