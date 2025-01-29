import React from "react";
import { Check, Circle } from "lucide-react";

export function StepIndicator({ currentStep, steps }) {
  return (
    <div className="flex items-center justify-center w-full mb-12 select-none">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center
                  ${
                    index < currentStep
                      ? "bg-blue-600 border-blue-600 text-white"
                      : index === currentStep
                      ? "border-blue-600 text-blue-600"
                      : "border-gray-300 text-gray-300"
                  }`}
            >
              {index < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                <Circle className="w-5 h-5" />
              )}
            </div>
            <span
              className={`mt-2 text-sm ${
                index <= currentStep ? "text-blue-600" : "text-gray-400"
              }`}
            >
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-[2px] w-16 mx-4 mt-5 ${
                index < currentStep ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
