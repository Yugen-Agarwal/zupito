function PromotionalBanner() {
  return (
    <div
      className="flex relative w-full bg-[#FDEBE6] h-auto min-h-[51px] sm:min-h-[59.5px] lg:h-[68px] items-center justify-center py-2 sm:py-3 lg:py-0"
      style={{ zIndex: 70 }}
    >
      <div className="w-full max-w-[1632px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <p className="text-[10.2px] sm:text-[11.05px] md:text-[11.9px] lg:text-[13.6px] font-['Inter'] text-[#2E3E50] text-center font-medium leading-tight px-2">
          Introducing <span className="text-[#132436] font-medium">Zupitu <span className="font-extrabold text-[11.9px] sm:text-[13.6px] md:text-[15.3px]" style={{ fontFamily: "'MADE TOMMY', sans-serif" }}>25,000</span></span> Validation Credits/mo + <span className="text-[#132436] font-extrabold">6</span> Deliverability Tools - Just <span className="text-[#132436] font-extrabold">$99</span>/mo
        </p>
      </div>
    </div>
  );
}

export default PromotionalBanner;

