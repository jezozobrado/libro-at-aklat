import React from "react";
import Steps from "../components/home/Steps";
import HeroText from "../components/HeroText";

const HowItWorks = () => {
  return (
    <div className="mt-20">
      <HeroText
        header="Treat your shelf to a book subscription"
        subtitle="New books same laundry I'm not folding :>"
      />
      <Steps />
    </div>
  );
};

export default HowItWorks;
