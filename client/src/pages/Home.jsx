import { Link } from "react-router-dom";
import React from "react";
import GetInTouch from "../components/GetInTouch";

const Home = () => {
  return (
    <>
      {/* Section 1: Hero Section */}
      <section
        className="min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat py-10"
        style={{
          backgroundImage:
            "linear-gradient(270deg, rgba(23, 44, 69, 0.00) 0%, rgba(23, 44, 69, 0.80) 60.83%), url('/images/hero-bg.jpg')",
        }}
      >
        <div className="container mx-auto px-4 flex items-center justify-center min-h-screen pt-16 sm:pt-20">
          <div className="text-center">
            <h1 className="text-white text-2xl md:text-6xl mb-4 sm:mb-6 leading-tight font-bold">
              Leading <span className="text-[#b71540]">PCD Pharma</span> <br />
              Franchise Opportunities
            </h1>
            <p className="text-white text-sm md:text-lg mb-6 sm:mb-8 leading-relaxed mx-auto lg:mx-0 max-w-4xl">
              Join{" "}
              <span className="text-[#b71540] font-bold backdrop-blur-3xl">
                Kemlunex Pharma's
              </span>{" "}
              PCD franchise network and grow your pharma business with monopoly
              rights. 300+ WHO-GMP certified products in General, Derma, Gynae,
              and Herbal segments. Start today with low investment and high
              returns.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <i className="ri-award-line text-[#b71540] text-2xl mb-2"></i>
                <h3 className="text-white font-semibold text-sm">
                  Monopoly Rights
                </h3>
                <p className="text-white/80 text-xs">
                  Exclusive territory distribution
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <i className="ri-line-chart-line text-[#b71540] text-2xl mb-2"></i>
                <h3 className="text-white font-semibold text-sm">
                  Low Investment
                </h3>
                <p className="text-white/80 text-xs">
                  High profit margins guaranteed
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <i className="ri-customer-service-line text-[#b71540] text-2xl mb-2"></i>
                <h3 className="text-white font-semibold text-sm">
                  Complete Support
                </h3>
                <p className="text-white/80 text-xs">
                  Marketing & promotional assistance
                </p>
              </div>
            </div>

            <div className="mt-8 md:mt-12 space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Link
                to="/contact"
                className="inline-block bg-[#b71540] px-8 py-3 md:px-12 md:py-4 text-white text-base font-semibold rounded-full 
          hover:bg-white hover:text-[#b71540] transition-colors duration-300 ease-in-out"
              >
                <i className="ri-service-line mr-2"></i> Start Your Franchise
              </Link>
              <Link
                to="/services"
                className="inline-block bg-transparent border-2 border-white px-8 py-3 md:px-12 md:py-4 text-white text-base font-semibold rounded-full 
          hover:bg-white hover:text-gray-900 transition-colors duration-300 ease-in-out"
              >
                <i className="ri-information-line mr-2"></i> Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: About Kemlunex */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/about.jpg"
                alt="About Kemlunex Pharma"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                About <span className="text-[#b71540]">Kemlunex Pharma</span>
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-10">
                <strong>Kemlunex Pharma</strong> is a WHO–GMP certified and ISO
                9001:2015 accredited pharmaceutical company offering 300+
                multispeciality products across General, Derma, Gynae, Cosmetic
                & Herbal ranges. With world-class manufacturing facilities and
                ethical practices, we are dedicated to innovation, quality, and
                global healthcare excellence.
              </p>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start">
                  <i
                    className="ri-checkbox-circle-line text-2xl sm:text-3xl mr-3 sm:mr-4 mt-1 flex-shrink-0"
                    style={{ color: "#546de5" }}
                  ></i>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      WHO & GMP Certified
                    </h3>
                    <p className="text-base sm:text-lg text-gray-800">
                      Manufacturing only from globally approved facilities
                      ensuring uncompromised quality standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i
                    className="ri-flask-line text-2xl sm:text-3xl mr-3 sm:mr-4 mt-1 flex-shrink-0"
                    style={{ color: "#546de5" }}
                  ></i>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      300+ Products
                    </h3>
                    <p className="text-base sm:text-lg text-gray-800">
                      A comprehensive range covering Antibiotics, Derma,
                      Nutraceuticals, Cosmetics, and Herbal formulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Message */}
      <section className="bg-[#b71540] py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Founder's Message */}
            <div className="bg-white/90 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Founder's Message
              </h3>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                Being instrumental in the industry's pursuit to initiate a
                "Pharmaceutical Revolution" in the country, that is, to bring
                down prices of medicines, we express utmost optimism that one
                day… every Indian will have access to all life-saving drugs.
              </p>
            </div>
            {/* Franchise */}
            <div className="bg-white/90 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Franchise
              </h3>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                We have been engaged in expanding our business throughout the
                country and looking for FRANCHISE / PCD DISTRIBUTORS with
                monopoly rights in UP, Bihar, MP, Haryana, Punjab, J&K, HP,
                Assam, Manipur and across India.
              </p>
            </div>
            {/* Global Leadership */}
            <div className="bg-white/90 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Global Leadership
              </h3>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                Among the largest 'Vertically Integrated' pharmaceutical
                companies in India, Kemlunex Pharma has a robust portfolio
                across CVS, CNS, Anti-Retroviral, Antibiotics, and
                Gastroenterological products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                Why Choose{" "}
                <span className="text-[#b71540]">Kemlunex Pharma?</span>
              </h2>
              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    icon: "ri-award-line",
                    title: "WHO & GMP Standards",
                    desc: "Manufacturing excellence with globally approved facilities ensuring uncompromised quality standards.",
                  },
                  {
                    icon: "ri-shield-check-line",
                    title: "Quality Assurance",
                    desc: "Rigorous quality control processes with ISO certification ensuring reliable and effective products.",
                  },
                  {
                    icon: "ri-global-line",
                    title: "Global Reach",
                    desc: "Expanding international presence with monopoly rights across multiple states and countries.",
                  },
                  {
                    icon: "ri-time-line",
                    title: "Timely Delivery",
                    desc: "Reliable supply chain management ensuring on-time delivery and consistent product availability.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <i
                      className={`${item.icon} text-2xl sm:text-3xl mr-3 sm:mr-4 mt-1 flex-shrink-0`}
                      style={{ color: "#b71540" }}
                    ></i>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-800">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/images/medication.jpg"
                alt="Why Choose Kemlunex Pharma"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Divisions */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Image Section */}
            <div className="order-2 lg:order-1">
              <img
                src="/images/young-doctor.jpg"
                alt="MedigyKem Pharma Divisions"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our <span className="text-[#b71540]">Divisions</span>
              </h2>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 lg:mb-10">
                <strong>MedigyKem Pharma</strong> operates through specialized
                divisions, delivering innovative healthcare solutions and
                ensuring therapeutic excellence across diverse medical needs.
              </p>

              {/* Division Cards */}
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {[
                  {
                    icon: "ri-capsule-line",
                    title: "General Medicine",
                    desc: "Range of antibiotics, analgesics, and essential medicines.",
                  },
                  {
                    icon: "ri-heart-pulse-line",
                    title: "Dermatology",
                    desc: "Solutions for skin health, cosmetic care, and treatments.",
                  },
                  {
                    icon: "ri-women-line",
                    title: "Gynecology",
                    desc: "Formulations for women’s health, reproductive care, and wellness.",
                  },
                  {
                    icon: "ri-leaf-line",
                    title: "Herbal & Nutraceuticals",
                    desc: "Herbal remedies and nutritional supplements for well-being.",
                  },
                ].map((division, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-3 sm:p-4 rounded-md hover:shadow transition-shadow duration-300"
                  >
                    <i
                      className={`${division.icon} text-xl sm:text-2xl mb-2 block`}
                      style={{ color: "#b71540" }}
                    ></i>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      {division.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-snug">
                      {division.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Our Services */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[#b71540] text-base sm:text-lg font-semibold">
              Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 my-4 sm:my-6">
              Pharma <span className="text-[#b71540]">Business Solutions</span>
            </h2>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Comprehensive pharmaceutical business solutions designed to
              support partners, distributors, and franchisees with complete
              operational excellence and market success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              {
                icon: "ri-store-line",
                title: "PCD Pharma Franchise",
                desc: "Monopoly distribution rights with comprehensive marketing support, promotional materials, and business development assistance for franchise partners.",
              },
              {
                icon: "ri-store-2-line",
                title: "Third-Party Manufacturing",
                desc: "Contract manufacturing services with WHO-GMP facilities, regulatory compliance, and quality assurance for pharmaceutical companies.",
              },
              {
                icon: "ri-customer-service-line",
                title: "24/7 Customer Support",
                desc: "Round-the-clock customer service with dedicated support teams ensuring seamless business operations and query resolution.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <i
                  className={`${service.icon} text-4xl sm:text-5xl mb-4 sm:mb-6 block`}
                  style={{ color: "#b71540" }}
                ></i>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Client <span className="text-[#b71540]">Testimonials</span>
            </h2>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Hear what our valued partners and clients say about their
              experience working with Kemlunex Pharma's quality products and
              exceptional service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              {
                name: "Dr. Rajesh Kumar",
                role: "Medical Practitioner",
                testimonial:
                  "Kemlunex Pharma has been our trusted partner for years. Their products are consistently reliable, and the quality never disappoints. The WHO-GMP certification gives us complete confidence in prescribing their medications.",
              },
              {
                name: "Priya Sharma",
                role: "PCD Franchise Partner",
                testimonial:
                  "The franchise support from Kemlunex is exceptional. From marketing materials to timely deliveries, they provide everything needed to run a successful pharmaceutical business. Highly recommended for serious entrepreneurs.",
              },
              {
                name: "Amit Gupta",
                role: "Distributor",
                testimonial:
                  "Working with Kemlunex Pharma has been a game-changer for our distribution network. Their wide product range and monopoly rights have helped us capture significant market share in our territory.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="ri-star-fill text-yellow-500 text-lg sm:text-xl mr-1"
                    ></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />
    </>
  );
};

export default Home;
