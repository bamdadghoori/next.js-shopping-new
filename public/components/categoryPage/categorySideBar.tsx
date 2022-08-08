import React from 'react'
import {Tooltip} from '@chakra-ui/react'
import {  RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderTrack,
    RangeSliderThumb} from "@chakra-ui/slider"
 const CategorySideBar = ({limit,handleInputChange,handleRangeChange}:{limit:any[],handleInputChange:(...args:any[])=>void,handleRangeChange:(args:any[])=>void}) => {
  return (
    <>
      <div className="ec-shop-leftside col-lg-3 order-lg-first col-md-12 order-md-last">
                    <div id="shop_sidebar">
                        <div className="ec-sidebar-heading">
                            <h1>محصولات فیلتر شده</h1>
                        </div>
                        <div className="ec-sidebar-wrap">
                            
                            <div className="ec-sidebar-block">
                                <div className="ec-sb-title">
                                    <h3 className="ec-sidebar-title">دسته‌بندی‌ها</h3>
                                </div>
                                <div className="ec-sb-block-content">
                                    <ul>
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox" checked={false}/> <a href="#">لباس ها</a><span className="checked"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox"/> <a href="#">کیف</a><span className="checked"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox"/> <a href="#">کفش</a><span className="checked"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox"/> <a href="#">محصولات آرایشی</a><span className="checked"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox"/> <a href="#">الکترونیکی</a><span className="checked"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox" /> <a href="#">گوشی</a><span className="checked"></span>
                                            </div>
                                        </li>
                                        <li id="ec-more-toggle-content" style={{"padding":"0" , "display": "none;"}}>
                                            <ul>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <input type="checkbox"/> <a href="#">ساعت</a><span className="checked"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <input type="checkbox"/> <a href="#">قلم نوری</a><span className="checked"></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item ec-more-toggle">
                                                <span className="checked"></span><span id="ec-more-toggle">دسته‌بندی‌های بیشتر</span>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                         
                            <div className="ec-sidebar-block">
                                <div className="ec-sb-title">
                                    <h3 className="ec-sidebar-title">اندازه</h3>
                                </div>
                                <div className="ec-sb-block-content">
                                    <ul>
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox" value="" checked={false}/><a href="#">S</a><span className="checked"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox" value=""/><a href="#">M</a><span className="checked"></span>
                                            </div>
                                        </li>
                                      
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox" value=""/><a href="#">XL</a><span className="checked"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item">
                                                <input type="checkbox" value=""/><a href="#">XXL</a><span className="checked"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                          
                            <div className="ec-sidebar-block ec-sidebar-block-clr">
                                <div className="ec-sb-title">
                                    <h3 className="ec-sidebar-title">رنگ</h3>
                                </div>
                                <div className="ec-sb-block-content">
                                    <ul>
                                        <li>
                                            <div className="ec-sidebar-block-item"><span style={{"backgroundColor":"#c4d6f9;"}}></span></div>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item"><span style={{"backgroundColor":"#ff748b;"}}></span></div>
                                        </li>
                                        <li>
                                            <div className="ec-sidebar-block-item"><span style={{"backgroundColor":"#000000;"}}></span></div>
                                        </li>
                                        <li className="active">
                                            <div className="ec-sidebar-block-item"><span style={{"backgroundColor":"#2bff4a;"}}></span></div>
                                        </li>
                                       
                                      
                                      
                                      
                                    </ul>
                                </div>
                            </div>
                           
                            <div className="ec-sidebar-block">
                                <div className="ec-sb-title">
                                    <h3 className="ec-sidebar-title">قیمت</h3>
                                </div>
                                <div className='ec-sb-block-content es-price-slider ec-sidebar-dropdown'>
                                <RangeSlider aria-label={['min', 'max']} defaultValue={limit}   width={`100%`}colorScheme='blue' height={`100%`} textAlign={`center`}
                                 //   onChangeEnd={(val) => console.log(val)}
                                          onChange={(val)=>handleRangeChange(val)}
                                             min={50000}
                                             max={1000000}
                                             step={50000}
                                             value={limit}
                                             >
                                               <RangeSliderTrack  marginBottom={`20px`} bg={`#777777`}  height={`100%`}>
                                         <RangeSliderFilledTrack  height={`100%`} bg={`#444444`} paddingTop={'2px'} paddingBottom={`2px`} />
                                     </RangeSliderTrack>
                              <RangeSliderThumb index={0}  background={`white`} width="16px" height={"16px"} border={`2px solid #3474d4`} borderRadius={`50%`} />
                                <RangeSliderThumb index={1}  background={`white`}  width="16px" height={"16px"} border={`2px solid #3474d4`} borderRadius={`50%`}/>
</RangeSlider>
<div className="ec-price-input">
                                            <label className="filter__label">
                                                {//@ts-ignore
                                                <input type="number" min={50000} max={1000000} step={50000}  id='firstInput' value={limit[0]} onChange={(e)=>handleInputChange(e)} className="filter__input"/>}
                                            
                                            </label>
                                            <span >_ </span>
                                            <label className="filter__label">
                                                {//@ts-ignore
                                            <input type="number" id='secondInput' min={50000} max={1000000} value={limit[1]}  step={50000} onChange={(e)=>handleInputChange(e)} className="filter__input" tabIndex={0} onKeydown="return false"/>
                                        }
                                            </label>
                                        </div>




                                </div>
           
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}
export default CategorySideBar;