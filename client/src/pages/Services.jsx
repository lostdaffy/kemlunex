import React from "react";
import HeroSection from "../components/HeroSection";

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection title="Our " sub="Services" />

      {/* Services Overview */}
      <section className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              Comprehensive{" "}
              <span className="text-[#b71540]">Healthcare Solutions</span>
            </h2>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto px-4">
              Kemlunex Pharma offers a complete range of pharmaceutical
              services designed to meet diverse healthcare needs. From
              franchise opportunities to manufacturing excellence, we provide
              end-to-end solutions for healthcare partners, distributors, and
              pharmaceutical companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12">
            <div className="text-center bg-gray-50 p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
              <i
                className="ri-store-line text-4xl lg:text-5xl mb-4 lg:mb-6"
                style={{ color: "#b71540" }}
              ></i>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                PCD Pharma Franchise
              </h3>
              <p className="text-gray-700 text-sm lg:text-lg leading-relaxed mb-4 lg:mb-6">
                Exclusive distribution rights with comprehensive business
                support, marketing materials, and monopoly territories across
                India.
              </p>
              <div className="text-left">
                <ul className="text-gray-600 text-sm lg:text-base space-y-2">
                  <li>✓ Monopoly Rights</li>
                  <li>✓ Marketing Support</li>
                  <li>✓ Training Programs</li>
                  <li>✓ Promotional Materials</li>
                </ul>
              </div>
            </div>

            <div className="text-center bg-gray-50 p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
              <i
                className="ri-store-2-line text-4xl lg:text-5xl mb-4 lg:mb-6"
                style={{ color: "#b71540" }}
              ></i>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                Third-Party Manufacturing
              </h3>
              <p className="text-gray-700 text-sm lg:text-lg leading-relaxed mb-4 lg:mb-6">
                WHO-GMP certified contract manufacturing services with
                complete regulatory compliance and quality assurance.
              </p>
              <div className="text-left">
                <ul className="text-gray-600 text-sm lg:text-base space-y-2">
                  <li>✓ WHO-GMP Facilities</li>
                  <li>✓ Custom Formulations</li>
                  <li>✓ Regulatory Support</li>
                  <li>✓ Quality Control</li>
                </ul>
              </div>
            </div>

            <div className="text-center bg-gray-50 p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300 md:col-span-2 lg:col-span-1">
              <i
                className="ri-customer-service-2-line text-4xl lg:text-5xl mb-4 lg:mb-6"
                style={{ color: "#b71540" }}
              ></i>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                Business Consulting
              </h3>
              <p className="text-gray-700 text-sm lg:text-lg leading-relaxed mb-4 lg:mb-6">
                Expert guidance for pharmaceutical business setup, regulatory
                compliance, and market expansion strategies.
              </p>
              <div className="text-left">
                <ul className="text-gray-600 text-sm lg:text-base space-y-2">
                  <li>✓ Business Planning</li>
                  <li>✓ Regulatory Guidance</li>
                  <li>✓ Market Analysis</li>
                  <li>✓ Growth Strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PCD Pharma Franchise Detailed */}
      <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/people.jpg"
                alt="PCD Pharma Franchise"
                className="w-full h-64 sm:h-80 lg:h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#b71540] text-base lg:text-lg font-semibold">
                Franchise Opportunities
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 mt-2 leading-tight">
                PCD Pharma <span className="text-[#b71540]">Franchise</span>
              </h2>
              <p className="text-gray-800 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
                Partner with Kemlunex Pharma for exclusive PCD (Propaganda Cum
                Distribution) franchise opportunities across India. We offer
                comprehensive business support with monopoly rights in your
                territory.
              </p>

              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start">
                  <i
                    className="ri-map-pin-line text-xl lg:text-2xl mr-3 lg:mr-4 mt-1 flex-shrink-0"
                    style={{ color: "#b71540" }}
                  ></i>
                  <div>
                    <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
                      Territory Coverage
                    </h4>
                    <p className="text-gray-700 text-sm lg:text-base">
                      UP, Bihar, MP, Haryana, Punjab, J&K, HP, Assam, Manipur
                      and across India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <i
                    className="ri-shield-check-line text-xl lg:text-2xl mr-3 lg:mr-4 mt-1 flex-shrink-0"
                    style={{ color: "#b71540" }}
                  ></i>
                  <div>
                    <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
                      Monopoly Rights
                    </h4>
                    <p className="text-gray-700 text-sm lg:text-base">
                      Exclusive distribution rights in your designated territory
                      with complete market protection
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <i
                    className="ri-presentation-line text-xl lg:text-2xl mr-3 lg:mr-4 mt-1 flex-shrink-0"
                    style={{ color: "#b71540" }}
                  ></i>
                  <div>
                    <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
                      Marketing Support
                    </h4>
                    <p className="text-gray-700 text-sm lg:text-base">
                      Complete promotional materials, visual aids, samples, and
                      marketing strategy assistance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Manufacturing */}
      <section className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <span className="text-[#b71540] text-base lg:text-lg font-semibold">
                Manufacturing Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 mt-2 leading-tight">
                Third-Party{" "}
                <span className="text-[#b71540]">Manufacturing</span>
              </h2>
              <p className="text-gray-800 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
                Leverage our WHO-GMP certified manufacturing facilities for
                contract production services. We specialize in producing
                high-quality pharmaceutical products with complete regulatory
                compliance and quality assurance.
              </p>

              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start">
                  <i
                    className="ri-building-line text-xl lg:text-2xl mr-3 lg:mr-4 mt-1 flex-shrink-0"
                    style={{ color: "#b71540" }}
                  ></i>
                  <div>
                    <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
                      WHO-GMP Certified Facilities
                    </h4>
                    <p className="text-gray-700 text-sm lg:text-base">
                      State-of-the-art manufacturing plants with international
                      quality standards and compliance
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <i
                    className="ri-flask-line text-xl lg:text-2xl mr-3 lg:mr-4 mt-1 flex-shrink-0"
                    style={{ color: "#b71540" }}
                  ></i>
                  <div>
                    <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
                      Custom Formulations
                    </h4>
                    <p className="text-gray-700 text-sm lg:text-base">
                      Tablets, capsules, syrups, injectables, and specialized
                      formulations as per requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <i
                    className="ri-file-list-3-line text-xl lg:text-2xl mr-3 lg:mr-4 mt-1 flex-shrink-0"
                    style={{ color: "#b71540" }}
                  ></i>
                  <div>
                    <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
                      Regulatory Support
                    </h4>
                    <p className="text-gray-700 text-sm lg:text-base">
                      Complete documentation, drug licensing, and regulatory
                      compliance assistance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/scientists.jpg"
                alt="Third Party Manufacturing"
                className="w-full h-64 sm:h-80 lg:h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              Our Service <span className="text-[#b71540]">Process</span>
            </h2>
            <p className="text-gray-800 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto px-4">
              We follow a systematic approach to ensure seamless service
              delivery and maximum satisfaction for all our pharmaceutical
              partners and clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="bg-[#b71540] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <span className="text-white text-lg sm:text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">
                Consultation
              </h3>
              <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                Initial discussion to understand your requirements, business
                goals, and market objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#b71540] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <span className="text-white text-lg sm:text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">
                Planning
              </h3>
              <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                Customized service plan development with territory selection,
                product portfolio, and business strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#b71540] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <span className="text-white text-lg sm:text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">
                Implementation
              </h3>
              <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                Service execution with documentation, training, material
                supply, and operational setup.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#b71540] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <span className="text-white text-lg sm:text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">
                Support
              </h3>
              <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                Ongoing support with marketing assistance, product updates,
                and business development guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                Why Choose <span className="text-[#b71540]">Our Services?</span>
              </h2>
              <p className="text-gray-800 text-base lg:text-lg leading-relaxed mb-8 lg:mb-10">
                Partner with India's leading pharmaceutical service provider for
                unmatched quality, comprehensive support, and proven business
                success across diverse healthcare segments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-gray-50 p-4 lg:p-6 rounded-lg">
                  <i
                    className="ri-award-line text-2xl lg:text-3xl mb-3 lg:mb-4"
                    style={{ color: "#b71540" }}
                  ></i>
                  <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
                    Proven Track Record
                  </h4>
                  <p className="text-gray-700 text-sm lg:text-base">
                    15+ years of pharmaceutical excellence with successful
                    partnerships across India
                  </p>
                </div>

                <div className="bg-gray-50 p-4 lg:p-6 rounded-lg">
                  <i
                    className="ri-team-line text-2xl lg:text-3xl mb-3 lg:mb-4"
                    style={{ color: "#b71540" }}
                  ></i>
                  <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
                    Expert Team
                  </h4>
                  <p className="text-gray-700 text-sm lg:text-base">
                    Experienced professionals providing dedicated support and
                    business guidance
                  </p>
                </div>

                <div className="bg-gray-50 p-4 lg:p-6 rounded-lg">
                  <i
                    className="ri-global-line text-2xl lg:text-3xl mb-3 lg:mb-4"
                    style={{ color: "#b71540" }}
                  ></i>
                  <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
                    Wide Reach
                  </h4>
                  <p className="text-gray-700 text-sm lg:text-base">
                    Extensive distribution network covering multiple states and
                    territories
                  </p>
                </div>

                <div className="bg-gray-50 p-4 lg:p-6 rounded-lg">
                  <i
                    className="ri-price-tag-3-line text-2xl lg:text-3xl mb-3 lg:mb-4"
                    style={{ color: "#b71540" }}
                  ></i>
                  <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
                    Competitive Pricing
                  </h4>
                  <p className="text-gray-700 text-sm lg:text-base">
                    Cost-effective solutions with transparent pricing and
                    flexible payment terms
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/store.jpg"
                alt="Why Choose Our Services"
                className="w-full h-64 sm:h-80 lg:h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
