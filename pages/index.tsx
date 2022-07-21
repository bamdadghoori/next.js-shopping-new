
import styles from '../styles/Home.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { GetLotsFail, GetLotsRequest, GetLotsSuccess } from '../redux/shopping/shoppingActions'
import { RootState, AppDispatch } from '../redux/store'
import CommingSoon from '../public/components/commingSoon'
import Loading from "./Loading"
import axios from 'axios'
import Premiers from '../public/components/premiers'
import Categories from './categories'
import { getLots } from '../utils/firebase'

import type { NextPageWithLayout } from './_app'
const Home: NextPageWithLayout = () => {

  const dispatch: AppDispatch = useDispatch()
  const state = useSelector((state: RootState) => state)

  const getLotsList = () => {

    return async (dispatch: AppDispatch) => {


      dispatch(GetLotsRequest())
      try {
        const lots: any = await getLots();
        { console.log(lots) }
        dispatch(GetLotsSuccess(lots))

      }
      catch (er) {
        console.log(er)
        // dispatch(GetLotsFail)
      }

    }
  }


  useEffect(() => {

    dispatch(getLotsList());

  }, [])

  return (

    <>

      <Premiers lots={state.lots} />
      <CommingSoon/>

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


