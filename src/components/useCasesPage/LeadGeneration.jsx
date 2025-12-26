import React from "react";

const LeadGeneration = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Main Container */}
      <div className="w-full">
        {/* Background Gradient Container */}
        <div
          className="relative w-full mx-auto rounded-[16px] lg:rounded-[24px]"
          style={{
            background: "linear-gradient(360deg, #FAFDFF 0%, #F5F5FF 100%)",
          }}
        >
          {/* Inner Padding Wrapper */}
          <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-[60px] flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[60px]">

            {/* HEADER */}
            <div
              className="w-full home-container mx-auto h-[65px] sm:h-[75px] md:h-[85px] lg:h-[95px] flex items-center justify-center rounded-[12px] lg:rounded-[16px] relative"
              style={{
                background:
                  "linear-gradient(90deg, rgba(239, 247, 255, 0.5) 0%, rgba(207, 207, 255, 0.5) 100%)",
                transform: "rotate(-180deg)",
              }}
            >
              {/* Lead Generation Title */}
              <h1
                className="text-center font-['Inter'] font-bold text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[100%] tracking-[0%] px-4"
                style={{
                  fontWeight: 700,
                  color: "#053155",
                  transform: "rotate(180deg)",
                }}
              >
                Lead Generation
              </h1>
            </div>

            {/* MAIN CONTENT - FLEX LAYOUT */}
            <div className="home-container mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-2">

              {/* LEFT IMAGE - 45% WIDTH ON DESKTOP */}
              <div className="w-full lg:w-[45%] flex items-center justify-center lg:justify-start">
                <div className="w-full max-w-[360px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px]">
                  <img
                    src="/images/lead-generation-img.png"
                    alt="Lead Generation"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* RIGHT TEXT CONTENT - 40% WIDTH ON DESKTOP */}
              <div className="w-full lg:w-[40%] flex flex-col justify-center text-left px-4 sm:px-6 lg:px-0">

                {/* TITLE */}
                <h2
                  className="font-['Inter'] font-semibold text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] leading-[1.3] sm:leading-[1.35] lg:leading-[50px] tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-1.2px] lg:tracking-[-1.5px]"
                  style={{ color: "#132436" }}
                >
                  Find and connect with the{" "}
                  <span className="inline-flex items-center gap-1.5 sm:gap-2">
                    <span>right</span>
                    <span className="inline-flex items-center justify-center w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] lg:w-[38px] lg:h-[38px] shrink-0">
                      <img
                        src="/images/setting-orange3.svg"
                        alt="icon"
                        className="w-full h-full object-contain"
                      />
                    </span>
                    <span>prospects</span>
                  </span>
                </h2>

                {/* PARAGRAPHS */}
                <p
                  className="font-['Manrope'] font-medium text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] mt-3 sm:mt-3.5 lg:mt-4"
                  style={{ color: "#546779" }}
                >
                  With the Email Finder, sales and marketing teams can discover
                  accurate, verified email addresses of decision-makers in their
                  target industries.
                </p>

                <p
                  className="font-['Manrope'] font-medium text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] mt-3 sm:mt-3.5 lg:mt-4"
                  style={{ color: "#546779" }}
                >
                  No more guessing or wasting time on outdated contact lists.
                  Pair it with the Email Verifier to ensure every new lead you
                  add to your database is valid and ready for outreach.
                </p>

                {/* BULLET POINTS */}
                <div className="w-full flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-[15px] mt-4 sm:mt-5 md:mt-6 lg:mt-[14px] ml-3 sm:ml-3.5 lg:ml-4">
                  <div className="flex items-start gap-2 sm:gap-2.5 lg:gap-[10px]">
                    <img
                      src="/images/Tick-1.svg"
                      alt="tick"
                      className="w-[15px] h-[15px] lg:w-[16px] lg:h-[16px] mt-[5px] lg:mt-[6px] shrink-0"
                    />
                    <p
                      className="font-['Manrope'] font-medium text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[30px]"
                      style={{ color: "#546779" }}
                    >
                      Identify decision-makers in specific companies or industries.
                    </p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-2.5 lg:gap-[10px]">
                    <img
                      src="/images/Tick-1.svg"
                      alt="tick"
                      className="w-[15px] h-[15px] lg:w-[16px] lg:h-[16px] mt-[5px] lg:mt-[6px] shrink-0"
                    />
                    <p
                      className="font-['Manrope'] font-medium text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[30px]"
                      style={{ color: "#546779" }}
                    >
                      Expand your pipeline with verified, reachable contacts.
                    </p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-2.5 lg:gap-[10px]">
                    <img
                      src="/images/Tick-1.svg"
                      alt="tick"
                      className="w-[15px] h-[15px] lg:w-[16px] lg:h-[16px] mt-[5px] lg:mt-[6px] shrink-0"
                    />
                    <p
                      className="font-['Manrope'] font-medium text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[30px]"
                      style={{ color: "#546779" }}
                    >
                      Save time and money by avoiding fake or incorrect emails.
                    </p>
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

export default LeadGeneration;