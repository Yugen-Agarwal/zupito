const DocumentationPage = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Main Card Wrapper */}
      <div className="w-full max-w-full">
        <div
          className="
            relative
            w-full
            rounded-[24px]
            px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[150px]
            py-[60px] sm:py-[80px] md:py-[100px]
            overflow-hidden
          "
          style={{
            background: "linear-gradient(180deg, #F4F7FA 0%, #E5F2FF 100%)",
          }}
        >
          {/* LEFT PIN */}
          <img
            src="/images/pin.png"
            alt=""
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              hidden md:block
              z-10
            "
            style={{
              width: "clamp(100px, 9vw, 180px)",
              transform: "translate(-30%, -20%)",
            }}
          />

          {/* RIGHT PIN */}
          <img
            src="/images/Pin-right.png"
            alt=""
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              hidden md:block
              z-10
            "
            style={{
              width: "clamp(100px, 9vw, 180px)",
              transform: "translate(30%, -20%)",
            }}
          />

          {/* Inner Content Container */}
          <div
            className="
              relative
              z-20
              w-full
              mx-auto
              flex
              flex-col
              lg:flex-row
              items-center
              justify-between
              gap-8
            "
            style={{
              maxWidth: "clamp(960px, 72vw, 1160px)", // homepage-scale width
            }}
          >
            {/* LEFT CONTENT */}
            <div className="w-full lg:max-w-[640px] flex flex-col gap-6">
              <h2
                className="
                  font-['Inter']
                  font-semibold
                  text-[#132436]
                  leading-[110%]
                  tracking-[-0.05em]
                "
                style={{
                  fontSize: "clamp(32px, 3.2vw, 44px)",
                }}
              >
                <span className="flex flex-wrap items-center gap-3">
                  <span>Can't</span>

                  <span className="inline-flex items-center justify-center shrink-0">
                    <img
                      src="/images/Commitment-1.svg"
                      alt=""
                      style={{
                        width: "clamp(40px, 4vw, 60px)",
                        height: "clamp(40px, 4vw, 60px)",
                      }}
                    />
                  </span>

                  <span>find what you're</span>
                </span>
                <span className="block">looking for?</span>
              </h2>

              <p
                className="
                  font-['Manrope']
                  font-medium
                  text-[#546779]
                "
                style={{
                  fontSize: "clamp(16px, 1.4vw, 20px)",
                }}
              >
                Check out our full documentation.
              </p>
            </div>

            {/* RIGHT BUTTON */}
            <div className="w-full lg:w-auto shrink-0">
              <button
                className="
                  w-full
                  sm:w-auto
                  min-w-[220px]
                  lg:min-w-[240px]
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-[50px]
                  bg-[#EB3609]
                  hover:bg-[#D32F08]
                  transition-colors
                  duration-200
                  px-6
                "
                style={{
                  height: "clamp(56px, 4.5vw, 62px)",
                }}
              >
                <span
                  className="
                    font-['Inter']
                    font-semibold
                    text-white
                    whitespace-nowrap
                  "
                  style={{
                    fontSize: "clamp(14px, 1.1vw, 16px)",
                  }}
                >
                  Visit Documentation
                </span>

                <img
                  src="/images/right-arrow.svg"
                  alt=""
                  className="object-contain"
                  style={{
                    width: "clamp(18px, 1.4vw, 20px)",
                    height: "clamp(18px, 1.4vw, 20px)",
                  }}
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
