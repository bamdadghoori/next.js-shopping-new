import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useRouter } from 'next/router';
import NextNProgress from "nextjs-progressbar"
 const SearchBox = () => {
    
     const [searchValue,setSearchValue]=useState("");
     const [loading,setLoading]=useState(false)
     const router=useRouter();
     const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchValue(e.target.value) 
 }
 const handleClick=()=>{
     setLoading(true)
     router.push(`/search/${searchValue}`)
 }
 const handleKeyUp=()=>{
   
 }
  return (
      <>
      {loading==true && (<NextNProgress
  color="rgb(255, 107, 0)"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true}
/>)}
         <div className="input-group">
  <div className="form-floating form-outline">
    <input type="text"  id="floatingInput" className="form-control" placeholder='search'value={searchValue} onChange={handleChange} onKeyUp={handleKeyUp}/>
    <label className="form-label" htmlFor="floatingInput">Search</label>
  </div>
  <button type="button" className="btn btn-primary btn-search" onClick={handleClick}>
    <FontAwesomeIcon icon={faSearch} />
  </button>
</div>
      </>
    
  )
}
export default SearchBox
