import React from "react";

const GetInTouch = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="py-10 sm:py-16 lg:py-24 bg-gradient-to-br from-[#b71540] to-[#a01439]">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-xs sm:text-sm md:text-base font-semibold text-white uppercase tracking-wide mb-2">
              Get in Touch
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Partner with
              <span className="text-gray-200"> Kemlunex Pharma?</span>
            </h3>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Contact our team today for PCD Pharma Franchise opportunities,
              Third Party Manufacturing services, or any business inquiries.
              We're here to support your pharmaceutical business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h4>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b71540] focus:border-[#b71540] transition-colors text-sm sm:text-base"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b71540] focus:border-[#b71540] transition-colors text-sm sm:text-base"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b71540] focus:border-[#b71540] transition-colors text-sm sm:text-base"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b71540] focus:border-[#b71540] transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell us about your business requirements or franchise interest..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#b71540] hover:bg-[#a01439] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  <i className="ri-send-plane-line mr-2"></i>
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 self-center">
              {/* Office Address */}
              <div className="backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center">
                    <i className="ri-map-pin-line text-[#b71540] text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                      Head Office
                    </h4>
                    <p className="text-gray-200 text-sm sm:text-base">
                      CO-747/1, Second Floor
                      <br />
                      Dehra Sahib, Manimajra,
                      <br />
                      Chandigarh 160101
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center">
                    <i className="ri-phone-line text-[#b71540] text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                      Phone Numbers
                    </h4>
                    <p className="text-gray-200 text-sm sm:text-base">
                      +91 98880 86762
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center">
                    <i className="ri-mail-line text-[#b71540] text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                      Email Address
                    </h4>
                    <p className="text-gray-200 text-[12px] md:text-base">
                      kemlunexpharma@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
