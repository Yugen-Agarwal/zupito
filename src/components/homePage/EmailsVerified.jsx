import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const EmailsVerified = () => {
  const sectionRef = useScrollReveal();
  return (
    <section
      ref={sectionRef}
      data-animate="fade-up"
      className="relative w-full bg-white overflow-hidden"
    >
      {/* Outer container mirrors EmailPrecision spacing rhythm */}
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-[9.031rem] py-10 lg:py-16 pt-0!">
        <div className="max-w-full lg:max-w-[1250px] mx-auto relative">
          {/* Main container - first image: width 85.125rem, height 39rem, gap 1.5rem */}
          <div className="w-full max-w-full mx-auto max-h-auto lg:h-full lg:flex gap-6 md:gap-8">
            {/* Left column - second image: width 34.6875rem, height 38.9375rem, gap 1.25rem, border-radius 1.5rem, padding 1.5rem, background #F0EBFF */}
            <div
              className="w-full lg:w-[50rem] h-auto lg:h-[33.0959rem] rounded-[1.275rem] p-6 bg-[#F0EBFF] flex flex-col gap-5 mb-4 lg:mb-0"
              data-animate-item
            >
              {/* Title section */}
              <div className="w-full flex flex-col items-center justify-center text-center">
                <h2
                  data-animate-item
                  style={{ transitionDelay: "0.08s" }}
                  className="home-subtitle-emailverified sm:text-[1.6999rem]! sm:leading-[1.6999rem]! md:leading-[1.9124rem]! lg:leading-[2.1249rem]! font-['Inter'] text-center"
                >
                  <span className="text-[#132436]">
                    Lead Generation <span className="text-[#9C93B4]">with</span>{" "}
                  </span>
                  <br />
                  <span className="text-[#132436]">
                    Advantage <span className="text-[#9C93B4]">Of</span>{" "}
                    Verified Emails
                  </span>
                </h2>
              </div>

              {/* Workflow diagram image */}
              <div
                className="w-auto  flex-1 flex items-center justify-center "
                data-animate-item
                style={{ transitionDelay: "0.15s" }}
              >
                <img
                  src="/images/shape-automate.svg"
                  alt="Email verification workflow"
                  className="w-full h-full md:max-h-[24.1711rem]  rounded-[0.85rem] object-contain"
                />
              </div>
            </div>

            {/* Right column */}
            <div
              className="flex flex-col w-full h-auto lg:h-[33.149rem] rounded-[1.275rem] border border-[#E9EAEB] p-[0.0532rem] gap-0 overflow-hidden bg-white"
              data-animate-item
              style={{ transitionDelay: "0.2s" }}
            >
              {/* Right side image - verified email content */}
              <div
                className="w-full flex items-center justify-center"
                data-animate-item
                style={{ transitionDelay: "0.25s" }}
              >
                <img
                  src="/images/background_border.svg"
                  alt="Verified email status"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Bottom section - width 48.8125rem, height 15rem, padding 1.875rem 2rem, border-radius bottom 1.5rem, background #F9F9F8 */}
              <div
                className="w-full max-w-[41.4894rem] mx-auto lg:mx-0 h-[12.7496rem]  rounded-b-[1.275rem] bg-[#F9F9F8] gap-2.5 px-6 py-4 flex flex-col"
                data-animate-item
                style={{ transitionDelay: "0.3s" }}
              >
                {/* Content wrapper - width 44.8125rem, height 11.25rem, gap 1.875rem */}
                <div className="w-full max-w-[38.0895rem] h-full flex flex-col gap-4 justify-between">
                  {/* Description text */}
                  <p className="home-description-emailverified   text-[#546779] font-['Manrope'] leading-7!">
                    Zupitu ensures your emails always reach the right inbox.
                    High email deliverability is achieved through reduced bounce
                    rates, a healthy email list.
                  </p>

                  {/* Call to action */}
                  <div>
                    <button
                      data-hover="lift"
                      className="inline-flex font-['Manrope'] items-center gap-2 text-[#EB3609] font-bold text-[1.1688rem] leading-[1.3813rem]  sm:leading-[1.4875rem] md:leading-[1.5938rem] capitalize cursor-pointer"
                    >
                      <span>Explore Email Finder</span>
                      <img
                        src="/images/right-orange-arrow.svg"
                        alt="Right arrow icon"
                        className="w-4 h-4"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailsVerified;
