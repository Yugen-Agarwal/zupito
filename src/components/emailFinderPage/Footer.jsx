import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const Footer = () => {
  const sectionRef = useScrollReveal();
  return (
    <>
      <style>{`
        @keyframes rotateClockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .rotate-animation {
          animation: rotateClockwise 20s linear infinite;
          transform-origin: center center;
        }
      `}</style>
      <section
        ref={sectionRef}
        data-animate="fade-up"
        className="relative w-full overflow-hidden bg-transparent"
      >
        {/* Outer layout container (mobile 24px padding) */}
        <div className="w-full flex justify-center px-6! py-6! sm:py-6! md:py-6!">
          {/* Background box with required properties */}
          <div
            className="relative w-full max-w-full mx-auto rounded-[24px] overflow-hidden bg-no-repeat bg-cover bg-center "
            style={{
              backgroundImage: "url('/images/email-finder-footer-bg-img.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 1,
            }}
          >
            {/* Promotional Banner Section */}
            <div className="w-full flex justify-center px-6 overflow-visible">
              {/* Yellow Circle Decorative Element */}
              <div
                className="absolute rounded-full"
                style={{
                  backgroundColor: "#EB3609",
                  width: "clamp(40px, 30vw, 53.25px)",
                  height: "clamp(40px, 30vw, 53.25px)",
                  top: "clamp(80px, -5vw, -100px)",
                  right: "clamp(260px, -5vw, -100px)",
                  zIndex: 10,
                }}
              ></div>
              <div
                className="absolute rounded-full"
                style={{
                  backgroundColor: "#EB3609",
                  width: "clamp(20px, 30vw, 32px)",
                  height: "clamp(20px, 30vw, 32px)",
                  top: "clamp(300px, -5vw, -100px)",
                  right: "clamp(160px, -5vw, -100px)",
                  zIndex: 10,
                }}
              ></div>
              <div
                className="absolute rounded-full"
                style={{
                  width: "clamp(50px, 30vw, 350px)",
                  height: "clamp(50px, 30vw, 350px)",
                  top: "clamp(40px, -5vw, -100px)",
                  right: "clamp(130px, -5vw, -100px)",
                  zIndex: 50,
                }}
              >
                <img
                  src="/images/image.png"
                  alt="Fotter Image Background-Decoration"
                />
              </div>
              <div
                className="absolute rounded-full"
                style={{
                  backgroundColor: "#FFFFFF",
                  width: "clamp(40px, 30vw, 42.75px)",
                  height: "clamp(40px, 30vw, 42.75px)",
                  top: "clamp(300px, -5vw, -100px)",
                  right: "clamp(500px, -5vw, -100px)",
                  zIndex: 10,
                }}
              ></div>
              <div
                className="relative w-full h-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-38 py-8 sm:py-10 md:py-12 lg:py-14 flex flex-col lg:flex-row items-center justify-start gap-8 lg:gap-48"
                style={{ zIndex: 2 }}
              >
                {/* Left Content Section */}
                <div className="w-full lg:max-w-[600px] lg:flex-1 flex flex-col justify-center">
                  {/* Main Content Container */}
                  <div className="w-full flex flex-col gap-6 sm:gap-[30px]">
                    {/* Headline Section */}
                    <div className="flex flex-col gap-8 sm:gap-[40px]">
                      <div className="flex flex-col gap-4 sm:gap-[16px]">
                        <h1
                          data-animate-item
                          className="home-title text-white capitalize font-['Inter'] text-[44px]!"
                        >
                          Sign Up For{" "}
                          <span
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 700,
                              color: "#FFDD47",
                            }}
                          >
                            300 Free Credits
                          </span>{" "}
                          With Unlimited Validity
                        </h1>

                        <p
                          data-animate-item
                          style={{ transitionDelay: "0.08s" }}
                          className="home-description text-[#546779] font-['Manrope']"
                        >
                          Use your free credits for both finding and verifying
                          emails.
                        </p>
                      </div>
                    </div>

                    {/* CTA Buttons Section */}
                    <div
                      data-animate-item
                      style={{ transitionDelay: "0.2s" }}
                      className="flex flex-col sm:flex-row items-center  gap-3 sm:gap-4 md:gap-6 w-full max-w-[800px] pt-4! sm:pt-6! pb-4! sm:pb-6! px-4!"
                    >
                      <button
                        data-hover="lift"
                        className="w-full sm:w-auto h-[50px] sm:h-[54px] font-['Inter'] md:h-[58px] lg:h/[62px] px-6! sm:px-8! md:px-10! rounded-[50px] bg-[#EB3609] hover:bg-[#FF6B35] text-white text-[8px] sm:text-[10px] md:text-[14px] lg:text-[16px] font-semibold whitespace-nowrap inline-flex items-center justify-center gap-2 sm:gap-3 transition-colors cursor-pointer"
                      >
                        <span>Checkout Details</span>
                        <img
                          src="/images/right-arrow.svg"
                          alt="Right arrow icon"
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                      </button>
                      <button
                        data-hover="lift"
                        className="text-white font-['Manrope'] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-semibold flex items-center gap-2 hover:text-[#EDFF67] transition-colors cursor-pointer"
                      >
                        <span>Claim 300 free credits</span>
                        <img
                          src="/images/right-arrow.svg"
                          alt="Right arrow icon"
                          className="w-4 h-4 sm:w-5 sm:h-5 mt-1"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Image Section */}
                <div className="w-full lg:w-auto shrink-0 flex items-center justify-center lg:justify-end">
                  <div className="relative w-full max-w-40 sm:max-w-[180px] lg:max-w-[200px] xl:max-w-[225px] flex items-center justify-center overflow-visible">
                    {/* Main Portrait Image */}
                    <img
                      src="/images/email-finder-footer-vectore.png"
                      alt="Promotional"
                      className="w-full h-auto object-contain relative z-10"
                      style={{
                        maxHeight: "clamp(300px, 45vw, 464px)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* =========================== */}
            <div className="flex flex-col gap-4 px-6! sm:px-8! md:px-12! lg:px-16! xl:px-24! 2xl:px-[150px]!">
              <div className="w-full max-w-full mx-auto mt-10! md:mt-14! lg:mt-16! flex flex-col lg:flex-row gap-4">
                <div className="flex-1 rounded-[16px] bg-[#1C2D3E] p-6! md:p-10! flex flex-col gap-4! md:gap-6! min-h-[224px]">
                  <div className="text-white font-extrabold text-[28px] sm:text-[34px] md:text-[40px] leading-[100%]">
                    Zupitu
                  </div>
                  <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[28px] md:leading-[34px] max-w-[722px]">
                    From dynamic visuals to interactive features, our software
                    empowers you to craft a website tailored to every need.
                  </p>
                </div>

                <div className="w-full lg:w-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4">
                  {[
                    { label: "Facebook", icon: "/images/FB.svg" },
                    { label: "Linked In", icon: "/images/Linkedin.svg" },
                    { label: "Twitter", icon: "/images/Twitter.svg" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-[16px] bg-[#1C2D3E]  flex flex-col items-center justify-center gap-4 p-6! cursor-pointer"
                    >
                      <div className="w-[37.5px]  h-[37.5px] rounded-full  flex items-center justify-center">
                        <img
                          src={s.icon}
                          alt={s.label}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="text-white text-[16px] md:text-[18px]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full max-w-full mx-auto  rounded-[16px] bg-[#1C2D3E] px-6! md:px-[52px]! py-8! md:py-[50px]!">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-[60px] text-white">
                  {[
                    {
                      title: "Product",
                      items: [
                        "Email Verifier",
                        "Email Finder",
                        "Phone Verification",
                        "Pricing",
                      ],
                    },
                    {
                      title: "Resources",
                      items: ["Documentation", "Helpdesk & FAQ", "Blog"],
                    },
                    {
                      title: "Use Cases",
                      items: ["Lead Generation", "Offers"],
                    },
                    { title: "Company", items: ["Terms", "Contact Us"] },
                  ].map((col) => (
                    <div key={col.title} className="flex flex-col gap-4">
                      <h3 className="font-bold text-[14px] sm:text-[16px] md:text-[20px] tracking-[-0.32px] capitalize">
                        {col.title}
                      </h3>
                      <ul className="flex flex-col gap-3 md:gap-4 opacity-90">
                        {col.items.map((it) => (
                          <li
                            key={it}
                            className="text-[14px] sm:text-[16px] md:text-[18px] leading-[100%] cursor-pointer"
                          >
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full max-w-full mx-auto text-center text-white text-[14px] sm:text-[16px] md:text-[18px] py-10!">
              © 2025 Zupitu.{" "}
              <span className="text-white/70">All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
