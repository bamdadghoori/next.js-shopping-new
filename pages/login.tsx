import React from 'react'
import axios from "axios"
import { useState } from 'react';
import * as yup from "yup"

const Login = () => {
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    const [errors, setErrors] = useState([])
   const schema= yup.object().shape({
      email:yup.string().required("Please enter your email").email("Email is not correct"),
      password:yup.string().required("Please enter your password")
    })

const validate=async()=>{
  try{
    const validateResult= await schema.validate(user,{abortEarly:false})
    setErrors([])
   return true
  
  }
 
  catch(er:any){
        console.log(er.errors)
         //@ts-ignore
        setErrors(er.errors)
        return false
  }
        
          
}

    const handleSubmit=async(e:React.SyntheticEvent)=>{
        e.preventDefault();
        const validateResult=await validate()
       if(validateResult==true){
        console.log(JSON.stringify(user))
        try{
          const response=await axios.post(`https://reqres.in/api/login`,user)
          console.log(response.data)
        }
        catch(er){
          //@ts-ignore
        setErrors(["The username or password is incorrect"])
        }
       
       
       }
    
        
     }


     const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUser({...user,[e.currentTarget.id]:e.currentTarget.value})
     }

  return (
  <>
   <h5>to see the successfull login use:
    email:eve.holt@reqres.in,
    password:"cityslicka"
  </h5>
  <div className="wrapper fadeInDown">
   
     
    
  <div id="formContent">
    {errors.length!=0 && (
       <div className="vali">
       {errors.map((el:any)=>{
          
             return <>
                      
                       <div key={el.id} className="error-list">
                       {el}
                       </div>
                      
                      
                 
             
             </>
           })}
            </div>
    )}
 

 
    <div className="fadeIn first">
      Login
    </div>

  
    <form onSubmit={handleSubmit}>
    
    <div className="form-floating form-outline">
      <input type="text"  id="email" className="fadeIn second form-control" placeholder='Mobile Phone' onChange={handleChange} />
      <label className="form-label" htmlFor="email">Email</label>
     </div>  
     <div className="form-floating form-outline">
      <input type="password"  id="password" className="fadeIn second form-control" placeholder='Password'onChange={handleChange}/>
      <label className="form-label" htmlFor="password">Password</label>
     </div>
     
      <input type="submit" className="fadeIn fourth "  value="Log In"/>
      
    </form>

    
    <div id="formFooter">
      <a className="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>



  </>
  )
}
export default Login;