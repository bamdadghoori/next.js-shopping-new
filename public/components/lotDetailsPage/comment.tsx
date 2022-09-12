import React from 'react'
import { useState,useRef } from 'react'
import * as yup from 'yup';
 const Comment = ({addComment}:{addComment:(...args:any[])=>void}) => {
    const [comment,setComment]=useState({
        number:1,
        name:"",
          email:"",
          rating:0,
          description:""

    })
    const [isSubmitted,setIsSubmitted]=useState(false)
    //ref for jump to validation 
    const commentRef:any=useRef()
    const[errors,setErrors]:any[]=useState([])
       //to give star by user
    const changeRating=(e:React.MouseEvent<HTMLLIElement>)=>{
        console.log(e.currentTarget.value) 
        setComment({...comment,rating:e.currentTarget.value})
    }
    //to use inputs as controlled components
    const changeInput=(e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)=>{
const value=e.currentTarget.value;
const name=e.currentTarget.name;

    
       setComment({...comment,[name]:value})
    }

    //to validate input 
    let schema = yup.object().shape({
        name: yup.string().matches(/^([^0-9]*)$/,'نام نمیتواند شامل عدد باشد').required("فیلد نام الزامی است"),
        email:yup.string().email('فرمت ایمیل صحیح نیست').required("فیلد ایمیل الزامی است"),
        rating:yup.number().positive('لطفا بین یک تا پنج ستاره امتیاز دهید').required('لطفا بین یک تا پنج ستاره امتیاز دهید'),
    })
      const validate=async()=>{
        try{
           
      
       await schema.validate(comment,{abortEarly:false})
            return true
        }
        catch(er:any){
            console.log(er.errors)
            setErrors(er.errors)
            return false
        }
        
      }

    const handleSubmit=async(e:React.MouseEvent<HTMLButtonElement>)=>{
      e.preventDefault();
      const isValid=await validate();
      if(isValid==true){
addComment(comment)
setErrors([])
      }
 
    //to scroll and showing the result
    setIsSubmitted(true)
    commentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    
    }
  return (
   <>
 
  
  
    <div className="ec-ratting-content" ref={commentRef}>
        
                                            <h3>افزودن نظر</h3>
                                            <div className="ec-ratting-form">
                                            <div className="section-title">
                     {isSubmitted==true && (errors.length!=0 ? 
                     (errors.map((el:any,i:number)=>{
  return <p className="sub-title mb-3" style={{"textAlign":"center","color":"#b2001a"}}>{el}</p>
                     })) :(
                         <p className="sub-title mb-3" style={{"textAlign":"center","color":"#0f5132"}}>نظر شما با موفقیت ثبت شد</p>
                     ))}  
                     
                    </div>
                                                <form action="#">
                                                    <div className="ec-ratting-star">
                                                        <span>امتیاز شما:</span>
                                                        <div className="ec-t-review-rating" style={{'cursor':'pointer'}}>
                                                            <ul style={{"display":"flex"}}>
                                                            <li value={1} onClick={(e)=>changeRating(e)}> <i  className={`ecicon eci-star ${comment.rating>=1 ? 'fill':' '}`}></i></li>
                                                            <li  value={2} onClick={(e)=>changeRating(e)}> <i  className={`ecicon eci-star ${comment.rating>=2 ? 'fill':' '}`}></i></li>
                                                            <li  value={3} onClick={(e)=>changeRating(e)}> <i  className={`ecicon eci-star ${comment.rating>=3 ? 'fill':' '}`}></i></li>
                                                            <li  value={4} onClick={(e)=>changeRating(e)}> <i  className={`ecicon eci-star ${comment.rating>=4 ? 'fill':' '}`}></i></li>
                                                            <li  value={5} onClick={(e)=>changeRating(e)}> <i  className={`ecicon eci-star ${comment.rating>=5 ? 'fill':' '}`}></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="ec-ratting-input">
                                                        <input value={comment.name} onChange={changeInput} name="name" placeholder="نام" type="text"/>
                                                    </div>
                                                    <div className="ec-ratting-input">
                                                        <input  value={comment.email} name="email" placeholder="ایمیل" type="email" onChange={changeInput}  />
                                                    </div>
                                                    <div className="ec-ratting-input form-submit">
                                                        <textarea value={comment.description} name="description" placeholder="نظر شما" onChange={changeInput} ></textarea>
                                                        <button className="btn btn-primary" onClick={handleSubmit} type="submit" value="Submit">ارسال</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
   </>
  )
}
export default Comment