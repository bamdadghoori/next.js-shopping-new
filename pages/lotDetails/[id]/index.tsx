import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { getLots,getLotById } from '../../../utils/manualData';
import { AddCustomerLot } from '../../../redux/shopping/shoppingActions';
import { RootState } from '../../../redux/store'
import { GetStaticPaths,GetStaticProps } from 'next';
import RelatedLots from '../../../public/components/lotDetailsPage/relatedLots';
import https from "https"
import Comments from '../../../public/components/lotDetailsPage/comments';


 const LotDetails = ({lot,error}:{lot:any,error:string}) => {
  //to show which lot is bought
const [customerLot,setCustomerLot]=useState({
  id:lot.id,
  count:1
})

  {console.log(lot)}
const dispatch=useDispatch();


const [activeSize,setActiveSize]=useState('M')

const lotCount=1;

const handleSizeClick=(value:string)=>{
  console.log(value)
setActiveSize(value)

}



 //to counting rating stars
 const stars:any[]=[]
 const emptyStars:any[]=[]
const emptyStarsCount=5-lot.rating

for(let i=0;i<lot.rating;i++){
   stars[i]=i
}

for(let i=0;i<emptyStarsCount;i++){
 emptyStars[i]=i
}

//to make count input controlled
const handleCountInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  if(parseInt(e.currentTarget.value)>lot.inventory || parseInt(e.currentTarget.value)<1)
 {
  setCustomerLot(customerLot)
  }
  else if(e.currentTarget.value.length==0){
    setCustomerLot({...customerLot,count:1})
  }
 else{
  setCustomerLot({...customerLot,count: parseInt(e.currentTarget.value)})
 }
  
  
  
}
const incrementCount=()=>{
  if(customerLot.count<lot.inventory){
    setCustomerLot({...customerLot,count:customerLot.count+1})
  }
}
const decrementCount=()=>{
  if(customerLot.count>1){
    setCustomerLot({...customerLot,count:customerLot.count-1})
  }
 
}
  return (
    <>
 
    <section className="ec-page-content section-space-p">
        <div className="container">
            <div className="row">
                <div className="ec-pro-rightside ec-common-rightside col-lg-12 order-lg-last col-md-12 order-md-first">

                 
                    <div className="single-pro-block">
                        <div className="single-pro-inner">
                            <div className="row">
                                <div className="single-pro-img">
                                    <div className="single-product-scroll">
                                        <div className="single-product-cover">
                                             <div className="single-slide zoom-image-hover">
                                                <img className="img-responsive" src={lot.imgUrl} alt="Product"/>
                                            </div> 
                                            {/* <div className="single-slide zoom-image-hover">
                                                <img className="img-responsive" src={lot.imgUrl} alt="Product"/>
                                            </div>
                                            <div className="single-slide zoom-image-hover">
                                                <img className="img-responsive" src="/images/product-image/9_3.jpg" alt="Product"/>
                                            </div>
                                            <div className="single-slide zoom-image-hover">
                                                <img className="img-responsive" src="/images/product-image/9_4.jpg" alt="Product"/>
                                            </div>
                                            <div className="single-slide zoom-image-hover">
                                                <img className="img-responsive" src="/images/product-image/9_3.jpg" alt="Product"/>
                                            </div>  */}
                                        </div>
                                        {/* <div className="single-nav-thumb">
                                            <div className="single-slide">
                                                <img className="img-responsive" src="/images/product-image/9_1.jpg" alt="Product"/>
                                            </div>
                                            <div className="single-slide">
                                                <img className="img-responsive" src="/images/product-image/9_2.jpg" alt="Product"/>
                                            </div>
                                            <div className="single-slide">
                                                <img className="img-responsive" src="/images/product-image/9_3.jpg" alt="Product" />
                                            </div>
                                            <div className="single-slide">
                                                <img className="img-responsive" src="/images/product-image/9_4.jpg" alt="Product" />
                                            </div>
                                            <div className="single-slide">
                                                <img className="img-responsive" src="/images/product-image/9_3.jpg" alt="Product" />
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="single-pro-desc">
                                    <div className="single-pro-content">
                                        <h5 className="ec-single-title">{lot.title}</h5>
                                        <div className="ec-single-rating-wrap">
                                            <div className="ec-single-rating">
                                              {stars.map((el:number,i:number)=>{
                                              return  <i key={i} className="ecicon eci-star fill"></i>
                                              })}
                                               {emptyStars.map((el:number,i:number)=>{
                                              return  <i key={i} className="ecicon eci-star"></i>
                                              })}
                                                
                                               
                                            </div>
                                            <span className="ec-read-review"><a href="#ec-spt-nav-review">اولین کسی که نظر میدهد باشید</a></span>
                                        </div>
                                        <div className="ec-single-desc">{lot.description}</div>

                                        <div className="ec-single-sales">
                                            <div className="ec-single-sales-inner">
                                                <div className="ec-single-sales-title">فروش اکسسوری</div>
                                                <div className="ec-single-sales-visitor">در حال حاضر <span>{lot.soldOut}</span>نفر این محصول را خریده اند</div>
                                               
                                            </div>
                                        </div>
                                        <div className="ec-single-price-stoke">
                                            <div className="ec-single-price">
                                                <span className="ec-single-ps-title">قیمت</span>
                                                {/* some lots have price property and some other have newPrice  */}
                                                <span className="new-price">{lot.price!=undefined? (
                                                     lot.price
                                                ):(
                                                  lot.newPrice
                                                )} تومان</span>
                                            </div>
                                            <div className="ec-single-stoke">
                                                <span className="ec-single-ps-title"> در انبار</span>
                                                <span className="ec-single-sku">موجودی: {lot.inventory}</span>
                                            </div>
                                        </div>
                                           { 
                                           lot.size!=undefined && (
                                            <div className="ec-pro-variation">
                                            <div className="ec-pro-variation-inner ec-pro-variation-size">
                                                <span>اندازه</span>
                                                <div className="ec-pro-variation-content">
                                                    <ul>
                                                      {lot.size.map((el:any,i:number)=>{
                                                        return (<>
                                                        <li onClick={()=>handleSizeClick(el)} value={el} key={i} className={activeSize==el ? ("active"):(" ")}
                                                       ><span  >{el}</span></li>
                                                        </>)
                                                      })}
                                                        
                                                        {/* <li><span>M</span></li>
                                                        <li><span>L</span></li>
                                                        <li><span>XL</span></li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                         
                                        </div>
                                           ) 
                                           }
                                      
                                        <div className="ec-single-qty">
                                            <div className="qty-plus-minus">
                                              <div className='dec ec_qtybtn'  onClick={decrementCount}>-</div>
                                                <input className="qty-input"  type="number" name="ec_qtybtn" defaultValue={1} value={customerLot.count} onChange={(e)=>handleCountInputChange(e)} />
                                                <div className='inc ec_qtybtn' onClick={incrementCount}>+</div>
                                            </div>
                                            <div className="ec-single-cart ">
                                                <button className="btn btn-primary">افزودن به سبد خرید</button>
                                            </div>
                                            <div className="ec-single-wishlist">
                                                <a className="ec-btn-group wishlist" title="علاقه مندی"><img src="/images/icons/wishlist.svg" className="svg_img pro_svg" alt="Product"/></a>
                                            </div>
                                            <div className="ec-single-quickview">
                                                <a href="#" className="ec-btn-group quickview" data-link-action="quickview" title="مشاهده" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="/images/icons/quickview.svg" className="svg_img pro_svg" alt="Product" /></a>
                                            </div>
                                        </div>
                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  <Comments/>
                
                </div>
            
                
            </div>
        </div>
    </section>
  

<RelatedLots lot={lot}/>
  
    </>
    
  )
  }
  

//https://stackoverflow.com/questions/31861109/tls-what-exactly-does-rejectunauthorized-mean-for-me
axios.defaults.httpsAgent=new https.Agent({
  rejectUnauthorized:false,
})
  

  
let error=""

export const getStaticPaths:GetStaticPaths=async(context:any)=>{
  let paths=[]
  let lots:any=[]
  try{
     lots= await getLots();

    paths=await lots.map((el:any)=>({params:{id:el.id.toString()}}))
  }
  catch(er:any){
    error=er.message
  }

 




return{
paths,
//fallback works when you write unknwon url in addressbar if it's false it returns 404 ,else if it's true or blocking, It returns :Cannot read properties of undefined except that in blocking mode you can't see exception and status! in production mode there are no diffrences!

fallback:
false,
}
}
//@ts-ignore
let lot={};

 export const getStaticProps:GetStaticProps=async(context:any)=>{
    try{
      const id=context.params.id
       lot= await getLotById(id)
     
    }
    catch(er:any){
   error=er.message
    }
 


  
  return{
    //@ts-ignore
    props:{lot,error}
    
      
    
  }
}


export default LotDetails;