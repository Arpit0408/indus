import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterSection from './NewsletterSection';
import Indussynergylogo from "../assets/images/logoindus.jpeg";

const Footer = () => {
  return (
    <>
      {/* <NewsletterSection /> */}
      <div className="w-full bg-[#151a30]">
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
                        className="w-[16rem]  rounded-sm object-cover"
                      />
                    </Link>
                  </div>
                  <p className="text-white text-[16px] mb-[10px]">
                    IndUS Synergy Partners bridges the legal, corporate, and personal needs of NRIs with expert guidance, personalized strategies, and unwavering integrity.
                  </p>
                  {/* Social Media Icons */}
                  <ul className="overflow-hidden pt-[15px] flex space-x-[15px]">
                    {[
                      { icon: 'facebook', url: 'https://www.facebook.com/share/1RWJ91CoqA/?mibextid=wwXIfr' },
                      { icon: 'twitter-alt', url: 'https://x.com/indussynergyp?s=11' },
                      { icon: 'linkedin', url: 'https://www.linkedin.com/dummy' },
                      { icon: 'instagram', url: 'https://www.instagram.com/dummy' },
                    ].map(({ icon, url }, index) => (
                      <li key={index} className="text-white group">
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white transition-all group-hover:text-[#c0b596]"
                        >
                          <i className={`ti-${icon}`}></i>
                        </a>
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
                {/* Contact Info */}
<div className="text-left">
  <div className="mb-7">
    <h3 className="text-[28px] font-medium text-white capitalize">Contact Us</h3>
  </div>
  <ul className="text-white">
    <li className="mb-[8px]">IndUS Synergy Partners Headquarters</li>
    <li className="mb-[8px]">Based in: DFW, Texas | Representing Clients Across India</li>
    <li className="mb-[8px]">
      Phone: <a href="tel:+13619105313" className="text-white underline hover:text-[#c0b596]">+1 (361) 910-5313</a><br />
      <span className="inline-block">Phone: <a href="tel:+13619103199" className="text-white underline hover:text-[#c0b596]">+1 (361) 910-3199</a></span>
    </li>
    <li className="mb-[8px]">
      Email: <a href="mailto:indusynergypartners@gmail.com" className="text-white underline hover:text-[#c0b596]">indusynergypartners@gmail.com</a>
    </li>
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
                <Link to="/termsandconditions" className="hover:underline">Terms And Conditions</Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
