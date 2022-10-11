import React,{useState} from 'react'
import { useRouter } from 'next/router'
import MobileNavbarCategory from './mobileNavbarCategory';
import {useSelector} from 'react-redux';
import { RootState } from '../../redux/store';
 const MobileNavbar = ({changeMobileNavbar,showMobileNavbar,changeLoading}:{changeMobileNavbar:(...args:any)=>void,showMobileNavbar:boolean,changeLoading:(...args:any[])=>void}) => {

//get  from redux
  const categories=useSelector(((state:RootState)=>state.persistedReducer.categories))

const [isActiveCategories,setIsActiveCategories]=useState(false);
const router=useRouter();
  return (
   <>
    <div id="ec-mobile-menu" className={`ec-side-cart ec-mobile-menu ${showMobileNavbar==true ? 'ec-open':' '}`}>
            <div className="ec-menu-title">
                <span className="menu_title">منو</span>
                <button onClick={()=>{changeMobileNavbar(false)}} className="ec-close">×</button>
            </div>
            <div className="ec-menu-inner">
                <div className="ec-menu-content">
                    <ul>
                        <li className='dropdown'><a onClick={async()=>{
                            changeLoading(true)
                            router.push('/home/')
                            changeLoading(false)
                        }}>خانه</a></li>
                        <li className={`${isActiveCategories==true && 'active'}`}>
                        <span className="menu-toggle" onClick={()=>{setIsActiveCategories(!isActiveCategories)}}></span>
                            <a href="javascript:void(0)">دسته بندی ها</a>
                            <ul className="sub-menu" style={isActiveCategories==true ?{display:'block'}:{display:'none'} }>
                            {categories.map((el:any,i:number)=>{
                                                 return   <MobileNavbarCategory changeMobileNavbar={changeMobileNavbar} changeLoading={changeLoading} key={i} category={el}/>
                                                 
                                             
                                                })}
                                    </ul>
                                </li>
                                
                               
                              
                           
                        
                        <li><a onClick={async()=>{
                                    changeLoading(true)
                                  await  router.push('/newLots/')
                                  changeLoading(false)
                                  changeMobileNavbar(false)
                                    }}>جدید</a>
                          
                        </li>
                        <li>
                        <a onClick={async()=>{
                                      changeLoading(true)
                                        await  router.push('/bestSelling/')
                                    changeLoading(false)
                                    changeMobileNavbar(false)
                                    }}>پر فروش ترین ها</a> 
                        </li>
                    </ul>
                </div>
                <div className="header-res-lan-curr">
                    
                    
                    <div className="header-res-social">
                        <div className="header-top-social">
                            <ul className="mb-0">
                                <li className="list-inline-item"><a className="hdr-facebook" href="#"><i className="ecicon eci-facebook"></i></a></li>
                                <li className="list-inline-item"><a className="hdr-twitter" href="#"><i className="ecicon eci-twitter"></i></a></li>
                                <li className="list-inline-item"><a className="hdr-instagram" href="#"><i className="ecicon eci-instagram"></i></a></li>
                                <li className="list-inline-item"><a className="hdr-linkedin" href="#"><i className="ecicon eci-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
   </>
  )
}
export default MobileNavbar
