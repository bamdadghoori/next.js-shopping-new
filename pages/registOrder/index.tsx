import React from 'react'
import axios from 'axios'
import { useEffect,useRef,useState } from 'react'
import { useSelector } from 'react-redux'
import {RootState} from  "../../redux/store"
import { Axios } from 'axios'
//@ts-ignore
// import NeshanMap from 'react-neshan-map-leaflet'
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

// import * as ol from "ol";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
// import * as L from "leaflet";

import OLTileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import * as yup from 'yup';
import { truncate } from 'fs/promises'

// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'

// import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'


 const RegistOrder = () => {
    const currentDate=new Date()
 const localCurrentDate=new Date().toLocaleDateString('fa-IR',{year:'numeric',month:'2-digit',day:'2-digit',formatMatcher:'basic'});

 const [errors,setErrors]:any[]=useState([])
 const [showSuccessMessage,setShowSuccessMessage]=useState(false)

 const paymentRef:any=useRef();
 
 //validating using yup 
 const schema=yup.object().shape({
    name:yup.string().required('فیلد نام الزامی است'),
    family:yup.string().required('فیلد نام خانوادگی الزامی است'),
    address:yup.string().required('فیلد آدرس الزامی است'),
    //@ts-ignore
    postalCode:yup.string().when('postalCode',(val,schema)=>{
if(val && val.length>0){
  return  yup.string().matches(/^\d{10}$/,'کد پستی را به صورت عددی ده رقمی و بدون خط تیره وارد کنید')
}
else{
   return yup.string().notRequired();
}
    })
 },[["postalCode","postalCode"]])

const convertWeekDayNumToString=(weekNumber:number)=>{
   switch(weekNumber){
         case 1:
            return 'دوشنبه'
            break;
            case 2:
                return 'سه شنبه'
                break;
                case 3:
                return 'چهار شنبه'
                break;
                case 4:
                    return 'پنج شنبه'
                    break;
                    case 5:
                        return 'جمعه'
                        break;
                        case 6:
                            return 'شنبه'
                            break;
                            case 0:
                            return 'یکشنبه'
                            break;
                            default:
                                return ' '

        
   }
}

 //  to get date of tomorrows
 const firstDate:Date=new Date();
 let localFirstDate:string=""
    firstDate.setDate(currentDate.getDate()+1)
    //check if the day is friday or not
    if(firstDate.getDay()==5){
        firstDate.setDate(firstDate.getDate()+1)
       
    }
    localFirstDate=firstDate.toLocaleDateString('fa-IR',{year:'numeric',month:'2-digit',day:'2-digit',formatMatcher:'basic'});
    const secondDate=new Date();
    let localSecondDate:string=""
    secondDate.setDate(firstDate.getDate()+1)
//check if the day is friday or not
    if(secondDate.getDay()==5){
        console.log(secondDate.getDay())
        secondDate.setDate(secondDate.getDate()+1)
        

    }
    localSecondDate=secondDate.toLocaleDateString('fa-IR',{year:'numeric',month:'2-digit',day:'2-digit',formatMatcher:'basic'});
 console.log(firstDate,secondDate.getDay())

 //sending times Array
const selectBoxDates=[{id:1,weekDay:convertWeekDayNumToString(firstDate.getDay()),date:localFirstDate,firstTime:8,secondTime:12},{id:2,weekDay:convertWeekDayNumToString(firstDate.getDay()),date:localFirstDate,firstTime:16,secondTime:20},{id:3,weekDay:convertWeekDayNumToString(secondDate.getDay()),date:localSecondDate,firstTime:8,secondTime:12},{id:4,weekDay:convertWeekDayNumToString(secondDate.getDay()),date:localSecondDate,firstTime:16,secondTime:20}]

const cities=[{id:1,name:'تهران',regions:[1,2,3,4,5,6,7,8,9,10]},{
    id:2,name:'کرج',regions:[1,2,3,4]
}]

const [informations,setInformations]=useState({
    name:'',
    family:'',
    address:'',
    city:cities[0],
    // regions:cities[0].regions,
    selectedRegion:1,
    sendingTime:selectBoxDates[1],
    postalCode:'',
    comment:''
   
})
console.log(selectBoxDates)

//calculating total price
    let lots=useSelector((state:RootState)=>state.persistedReducer.customerLots)
              
              let totalPrice:number=0;
  lots.forEach((el:any) => {
    //some lots have price property and some other have newPrice! 
    if(el.price!=undefined){
      totalPrice+=el.price*el.count
    }
    else{
      totalPrice=el.newPrice*el.count
    }
   
  });

   let mapRef:any=useRef();
    const config:any={
        headers:{
            'Api-Key':'service.fa3e8f07bdc24a468cef5b92e811b9c1'
        }
	

    }

const [totalSendingCost,setTotalSendingCost]=useState(0)

const changeSendingTime=(e:React.ChangeEvent<HTMLSelectElement>)=>{
//to calculate sending cost


  const value=e.target.value
  //to find the selected date
  let selectedDate:any=selectBoxDates.filter((el:any)=>el.id.toString()==value)
  selectedDate=selectedDate[0]

  setInformations({...informations,sendingTime:selectedDate})
  //sending time increases in fast sending
      calculateSendingCost(value)
}

//to set selected city
const changeSelectedCity=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    const value=e.target.value;
    //to find the selected city
    let selectedCity:any=cities.filter((el:any)=>el.id.toString()==value)
    selectedCity=selectedCity[0]
    setInformations({...informations,city:selectedCity,selectedRegion:(selectedCity.regions)[0]})
   
}
//to set selectedRegion
const changeSelectedRegion=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    const value=e.target.value;
    //to find the selected city
    let selectedRegion:any=informations.city.regions.filter((el:any)=>el.toString()==value)
    selectedRegion=selectedRegion[0]
    console.log(selectedRegion)
    setInformations({...informations,selectedRegion:selectedRegion})
}

