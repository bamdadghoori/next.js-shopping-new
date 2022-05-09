import React from 'react'
import { useEffect,useState } from 'react'
import { RootState,AppDispatch } from '../redux/store'
import { useDispatch,useSelector } from 'react-redux'
const Lots = ({lots}:{lots:Array<any>}) => {
     
  
  return (
    <>
    <ul>{lots.map((el)=><li>{el.title}</li>)}</ul>
      
   
 
    </>
  )
  }
export default Lots;
