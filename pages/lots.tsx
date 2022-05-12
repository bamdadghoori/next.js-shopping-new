import React from 'react'
import { useEffect,useState } from 'react'
import { RootState,AppDispatch } from '../redux/store'
import { useDispatch,useSelector } from 'react-redux'
import Items from './pagination/Items'
import PaginationButtons from './pagination/paginationButtons'
import Link from "next/link"
const Lots = ({lots}:{lots:Array<any>}) => {
  let [currentPage,setCurrentPage]=useState(1)
     const totalCount=lots.length;
     const itemsPerPage=4;
     const pagesNumber=Math.ceil(totalCount/itemsPerPage)
     const endOfItems=itemsPerPage*currentPage
     const startOfItems=endOfItems-itemsPerPage
    const currentItems=lots.slice(startOfItems,endOfItems);
     const paginationButtons=[]
     let i;
     for(i=1;i<=pagesNumber;i++){
      paginationButtons.push(i)
     }
    const changePage=(cp:any)=>{
      setCurrentPage(cp)
    }
    const prevPage=(cp:any)=>{
      cp==1 ? (setCurrentPage(pagesNumber)):(setCurrentPage(cp-1))
    }
    const nextPage=(cp:any)=>{
      cp==pagesNumber ? (setCurrentPage(1)):(setCurrentPage(cp+1))
    }
  return (
    <>
    <Items currentItems={currentItems}/>
    <PaginationButtons paginationButtons={paginationButtons} currentPage={currentPage} changePage={changePage} prevPage={prevPage} nextPage={nextPage}/>

    
    {/* <ul>{lots.map((el)=><li>{el.title}</li>)}</ul> */}
      
   
 
    </>
  )
  }
export default Lots;
