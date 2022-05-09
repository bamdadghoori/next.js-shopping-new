import React from 'react'
import Navbar from './navbar';
import Script from 'next/script';
import { initailState } from '../../redux/shopping/shoppingReducer';
import {RootState} from '../../redux/store';
import { TypedUseSelectorHook, useDispatch, useSelector,connect } from 'react-redux'

// import { useAppSelector,useAppDispatch } from '../hooks';
const Layout = ({children}:{
  children:React.ReactNode
}) => {
  //  type RootState=typeof initailState   
   
  const state=useSelector((state:RootState) => state.lots)
 
  // const state=useAppSelector((state) => state.lots)
  // const dispatch = useAppDispatch()

  // useEffect((

  // )=>{},[])
  return (
    <>
    {console.log(state)}
  
  <Navbar/>
  {children}
    </>
  )
}
export default Layout;
