import React from "react";
import projects from "../../assets/codingPortfolio";

const CodeCard = () => {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {/*  columns */}
        {projects.map((result, index) => (
          <div
            className="my-4 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            key={index}
          >
            {/* projects */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="overflow-hidden max-h-32">
                <a href={result.liveLink}>
                  <img
                    alt="screenshot"
                    className="block w-full"
                    src={result.img}
                  />
                </a>
              </div>
              <header className="flex items-center justify-center leading-tight p-2 md:p-4 font-black">
                {result.title}
              </header>
              <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <ul className="ml-2 divided">
                  <li className="text-grey-700">{result.des1}</li>
                  <br />
                  <li className="text-grey-700">{result.des2}</li>
                  <br />
                  <li className="text-grey-700">
                    <b>Technologies:</b> {result.tech}
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center mb-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
                  <a href={result.liveLink} target="blank">
                    Live Link
                  </a>
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  <a href={result.repo} target="blank">
                    Repo
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeCard;
