import React from "react";
import GetInTouch from "../components/GetInTouch";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection title="Contact" sub="Us" />

      {/* Location & Map Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xs sm:text-sm font-semibold text-[#b71540] uppercase tracking-wide mb-2">
              Visit Our Office
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              Find Us in <span className="text-[#b71540]">Chandigarh</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg px-4">
              Located in the heart of Chandigarh, our modern facility houses our
              administrative offices, quality control labs, and customer service
              center.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
            {/* Map Section */}
            <div className="relative order-2 lg:order-1">
              {/* Map Container - Responsive iframe wrapper */}
              <div className="relative bg-gray-200 rounded-2xl overflow-hidden shadow-lg" style={{ paddingBottom: '75%', height: 0 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3260.3852543752355!2d76.83299777537228!3d30.71547827459266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1754387240568!5m2!1sen!2sin"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>

              {/* Location Badge */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-gray-900 text-white p-3 sm:p-4 rounded-xl shadow-xl">
                <div className="text-center">
                  <i className="ri-map-pin-2-line text-xl sm:text-2xl text-[#b71540] mb-1"></i>
                  <p className="text-xs font-semibold">Chandigarh</p>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-4 lg:space-y-6 order-1 lg:order-2">
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                  How to Reach Us
                </h4>
                <p className="text-gray-600 text-sm sm:text-base mb-4 lg:mb-6">
                  Our office is conveniently located in Manimajra, Chandigarh,
                  with easy access to public transportation and ample parking
                  facilities.
                </p>
              </div>

              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#b71540] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-car-line text-white text-xs sm:text-sm"></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">By Car</h5>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Free parking available. 10 minutes from Chandigarh Railway
                      Station.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-bus-line text-white text-xs sm:text-sm"></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                      Public Transport
                    </h5>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Regular bus service available. Nearest bus stop:
                      Manimajra.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#b71540] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-train-line text-white text-xs sm:text-sm"></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Train</h5>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Chandigarh Railway Station - 10 minutes drive.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-plane-line text-white text-xs sm:text-sm"></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                      Airport
                    </h5>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Chandigarh Airport - 20 minutes drive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Social Media Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xs sm:text-sm font-semibold text-[#b71540] uppercase tracking-wide mb-2">
              Get In Touch
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              Contact <span className="text-[#b71540]">Information</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg px-4">
              Reach out to us through multiple channels for all your
              pharmaceutical needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
            {/* Contact Details */}
            <div className="space-y-4 lg:space-y-6">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#b71540] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-white text-base sm:text-lg"></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      Email Us
                    </h4>
                    <Link
                      to="mailto:kemlunexpharma@gmail.com"
                      className="text-[#b71540] hover:text-[#a01439] transition-colors duration-300 text-sm sm:text-base font-medium break-all"
                    >
                      kemlunexpharma@gmail.com
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-white text-base sm:text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                      Call Us
                    </h4>
                    <div className="space-y-2">
                      <Link
                        to="tel:+919888086762"
                        className="block text-[#b71540] hover:text-[#a01439] transition-colors duration-300 font-medium text-sm sm:text-base"
                      >
                        +91 98880 86762
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="space-y-4 lg:space-y-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 sm:p-6 shadow-lg text-white">
                <div className="text-center mb-4 sm:mb-6">
                  <h4 className="text-xl sm:text-2xl font-bold mb-2">Connect With Us</h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Follow us on social media for the latest updates and health
                    tips
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 ">
                  {/* Facebook */}
                  <Link
                    to="#"
                    className="bg-white/10 hover:bg-white/20 rounded-lg p-3 sm:p-4 text-center transition-all duration-300 hover:scale-105 group"
                  >
                    <i className="ri-facebook-fill text-2xl sm:text-3xl text-white group-hover:text-[#b71540] transition-colors duration-300 mb-1 sm:mb-2"></i>
                    <p className="text-xs sm:text-sm font-medium">Facebook</p>
                  </Link>

                  {/* Instagram */}
                  <Link
                    to="#"
                    className="bg-white/10 hover:bg-white/20 rounded-lg p-3 sm:p-4 text-center transition-all duration-300 hover:scale-105 group"
                  >
                    <i className="ri-instagram-line text-2xl sm:text-3xl text-white group-hover:text-[#b71540] transition-colors duration-300 mb-1 sm:mb-2"></i>
                    <p className="text-xs sm:text-sm font-medium">Instagram</p>
                  </Link>

                </div>

                {/* WhatsApp Business */}
                <div className="mt-4 sm:mt-6 ">
                  <Link
                    to="https://wa.me/919888086762"
                    className="w-full bg-[#b71540] hover:bg-[#a01439] rounded-lg p-3 sm:p-4 flex items-center justify-center space-x-2 sm:space-x-3 transition-all duration-300 hover:scale-105"
                  >
                    <i className="ri-whatsapp-line text-xl sm:text-2xl text-white"></i>
                    <span className="font-semibold text-white text-sm sm:text-base">
                      WhatsApp Business
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch />

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xs sm:text-sm font-semibold text-[#b71540] uppercase tracking-wide mb-2">
              Frequently Asked Questions
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              Quick <span className="text-[#b71540]">Answers</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg px-4">
              Find answers to common questions about contacting us and our
              services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {/* FAQ 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#b71540] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-xs sm:text-sm">Q</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    What is your typical response time for inquiries?
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We respond to all inquiries within 24 hours during business
                    days. For urgent matters, our emergency support is available
                    24/7.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#b71540] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-xs sm:text-sm">Q</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    Can I visit your facility for a tour?
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Yes, we welcome scheduled visits. Please contact us at least
                    48 hours in advance to arrange a facility tour with our
                    team.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#b71540] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-xs sm:text-sm">Q</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    Do you provide international shipping information?
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Yes, we ship globally. Contact our international sales team
                    for specific shipping information, documentation, and
                    regulatory requirements for your region.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#b71540] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-xs sm:text-sm">Q</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    How can I become a distribution partner?
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We're always looking for qualified distribution partners.
                    Please fill out our contact form with "Partnership
                    Opportunity" as the subject, and our business development
                    team will reach out to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