//to calculate sending cost
const calculateSendingCost=(value:string)=>{
// consider at least 10000 for  sending
const initialCost=10000
  let sendingCost:number=0;
  let sendingTimeFactor=0;
  if(value=="1"||value=="2"){
    sendingTimeFactor=10000
  }

  //formula for sending cost is : sendingCost=(sendingCost Of each lots in category)*initialCost+sendingTimeFactor and sendingCost Of each lots in category each category is calcuteCategoryFactor(el.category)*el.count
  lots.forEach((el:any)=>{
    //formula for sending cost
   sendingCost+=calcuteCategoryFactor(el.category)*el.count
  })
  sendingCost=sendingCost*initialCost+sendingTimeFactor;
  
    console.log(sendingCost)
    setTotalSendingCost(sendingCost)

}



const calcuteCategoryFactor=(factor:string)=>{
      switch(factor){
        case 'لباس':
            return 2 
            break;
            case 'مبلمان':
                return 2 
                break;
                case 'الکترونیک':
                    return 2 
                    break;
                    case 'مواد غذایی':
                        return 2 
                        break;
                        default:
                            return 0;
      }
}

//to set textBoxes controlled
const changeTextBox=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
    const value=e.target.value
    setInformations({...informations,[e.target.name]:value})
}

//to submit form informations
const handleSubmit=async(e:React.MouseEvent<HTMLAnchorElement>)=>{
e.preventDefault();
   const isValid=await validate();
   if(isValid==true){
    setErrors([])
    setShowSuccessMessage(true)
   }
   else{
    setShowSuccessMessage(false)
   }
     paymentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

//validating
const validate=async()=>{
    try{
      await schema.validate(informations,{abortEarly:false})
        return true
        
    }
    catch(er:any){
          
            setErrors(er.errors)
            return false
    }
}


    const position:any = [51.505, -0.09]
// config map settings
    // var myMap = new ol.Map({
    //   target:'map',
    //     // key:'service.fa3e8f07bdc24a468cef5b92e811b9c1',
    //     // maptype: 'dreamy',
    //     // poi: true,
    //     // traffic: false,
    //     view: new ol.View({
    //         center: [12,12],
    //         zoom: 1
    //     }),
    //     layers: [
    //         // new ol.layer.Til
    //         // new OLTileLayer({
    //         //     // source:new OSM()
    //         // }),
    //       ],
    // });
  

    const url='https://api.neshan.org/v2/static?key=service.fa3e8f07bdc24a468cef5b92e811b9c1&type=dreamy&zoom=14&center=35.700538,51.337907&width=1120&height=300&marker=red'
    // const url='https://balad.ir/p/4v916MRokpnB5d'

    
    new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new XYZ({
              url:url
            })
          })
        ],
        
        view: new View({
          center: [0, 0],
          zoom: 6
        })
      });
    const geoUrl ="https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"
 
    // myMap.setTarget(mapRef.current);
    const getMap=async()=>{
//    const response= await axios.get('https://api.neshan.org/v1/search?term=jeyhoon&lat=300&lng=400',config)
    // const response=await axios.get('https://api.neshan.org/v2/static?key=YOUR_API_KEY&type=dreamy&zoom=13&center=35.700538,51.337907&width=1120&height=300&marker=red')
//    console.log(response)
    }
    useEffect(()=>{
        
         calculateSendingCost('1')
    },[lots])
  return (
    <>
    {console.log(informations)}
{/* 
<ComposableMap>
      <Geographies geography={url}>
        {({ geographies }:{geographies:any[]}) =>
          geographies.map((geo:any) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap> */}

      {/* <map ref={mapRef} id='map' className="ol-map">
          
      </map> */}
      

      {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution=''
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer> */}
   
     <section className="ec-page-content section-space-p checkout_page">
        <div className="container">
            <div className="row">
                <div className="ec-checkout-leftside col-lg-8 col-md-12 ">
                  
                    <div className="ec-checkout-content">
                        <div className="ec-checkout-inner">
                            
                            <div ref={paymentRef} className="ec-checkout-wrap margin-bottom-30 padding-bottom-3">
                                <div className="ec-checkout-block ec-check-bill">
                                    <h3 className="ec-checkout-title">جزییات پرداخت</h3>
                                    <div className="ec-bl-block-content">
                                     
                                    <div className="section-title">
  {errors!=undefined && errors.map((el:any,i:number)=>{
      return <p className="sub-title mb-3" style={{"textAlign":"center","color":"#b2001a"}}>{el}</p>
  })}
  {showSuccessMessage==true && (
    <p className="sub-title mb-3" style={{"textAlign":"center","color":"#0f5132"}}>سفارش شما با موفقیت ثبت شد</p>
  )}
  </div>
                                        <div className="ec-check-bill-form">
                                            <form action="#" method="post">
                                                <span className="ec-bill-wrap ec-bill-half">
                                                    <label>نام *</label>
                                                    <input type="text" value={informations.name} onChange={changeTextBox} name="name" placeholder="نام خود را وارد کنید"  />
                                                </span>
                                                <span className="ec-bill-wrap ec-bill-half">
                                                    <label> نام خانوادگی *</label>
                                                    <input value={informations.family} onChange={changeTextBox} type="text" name="family" placeholder="نام خانوادگی خود را وارد کنید"  />
                                                </span>
                                                <span className="ec-bill-wrap">
                                                    <label>آدرس</label>
                                                    <input type="text" value={informations.address} onChange={changeTextBox} name="address" placeholder="آدرس خط اول" />
                                                </span>
                                                <span className="ec-bill-wrap ec-bill-half">
                                                    <label>شهر *</label>
                                                    <span className="ec-bl-select-inner">
                                                        <select name="ec_select_city" id="ec-select-city" className="ec-bill-select" onChange={changeSelectedCity}>
                                                           {cities.map((el:any)=>{
                                                            return <option key={el.id} value={el.id.toString()}>{el.name}</option>
                                                           })}
                                                        </select>
                                                    </span>
                                                </span>
                                                <span className="ec-bill-wrap ec-bill-half">
                                                    <label>کد پستی</label>
                                                    <input dir='ltr
                                                    ' onChange={changeTextBox} type="text" name="postalCode" placeholder="کدپستی" />
                                                </span>
                                                <span className="ec-bill-wrap ec-bill-half">
                                                    <label>زمان ارسال *</label>
                                                    <span className="ec-bl-select-inner">
                                                        <select name="ec_select_country" id="ec-select-country" onChange={changeSendingTime} className="ec-bill-select">
                                                            {selectBoxDates.map((el:any)=>{
                                                                
                                                              return <option  key={el.id} value={el.id.toString()}>{el.weekDay} {el.date} ساعت {el.firstTime} تا {el.secondTime}{el.endTime}</option>
                                                            })}
                                                        </select>
                                                    </span>
                                                </span>
                                                <span className="ec-bill-wrap ec-bill-half">
                                                    <label>منطقه</label>
                                                    <span className="ec-bl-select-inner">
                                                        <select name="ec_select_state" id="ec-select-state" className="ec-bill-select" onChange={changeSelectedRegion}>
                                                            {informations.city.regions.map((el:any)=>{
                                                                return <option selected={el==informations.selectedRegion ? true:false}  key={el} value={el.toString()}>منطقه {el}</option>
                                                            })}
                                                        </select>
                                                    </span>
                                                </span>
                                            </form>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <span className="ec-check-order-btn">
                                <a className="btn btn-primary" onClick={handleSubmit} href="#">سفارش</a>
                            </span>
                        </div>
                    </div>
                   
                </div>
              
                <div className="ec-checkout-rightside col-lg-4 col-md-12">
                   
                    <div className="ec-sidebar-wrap ec-checkout-del-wrap">
                     
                        <div className="ec-sidebar-block">
                            <div className="ec-sb-title">
                                <h3 className="ec-sidebar-title">قیمت</h3>
                            </div>
                            <div className="ec-sb-block-content">
                                <div className="ec-checkout-del">
                                    <div className="ec-del-desc">هزینه ارسال با توجه به دسته بندی محصول، تعداد و زمان ارسال محاسبه شده است.</div>
                                    <form action="#">
                                        <span className="ec-del-option">
                                            <span>
                                                <span className="ec-del-opt-head"> قیمت کالاها</span>
                                       
                                        <label >{totalPrice} تومان</label>
                                        </span>
                                        <span>
                                                <span className="ec-del-opt-head">هزینه ارسال</span>
                                      
                                     <label >{totalSendingCost} تومان</label>
                                     
                                       
                                        </span>
                                        </span>
                                        <span className="ec-del-commemt">
                                            <span className="ec-del-opt-head">اضافه کردن یادداشت در مورد سفارش </span>
                                        <textarea value={informations.comment} name="comment" placeholder="یادداشت" onChange={changeTextBox}></textarea>
                                        </span>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="ec-sidebar-wrap ec-checkout-pay-wrap">
                      
                        <div className="ec-sidebar-block">
                            <div className="ec-sb-title">
                                <h3 className="ec-sidebar-title">روش پرداخت</h3>
                            </div>
                            <div className="ec-sb-block-content">
                                <div className="ec-checkout-pay">
                                    <div className="ec-pay-desc">لطفا روش پرداخت مورد نظر را برای این سفارش انتخاب کنید.</div>
                                    <form action="#">
                                        <span className="ec-pay-option">
                                            <span>
                                                <input type="radio" id="pay1" name="radio-group"  />
                                                <label htmlFor="pay1">نقدی هنگام تحویل</label>
                                            </span>
                                        </span>
                                     
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
        </div>
        </div>
    </section>
    </>
  )
}
export default RegistOrder
