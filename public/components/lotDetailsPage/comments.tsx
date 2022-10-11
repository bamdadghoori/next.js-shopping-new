import React from 'react'
import { useState } from 'react'
import Comment from './comment'
 const Comments = () => {
   const [comments,setComments]:any[]=useState([]);
   const addComment=(comment:any)=>{
    setComments([...comments,comment])
   }
   
//  //to counting rating stars
//  const stars:any[]=[]
//  const emptyStars:any[]=[]
// const emptyStarsCount=5-lot.rating

// for(let i=0;i<lot.rating;i++){
//    stars[i]=i
// }

// for(let i=0;i<emptyStarsCount;i++){
//  emptyStars[i]=i
// }

  return (
    <>
    
    <div className="ec-single-pro-tab">
                        <div className="ec-single-pro-tab-wrapper">
                            <div className="ec-single-pro-tab-nav">
                                <ul className="nav nav-tabs">
                                   
                                    <li className="nav-item">
                                        <a className="nav-link active"  role="tablist">نظرات</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content  ec-single-pro-tab-content">
                                
                               

                                <div id="ec-spt-nav-review" className="tab-pane fade">
                                    <div className="row">
                                        <div className="ec-t-review-wrapper">
                                            <div className="ec-t-review-item">
                                                <div className="ec-t-review-avtar">
                                                    <img src="/images/review-image/1.jpg" alt=""/>
                                                </div>
                                                <div className="ec-t-review-content">
                                                    <div className="ec-t-review-top">
                                                        <div className="ec-t-review-name">جانان دارا</div>
                                                        <div className="ec-t-review-rating">
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star"></i>
                                                        </div>
                                                    </div>
                                                    <div className="ec-t-review-bottom">
                                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ec-t-review-item">
                                                <div className="ec-t-review-avtar">
                                                    <img src="/images/review-image/2.jpg" alt="" />
                                                </div>
                                                <div className="ec-t-review-content">
                                                    <div className="ec-t-review-top">
                                                        <div className="ec-t-review-name">لیندا کیانی</div>
                                                        <div className="ec-t-review-rating">
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star fill"></i>
                                                            <i className="ecicon eci-star"></i>
                                                            <i className="ecicon eci-star"></i>
                                                        </div>
                                                    </div>
                                                    <div className="ec-t-review-bottom">
                                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                                                    </div>
                                                </div>
                                            </div>
                                           {comments.map((el:any)=>{
                                            return (<>
                                             <div className="ec-t-review-item">
                                                <div className="ec-t-review-avtar">
                                                    <img src="/images/user/avatar.png" alt="" />
                                                </div>
                                                <div className="ec-t-review-content">
                                                    <div className="ec-t-review-top">
                                                        <div className="ec-t-review-name">{el.name}</div>
                                                        <ul style={{'display':'flex'}} className="ec-t-review-rating">
                                                            
                                                           <li value={1}> <i className={`ecicon eci-star  ${el.rating>=1 ? 'fill':' '}`}></i></li>
                                                           <li value={2}> <i  className={`ecicon eci-star  ${el.rating>=2 ? 'fill':' '}`}></i></li>
                                                           <li value={3}> <i  className={`ecicon eci-star  ${el.rating>=3 ? 'fill':' '}`}></i></li>
                                                           <li value={4}> <i className={`ecicon eci-star  ${el.rating>=4 ? 'fill':' '}`}></i></li>
                                                           <li value={5}> <i  className={`ecicon eci-star  ${el.rating>=5 ? 'fill':' '}`}></i></li>
                                                            
                                                        </ul>
                                                    </div>
                                                    <div className="ec-t-review-bottom">
                                                      <p>
                                                        {el.description}
                                                      </p>
                                                    </div>
                                                </div>
                                            </div>
                                            </>)
                                           })}
                                           

                                        </div>
                                       <Comment addComment={addComment}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </>
  )
}
export default Comments
