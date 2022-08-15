
import styles from '../styles/Home.module.scss'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect,Suspense,useState } from 'react'
import { GetLotsFail, GetLotsRequest, GetLotsSuccess,GetCategoriesFail,GetCategoriesRequest,GetCategoriesSuccess } from '../redux/shopping/shoppingActions'
import { RootState, AppDispatch } from '../redux/store'
import NewLots from '../public/components/newLots'
// import CommingSoon from '../public/components/commingSoon'
import Loading from "./Loading"
import axios from 'axios'
// import Premiers from '../public/components/premiers'
import Categories from './categories'
import { getLots,getCategories,getLotsInCategory } from '../utils/firebase'
// import MainCategories from '../public/components/mainCategories'
import type { NextPageWithLayout } from './_app'
import MainSlider from '../public/components/mainSlider'
import { getShoppingLots,getShoppingCategories } from '../redux/shoppingSlice'
import LazyLoad from 'react-lazyload';
//@ts-ignore
const Home: NextPageWithLayout = () => {
  
const [scrolled,setScrolled]=useState(false)
const MainCategories=React.lazy(()=>import("../public/components/mainCategories"))
const CommingSoon=React.lazy(()=>import("../public/components/commingSoon"))
const Premiers=React.lazy(()=>import('../public/components/premiers'))
  const dispatch: AppDispatch = useDispatch()
  const state = useSelector((state: RootState) => state.persistedReducer)
      
  
  //@ts-ignore
  const handleScroll=(e)=>{
   if(window.innerHeight+e.target.documentElement.scrollTop>=e.target.documentElement.scrollHeight){
    console.log()
   }
    // console.log(primaryOffset)
    //    if(window.scrollY>=primaryOffset && primaryOffset!=0){
    //      console.log("scroll")
    //    }
       
     }

  const getLotsList = () => {

    return async (dispatch: AppDispatch) => {


      dispatch(GetLotsRequest())
      try {
        const lots: any = await getLots();
        { console.log(lots) }
        dispatch(GetLotsSuccess(lots))

      }
      catch (er:any) {
        console.log(er)
        dispatch(GetLotsFail(er))
      }

    }
  }
  const getCategoryList=()=>{
       dispatch(GetCategoriesRequest)
       return async(dispatch:AppDispatch)=>{
        try{
              const categories:any=await getCategories()
              console.log(categories)
              dispatch(GetCategoriesSuccess(categories))

        }
        catch(er:any){
          console.log(er)
          dispatch(GetCategoriesFail(er))
        }
         
       }
  }
  const setOffset=(offset:number)=>{
    // console.log(offset)
    // primaryOffset=offset;
    // setScrolled(true)
  }
 //@ts-ignore
 
  useEffect(() => {
    
    dispatch(getShoppingLots());
    dispatch(getShoppingCategories());
window.addEventListener("scroll",handleScroll)
  }, [])

  return (

    <>
     <MainSlider/>
        {
          state.isLoading==true ?(
            <h1>loading</h1>
          ):(
            state.lots.length!=0 || state.lots==undefined ?(
              <>
              
          <Suspense fallback={<h1>is loading</h1>}>
          <Premiers lots={state.lots} setOffset={setOffset}
            />
          </Suspense>
          <Suspense fallback={<h1>is loading</h1>}>
          <CommingSoon/>
          </Suspense>
          {state.isLoadingCategory==true ?(
            <h1>loading</h1>
          ):(
            state.categories.length!=0 ? (
              <Suspense fallback={<h1>is loading</h1>}>
              <MainCategories categories={state.categories}/>
              </Suspense>
            ):(
              <h1>error</h1>
            ) 
          )
            }
        
           <NewLots  />
              </>
            ):(
              <h1>error</h1>
            )
          )
        }
    
      {/* <div className={styles.container}>
      <div className="source-code">To see the source code: <a href='https://github.com/bamdadghoori/nextjs-shopping'>https://github.com/bamdadghoori/nextjs-shopping</a></div>
    
      <main className={styles.main}>
      {state.isLoading==false ? (<Categories lots={state.lots}/>):( <Loading/>)}
     
      </main>

     
    </div> */}
    </>
  )
}


export default Home


