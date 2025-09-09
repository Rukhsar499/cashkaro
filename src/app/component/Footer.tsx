'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          {/* Logo and description */}
          <div className="col-lg-3 col-md-4 col-12">
            <div className="footrd bhb">
              <Image src="/assets/img/logo.svg" alt="Beyuvana" width={150} height={70} />
             <div className="footeil">
                <ul>
                  <li><Link href="/about-us">About Us</Link></li>
                  <li><Link href="/press">Press</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/testimonials">Testimonials</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-3 col-md-4 col-12">
            <div className="footrd used">
              <h3 style={{ color: "#000" }}>Special Pages</h3>
              <div className="footeil">
                <ul>
                  <li><Link href="/refer-and-earn">Refer and Earn</Link></li>
                  <li><Link href="/careers">Careers</Link></li>
                  <li><Link href="/help">Help</Link></li>
                  <li><Link href="/partner">Become our Partner</Link></li>
                  <li><Link href="/contact-us">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="col-lg-3 col-md-4 col-12">
            <div className="footrd">
              <h3 style={{ color: "#000" }}>Useful Reads</h3>
              <div className="footeil">
                <ul>
                  <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
                  <li><Link href="/privacy-and-cookie-policy">Privacy & Cookie Policy</Link></li>
                  <li><Link href="/anti-spam Policy">Anti-Spam Policy</Link></li>
                  
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="col-lg-3 col-md-4 col-12">
            <h3 style={{ color: "#000" }}>Address</h3>
            <div className="d-flex">
              <Image src="/assets/img/location.png" alt="Location" width={20} height={20} className="me-2 imhg" />
              <p id="btd" style={{ color: "#fff" }}>#Kolkata, India</p>
            </div>
            <div className="d-flex">
              <Image src="/assets/img/call-calling.png" alt="Call" width={20} height={20} className="me-2 imhg" />
              <Link href="tel:+917003810162" className="rishra">
                <p id="btd" style={{ color: "#fff" }}>+917003810162</p>
              </Link>
            </div>
            <div className="d-flex">
              <Image src="/assets/img/sms-notification.png" alt="Email" width={20} height={20} className="me-2 imhg" />
              <Link href="mailto:info@beyuvana.com" className="rishra">
                <p id="btd" style={{ color: "#fff" }}>info@beyuvana.com</p>
              </Link>
            </div>
            <div className="social">
              <h3 style={{ color: "#DFC362" }}>Social Links</h3>
              <span><Link href="#"><Image src="/assets/img/facebook.png" width={27} height={27} alt="facebook" /></Link></span>
              <span><Link href="#"><Image src="/assets/img/whatsapp.png" width={27} height={27} alt="whatsapp" /></Link></span>
              <span><Link href="#"><Image src="/assets/img/twitter.png" width={27} height={27} alt="twitter" /></Link></span>
              <span><Link href="#"><Image src="/assets/img/instagram.png" width={27} height={27} alt="instagram" /></Link></span>
            </div>
          </div>
        </div>
        <hr className="hr-li" />
        <p className="copy text-center text-white">
          © {new Date().getFullYear()} Copyright@beyuvana • All Rights Reserved -{' '}
          <Link href="/privacy-policy" style={{ color: '#fff' }}>Privacy Policy</Link>
        </p>
      </div>
   </section>
  
  );
  
}

export default Footer;
