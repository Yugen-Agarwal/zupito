import React, { useEffect } from "react";

const StatusItem = ({ label, value }) => (
    <div className="flex items-center gap-3">
        <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
            ✓
        </span>
        <span className="text-[#A9B3C1]">
            {label}{" "}
            <span className="text-white font-semibold text-[16px] lg:text-[18px]">{value}</span>
        </span>
    </div>
);

const EmailVerifyPopup = ({ onClose }) => {
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

            {/* Modal Card */}
            <div className="w-full max-w-[510px] max-h-[411px] rounded-2xl bg-[#12263A] p-6 sm:px-[24px] sm:py-[12px] relative pointer-events-auto">

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/60 hover:text-white"
                >
                    ✕
                </button>

                {/* Header */}
                <div className="flex items-center gap-4 py-4">
                    <div className="w-[52px] h-[52px] rounded-full bg-white relative">
                        <img
                            src="/images/email-icon.svg"
                            alt=""
                            className="w-7 h-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>


                    <h3 className="text-white text-lg sm:text-[22px] font-semibold break-all">
                        sample@maildomain.com
                    </h3>
                </div>

                {/* Content */}
                <div className="grid grid-cols-2 gap-2 md:gap-6">
                    <div className="space-y-4">
                        <StatusItem label="Account" value="Sample" />
                        <StatusItem label="Status" value="Valid" />
                        <StatusItem label="Status" value="Valid" />
                        <StatusItem label="Status" value="Valid" />
                        <StatusItem label="Status" value="Valid" />
                    </div>

                    <div className="space-y-4">
                        <StatusItem label="Domain" value="maildomain" />
                        <StatusItem label="Status" value="Valid" />
                        <StatusItem label="Status" value="Valid" />
                        <StatusItem label="Status" value="Valid" />
                        <StatusItem label="Status" value="Valid" />
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-10 text-center">
                    <button className="text-[#EB3609] font-semibold hover:underline inline-flex items-center gap-2 text-[16px]">
                        Verify Another Email →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmailVerifyPopup;
