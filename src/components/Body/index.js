import React from "react";
import Title from "../Title";
import Lorem from "../Lorem";
import PlaceHolder from "../PlaceHolder";
import CodeCard from "../CodeCard";
import Resume from "../Resume";
import ContactCard from "../ContactCard";

const Body = () => {
  return (
    <>
      <div className="my-14">
        <a name="top"></a>
        <Title />
        <a name="about"></a>
        <Lorem />
        <a name="coding"></a>
        <CodeCard />
        <a name="resume"></a>
        <Resume />
        <a name="contact"></a>
        <ContactCard />
        <PlaceHolder />
      </div>
    </>
  );
};

export default Body;
