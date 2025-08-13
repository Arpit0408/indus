import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterSection from './NewsletterSection';
import Indussynergylogo from "../assets/images/logoimage.jpeg";

const Footer = () => {
  return (
   <>
     {/* <NewsletterSection /> */}
      <div className="w-full bg-[#151a30]"> {/* ✅ Full-width wrapper with background */}
      <footer className="relative z-10">
        <div className="pt-[100px] pb-[90px] md:py-[90px] md:pb-[20px] overflow-hidden relative -z-10 px-[10px] md:px-8">
          <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Logo & Intro */}
              <div className="text-left">
                <div className="mb-7">
                  <Link to="/" className="text-[45px] font-bold flex items-center text-white">
<img
  src={Indussynergylogo}
  alt="IndUS Synergy Logo"
  className="w-[6rem] h-[6rem] rounded-sm object-cover"
/>
                    {/* <h6 className="text-white text-[1.5rem] uppercase">IndUS Synergy Partners</h6> */}
                  </Link>
                </div>
                <p className="text-white text-[16px] mb-[10px]">
                  IndUS Synergy Partners bridges the legal, corporate, and personal needs of NRIs with expert guidance, personalized strategies, and unwavering integrity.
                </p>
                <ul className="overflow-hidden pt-[15px] flex space-x-[15px]">
                  {['facebook', 'twitter-alt', 'linkedin', 'pinterest', 'vimeo-alt'].map((icon, index) => (
                    <li key={index} className="text-white group">
                      <Link to="#" className="text-white transition-all group-hover:text-[#c0b596]">
                        <i className={`ti-${icon}`}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="text-left">
                <div className="mb-7">
                  <h3 className="text-[28px] font-medium text-white capitalize">Quick Links</h3>
                </div>
                <ul>
                  {['Home', 'About Us', 'Blogs', 'Contact'].map((label, idx) => {
                    const path = ['/', '/about', '/blog', '/contact'][idx];
                    return (
                      <li key={idx} className="mb-[8px]">
                        <Link to={path} className="text-white hover:text-[#c0b596] transition-all">{label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Legal Services */}
              <div className="text-left">
                <div className="mb-7">
                  <h3 className="text-[28px] font-medium text-white capitalize">Legal Services</h3>
                </div>
                <ul>
                  {[
                    ['Family Law', '/service'],
                    ['Property Disputes', '/service'],
                    ['Business Law', '/service'],
                    ['Corporate Compliance', '/service'],
                    ['Wealth & Legacy', '/service'],
                  ].map(([label, path], idx) => (
                    <li key={idx} className="mb-[8px]">
                      <Link to={path} className="text-white hover:text-[#c0b596] transition-all">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="text-left">
                <div className="mb-7">
                  <h3 className="text-[28px] font-medium text-white capitalize">Contact Us</h3>
                </div>
                <ul className="text-white">
                  <li className="mb-[8px]">IndUS Synergy Partners Headquarters</li>
                  <li className="mb-[8px]">Based in: DFW, Texas | Representing Clients Across India</li>
                  <li className="mb-[8px]">Phone: +1 (361) 910-5313 <br/> +1 (361) 910-3199</li>
                  <li className="mb-[8px]">Email: indusynergypartners@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="px-[10px] md:px-8">
          <div className="max-w-[1500px] mx-auto border-t border-[rgba(192,181,150,.3)] relative">
            <div className="h-[1px] absolute left-[15px] top-0 bg-[#ffffff0d] w-[calc(100%+30px)]"></div>
            <p className="text-center text-white text-[14px] py-[20px]">
              &copy; 2025 IndUS Synergy Partners. All rights reserved |{' '}
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
   </>
  );
};

export default Footer;
