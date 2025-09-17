import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#e7e4e3]  relative overflow-hidden">
      

      <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20 py-12 md:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Logo & Profile */}
          <div className="lg:col-span-2 space-y-8">
            <Link
              to="/"
              className="inline-flex items-center space-x-4 group hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/images/logo.jpeg"
                className="w-16 sm:w-20 md:w-40"
                alt="MedigyKem Logo"
              />
            </Link>

            <div className="space-y-4 pl-1">
              <div className="flex items-center gap-2 text-gray-900 font-light text-sm">
                <i className="ri-building-2-line text-[#b71540]"></i>
                Marketed by:
              </div>
              <div className="font-bold text-xl text-gray-900 tracking-wide">
                Kemlunex Pharma
              </div>
              <div className="text-gray-900 text-base leading-relaxed max-w-md">
                <i className="ri-map-pin-2-line text-[#b71540] mr-2"></i>
                SCO-747/1 Half Portion Second Floor
                <br />
                Dehra Sahib, Manimajra
                <br />
                Chandigarh 160101
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mt-6">
                <div className="bg-[#b71540]/10 border border-[#b71540]/30 rounded-full px-3 py-1 text-xs text-[#b71540] font-medium">
                  ✓ ISO Certified
                </div>
                <div className="bg-[#b71540]/10 border border-[#b71540]/30 rounded-full px-3 py-1 text-xs text-[#b71540] font-medium">
                  ✓ Quality Assured
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold flex items-center gap-3 text-gray-900">
              <div className="w-8 h-8 bg-[#b71540]/20 rounded-full flex items-center justify-center">
                <i className="ri-links-line text-[#b71540] text-sm"></i>
              </div>
              Quick Links
            </h4>
            <ul className="space-y-3 pl-2">
              {[
                { to: "/", icon: "ri-home-4-line", text: "Home" },
                { to: "/about", icon: "ri-building-line", text: "About Us" },
                { to: "/services", icon: "ri-service-line", text: "Services" },
                {
                  to: "/contact",
                  icon: "ri-customer-service-2-line",
                  text: "Contact",
                },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-3 text-gray-900 hover:text-[#b71540] hover:translate-x-2 transition-all duration-300 py-2 group"
                  >
                    <i
                      className={`${link.icon} text-[#b71540] group-hover:scale-110 transition-transform`}
                    ></i>
                    <span className="group-hover:font-medium">{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold flex items-center gap-3 text-gray-900">
              <div className="w-8 h-8 bg-[#b71540]/20 rounded-full flex items-center justify-center">
                <i className="ri-contacts-line text-[#b71540] text-sm"></i>
              </div>
              Get in Touch
            </h4>

            <div className="space-y-5 text-gray-900 text-sm pl-2">
              {/* Email */}
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-[#b71540]/10 rounded-full flex items-center justify-center mt-1 group-hover:bg-[#b71540]/20 transition-colors">
                  <i className="ri-mail-line text-[#b71540] text-sm"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-900 mb-1">Email Us</div>
                  <a
                    href="mailto:kemlunexpharma@gmail.com"
                    className="hover:text-[#b71540] transition-colors font-medium"
                  >
                    kemlunexpharma@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-[#b71540]/10 rounded-full flex items-center justify-center mt-1 group-hover:bg-[#b71540]/20 transition-colors">
                  <i className="ri-phone-line text-[#b71540] text-sm"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-900 mb-2">Call Us</div>
                  <div className="space-y-1">
                    {["+91 98880 86762"].map((phone, index) => (
                      <div key={index}>
                        <a
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="hover:text-[#b71540] transition-colors block text-sm font-medium"
                        >
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2">
                <div className="text-xs text-gray-900 mb-3">Follow Us</div>
                <div className="flex gap-3">
                  {[
                    {
                      icon: "ri-instagram-line",
                      url: "https://instagram.com/",
                    },
                    {
                      icon: "ri-facebook-circle-line",
                      url: "https://facebook.com/",
                    },
                    { icon: "ri-youtube-line", url: "https://youtube.com/" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#b71540]/10 hover:bg-[#b71540] rounded-full flex items-center justify-center text-[#b71540] hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:rotate-6"
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="mt-12 mb-8">
          <div className="flex items-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#b71540]/30 to-transparent"></div>
            <div className="px-4">
              <i className="ri-heart-pulse-line text-[#b71540] text-xl"></i>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#b71540]/30 to-transparent"></div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900 text-sm gap-4">
          <div className="flex items-center gap-2">
            <i className="ri-copyright-line text-[#b71540]"></i>
            <span>{currentYear} Kemlunex Pharma. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            {[
              { to: "/privacy-policy", text: "Privacy Policy" },
              { to: "/terms-of-service", text: "Terms of Service" },
              { to: "/trade-terms", text: "Trade Terms" },
            ].map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="hover:text-[#b71540] transition-colors relative group"
              >
                {link.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b71540] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
