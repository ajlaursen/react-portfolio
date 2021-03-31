import React from "react";
import Title from "../Title";
import About from "../About";
import PlaceHolder from "../PlaceHolder";
import CodeCard from "../CodeCard";
import Resume from "../Resume";
import ContactCard from "../ContactCard";

const Body = () => {
  return (
    <>
      <div className="my-14">
        <a name="top" className="absolute -top-10"></a>
        <Title />
        <a name="about" className=" relative -top-16"></a>
        <About />
        <a name="coding" className=" relative -top-16"></a>
        <CodeCard />
        <a name="resume" className=" relative -top-16"></a>
        <Resume />
        <a name="contact" className=" relative -top-16"></a>
        <ContactCard />
        <PlaceHolder />
      </div>
    </>
  );
};

export default Body;
