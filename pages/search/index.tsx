import React,{useEffect,useState,useContext} from 'react'
import { getShoppingLots,getShoppingCategories } from '../../redux/shoppingSlice'
import { useDispatch,useSelector } from 'react-redux'
import { AppDispatch,RootState } from '../../redux/store'
import AppContext from '../../public/components/context';
import CheckBoxError from '../../public/components/categoryPage/checkBoxError';
import CategorySideBar from '../../public/components/categoryPage/categorySideBar';
import Lot from '../../public/components/lot';
import { useRouter } from 'next/router'
 const searchResult = () => {
  const[limit,setLimit]:any=useState([0,0])
  const [loading,setLoading]=useState(true);
  const [currentLots,setCurrentLots]:any=useState([])
   //destruct from context
   const {sortArray}:any=useContext(AppContext)
   const {handleStyle}:any=useContext(AppContext)
  const {listStyle}:any=useContext(AppContext)


    const dispatch:AppDispatch=useDispatch();
    const router=useRouter();

          let query:any=[]
    

   
   

    
    let lots=useSelector((state:RootState)=>state.persistedReducer.lots)

    let sortedArray:any[]=[];

    //to initialize which lots should be shown
        //to get query
        query=router.query
       const initializeCurrentLots=async()=>{
       
        getLots()
        if(query.s!=undefined && query.s.length>0){
             

          //some lots have price property and some other have newPrice. so we should define property price for all of them!
          lots=await lots.map((el:any) => {
        
            if(el.price==undefined){
            return {...el,price:el.newPrice}
             
         
             }
             else{
              return el
             }
            
         });
          //to get lots that contains the user search world
        lots= lots.filter((el:any)=>{
            return el.title.includes(query.s)||el.category.includes(query.s)
          })

          if(query.title!=undefined){
            if(Array.isArray(query.title)){
             lots=lots.filter((el:any)=>{
               return query.title.includes
               (el.category)==true
             })
            }
            else{
             lots= lots.filter((el:any)=>{
               return el.category==query.title
             })
            }
         
          
              setCurrentLots(lots)
           }

            
            if(query.sort!=undefined){
             const sort=query.sort
             //cases of sorts
             console.log(lots)
              sortedArray=lots
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
                          sortedArray=await  sortArray(lots,`price`,true)
                           break;
                           default:
                            
                    
               }
             lots=sortedArray;
            }
            setCurrentLots(lots)
        }
       
       }
    
 

       //to get lots and categories from redux
       const getLots=()=>{
    
         dispatch(getShoppingLots),
        dispatch(getShoppingCategories)
       
       
       }

       //for passing to categorySideBar
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

  useEffect(() => {
     

       
      initializeCurrentLots();
     
      setTimeout(()=>changeLoading(false),4000)
 
    }, [loading,query])
   


     //to handle sorting selectBox
    const changeSelectBox=async(e:React.ChangeEvent<HTMLSelectElement>)=>{

      changeLoading(true)
    
       const value=e.target.value
      await initializeCurrentLots();
      router.push({pathname:`/search/`,query:{...query,sort:value}})

     
      
      
      
      }

      //to change loading state
      
    const changeLoading=(loadingState:boolean)=>{
      setLoading(loadingState)
    }
  return (
    <>
    {console.log(currentLots)}
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
                 

                
                       
                         
                              {loading==true ? (
                                <>
                                
                             
                              
                                 <span className='loader_img'>

                                  </span>
                                 
                                
                                </>
                              ):( currentLots.length==0 || currentLots==undefined ? (

                                <div className="shop-pro-content">
                                <div className={`shop-pro-inner ${listStyle==true? "list-view":""}`}>
                                    <div className="row">
                                <h3> موردی مطابق با جستجوی شما وجود ندارد</h3>
                              </div>
                              </div>
                              </div>
                              ):
                              (
                                <div className="shop-pro-content">
                                <div className={`shop-pro-inner ${listStyle==true? "list-view":""}`}>
                                    <div className="row">
                               {query.available!=undefined && query.available==`false` ?(
                                  <CheckBoxError/>
                              ):(
                                currentLots.map((el:any)=>{
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
                                    }
                                  
                                 
                                  )
 
                              )
                                  }
                              </div>
                              </div>
                              </div>
                             
                              )) 

                              
                              //to filter some lots by range slider
                             }
                         
                             
                   

                           
                </div>
               
            
   
 <CategorySideBar query={query}  limit={limit} lotsInCategory={currentLots} handleInputChange={handleInputChange} handleLoadPage={handleLoadPage} handleRangeChange={handleRangeChange} changeLoading={changeLoading}/>
          
           </div>
           </div>
           </section>
        
          
    </>
   
  )
}
export default searchResult;

