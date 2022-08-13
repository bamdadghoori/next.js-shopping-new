import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../public/components/layout'
import { useEffect,useState } from 'react'
import "../styles/swiper-bundle.min.css"
import Script from 'next/script';
import type { ReactElement, ReactNode } from 'react'
import React from 'react';
import Head from 'next/head'
import type { NextPage } from 'next'
import AppContext from '../public/components/context';
import DashboardLayout from './dashboard/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import '../styles/demo1.css'
import '../styles/skin-01.css'
import '../styles/responsive.css'
import '../styles/rtl.css'
import "../styles/ecicons.min.css"
import "../styles/nouislider.css"
import {store,persistor} from '../redux/store'
import Test from "../public/components/test"

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

//@ts-ignore
function App({ Component, pageProps }) {

let rect:any


  const NewLayout=Component.Layout||Layout
  
  const [loggedIn,setLoggedIn]=useState(false)



  useEffect(()=>{
    const token=localStorage.getItem("token")
    if(token){
setLoggedIn(true)
    }
    else{
  setLoggedIn(false)
    }
    
   },[])


const login=()=>{
  
  setLoggedIn(true)
}


const logOut=()=>{
  setLoggedIn(false)
}
 
  return(
    <>
    <Head>
        <title>online shop</title>
       
      </Head>

    <Script src="https://code.jquery.com/jquery-3.6.0.min.js"/>
   
          <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js' />
       
     <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.5/umd/popper.min.js"/>
     {/* <Provider store={store}>
     <Test/>
     </Provider> */}
     <Provider store={store}>
  <AppContext.Provider value={{loggedIn,login,logOut}}>
     <PersistGate loading={null} persistor={persistor}>
    
    
  <NewLayout>
  <Component {...pageProps} />
  </NewLayout>

  
  </PersistGate>
  </AppContext.Provider>
  </Provider>
  </>
  ) 
}

export default App
