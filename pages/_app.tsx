import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../public/components/layout'
import { useEffect,useState } from 'react'
import Script from 'next/script';
import type { ReactElement, ReactNode } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import AppContext from '../public/components/context';

import 'bootstrap/dist/css/bootstrap.min.css';

import {store,persistor} from '../redux/store'

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {


  
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
     <Provider store={store}>
  <AppContext.Provider value={{loggedIn,login,logOut}}>
     <PersistGate loading={null} persistor={persistor}>
    
    
  <Layout>
  <Component {...pageProps} />
  </Layout>

  
  </PersistGate>
  </AppContext.Provider>
  </Provider>
  </>
  ) 
}

export default App
