import React from 'react'

 const Lot = ({lot,listStyle}:{lot:any,listStyle:boolean}) => {
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

    
    return(
           
        <div key={lot.id} className={`ec-product-inner ${listStyle ==true ? "bg-white":" "}`} >
            <div className="ec-pro-image-outer">
                <div className="ec-pro-image">
                    <a href="product-left-sidebar.html" className="image">
                        <img className="main-image" src={lot.imgUrl} alt="Product"/>
                       
                    </a>
                    <span className="percentage">20%</span>
                    <a href="#" className="quickview" data-link-action="quickview" title="مشاهده" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="/images/icons/quickview.svg" className="svg_img pro_svg" alt=""/></a>
                    <div className="ec-pro-actions">
                        <a href="compare.html" className="ec-btn-group compare" title="مقایسه"><img src="/images/icons/compare.svg" className="svg_img pro_svg" alt=""/></a>
                        <button title="افزودن به سبد خرید" className=" add-to-cart"><img src="/images/icons/cart.svg" className="svg_img pro_svg" alt=""/> افزودن به کارت </button>
                        <a className="ec-btn-group wishlist" title="علاقه مندی"><img src="/images/icons/wishlist.svg" className="svg_img pro_svg" alt=""/></a>
                    </div>
                </div>
            </div>
            <div className="ec-pro-content">
                <h5 className="ec-pro-title"><a href="product-left-sidebar.html">{lot.title}</a></h5>
                <div className="ec-pro-rating">
                       {stars.map((el)=>{
                       return <i className="ecicon eci-star fill"></i>
                       })}
                          {
                            emptyStars.map((el)=>{
                                return <i className="ecicon eci-star"></i>
                            })
                          }
                    
                </div>
                <div className="ec-pro-list-desc">{lot.description}</div>
                <span className="ec-price">
                    {
                        lot.off===true ?(
                            <>
                            <span className="old-price">{lot.oldPrice} تومان</span>
                            <span className="new-price">{lot.newPrice} تومان</span>
                            </>
                        ):(
                            <span className="new-price">{lot.price} تومان</span>
                        )
                    }
                 
                </span>
                <div className="ec-pro-option">
                    <div className="ec-pro-color">
                        <span className="ec-pro-opt-label">رنگ</span>
                        {/* <ul className="ec-opt-swatch ec-change-img">
                            <li className="active"><a href="#" className="ec-opt-clr-img" data-src="/images/product-image/6_1.jpg" data-src-hover="/images/product-image/6_1.jpg" data-tooltip="Gray"><span style={{"backgroundColor":"#e8c2ff;"}}></span></a></li>
                            <li><a href="#" className="ec-opt-clr-img" data-src="/images/product-image/6_2.jpg" data-src-hover="/images/product-image/6_2.jpg" data-tooltip="Orange"><span style={{"backgroundColor":"#9cfdd5;"}}></span></a></li>
                        </ul> */}
                    </div>
                    <div className="ec-pro-size">
 <span className="ec-pro-opt-label">اندازه</span>
 <ul className="ec-opt-size">
                    {lot.size &&(
 
    lot.size.map((el:any,i:number)=>{
        return (
            <li key={i} ><a href="#" className="ec-opt-sz" data-tooltip="Small">{el}</a></li>
        )
    }))}
     {/* <li className="active"><a href="#" className="ec-opt-sz" data-old="2500 تومان" data-new="2000 تومان" data-tooltip="Small">S</a></li>
     <li><a href="#" className="ec-opt-sz" data-old="2700 تومان" data-new="2200 تومان" data-tooltip="Medium">M</a></li>
     <li><a href="#" className="ec-opt-sz" data-old="3000 تومان" data-new="2500 تومان" data-tooltip="Large">X</a></li>
     <li><a href="#" className="ec-opt-sz" data-old="3500 تومان" data-new="3000 تومان" data-tooltip="Extra Large">XL</a></li> */}
 </ul>
</div>
                   
                   
                </div>
            </div>
        </div>
    
    )
}
export default Lot