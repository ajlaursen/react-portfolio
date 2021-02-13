import React from 'react';

const Resume = () => {
    return (
        <>
       <div className="md:hidden flex justify-center items-center w-auto mx-auto">
       <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
           <a href="https://docs.google.com/document/d/e/2PACX-1vQ8LkaCcrpO3mWwlKAPy19uPUovP7STVtu4LxTu_f2-CQ3M9PlBDoFMkR1VyOERfg7jtbd9oKNZ-jjw/pub">Resume on google docs</a>
        </button>
       </div>
       
       <div className="md:flex justify-center items-center w-full mx-auto hidden ">
       <iframe height="900" width="1000" title="resume" src="https://docs.google.com/document/d/e/2PACX-1vQ8LkaCcrpO3mWwlKAPy19uPUovP7STVtu4LxTu_f2-CQ3M9PlBDoFMkR1VyOERfg7jtbd9oKNZ-jjw/pub?embedded=true"></iframe>
       </div>
       
    </>
    )

}

export default Resume