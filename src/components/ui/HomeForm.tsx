"use client";
import React, { useState, useCallback } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const HeroForm: React.FC = () => {
  const [step, setStep] = useState<"form" | "otp" | "success">("form");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    category: "",
  });
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const projectCategories = [
    "Android App",
    "Website",
    "Ad Run",
    "Hosting",
    "Servers Maintenance",
  ];

  const sendOtp = useCallback(async () => {
    setIsLoading(true);
    try {
      if (!formData.name || !formData.mobile || !formData.category) {
        alert("Please fill all fields");
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log("Sending OTP to", formData.mobile);
      setStep("otp");
    } finally {
      setIsLoading(false);
    }
  }, [formData]);

  const verifyOtp = useCallback(async () => {
    setIsLoading(true);
    try {
      if (!otp || otp.length !== 6) {
        alert("Please enter a valid 6-digit OTP");
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log("Verifying OTP:", otp);
      setStep("success");
    } finally {
      setIsLoading(false);
    }
  }, [otp]);

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-xl overflow-hidden border border-gray-300">
      {/* Header */}
      <div className="p-5">
        <h2 className="text-2xl font-medium text-gray-900">
          {step === "form"
            ? "New Project"
            : step === "otp"
            ? "Verify Identity"
            : ""}
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          {step === "form"
            ? "Start your development journey"
            : step === "otp"
            ? "Enter 6-digit code sent to your device"
            : ""}
        </p>
      </div>

      {/* Form Body */}
      <div className="flex-grow px-5 pb-5 space-y-4">
        {step === "form" ? (
          <>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                placeholder=""
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full text-sm border-b border-gray-200 px-0 py-2 focus:outline-none focus:border-gray-900 transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                Mobile
              </label>
              <PhoneInput
  country={'in'}
  value={formData.mobile}
  onChange={(phone) => setFormData({ ...formData, mobile: phone })}
  enableSearch
  inputProps={{ required: true }}
  inputClass="!w-full !text-sm !border-b !border-gray-200 !pl-14 !py-2 !focus:outline-none !focus:border-gray-900 !bg-white"
  containerClass="!w-full"
  buttonClass="!bg-transparent !border-none"
  dropdownClass="!z-50"
/>

            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Project Type
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full text-sm border-b border-gray-200 px-0 py-2 focus:outline-none focus:border-gray-900 appearance-none bg-transparent"
              >
                <option value="">Select an project</option>
                {projectCategories.map((category, idx) => (
                  <option key={idx} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </>
        ) : step === "otp" ? (
          <div className="flex flex-col items-center space-y-6 pt-4">
            <div className="w-full space-y-3">
              <label className="text-lg font-medium text-gray-500 uppercase tracking-wider text-center block">
                Verification Code
              </label>
              <div className="flex justify-center space-x-3">
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <input
                      key={i}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={otp[i] || ""}
                      onChange={(e) => {
                        const newOtp = otp.split("");
                        newOtp[i] = e.target.value.replace(/\D/g, "");
                        setOtp(newOtp.join("").slice(0, 6));
                        if (e.target.value && i < 5) {
                          (
                            e.target.nextElementSibling as HTMLInputElement
                          )?.focus();
                        }
                      }}
                      className="w-12 h-12 text-center text-xl border-b-2 border-gray-200 focus:outline-none focus:border-gray-900 bg-transparent"
                    />
                  ))}
              </div>
            </div>

            <button
              onClick={() => setStep("form")}
              className="text-lg text-gray-500 hover:text-gray-700 font-normal transition-colors"
            >
              Resend code
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-2xl font-medium text-gray-900">
                Verification Complete
              </h3>
              <p className="text-lg text-gray-500">
                Thank you for verifying your account
              </p>
            </div>
            <div className="text-center text-sm text-gray-500">
              <p>
                Project:{" "}
                <span className="text-gray-900 font-medium">{formData.category}</span>
              </p>
              <p>
                Mobile: <span className="text-gray-900 font-medium">{formData.mobile}</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-5 border-t border-gray-100">
        {step === "success" ? (
          <button className="w-full py-3 px-4 rounded-lg font-medium text-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors">
            Hang tight — we’ll reach out soon!
          </button>
        ) : (
          <button
            onClick={step === "form" ? sendOtp : verifyOtp}
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
              isLoading
                ? "bg-gray-100 text-gray-400"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </span>
            ) : step === "form" ? (
              "Continue"
            ) : (
              "Verify"
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default React.memo(HeroForm);
