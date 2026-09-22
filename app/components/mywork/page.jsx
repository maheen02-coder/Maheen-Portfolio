import React from "react";
import "./mywork.css";
const MyWorks = () => {
  const projects = [
    {
      title: "College Admission Form",
      description:
        "A responsive college admission form built with React, JavaScript and CSS.",
      image: "/collegeForm.PNG",
      live: "https://college-form-handling.vercel.app/",
      github: "https://github.com/maheen02-coder/College-Form-handling",
    },
    {
  title: "Burger Builder",
  description:
    "An interactive burger builder where users can add and remove ingredients.",
  image: "/burger.png",
  live: "https://burger-builder-jet.vercel.app/",
  github: "https://github.com/maheen02-coder/Burger-Builder",
},
    {
      title: "PUPASSURE",
      description:
        "A modern and responsive dog-themed website with a clean user interface.",
      image: "/pupassure.PNG",
      live: "#",
      github: "#",
    },
  ];
  return (
    <section className="min-h-screen bg-black text-white px-8 py-24">
      {" "}
      {/* Heading */}{" "}
      <div className="text-center mb-16">
        {" "}
        <p className="text-sm uppercase tracking-[5px] text-gray-400">
          {" "}
          Portfolio{" "}
        </p>{" "}
        <h2 className="text-5xl font-bold mt-3">
          {" "}
          My <span className="text-gray-400">Works</span>{" "}
        </h2>{" "}
        <p className="text-gray-400 mt-5 max-w-xl mx-auto">
          {" "}
          A collection of projects I have built while learning and working with
          modern web technologies.{" "}
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group border border-gray-800 bg-[#0a0a0a] overflow-hidden hover:border-gray-500 transition duration-300"
          >
            {/* Image */}
            <div className="h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            {/* Content */}
            <div className="p-6">
              {" "}
              <h3 className="text-2xl font-semibold mb-3">
                {" "}
                {project.title}{" "}
              </h3>{" "}
              <p className="text-gray-400 text-sm leading-6 mb-6">
                {" "}
                {project.description}{" "}
              </p>{" "}
              {/* Buttons */}{" "}
              <div className="flex gap-3">
                {" "}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 bg-white text-black text-sm font-medium hover:bg-gray-300 transition"
                >
                  {" "}
                  Live Demo{" "}
                </a>{" "}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 border border-gray-700 text-white text-sm hover:bg-white hover:text-black transition"
                >
                  {" "}
                  GitHub{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </section>
  );
};
export default MyWorks;
