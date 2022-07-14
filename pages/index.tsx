
import styles from '../styles/Home.module.scss'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect  } from 'react'
import { GetLotsFail,GetLotsRequest,GetLotsSuccess } from '../redux/shopping/shoppingActions'
import { RootState,AppDispatch } from '../redux/store'

import Loading from "./Loading"
import axios from 'axios'

import Categories from './categories'


import type { NextPageWithLayout } from './_app'
const Home: NextPageWithLayout  = () => {

  const dispatch:AppDispatch=useDispatch()
  const state=useSelector((state:RootState)=>state)
  
  const getLots=()=>{
 
    return async(dispatch:AppDispatch)=>{
    
     
      dispatch(GetLotsRequest())
      try{
       
        const response=await axios.get("https://fakestoreapi.com/products")
        
        dispatch(GetLotsSuccess(response.data))
      }
      catch(er:any){
        
        dispatch(GetLotsFail(er.message))
      }
    
    }
  }


useEffect(()=>{
   
  dispatch(getLots());
 
},[])

  return (
    
    <>

   

  
    <div className={styles.container}>
      <div className="source-code">To see the source code: <a href='https://github.com/bamdadghoori/nextjs-shopping'>https://github.com/bamdadghoori/nextjs-shopping</a></div>
    
      <main className={styles.main}>
      {state.isLoading==false ? (<Categories lots={state.lots}/>):( <Loading/>)}
     
      </main>

     
    </div>
    </>
  )
}


export default Home


