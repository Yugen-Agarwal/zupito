import React from "react";

const LeadGeneration = () => {
  return (
    <section className="relative overflow-hidden pt-[30px] sm:pt-[40px] lg:pt-[50px] pb-[20px] sm:pb-[25px] lg:pb-[30px]">
      {/* Main Container */}
      <div className="">
        {/* Main Background Container */}
        <div
          className="relative w-full rounded-[16px] sm:rounded-[20px] lg:rounded-[24px]"
          style={{
            background: "linear-gradient(360deg, #FAFDFF 0%, #F5F5FF 100%)",
          }}
        >
          {/* Content Container */}
          <div className="home-container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-[30px] sm:py-[40px] md:py-[50px] lg:py-[60px] flex flex-col gap-[30px] sm:gap-[40px] md:gap-[50px] lg:gap-[60px]">
            {/* Header Section */}
            <div
              className="home-container mx-auto h-[60px] sm:h-[70px] md:h-[80px] lg:h-[95px] flex items-center justify-center rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] relative px-4"
              style={{
                background:
                  "linear-gradient(90deg, rgba(239, 247, 255, 0.5) 0%, rgba(207, 207, 255, 0.5) 100%)",
                transform: "rotate(-180deg)",
              }}
            >
              {/* Lead Generation Title */}
              <h1
                className="text-center font-['Inter'] font-bold text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[100%] tracking-[0%]"
                style={{
                  fontWeight: 700,
                  color: "#053155",
                  transform: "rotate(180deg)",
                }}
              >
                Lead Generation
              </h1>
            </div>

            {/* Main Content Container */}
            <div className="mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-[30px] sm:gap-[35px] lg:gap-[40px] w-full">
              {/* Lead Generation Image */}
             {/* LEFT IMAGE */}
<div className="w-full lg:flex-1 flex items-center justify-center">
  <div
    className="
      w-full
      flex
      items-start
      justify-start
      h-[260px]
      sm:h-[300px]
      md:h-[340px]
      lg:h-[380px]
      xl:h-[560px]
      2xl:h-[440px]
    "
  >
    <img
      src="/images/lead-generation-img.png"
      alt="Lead Generation"
      className="h-full w-auto max-w-full object-contain"
    />
  </div>
</div>


              {/* Text Content Container */}
              <div className="w-full lg:w-[60%] lg:flex-1 flex flex-col gap-[15px] sm:gap-[18px] lg:gap-[20px]">
                {/* Heading Section Container */}
                <div className="w-full flex flex-col gap-[5px]">
                  {/* Title Container */}
                  <div className="w-full flex flex-col gap-[10px] sm:gap-[12px] lg:gap-[14px]">
                    <h2
                      className="font-['Inter'] font-semibold text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] leading-[1.4] sm:leading-[1.5] lg:leading-[50px] tracking-[-0.5px] sm:tracking-[-1px] lg:tracking-[-1.5px] capitalize"
                      style={{
                        fontWeight: 600,
                        color: "#132436",
                      }}
                    >
                      Find and connect with the{" "}
                      <span className="inline-flex items-center gap-1 sm:gap-2">
                        <span>right</span>
                        <span className="inline-flex items-center justify-center w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] lg:w-[34px] lg:h-[34px] xl:w-[38px] xl:h-[38px] shrink-0">
                          <img
                            src="/images/setting-orange3.svg"
                            alt="Check icon"
                            className="w-full h-full object-contain"
                          />
                        </span>
                        <span>prospects</span>
                      </span>
                    </h2>
                  </div>

                  {/* Body Paragraphs */}
                  <div className="w-full flex flex-col gap-1">
                    <p
                      className="font-['Manrope'] font-medium text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] sm:leading-[1.7] lg:leading-[32px] tracking-[0px]"
                      style={{
                        fontWeight: 500,
                        color: "#546779",
                      }}
                    >
                      With the Email Finder, sales and marketing teams can
                      discover accurate, verified email addresses of
                      decision-makers in their target industries.
                    </p>
                    <p
                      className="font-['Manrope'] font-medium text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] sm:leading-[1.7] lg:leading-[32px] tracking-[0px]"
                      style={{
                        fontWeight: 500,
                        color: "#546779",
                      }}
                    >
                      No more guessing or wasting time on outdated contact
                      lists. Pair it with the Email Verifier to ensure every new
                      lead you add to your database is valid and ready for
                      outreach.
                    </p>
                  </div>
                </div>

                {/* Bullet Points Container */}
                <div className="w-full flex flex-col gap-[8px] sm:gap-[9px] lg:gap-[10px] ml-2 sm:ml-3 lg:ml-4 max-w-full sm:max-w-[95%] lg:max-w-[90%]">
                  {/* Individual Bullet Container */}
                  <div className="w-full flex items-start gap-[8px] sm:gap-[9px] lg:gap-[10px]">
                    <span className="inline-flex items-center justify-center w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] lg:w-[16px] lg:h-[16px] shrink-0 mt-1">
                      <img
                        src="/images/Tick-1.svg"
                        alt="Check icon"
                        className="w-full h-full object-contain"
                      />
                    </span>
                    <p
                      className="font-['Manrope'] font-medium text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] sm:leading-[1.65] lg:leading-[30px] tracking-[0px] flex-1"
                      style={{
                        fontWeight: 500,
                        color: "#546779",
                      }}
                    >
                      Identify decision-makers in specific companies or
                      industries.
                    </p>
                  </div>

                  {/* Individual Bullet Container */}
                  <div className="w-full flex items-start gap-[8px] sm:gap-[9px] lg:gap-[10px]">
                    <span className="inline-flex items-center justify-center w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] lg:w-[16px] lg:h-[16px] shrink-0 mt-1">
                      <img
                        src="/images/Tick-1.svg"
                        alt="Check icon"
                        className="w-full h-full object-contain"
                      />
                    </span>
                    <p
                      className="font-['Manrope'] font-medium text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] sm:leading-[1.65] lg:leading-[30px] tracking-[0px] flex-1"
                      style={{
                        fontWeight: 500,
                        color: "#546779",
                      }}
                    >
                      Expand your pipeline with verified, reachable contacts.
                    </p>
                  </div>

                  {/* Individual Bullet Container */}
                  <div className="w-full flex items-start gap-[8px] sm:gap-[9px] lg:gap-[10px]">
                    <span className="inline-flex items-center justify-center w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] lg:w-[16px] lg:h-[16px] shrink-0 mt-1">
                      <img
                        src="/images/Tick-1.svg"
                        alt="Check icon"
                        className="w-full h-full object-contain"
                      />
                    </span>
                    <p
                      className="font-['Manrope'] font-medium text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] sm:leading-[1.65] lg:leading-[30px] tracking-[0px] flex-1"
                      style={{
                        fontWeight: 500,
                        color: "#546779",
                      }}
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