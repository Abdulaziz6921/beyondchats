import React, { useState } from "react";
import { StepIndicator } from "./components/StepIndicator";
import { RegistrationForm } from "./components/RegistrationForm";
import { OrganizationSetup } from "./components/OrganizationSetup";
import { ChatbotIntegration } from "./components/ChatbotIntegration";

const steps = ["Registration", "Organization", "Integration"];

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepComplete = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <StepIndicator currentStep={currentStep} steps={steps} />

          <div className="flex justify-center">
            {currentStep === 0 && (
              <RegistrationForm onComplete={handleStepComplete} />
            )}
            {currentStep === 1 && (
              <OrganizationSetup onComplete={handleStepComplete} />
            )}
            {currentStep === 2 && (
              <ChatbotIntegration onComplete={handleStepComplete} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
