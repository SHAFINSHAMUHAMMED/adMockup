import React, { useState, useEffect } from "react";
import Ad from "./Ad/ad";
import Question from "./Question/Question";
import PrivacyPolicy from "./Privacy/Privacy";
import Thankyou from "./Thank you/Thankyou";

function LeadForm({ setHeaderSize, mobile }) {
  const [activeComponent, setActiveComponent] = useState("Ad");

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Ad":
        return <Ad mobile={mobile} setHeaderSize={setHeaderSize} />;
      case "Question":
        return <Question mobile={mobile} setHeaderSize={setHeaderSize} />;
      case "Privacy":
        return <PrivacyPolicy mobile={mobile} setHeaderSize={setHeaderSize} />;
      case "Thankyou":
        return <Thankyou mobile={mobile} setHeaderSize={setHeaderSize} />;
      default:
        return null;
    }
  };

  const handleFooterClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <>
      {renderActiveComponent()}
      <footer className="mb-5 mt-8">
        <h5 className="text-center text-sm font-semibold mb-4">
          LEAD FORM STATE
        </h5>
        <div className="flex justify-evenly">
          <h5
            className={`h5-hover ${
              activeComponent === "Ad" ? "active" : "text-gray-400"
            }`}
            onClick={() => handleFooterClick("Ad")}
          >
            AD
          </h5>
          <h5
            className={`h5-hover ${
              activeComponent === "Question" ? "active" : "text-gray-400"
            }`}
            onClick={() => handleFooterClick("Question")}
          >
            QUESTION
          </h5>
          <h5
            className={`h5-hover ${
              activeComponent === "Privacy" ? "active" : "text-gray-400"
            } text-center`}
            onClick={() => handleFooterClick("Privacy")}
          >
            PRIVACY <br /> POLICY
          </h5>
          <h5
            className={`h5-hover ${
              activeComponent === "Thankyou" ? "active" : "text-gray-400"
            }`}
            onClick={() => handleFooterClick("Thankyou")}
          >
            THANK YOU
          </h5>
        </div>
      </footer>
    </>
  );
}

export default LeadForm;
