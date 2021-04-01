import React, { useState } from "react";
import projects from "../../assets/codingPortfolio";
import Modal from "react-modal";

function CodeCard() {
	const [showModal, setShowModal] = useState(false);

	const [activeProject, setActiveProject] = useState(projects[0])

	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
		},
	};


	return (
		<>
			<div className=" h-48 flex flex-col justify-center items-center">
				<h1 className="Lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black text-gray-800 mb-4">
					Projects
				</h1>
				<h2 className="Lg:text-3xl md:text-xl sm:text-l text-sm font-black text-gray-600 mb-14">
					Click image for more info
				</h2>
			</div>
			<div className="container my-12 mx-auto px-4 md:px-12">
				<div className="flex flex-wrap -mx-1 lg:-mx-4">
					{/*  columns */}
					{projects.map((result, index) => (
						<div
							className="my-4 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 "
							key={index}
						>
							{/* projects */}
							<div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl ">
								<div
									className="overflow-hidden h-64 cursor-pointer bg-gray-100 flex flex-col justify-center"
									onClick={(e) => {
										e.stopPropagation();
										setShowModal(true);
										setActiveProject(projects[index])
									}}
								>
									<img
										alt="screenshot"
										className="w-full "
										src={result.img}
									/>
								</div>
								<Modal
									isOpen={showModal}
									ariaHideApp={false}
									style={customStyles}
								>
									<header className="flex items-center justify-center leading-tight p-2 md:p-4 font-black">
										{activeProject.title}
									</header>
									<div className="flex items-center justify-between leading-none p-2 md:p-4">
										<ul className="ml-2 divided">
											<li className="text-grey-700">
												{activeProject.des1}
											</li>
											<br />
											<li className="text-grey-700">
												{activeProject.des2}
											</li>
											<br />
											<li className="text-grey-700">
												<b>Technologies:</b>{" "}
												{activeProject.tech}
											</li>
										</ul>
									</div>
									<div className="flex items-center justify-center mb-2">
										<button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
											<a
												href={activeProject.liveLink}
												target="_blank"
												rel="noreferrer"
											>
												Live Link
											</a>
										</button>
										<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
											<a
												href={activeProject.repo}
												target="_blank"
												rel="noreferrer"
											>
												Repo
											</a>
										</button>
										{/* need to figure out why this button wont close my modal */}
										<button
											className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
											onClick={(e) => {
												e.stopPropagation();
												setShowModal(false);
											}}
										>
											{" "}
											Close
										</button>
									</div>
								</Modal>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default CodeCard;
