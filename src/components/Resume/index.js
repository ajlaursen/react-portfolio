import React from "react";

const Resume = () => {
  return (
    <>
      <div className="md:hidden flex justify-center items-center w-auto mx-auto">
        <button className="bg-green-500 hover:bg-green-600 text-white text-4xl font-bold w-3/4 h-32 py-2 px-4 my-32 rounded-full">
          <a href="https://docs.google.com/document/d/e/2PACX-1vQ8LkaCcrpO3mWwlKAPy19uPUovP7STVtu4LxTu_f2-CQ3M9PlBDoFMkR1VyOERfg7jtbd9oKNZ-jjw/pub">
            Resume on Google Docs
          </a>
        </button>
      </div>

      <div className="md:flex justify-center items-center w-full mx-auto hidden">
        <iframe
          className="shadow-xl"
          height="900"
          width="1000"
          title="resume"
          src="https://docs.google.com/document/d/e/2PACX-1vQ8LkaCcrpO3mWwlKAPy19uPUovP7STVtu4LxTu_f2-CQ3M9PlBDoFMkR1VyOERfg7jtbd9oKNZ-jjw/pub?embedded=true"
        ></iframe>
      </div>
    </>
  );
};

export default Resume;
