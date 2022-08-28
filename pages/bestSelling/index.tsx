import React from 'react'
import { useEffect,useState,useContext } from 'react';
import { getBestSellings } from '../../utils/manualData';
import { useRouter } from 'next/router';
import ReactLoading from "react-loading"
import Lot from '../../public/components/lot';
import CategorySideBar from '../../public/components/categoryPage/categorySideBar';
import AppContext from '../../public/components/context';
import { truncate } from 'fs';
 const BestSelling = () => {
  console.log(window.location.search)
    const [loading,setLoading]=useState(false);
    const [listStyle,setListStyle]=useState(false);
    const {sortArray}:any=useContext(AppContext)
          var query:any={};
    
        const router=useRouter();
        const[limit,setLimit]:any=useState([0,0])
    //to get bestSelling from manualData.js
    const [lotsInBestSellings,setLotsInBestSellings]:any=useState([])
    

   
    

   const bestSellings=async()=>{
    
           try{
          const lots =await getBestSellings();
        console.log(lots)
        setLotsInBestSellings(lots)
        return lots

           }
           catch(er){
                console.log(er)
                return false
           }
    }


    const changeLoading=(loadingState:boolean)=>{
        setLoading(loadingState)
      }

      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
               
             
      const initializeLotsInBestSelling=async()=>{
      const lots=await bestSellings();
      if(Array.isArray(lots)==true){
        console.log(lots)
        await lots.forEach((el:any) => {
          if(el.price==undefined){
            el.price=el.newPrice
           }
       });
          if(query!=undefined){
            if(query.sort!=undefined){
             const sort=query.sort
             //cases of sorts
             console.log([...lots])
              sortedArray=[...lots]
             switch (sort){
                
                 case `1`:
                       
                        break;
                     
                     case `2`:
                       console.log(`2`)
                      sortedArray=await sortArray(lots,`title`,false)
                  
                       break;
                       case `3`:
                        sortedArray=await sortArray(lots,`title`,true)
                         break;
                         case `4`:
                         sortedArray=await sortArray(lots,`price`,false)
                         break;
                         case `5`:
                          sortedArray=await  sortArray(lotsInBestSellings,`price`,true)
                           break;
                    
               }
               console.log([...sortedArray])
               setLotsInBestSellings([...sortedArray])
            }
        }
         }
       
      }
       console.log('ilibs')
    //to set query
       query=params
       console.log(query)
       var sortedArray:any[]=[];

    useEffect(()=>{
       console.log("uf")
      
        initializeLotsInBestSelling();
    
      
            
      
        setTimeout(()=>changeLoading(false),4000)
       
    },[loading,window.location.search])


    const handleStyle=(isListStyle:boolean)=>{
 
        setListStyle(isListStyle)
        
        }

     
        const changeSelectBox=async(e:React.ChangeEvent<HTMLSelectElement>)=>{

            changeLoading(true)
          
             const value=e.target.value
            await initializeLotsInBestSelling();
            router.push({pathname:`/bestSelling/`,query:{...query,sort:value}})
         console.log(lotsInBestSellings)
           
            
            
            
            }

            const handleLoadPage=(min:number,max:number)=>{
                setLimit([min,max])
                }
                const handleRangeChange=(val:any[])=>{
                    console.log(val)
                    setLimit(val)
                }
                const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
                    console.log(e.currentTarget.value)
                     if(e.target.id==`firstInput`){
                        setLimit([e.target.value,limit[1]])
                     }
                     else{
                        setLimit([limit[0],e.target.value])
                     }
                }

