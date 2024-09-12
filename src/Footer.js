import React, { useState } from 'react';
import './Footer.css';
import image from  './image.png';
import insta from  './insta.png';
import link from   './link.png';
import usa from   './usa.png';


const Footer = () => {
    const [openSection, setOpenSection] = useState(null);
    const toggleSection = (section) => {
        if (window.innerWidth <= 768) {
            setOpenSection(openSection === section ? null : section);
        }
    };

    return (
        <footer className="footer">

            <div className="footer-newsletter">
                <div>
                    <h4>BE THE FIRST TO KNOW</h4>
                    <p>Sign up for updates from mettä muse.</p>
                    <form className="newsletter-form">
                        <input className='input-email' type="email" placeholder="Enter your e-mail..." />
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                </div>
                <div >

                    <h4 className="contact-heading">CONTACT US</h4>
                    <p>+44 221 133 5360</p>
                    <p className="contact-email">customercare@mettamuse.com</p>

                    <h4 className="currency-heading">CURRENCY</h4>
                    <div className="currency-container">
                        <img src={usa} alt="US Flag" className="flag-image" />
                        <span>USD</span>
                    </div>

                    <p className="currency-info">Transactions will be completed in Euros and a currency reference .</p>
                </div>
            </div>
            <div className="bold-line"></div>

            <div className="footer-content">

                <div className="footer-column">
                    <h4 className="footer-heading">METTÄ MUSE</h4>
                    <h5
                        onClick={() => toggleSection('muse')}
                        className="footer-toggle"
                    >
                        mettā muse {openSection === 'muse' }
                    </h5>
                    <ul
                        className={`footer-list ${openSection === 'muse' ? 'show' : ''} ${window.innerWidth > 768 ? 'always-show' : ''
                            }`}
                    >
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Stories</a></li>
                        <li><a href="#">Artisans</a></li>
                        <li><a href="#">Boutiques</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">EU Compliances Docs</a></li>
                    </ul>
                </div>


                <div className="footer-column">
                    <h4 className="footer-heading">Quick Links</h4>
                    <h5
                        onClick={() => toggleSection('quickLinks')}
                        className="footer-toggle"
                    >
                        Quick Links {openSection === 'quickLinks' }
                    </h5>
                    <ul
                        className={`footer-list ${openSection === 'quickLinks' ? 'show' : ''
                            } ${window.innerWidth > 768 ? 'always-show' : ''}`}
                    >
                        <li><a href="#">Orders & Shipping</a></li>
                        <li><a href="#">Join/Login as a Seller</a></li>
                        <li><a href="#">Payment & Pricing</a></li>
                        <li><a href="#">Return & Refunds</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className="footer-column">

                    <div >
                        <h4 className="footer-heading">Follow Us</h4>

                        <div  className="footer-column">

                            <h5
                                onClick={() => toggleSection('FollowUS')}
                                className="footer-toggle"
                            >
                                Follow Us {openSection === 'FollowUS' }
                            </h5>
                            <ul
                                className={`footer-list ${openSection === 'FollowUS' ? 'show' : ''
                                    } ${window.innerWidth > 768 ? 'always-show' : ''}`}
                            >
                                <div className='social'>
                                <li><a href="#"><img class="social-icon" src={insta} alt="Instagram" /></a></li>
                                <li><a href="#"><img class="social-icon" src={link} alt="LinkedIn" /></a></li>
                                </div>
                            </ul>
                        </div>
                        <div>
                            <h3 className="payment-heading">mettā muse Accepts</h3>
                            <div className="payment-methods">
                                <img className="payment-icon" src={image} alt="Broken Image" />
                                <img className="payment-icon" src={image} alt="Broken Image" />
                                <img className="payment-icon" src={image} alt="Broken Image" />
                                <img className="payment-icon" src={image} alt="Broken Image" />
                                <img className="payment-icon" src={image} alt="Broken Image" />
                                <img className="payment-icon" src={image} alt="Broken Image" />
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div >
                <p className='footer-bottom'>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
