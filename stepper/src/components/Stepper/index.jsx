import "./stepper.css";

import React from "react";

const Step = ({ step, activeStep, title, isLast }) => {
  return (
    <div className={`step `}>
      <div
        className={`step__content ${step <= activeStep + 1 ? "active" : ""}`}
      >
        <span className="step__number">{step}</span>
        <span className="step__title">{title}</span>
      </div>
      {!isLast && (
        <div
          className={`step__line ${step < activeStep + 1 ? "active" : ""}`}
        ></div>
      )}
    </div>
  );
};

export const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="stepper">
      {steps.map((step, index) => {
        return (
          <Step
            key={index}
            step={index + 1}
            activeStep={currentStep}
            title={step}
            isLast={index === steps.length - 1}
          />
        );
      })}
    </div>
  );
};
