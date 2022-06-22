import React from 'react'
import axios from "axios"
import { useState } from 'react';
import yup from "yup"

const Login = () => {
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    const handleSubmit=async(e:React.SyntheticEvent)=>{
        e.preventDefault();
        console.log(JSON.stringify(user))
       const response=await axios.post(`https://reqres.in/api/login`,user)
       console.log(response.data)
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