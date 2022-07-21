import React from 'react'

 const CommingSoon = () => {
  return (
    <>
    <div className="container">
      <div className="row">
      <div className="section-title comming-soon-title">
    <h4 className="ec-title ">به زودی :</h4>
    </div>
      </div>
    </div>
  
   
    <section className="ec-banner section section-space-p">
        <h2 className="d-none">بنر</h2>
        <div className="container">
          
            <div className="ec-banner-inner">
            
                <div className="ec-banner-block ec-banner-block-2">
                    <div className="row">
                        <div className="banner-block col-lg-6 col-md-12 margin-b-30" data-animation="slideInRight">
                            <div className="bnr-overlay">
                                <img src="../images/banner/2.jpg" alt=""/>
                                <div className="banner-text">
                                    
                                    <span className="ec-banner-title">کفش<br/> مردانه</span>
                                    <span className="ec-banner-discount">30% تخفیف</span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="banner-block col-lg-6 col-md-12" data-animation="slideInLeft">
                            <div className="bnr-overlay">
                                <img src="../images/banner/3.jpg" alt=""/>
                                <div className="banner-text">
                                    <span className="ec-banner-stitle">در حال ترند شدن</span>
                                    <span className="ec-banner-title">ساعت<br/> هوشمند</span>
                                    <span className="ec-banner-discount">سه تا بخرید برای <br/>20% تخفیف</span>
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
export default CommingSoon