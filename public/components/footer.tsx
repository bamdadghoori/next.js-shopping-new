import React from 'react'

 const Footer = () => {
  return (
    <>
    <footer className="ec-footer section-space-mt">
        <div className="footer-container">
            <div className="footer-offer">
                <div className="container">
                    <div className="row">
                        <div className="text-center footer-off-msg">
                            <span>مسابقه را ببرید و نسخه محدود رایگان را جایزه بگیرید</span><a href="#" target="_blank">مشاهده جزییات</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-top section-space-footer-p">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-3 ec-footer-contact">
                            <div className="ec-footer-widget">
                                <div className="ec-footer-logo">
                                    <a href="#"><img src="assets/images/logo/footer-logo.png" alt=""/><img className="dark-footer-logo" src="assets/images/logo/dark-logo.png" alt="لوگو سایت" style={{"display": "none;"}}/></a>
                                </div>
                                <h4 className="ec-footer-heading">ارتباط با ما</h4>
                                <div className="ec-footer-links">
                                    <ul className="align-items-center">
                                        <li className="ec-footer-link">یک آدرس فرضی در این مکان قرار گرفته است. غرب تهران</li>
                                        <li className="ec-footer-link"><span>تماس با ما:</span><a href="tel:+440123456789">+44
                                                0123 456 789</a></li>
                                        <li className="ec-footer-link"><span>ایمیل:</span><a href="/cdn-cgi/l/email-protection#eb8e938a869b878eab8e88c68e868a8287c5888486"><span className="__cf_email__" data-cfemail="5f743a273e322f333a1f3a3c723a323e3633713c3032">[email&#160;protected]</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-2 ec-footer-info">
                            <div className="ec-footer-widget">
                                <h4 className="ec-footer-heading">اطلاعات</h4>
                                <div className="ec-footer-links">
                                    <ul className="align-items-center">
                                        <li className="ec-footer-link"><a href="about-us.html">درباره ما</a></li>
                                        <li className="ec-footer-link"><a href="faq.html">سوالات متداول</a></li>
                                        <li className="ec-footer-link"><a href="track-order.html"> اطلاعات تحویل </a></li>
                                        <li className="ec-footer-link"><a href="contact-us.html">ارتباط با ما</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-2 ec-footer-account">
                            <div className="ec-footer-widget">
                                <h4 className="ec-footer-heading"> اکانت </h4>
                                <div className="ec-footer-links">
                                    <ul className="align-items-center">
                                        <li className="ec-footer-link"><a href="user-profile.html"> اکانت من </a></li>
                                        <li className="ec-footer-link"><a href="track-order.html"> تاریخچه سفارش </a></li>
                                        <li className="ec-footer-link"><a href="wishlist.html"> لیست علاقه‌مندیها </a></li>
                                        <li className="ec-footer-link"><a href="offer.html"> ویژه </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-2 ec-footer-service">
                            <div className="ec-footer-widget">
                                <h4 className="ec-footer-heading">خدمات</h4>
                                <div className="ec-footer-links">
                                    <ul className="align-items-center">
                                        <li className="ec-footer-link"><a href="track-order.html"> تخفیف ها</a></li>
                                        <li className="ec-footer-link"><a href="privacy-policy.html">سیاست حفظ حریم خصوصی</a></li>
                                        <li className="ec-footer-link"><a href="terms-condition.html">خدمات مشتری</a></li>
                                        <li className="ec-footer-link"><a href="terms-condition.html">قوانین و شرایط</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-3 ec-footer-news">
                            <div className="ec-footer-widget">
                                <h4 className="ec-footer-heading"> خبرنامه </h4>
                                <div className="ec-footer-links">
                                    <ul className="align-items-center">
                                        <li className="ec-footer-link"> !دریافت به روز رسانی های فوری در مورد محصولات ویژه و جدید ما
                                        </li>
                                    </ul>
                                    <div className="ec-subscribe-form">
                                        <form id="ec-newsletter-form" name="ec-newsletter-form" method="post" action="#">
                                            <div id="ec_news_signup" className="ec-form">
                                                <input className="ec-email" type="email" placeholder="ایمیل خود را اینجا وارد کنید..." name="ec-email" value=""/>
                                                <button id="ec-news-btn" className="button btn-primary" type="submit" name="subscribe" value=""><i className="ecicon eci-paper-plane-o" aria-hidden="true"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                       
                        <div className="col text-left footer-bottom-left">
                            <div className="footer-bottom-social">
                                <span className="social-text text-upper">ما را دنبال کنید در:</span>
                                <ul className="mb-0">
                                    <li className="list-inline-item"><a className="hdr-facebook" href="#"><i className="ecicon eci-facebook"></i></a></li>
                                    <li className="list-inline-item"><a className="hdr-twitter" href="#"><i className="ecicon eci-twitter"></i></a></li>
                                    <li className="list-inline-item"><a className="hdr-instagram" href="#"><i className="ecicon eci-instagram"></i></a></li>
                                    <li className="list-inline-item"><a className="hdr-linkedin" href="#"><i className="ecicon eci-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                       
                        <div className="col text-center footer-copy">
                            <div className="footer-bottom-copy ">
                                <div className="ec-copy">کپی رایت © 1401-1400<a className="site-name text-upper" href="#">اکا<span>.</span></a>. تمامی حقوق محفوظ است</div>
                            </div>
                        </div>
                        
                        <div className="col footer-bottom-right">
                            <div className="footer-bottom-payment d-flex justify-content-end">
                                <div className="payment-link">
                                    <img src="assets/images/icons/payment.png" alt=""/>
                                </div>

                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
export default Footer