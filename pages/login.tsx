import React from 'react'
import axios from "axios"
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { RootState,AppDispatch } from '../redux/store';
import { useContext } from 'react';
import  AppContext  from '../public/components/context';
import { addUserAction } from '../redux/shoppingSlice';
import * as yup from "yup"
import {useRouter} from 'next/router'
const Login = () => {
const router=useRouter();

//get redux factors
const dispatch:AppDispatch=useDispatch()
const users=useSelector((state:RootState)=>state.persistedReducer.users)


//connect to context
const {loggedIn,login,logOut,orderByUnloggedUsers,changeOrderByUnloggedUsers}:any=useContext(AppContext)



const [refresh,setRefresh]=useState(false)

        useEffect(()=>{

        },[refresh])

  const [mobile,setMobile]=useState('')
  const [code,setCode]=useState(' ')

  const [errors,setErrors]=useState([])

  const [userId,setUserId]=useState(0)
    
  //to check if the user has received the mobile code or not
  const [isCodeReceived,setIsCodeReceived]=useState(false)
  
const mobileSchema=yup.object().shape({
  //@ts-ignore
  mobile:yup.string().when('mobile',(val)=>{
       if(val!=undefined && val.length>0){
      return  yup.string().matches(/^(\+98|0)?9\d{9}$/,'فرمت شماره وارد شده صحیح نیست')
       }
       else{
       return yup.string().required('فیلد تلفن همراه الزامی است')
       }
  })
},[['mobile','mobile']])


const codeSchema=yup.object().shape({
  //@ts-ignore
  code:yup.string().when('code',(val)=>{
       if(val!=undefined && val.length>0){
      return  yup.string().matches(/1234$/,'کد وارد شده صحیح نیست')
       }
       else{
       return yup.string().required('فیلد  کد الزامی است')
       }
  })
},[['code','code']])



//set  inputs controlled
const changeTextBox=(e:React.ChangeEvent<HTMLInputElement>)=>{
  const value=e.target.value
  const name=e.target.name
  if(name=='mobile'){
    setMobile(value)
   
  }

  //if value==code
  else{
    setCode(value)
  }
 
}
//to submit mobile number
const handleSubmitMobileNumber=async(e:React.MouseEvent<HTMLButtonElement>)=>{
  e.preventDefault()
  const isValid=await mobileValidate();
    if(isValid==true){
      
      setIsCodeReceived(true)
      setErrors([])
    }
    

}

//validating
const mobileValidate=async()=>{
  try{
  await mobileSchema.validate({mobile:mobile},{abortEarly:false})
  return true
  
  }
  catch(er:any){   
console.log(er.errors)
setErrors(er.errors)
return false
  }
  
}

//to submit mobile number
const handleSubmitCode=async(e:React.MouseEvent<HTMLButtonElement>)=>{
  e.preventDefault()
  const isValid=await codeValidate();
    if(isValid==true){
      
     
      setErrors([])
      
     


      let id=1;
      if(users.length!=0){
        console.log(users[users.length-1])
        id=users[users.length-1].id+1
        

        //checking if user registered before or not
        if(users.length>0 && users.filter((el:any)=>el.mobile==mobile).length>0 ){
          let currentUser=users.filter((el:any)=>el.mobile==mobile) 
                   //user registered before

            //convert currentUser from array to object
            currentUser=currentUser[0]
            const token=currentUser.jwt
      localStorage.setItem('token',token)
        }
        else{
          //user registered just now
          const token=`assume this is jwt:${mobile}`
          localStorage.setItem('token',token)
          const newUser={
            id:id,
            mobile:mobile,
            jwt:token
          }
          dispatch(addUserAction(newUser))
         
          console.log(localStorage.getItem('token'))
        }
      }
      await login()
 
      //if orderByUnloggedUsers is true user should go to the regist order page
      if(orderByUnloggedUsers==true){
          router.push('/registOrder/')
      }
          // refresh the page causes loggedIn state reload!
            // setRefresh(true)
    }
  

}

//validating
const codeValidate=async()=>{
  try{
  await codeSchema.validate({code:code},{abortEarly:false})
 return true
  
  }
  catch(er:any){   
console.log(er.errors)
setErrors(er.errors)
return false
  }
  
}

//to logout
const handleLogout=async (e:React.MouseEvent<HTMLButtonElement>)=>{
  e.preventDefault();
await logOut()
setIsCodeReceived(false)
localStorage.removeItem('token')
}

  return (
  <>
  {console.log(loggedIn)}

  <section className="ec-page-content section-space-p">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="section-title">
                        <h2 className="ec-bg-title">ورود</h2>
                        <h2 className="ec-title">ورود</h2>
                        <p className="sub-title mb-3">بهترین مکان برای خرید و فروش محصولات </p>
                    </div>
                </div>
                <div className="ec-login-wrapper">
                    <div className="ec-login-container">
                        <div className="ec-login-form">
                        {errors!=undefined && errors.map((el:any,i:number)=>{
      return <p className="sub-title mb-3" style={{"textAlign":"center","color":"#b2001a"}}>{el}</p>
  })}
  {
  loggedIn==true ? (
    <p className="sub-title mb-3" style={{"textAlign":"center","color":"#0f5132"}}>ورود شما با موفقیت انجام شد</p>
  ):( isCodeReceived && <p className="sub-title mb-3" style={{"textAlign":"center","color":"#0f5132"}}>مثلا کد ارسال شده به موبایل 1234 است!</p> 

  )}
 
                            <form action="#" method="post" >
                            {
                              loggedIn==false &&  (
                                
                              
                                isCodeReceived ? (

                                  <span className="ec-login-wrap">
                                  <label>کد ارسالی(1234)*</label>
                                  <input value={code}  onChange={changeTextBox}  type="text" name="code" placeholder="کد ارسال شده به تلفن همراه..."  autoComplete="somerandomstring"/>
                              </span>
                              
                                ):(
                                  <span className="ec-login-wrap">
                            
                                  <label> تلفن همراه*</label>
                                  
                                  <input defaultValue={' '} value={mobile} onChange={changeTextBox} type="text" name="mobile" placeholder="وارد کردن شماره تلفن ..."  autoComplete="somerandomstring"/>
                              </span>
                                )
                              )
                                     
                                    }
                               
                               
                               
                               
                                <span className="ec-login-wrap ec-login-btn">
                                  {
                                    
                                    // when the showSuccessMessage state is true, it means the user had a success registering
                                    loggedIn==true ?(
 
                                      <button className="btn btn-primary" onClick={handleLogout} type="submit">خروج</button>
                                    ):(
                                      isCodeReceived ?(
                                        <button className="btn btn-primary" onClick={handleSubmitCode} type="submit">ورود</button>
                                      ):(
                                        <button className="btn btn-primary" onClick={handleSubmitMobileNumber} type="submit">دریافت کد</button>
                                      )
                                    )
                                  
                                  }
                                  
                                   
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



  </>
  )
}

export default Login;
