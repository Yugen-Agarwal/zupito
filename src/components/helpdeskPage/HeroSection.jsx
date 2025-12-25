const HeroSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-no-repeat bg-top"
      style={{
        backgroundImage: "url('/images/help-desk-bg.png')",
        backgroundSize: 'cover',
      }}
    >
      {/* MAIN CONTAINER */}
      <div
        className="
          relative mx-auto
          max-w-[1440px]
          2xl:max-w-[1600px]
          px-4 sm:px-6 lg:px-12
          py-[30px] lg:py-[70px]
        "
      >
        {/* HEADER */}
        <div className="flex flex-col items-center gap-[21px]">
          <div className="max-w-[1050px] 2xl:max-w-[1150px] text-center">

            {/* TITLE */}
            <h1
              className="
                flex flex-wrap items-center justify-center gap-3
                font-['Inter'] font-semibold
                text-[32px] sm:text-[36px]
                lg:text-[40px]
                xl:text-[44px]
                2xl:text-[46px]
                leading-[100%]
                tracking-[-2.2px]
                text-[#132436]
                mx-auto max-w-[66%]
              "
            >
              <span>Answers</span>

              <span className="inline-flex w-[48px] h-[48px] xl:w-[60px] xl:h-[60px] 2xl:w-[64px] 2xl:h-[64px]">
                <img src="/images/setting-orange-5.svg" alt="" />
              </span>

              <span>To The Most Common</span>
              <br />
              <span>Things</span>

              <span className="inline-flex w-[48px] h-[48px] xl:w-[60px] xl:h-[60px] 2xl:w-[64px] 2xl:h-[64px]">
                <img src="/images/rocket-purple.svg" alt="" />
              </span>

              <span>We're Asked</span>
            </h1>

            {/* DESCRIPTION */}
            <div className="mt-[21px] space-y-2">
              <p
                className="
                  font-['Manrope'] font-medium
                  text-[16px] sm:text-[18px]
                  xl:text-[20px]
                  2xl:text-[22px]
                  leading-[32px] xl:leading-[44px]
                  text-[#546779]
                "
              >
                We've put together quick answers to the most common questions about our{' '}
                <span className="font-bold text-[#132436]">
                  Email Finder, credits, and support.
                </span>
              </p>

              <p
                className="
                  font-['Manrope'] font-medium
                  text-[16px] sm:text-[18px]
                  xl:text-[20px]
                  2xl:text-[22px]
                  leading-[32px] xl:leading-[44px]
                  text-[#546779]
                "
              >
                If you don't see what you're looking for, our team is just a message away.
              </p>
            </div>
          </div>
        </div>

        {/* CARDS + CONNECTOR */}
        <div
          className="
            relative mt-[80px]
            mx-auto
            max-w-[1362px]
            2xl:max-w-[1500px]
            3xl:max-w-[1650px]
          "
        >
          {/* CONNECTOR */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[28%] z-0 pointer-events-none">
            <img
              src="/images/Group-bg.png"
              alt="Connector"
              className="
                w-full
                max-w-[1022px]
                2xl:max-w-[1120px]
                3xl:max-w-[1200px]
                h-auto
              "
            />
          </div>

          {/* CARDS */}
          <div
            className="
              relative z-10 mx-auto
              flex flex-col md:flex-row
              gap-[21px]
              max-w-[1022px]
              2xl:max-w-[1120px]
              3xl:max-w-[1200px]
            "
          >
            {/* TECH SUPPORT */}
            <div
              className="
                w-full lg:w-[659px] 2xl:lg:w-[720px]
                rounded-[24px] p-[24px]
                flex items-center justify-center
              "
              style={{
                background: 'linear-gradient(180deg, #C2CEFF 0%, #96AAFB 100%)',
              }}
            >
              <div className="bg-white rounded-[12px] w-full max-w-[611px] px-20 py-[30px] text-center space-y-[24px]">
                <h2 className="font-['Inter'] font-semibold text-[22px] xl:text-[26px] 2xl:text-[28px] tracking-[-1.2px] text-[#132436]">
                  Technical Support
                </h2>

                <p className="font-['Manrope'] text-[16px] xl:text-[20px] leading-[36px] text-[#585D71]">
                  For Product integration or technical support, please write at
                </p>

                <div className="relative h-[70px] rounded-[74px] flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, #C2CEFF 0%, #96AAFB 100%)',
                      opacity: 0.2,
                    }}
                  />
                  <a
                    href="mailto:support@zupitu.com"
                    className="relative z-10 font-['Manrope'] text-[18px] xl:text-[20px] font-bold text-black"
                  >
                    support@zupitu.com
                  </a>
                </div>
              </div>
            </div>

            {/* SALES */}
            <div
              className="
                w-full lg:w-[671px] 2xl:lg:w-[740px]
                rounded-[24px] p-[24px]
                flex flex-col items-center justify-center
              "
              style={{
                background: 'linear-gradient(180deg, #EEE9FF 0%, #CABCFF 100%)',
              }}
            >
              <h2 className="font-['Inter'] font-semibold text-[22px] xl:text-[26px] 2xl:text-[28px] tracking-[-1.2px] text-[#132436] mb-4">
                  Contact Sales
                </h2>
              <div className="bg-white rounded-[16px] w-full max-w-[623px] p-[32px] text-center space-y-4 px-20">
                <p className="font-['Manrope'] text-[16px] xl:text-[20px] leading-[36px] text-[#585D71]">
                  Looking for a custom quote?
                </p>

                <p className="font-['Manrope'] text-[16px] xl:text-[20px] leading-[36px] text-[#585D71]">
                  Drop us a line at client-
                </p>

                <div className="relative h-[70px] rounded-[64px] flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, #E9EBFF 0%, #CABCFF 100%)',
                      opacity: 0.2,
                    }}
                  />
                  <a
                    href="mailto:success@zupitu.com"
                    className="relative z-10 font-['Manrope'] text-[18px] xl:text-[20px] font-bold text-[#132436]"
                  >
                    success@zupitu.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