// to be refactured




  return (
    <>
    {console.log(lotsInBestSellings)}
     <section className="ec-page-content section-space-p">
      

        <div className="container">
            <div className="row">
                <div className="ec-shop-rightside col-lg-9 order-lg-last col-md-12 order-md-first margin-b-30">
                   
                    <div className="ec-pro-list-top d-flex">
                        <div className="col-md-6 ec-grid-list">
                          {/* view style toggler */}
                            <div className="ec-gl-btn">
                                <button className={`btn btn-grid ${listStyle==false?  "active":" "}`} onClick={()=>handleStyle(false)}><img src="/images/icons/grid.svg" className="svg_img gl_svg" alt=""/></button>
                                <button className={`btn btn-list ${listStyle==true?  "active":" "}`} onClick={()=>handleStyle(true)}><img src="/images/icons/list.svg" className="svg_img gl_svg" alt=""/></button>
                            </div>
                            {/*end of view style toggler */}
                        </div>
                        <div className="col-md-6 ec-sort-select">
                            <span className="sort-by">چینش بر اساس</span>
                            <div className="ec-select-inner">
                                <select name="ec-select" id="ec-select" onChange={changeSelectBox}>
                                    <option  value="1"  selected={query.sort==1 ? true:false} disabled={false}>موقعیت</option>
                                    <option value="2"  selected={query.sort==2 ? true:false}>نام، الف تا ی</option>
                                    <option value="3"  selected={query.sort==3 ? true:false}>نام، ی تا الف</option>
                                    <option value="4"  selected={query.sort==4 ? true:false}>قیمت، کم به زیاد</option>
                                    <option value="5"  selected={query.sort==5 ? true:false}>قیمت، زیاد به کم</option>
                                </select>
                            </div>
                        </div>
                    </div>
                   

                    <div className="shop-pro-content">
                        <div className={`shop-pro-inner ${listStyle==true? "list-view":""}`}>
                            <div className="row">
                         
                            {/* <ReactLoading  height={"10vh"} width={'10vw'}  color={"#3474d4"}/> */}
                                {loading==true ? (
                                  <>
                                  
                                 
                                  { lotsInBestSellings.length!=0 && (lotsInBestSellings.map((el:any,i:number)=>{
                                  
                                   return (
                                  
                                   <div key={el.id} className={`col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content ${listStyle==true? "width-100":" "}`}>
                                      <div className="ec-product-inner">
                                   <ReactLoading  key={i} height={"10vh"} width={'10vw'}  color={"#3474d4"}/>
                              </div>
                              </div>
                              )
                                  }))}
                                  </>
                                ):( lotsInBestSellings.length==0 || lotsInBestSellings==undefined ? (
                                  <h1> مشکلی در این صفحه پیش آمده لطفا زمانی دیگر امتحان کنید</h1>
                                ):(
                                 
                                    lotsInBestSellings.map((el:any)=>{
                                      return(<>
                                      {el.price!=undefined ?(
                                       el.price>=limit[0] && (el.price<=limit[1]  && (
                                          <div key={el.id} className={`col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content ${listStyle==true? "width-100":" "}`}>
                                          <Lot lot={el} listStyle={listStyle}/>
                                          </div>
                                       ))
  
                                       
                                      ):(
                                        el.newPrice>=limit[0] &&(el.newPrice<=limit[1] &&(
                                          <div key={el.id}  className={`col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content ${listStyle==true? "width-100":" "}`}>
                                          <Lot lot={el} listStyle={listStyle}/>
                                          </div>
                                        ) )
                                      )
                                        }
                                      
                                     </>
                                      )
                                  })
                                
                               
                                )) 

                                
                                //to filter some lots by range slider
                               }
                           
                               
                     

                              </div>
                              </div>
                              </div>
                  </div>
                  {
                    lotsInBestSellings.length!=0 &&(
                        <CategorySideBar query={query}  limit={limit} lotsInCategory={lotsInBestSellings} handleInputChange={handleInputChange} handleLoadPage={handleLoadPage} handleRangeChange={handleRangeChange} changeLoading={changeLoading}/>
                    )

                  }
              
               
             </div>
             </div>
             </section>
    </>
  )
}
export default BestSelling;
