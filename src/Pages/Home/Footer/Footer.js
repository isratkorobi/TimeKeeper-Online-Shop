import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
           <div className="footer bg-light py-5 text-dark"> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footone">
                                <h3 className="logo pb-4">TimeKeeper</h3>
                                <h6 className="fw-bold">We Ship Every Where! Free In The US</h6>
                                <p>Even the all powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name .</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <h5 className="mb-4 fw-bold">Contact Us</h5>
                            <p><strong>Phone:</strong> +1 403-253-7717</p>

                            <p><strong>Email:</strong> Info@yourdomain.com</p>

                            <div className="icon-area">
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <h5 className="mb-4 fw-bold">ADDRESS</h5>
                            <p>123 Ave, Lorem City, Site Country, the World</p>
                        </div>

                        <div className="col-md-3">
                            <h5 className="mb-4 fw-bold">GET DISCOUNT 30% OFF</h5>
                            <p>Get 20% discount with notified about the latest news and updates. No spam, we promise!</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="bottom bg-dark py-4 text-light text-center">
                <p className="m-0">All Rights Reserved &copy; Israt Korobi | 2021</p>
            </div>
        </div>
    );
};

export default Footer;