import React from 'react'
import axios from "axios"
import { useState } from 'react';

import { useContext } from 'react';
import  AppContext  from '../public/components/context';
import * as yup from "yup"

const Login = () => {
  const [mobile,setMobile]=useState('')
  const [showSuccessMessage,setShowSuccessMessage]=useState(false)
  const [errors,setErrors]=useState([])
const schema=yup.object().shape({
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



//set mobile input controlled
const changeTextBox=(e:React.ChangeEvent<HTMLInputElement>)=>{
  const value=e.target.value
  setMobile(value)
}
//to submit
const handleSubmit=async(e:React.MouseEvent<HTMLButtonElement>)=>{
  e.preventDefault()
  const isValid=await validate();
    if(isValid==true){
      setShowSuccessMessage(true)
      setErrors([])
    }
    else{
      setShowSuccessMessage(false)
    }

}

//validating
const validate=async()=>{
  try{
  await schema.validate({mobile:mobile},{abortEarly:false})
  return true
  
  }
  catch(er:any){   
console.log(er.errors)
setErrors(er.errors)
return false
  }
  
}


//   //@ts-ignore
//   const{login}=useContext(AppContext);
//    //@ts-ignore
//    const{loggedIn}=useContext(AppContext);

//     const [user,setUser]=useState({
//         email:"",
//         password:""
//     })
//     const [loading,setLoading]=useState(false)
//     const [errors, setErrors] = useState([])
//    const schema= yup.object().shape({
//       email:yup.string().required("Please enter your email").email("Email is not correct"),
//       password:yup.string().required("Please enter your password")
//     })

// const validate=async()=>{
//   try{
//     const validateResult= await schema.validate(user,{abortEarly:false})
//     setErrors([])
//    return true
  
//   }
 
//   catch(er:any){
       
//          //@ts-ignore
//         setErrors(er.errors)
//         return false
//   }
        
          
// }

//     const handleSubmit=async(e:React.SyntheticEvent)=>{
//         e.preventDefault();
//         setLoading(true)
//         const validateResult=await validate()
//        if(validateResult==true){
      
//         try{
//           const response=await axios.post(`https://reqres.in/api/login`,user)
        
//           const token=response.data.token;
         
//           localStorage.setItem("token",token)
//           setErrors([]);
//           login()

          
//         }
//         catch(er){
//           //@ts-ignore
         
//         setErrors(["The username or password is incorrect"])
       
//         localStorage.setItem("token","")
//         }
       
       
//        }
    
//         setLoading(false)
//      }


//      const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
//         setUser({...user,[e.currentTarget.id]:e.currentTarget.value})
//      }

  return (
  <>
  
  {console.log(errors)}
  <section className="ec-page-content section-space-p">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="section-title">
                        <h2 className="ec-bg-title">ورود</h2>
                        <h2 className="ec-title">ورود</h2>
                        <p className="sub-title mb-3">بهترین مکان برای خرید و فروش محصولات دیجیتال</p>
                    </div>
                </div>
                <div className="ec-login-wrapper">
                    <div className="ec-login-container">
                        <div className="ec-login-form">
                        {errors!=undefined && errors.map((el:any,i:number)=>{
      return <p className="sub-title mb-3" style={{"textAlign":"center","color":"#b2001a"}}>{el}</p>
  })}
  {showSuccessMessage==true && (
    <p className="sub-title mb-3" style={{"textAlign":"center","color":"#0f5132"}}>سفارش شما با موفقیت ثبت شد</p>
  )}
                            <form action="#" method="post" >
                                <span className="ec-login-wrap">
                                    <label> تلفن همراه*</label>
                                    <input defaultValue={''} value={mobile} onChange={changeTextBox} type="text" name="mobile" placeholder="وارد کردن شماره تلفن ..."  autoComplete="somerandomstring"/>
                                </span>
                               
                               
                                <span className="ec-login-wrap ec-login-btn">
                                    <button className="btn btn-primary" onClick={handleSubmit} type="submit">ورود</button>
                                   
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
