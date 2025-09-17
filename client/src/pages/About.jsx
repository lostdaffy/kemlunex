import React from "react";
import HeroSection from "../components/HeroSection";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection title="About " sub="Kemlunex" />

      {/* Our Story Section */}
      <section className="min-h-screen flex items-center justify-center bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Our <span className="text-[#b71540]">Story</span>
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-4 md:mb-6">
                <strong>Kemlunex Pharma</strong> began its journey with a simple
                yet powerful vision: to make quality healthcare accessible to
                every individual. Founded by visionary leaders who believed in
                the transformative power of pharmaceutical innovation, our
                company has grown from humble beginnings to become a trusted
                name in the industry.
              </p>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-4 md:mb-6">
                Over the years, we have consistently pushed the boundaries of
                pharmaceutical excellence, investing in state-of-the-art
                manufacturing facilities, cutting-edge research, and building a
                team of dedicated professionals who share our commitment to
                quality and innovation.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/images/story.jpg"
                alt="Kemlunex Pharma Story"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Foundation (Mission, Vision) */}
      <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
            <div className="order-2 lg:order-1">
              <img
                src="/images/pharmacist.jpg"
                alt="Mission & Vision"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-10">
                Our <span className="text-[#b71540]">Foundation</span>
              </h2>

              {/* Mission */}
              <div className="mb-8 md:mb-12">
                <div className="flex items-start mb-3 md:mb-4">
                  <i
                    className="ri-target-line text-2xl sm:text-3xl mr-3 md:mr-4 mt-1 flex-shrink-0"
                    style={{ color: "#b71540" }}
                  ></i>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed pl-8 sm:pl-12 md:pl-16">
                  To provide high-quality, affordable pharmaceutical solutions
                  that improve healthcare outcomes globally. We are committed to
                  manufacturing innovative medicines with uncompromising quality
                  standards, ensuring accessible healthcare for all while
                  maintaining ethical business practices and sustainable growth.
                </p>
              </div>

              {/* Vision */}
              <div>
                <div className="flex items-start mb-3 md:mb-4">
                  <i
                    className="ri-eye-line text-2xl sm:text-3xl mr-3 md:mr-4 mt-1 flex-shrink-0"
                    style={{ color: "#b71540" }}
                  ></i>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed pl-8 sm:pl-12 md:pl-16">
                  To be a globally recognized pharmaceutical leader, pioneering
                  breakthrough treatments and setting new standards in
                  healthcare innovation. We envision a world where quality
                  medicines are accessible to every individual, contributing to
                  healthier communities and improved quality of life worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Director */}
      <section className="min-h-screen flex items-center justify-center bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
            <div className="order-2 lg:order-1">
              <span className="text-[#b71540] text-base sm:text-lg font-semibold">
                Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 mt-2">
                Meet Our{" "}
                <span className="text-[#b71540]">Managing Director</span>
              </h2>
              <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Mr. Aman
                </h3>
                <p className="text-[#b71540] text-base sm:text-lg font-semibold mb-4 md:mb-6">
                  Managing Director
                </p>
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-4 md:mb-6">
                  "At Kemlunex Pharma, we believe that access to quality
                  healthcare is not a privilege but a fundamental right. Our
                  commitment to pharmaceutical excellence drives us to
                  continuously innovate, ensuring that every product we
                  manufacture meets the highest international standards while
                  remaining affordable to those who need it most."
                </p>
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-4 md:mb-6">
                  Under Mr. Aman's visionary leadership, Kemlunex Pharma has
                  expanded its reach across multiple therapeutic segments,
                  established WHO-GMP certified manufacturing facilities, and
                  built a robust distribution network spanning numerous states
                  across India.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/images/pharmaceutical.jpg"
                alt="Mr. Aman - Managing Director"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex items-center min-h-screen">
          <div className="w-full">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Certifications &{" "}
                <span className="text-[#b71540]">Compliance</span>
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto px-4">
                Our commitment to quality is validated by prestigious
                certifications and strict adherence to international compliance
                standards, ensuring the highest level of pharmaceutical
                excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <i
                  className="ri-award-line text-4xl md:text-5xl mb-4 md:mb-6"
                  style={{ color: "#b71540" }}
                ></i>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  WHO Certified
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  World Health Organization approved manufacturing standards
                  ensuring global quality compliance.
                </p>
              </div>
              <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <i
                  className="ri-shield-check-line text-4xl md:text-5xl mb-4 md:mb-6"
                  style={{ color: "#b71540" }}
                ></i>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  GMP Certified
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Good Manufacturing Practices certification maintaining highest
                  production quality standards.
                </p>
              </div>
              <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <i
                  className="ri-verified-badge-line text-4xl md:text-5xl mb-4 md:mb-6"
                  style={{ color: "#b71540" }}
                ></i>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  ISO 9001:2015
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  International quality management system certification for
                  consistent excellence and improvement.
                </p>
              </div>
              <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <i
                  className="ri-government-line text-4xl md:text-5xl mb-4 md:mb-6"
                  style={{ color: "#b71540" }}
                ></i>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  Drug License
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Valid drug manufacturing license from regulatory authorities
                  ensuring legal compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="min-h-screen flex items-center justify-center bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
            <div className="order-2 lg:order-1">
              <span className="text-[#b71540] text-base sm:text-lg font-semibold">
                Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 mt-2">
                Manufacturing <span className="text-[#b71540]">Excellence</span>
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-8 md:mb-10">
                Our state-of-the-art manufacturing facilities represent the
                pinnacle of pharmaceutical production technology, combining
                advanced automation with rigorous quality control processes to
                ensure every product meets international standards.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start">
                  <i
                    className="ri-building-line text-2xl sm:text-3xl mr-3 md:mr-4 mt-1 flex-shrink-0"
                    style={{ color: "#b71540" }}
                  ></i>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      State-of-the-Art Facilities
                    </h3>
                    <p className="text-base sm:text-lg text-gray-800">
                      Modern manufacturing plants equipped with cutting-edge
                      technology and automated production lines ensuring
                      consistent quality output.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <i
                    className="ri-microscope-line text-2xl sm:text-3xl mr-3 md:mr-4 mt-1 flex-shrink-0"
                    style={{ color: "#b71540" }}
                  ></i>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      Quality Control Laboratory
                    </h3>
                    <p className="text-base sm:text-lg text-gray-800">
                      Advanced testing laboratories with sophisticated
                      analytical instruments ensuring product purity and potency
                      verification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/images/worker.jpg"
                alt="Manufacturing Excellence"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
