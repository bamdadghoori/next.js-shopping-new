import React,{useEffect} from 'react'
import {Tooltip} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {  RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderTrack,
    RangeSliderThumb} from "@chakra-ui/slider"
 const CategorySideBar = ({limit,handleInputChange,handleRangeChange,lotsInCategory,handleLoadPage,category,query}:{limit:any[],handleInputChange:(...args:any[])=>void,handleRangeChange:(args:any[])=>void,lotsInCategory:any[],handleLoadPage:(...args:any[])=>void,category:any,query:any}) => {
    // category=JSON.parse(category)

console.log(category)
    const router=useRouter();
      console.log(window.location.search)
    console.log(query)
    //initialize min and max price for range slider 
    let minPrice:number=0
    let maxPrice:number=0
    if(lotsInCategory[0].price!=undefined){
       minPrice=lotsInCategory[0].price;
       maxPrice=lotsInCategory[0].price;
    }
    //some lots doesn't have price property and they have newPrice and oldPrice instead!
    else{
      minPrice=lotsInCategory[0].newPrice;
       maxPrice=lotsInCategory[0].newPrice;
    }
  
  
  //calculate min and max price for range slider
  for(let i=0;i<lotsInCategory.length;i++){
    console.log(lotsInCategory[i])
    if(i>0&&  lotsInCategory[i].price!=undefined){
      console.log(lotsInCategory[i])
      if(lotsInCategory[i].price<minPrice){
        console.log(lotsInCategory[i])
        minPrice=lotsInCategory[i].price
      }
      else if(lotsInCategory[i].price>maxPrice){
  
        console.log(lotsInCategory[i])
        maxPrice=lotsInCategory[i].price
      }
    }
    else if(i>0&&  lotsInCategory[i].newPrice!=undefined){
      console.log(lotsInCategory[i])
      if(lotsInCategory[i].newPrice<minPrice){
        console.log(lotsInCategory[i])
        minPrice=lotsInCategory[i].newPrice
      }
      else if(lotsInCategory[i].newPrice>maxPrice){
        maxPrice=lotsInCategory[i].newPrice
      }
    }
}



minPrice=0.9*minPrice
useEffect(()=>{
    console.log(lotsInCategory)
    handleLoadPage(minPrice,maxPrice)
        },[minPrice,maxPrice])


    const step=Math.floor((maxPrice-minPrice)/10)
    // const step=1000
    console.log(step)
    console.log(limit)

   const changeCheckBox=(e:React.ChangeEvent<HTMLInputElement>,subCategory:string)=>{
    console.log(e.target.checked)
    let newSubCategory:any
//    To check all cases of the checkboxes
    if(e.target.checked==true){
        if(query.subCategory!=undefined){
            
            // To check if more than one subCategory is checked
              if(Array.isArray(query.subCategory)){
                newSubCategory=query.subCategory.push([...query.subCategory,subCategory])
                router.push({pathname:`/category/${category.categoryTitle}`,query:{subCategory:newSubCategory}})
            }
               else{
                newSubCategory=[query.subCategory,subCategory]
                router.push({pathname:`/category/${category.categoryTitle}`,query:{subCategory:newSubCategory}})
               }
                router.push({pathname:`/category/${category.categoryTitle}`,query:{subCategory:newSubCategory}})
              
        }
        else{
            router.push({pathname:`/category/${category.categoryTitle}`,query:{subCategory:subCategory}})
        }
      

    }
    else{
        if(query.subCategory!=undefined){
               // To check if more than one subCategory is checked
            if(Array.isArray(query.subCategory)){
                newSubCategory=query.subCategory.filter((el:any)=>el!=subCategory)
                router.push({pathname:`/category/${category.categoryTitle}`,query:{subCategory:newSubCategory}})
            }
            else{
                
                router.push({pathname:`/category/${category.categoryTitle}`,query:{available:`none`}})
            }
          
        }
        else{
         
             newSubCategory=category.subCategories
            newSubCategory=newSubCategory.filter((el:any)=>el!=subCategory)
            router.push({pathname:`/category/${category.categoryTitle}`,query:{subCategory:newSubCategory}})
        }

    }
  

   
}
   
  return (
    <>
    {console.log(lotsInCategory)}
      <div className="ec-shop-leftside col-lg-3 order-lg-first col-md-12 order-md-last">
                    <div id="shop_sidebar">
                        <div className="ec-sidebar-heading">
                            <h1>محصولات فیلتر شده</h1>
                        </div>
                        <div className="ec-sidebar-wrap">
                            {category.subCategories!=undefined && (
                                <>
                                  <div className="ec-sidebar-block">
                                     <div className="ec-sb-title">
                                    <h3 className="ec-sidebar-title">دسته‌بندی‌ها</h3>
                                </div>
                                <div className="ec-sb-block-content">
                                    <ul>
                                {category.subCategories.map((el:any)=>{
                                 return(   <li key={el.id}>
                      {/* check if  at least one of the checkboxes is checked or not. if query.available ==none, means none of checkboxes are not checked!              */}
                                     {query.available!=undefined && query.available==`none` ?(
                                         <div className="ec-sidebar-block-item">
                                         <input type="checkbox" checked={false} value={el} onChange={(e)=>changeCheckBox(e,el)}/> <a href="#">{el}</a><span className="checked"></span>
                                     </div>
                                     ):(
                                        // check if subCategory exists in query,if subCategory doesn't exist and available!=`none` the user should see all of the lots in category!
                                        query.subCategory!=undefined  ?(
                                    
                                            <div className="ec-sidebar-block-item">
                                            <input type="checkbox" checked={Array.isArray(query.subCategory)?(query.subCategory.includes(el) ? true : false):(query.subCategory==el ? true : false)} value={el} onChange={(e)=>changeCheckBox(e,el)}/> <a href="#">{el}</a><span className="checked"></span>
                                        </div>
                                        
                                          
                                    ):(
                                        <div className="ec-sidebar-block-item">
                                        <input type="checkbox" checked={true} value={el} onChange={(e)=>changeCheckBox(e,el)}/> <a href="#">{el}</a><span className="checked"></span>
                                    </div>
                                    )
                                     )
                            }
                                         
                                        </li>
                                        )
                                })}
                                </ul>
                                </div>
                                </div>
                                </>
                            )}
                            
                            
                           
                         
                            {/* <div className="ec-sidebar-block">
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
                            </div> */}
                           
                            <div className="ec-sidebar-block">
                                <div className="ec-sb-title">
                                    <h3 className="ec-sidebar-title">قیمت</h3>
                                </div>
                                <div className='ec-sb-block-content es-price-slider ec-sidebar-dropdown'>
                                <RangeSlider aria-label={['min', 'max']} defaultValue={[minPrice,maxPrice]} width={`100%`}colorScheme='blue' height={`100%`} textAlign={`center`}
                                 //   onChangeEnd={(val) => console.log(val)}
                                          onChange={(val)=>handleRangeChange(val)}
                                             min={minPrice}
                                             max={maxPrice}
                                             step={step}
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
                                                <input type="number" min={minPrice} max={maxPrice} step={step}  id='firstInput' defaultValue={minPrice} value={limit[0]} onChange={(e)=>handleInputChange(e)} className="filter__input"/>}
                                            
                                            </label>
                                            <span >_ </span>
                                            <label className="filter__label">
                                                {//@ts-ignore
                                            <input type="number" id='secondInput' min={minPrice} max={maxPrice} value={limit[1]}   defaultValue={maxPrice} step={step} onChange={(e)=>handleInputChange(e)} className="filter__input"  tabIndex={0} />
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