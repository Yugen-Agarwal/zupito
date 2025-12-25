const DocumentationPage = () => {
  return (
    <section className="relative w-full overflow-hidden">
      
      {/* LEFT PIN */}
      <img
        src="/images/pin.png"
        alt=""
        className="
          pointer-events-none
          absolute left-0 top-1/2 -translate-y-1/2
          hidden md:block
          w-[80px] md:w-[110px] lg:w-[140px]
        "
      />

      {/* RIGHT PIN */}
      <img
        src="/images/pin.png"
        alt=""
        className="
          pointer-events-none
          absolute right-0 top-1/2 -translate-y-1/2
          hidden md:block
          w-[80px] md:w-[110px] lg:w-[140px]
        "
      />

      {/* Main Container */}
      <div className="w-full max-w-full relative z-10">
        <div
          className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[150px] py-[60px] sm:py-[80px] md:py-[100px]"
          style={{
            background: "linear-gradient(180deg, #F4F7FA 0%, #E5F2FF 100%)",
          }}
        >
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 max-w-[1022px] mx-auto">
            
            {/* Left Content */}
            <div className="w-full lg:w-auto flex flex-col gap-[14px] sm:gap-[21px]">
              <div className="flex flex-col gap-[21px]">
                <h2 className="flex flex-wrap items-center gap-2 sm:gap-3 font-['Inter'] font-semibold text-[clamp(32px,4vw,44px)] leading-[100%] tracking-[-2.2px] text-[#132436]">
                  <span>Can't</span>
                  <span className="inline-flex items-center justify-center shrink-0 relative">
                    <img
                      src="/images/Commitment-1.svg"
                      alt="Icon"
                      className="w-[clamp(40px,5vw,60px)] h-[clamp(40px,5vw,60px)] relative z-10"
                    />
                  </span>
                  <span>Find What You're</span>
                  <span className="w-full lg:w-auto">looking for?</span>
                </h2>

                <p className="font-['Manrope'] font-medium text-[clamp(18px,2.5vw,20px)] leading-[100%] text-[#546779]">
                  Check out our full documentation.
                </p>
              </div>
            </div>

            {/* Right Button */}
            <div className="w-full lg:w-auto shrink-0">
              <button className="w-full lg:w-[240px] h-[62px] flex items-center justify-center gap-[10px] rounded-[50px] bg-[#EB3609] hover:bg-[#D32F08] transition-colors duration-200 px-6">
                <span className="font-['Inter'] font-semibold text-[16px] text-white">
                  Visit Documentation
                </span>
                <img
                  src="/images/right-arrow.svg"
                  alt="Right arrow icon"
                  className="w-5 h-5 object-contain"
                />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationPage;
