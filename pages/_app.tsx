import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../public/components/layout'
import { useEffect } from 'react'
import Script from 'next/script';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import {store,persistor} from '../redux/store'

import { Provider } from 'react-redux';
import { GetLotsFail,GetLotsRequest,GetLotsSuccess } from '../redux/shopping/shoppingActions'
import { RootState,AppDispatch } from '../redux/store'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function App({ Component, pageProps }: AppProps) {
  //  const dispatch:AppDispatch=useDispatch()
//   const getLots=()=>{
    
//     return async(dispatch:AppDispatch)=>{
      
//       dispatch(GetLotsRequest())
//       try{
//         const response=await axios.get("https://fakestoreapi.com/products")
//         console.log(response.data)
//         dispatch(GetLotsSuccess(response.data))
//       }
//       catch(er:any){
//         console.log(er)
//         dispatch(GetLotsFail(er.messege))
//       }
    
//     }
//   }
//   useEffect(()=>{

//   dispatch(getLots());
  
//   // return ()=>{
//   //   // console.log("t")
//   // }
// },[])
  return(
    <>
    <Script src="https://code.jquery.com/jquery-3.6.0.min.js"/>
     {/* <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js' type='script'/> */}
          <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js' />
          {/* <Script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"/> */}
     <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.5/umd/popper.min.js"/>
     <Provider store={store}>
 
     <PersistGate loading={null} persistor={persistor}>
    <Layout>
     
  <Component {...pageProps} />

  </Layout>
  </PersistGate>
  </Provider>
  </>
  ) 
}

export default App
