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

// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'

// import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'


 const RegistOrder = () => {
    const currentDate=new Date()
 const localCurrentDate=new Date().toLocaleDateString('fa-IR',{year:'numeric',month:'2-digit',day:'2-digit',formatMatcher:'basic'});

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
    firstDate.setDate(currentDate.getDate()+1)
    //check if the day is friday or not
    if(firstDate.getDay()==5){
        firstDate.setDate(firstDate.getDate()+1)
    }
    const secondDate=new Date();
    secondDate.setDate(firstDate.getDate()+1)
//check if the day is friday or not
    if(secondDate.getDay()==5){
        console.log(secondDate.getDay())
        secondDate.setDate(secondDate.getDate()+1)
    }
 console.log(firstDate,secondDate.getDay())

const selectBoxDates=[{weekDay:convertWeekDayNumToString(firstDate.getDay()),mounthDay:firstDate.getDate(),firstTime:8,secondTime:12},{weekDay:convertWeekDayNumToString(firstDate.getDay()),mounthDay:firstDate.getDate(),firstTime:16,secondTime:20},{weekDay:convertWeekDayNumToString(secondDate.getDay()),mounthDay:secondDate.getDate(),firstTime:8,secondTime:12},,{weekDay:convertWeekDayNumToString(secondDate.getDay()),mounthDay:secondDate.getDate(),firstTime:16,secondTime:20}]
console.log(selectBoxDates)
    let lots=useSelector((state:RootState)=>state.persistedReducer.customerLots)
   let mapRef:any=useRef();
    const config:any={
        headers:{
            'Api-Key':'service.fa3e8f07bdc24a468cef5b92e811b9c1'
        }
	

    }

const [sendingCost,setSendingCost]=useState(0)

//to calcute sending cost
const calcuteSendingCost=()=>{
      
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
        getMap()
    },[])
  return (
    <>
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
                            
                            <div className="ec-checkout-wrap margin-bottom-30 padding-bottom-3">
                                <div className="ec-checkout-block ec-check-bill">
                                    <h3 className="ec-checkout-title">جزییات پرداخت</h3>
                                    <div className="ec-bl-block-content">
                                     
                                        <div className="ec-check-bill-form">
                                            <form action="#" method="post">
                                                <span className="ec-bill-wrap ec-bill-half">
                                                    <label>نام *</label>
                                                    <input type="text" name="firstname" placeholder="نام خود را وارد کنید"  />
                                                </span>
                                                <span className="ec-bill-wrap ec-bill-half">
                                                    <label> نام خانوادگی *</label>
                                                    <input type="text" name="lastname" placeholder="نام خانوادگی خود را وارد کنید"  />
                                                </span>
                                                <span className="ec-bill-wrap">
                                                    <label>آدرس</label>
                                                    <input type="text" name="address" placeholder="آدرس خط اول" />
                                                </span>
                                                <span className="ec-bill-wrap ec-bill-half">
                                                    <label>شهر *</label>
                                                    <span className="ec-bl-select-inner">
                                                        <select name="ec_select_city" id="ec-select-city" className="ec-bill-select">
                                                            <option >شهر </option>
                                                            <option value="1">شهر  1</option>
                                                            <option value="2">شهر  2</option>
                                                            <option value="3">شهر  3</option>
                                                            <option value="4">شهر  4</option>
                                                            <option value="5">شهر  5</option>
                                                        </select>
                                                    </span>
                                                </span>
                                                <span className="ec-bill-wrap ec-bill-half">
                                                    <label>کد پستی</label>
                                                    <input type="text" name="postalcode" placeholder="کدپستی" />
                                                </span>
                                                <span className="ec-bill-wrap ec-bill-half">
                                                    <label>زمان ارسال *</label>
                                                    <span className="ec-bl-select-inner">
                                                        <select name="ec_select_country" id="ec-select-country" className="ec-bill-select">
                                                            {selectBoxDates.map((el:any,i:number)=>{
                                                              return <option value={i.toString()}>{el.weekDay} {el.mounthDay} ساعت {el.firstTime} تا {el.secondTime}{el.endTime}</option>
                                                            })}
                                                            <option value="1">کشور 1</option>
                                                            <option value="2">کشور 2</option>
                                                            <option value="3">کشور 3</option>
                                                            <option value="4">کشور 4</option>
                                                            <option value="5">کشور 5</option>
                                                        </select>
                                                    </span>
                                                </span>
                                                <span className="ec-bill-wrap ec-bill-half">
                                                    <label>منطقه</label>
                                                    <span className="ec-bl-select-inner">
                                                        <select name="ec_select_state" id="ec-select-state" className="ec-bill-select">
                                                            <option >منطقه/ایالت</option>
                                                            <option value="1">منطقه/ایالت 1</option>
                                                            <option value="2">منطقه/ایالت 2</option>
                                                            <option value="3">منطقه/ایالت 3</option>
                                                            <option value="4">منطقه/ایالت 4</option>
                                                            <option value="5">منطقه/ایالت 5</option>
                                                        </select>
                                                    </span>
                                                </span>
                                            </form>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <span className="ec-check-order-btn">
                                <a className="btn btn-primary" href="#">سفارش</a>
                            </span>
                        </div>
                    </div>
                   
                </div>
              
                <div className="ec-checkout-rightside col-lg-4 col-md-12">
                   
                    <div className="ec-sidebar-wrap ec-checkout-del-wrap">
                     
                        <div className="ec-sidebar-block">
                            <div className="ec-sb-title">
                                <h3 className="ec-sidebar-title">روش ارسال</h3>
                            </div>
                            <div className="ec-sb-block-content">
                                <div className="ec-checkout-del">
                                    <div className="ec-del-desc">لطفا روش حمل و نقل ترجیحی را برای این سفارش انتخاب کنید.</div>
                                    <form action="#">
                                        <span className="ec-del-option">
                                            <span>
                                                <span className="ec-del-opt-head"> ارسال رایگان </span>
                                        <input type="radio" id="del1" name="radio-group"  />
                                        <label htmlFor="del1">هزینه -  0</label>
                                        </span>
                                        <span>
                                                <span className="ec-del-opt-head">ارسال سریع</span>
                                        <input type="radio" id="del2" name="radio-group" />
                                        <label htmlFor="del2">هزینه - 5000 تومان</label>
                                        </span>
                                        </span>
                                        <span className="ec-del-commemt">
                                            <span className="ec-del-opt-head">اضافه کردن یادداشت در مورد سفارش </span>
                                        <textarea name="your-commemt" placeholder="یادداشت"></textarea>
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
                                        <span className="ec-pay-commemt">
                                            <span className="ec-pay-opt-head">اضافه کردن یادداشت در مورد سفارش </span>
                                        <textarea name="your-commemt" placeholder="یادداشت"></textarea>
                                        </span>
                                        <span className="ec-pay-agree"><input type="checkbox" value="" /><a href="#">تمامی موارد <span>قوانین و شرایط</span> را خوانده ام</a><span className="checked"></span></span>
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
