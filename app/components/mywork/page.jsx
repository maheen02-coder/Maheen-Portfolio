"use client";

import React from "react";

const MyWorks = () => {
  const projects = [
    {
      title: "College Admission Form",
      description:
        "A responsive college admission form built with React, JavaScript and CSS.",
      image: "/collegeForm.PNG",
      live: "https://college-form-handling.vercel.app/",
      github: "https://github.com/maheen02-coder/College-Form-handling",
      number: "01",
    },
    {
      title: "Burger Builder",
      description:
        "An interactive burger builder where users can add and remove ingredients.",
      image: "/burger.PNG",
      live: "https://burger-builder-jet.vercel.app/",
      github: "https://github.com/maheen02-coder/Burger-Builder",
      number: "02",
    },
    {
      title: "PUPASSURE",
      description:
        "A modern and responsive dog-themed website with a clean user interface.",
      image: "/pupassure.PNG",
      live: "#",
      github: "#",
      number: "03",
    },
  ];

  return (
    <section
      id="works"
      className="
        relative min-h-screen
        overflow-hidden
        bg-black
        px-8 py-24
        text-white
        max-md:px-5
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute left-[-150px] top-[30%]
          h-96 w-96
          rounded-full
          bg-purple-500/10
          blur-[120px]
          animate-pulse
        "
      />

      <div
        className="
          pointer-events-none
          absolute bottom-[-150px] right-[-100px]
          h-96 w-96
          rounded-full
          bg-blue-500/10
          blur-[120px]
          animate-pulse
        "
      />

      {/* Heading */}
      <div
        className="
          relative z-10
          mx-auto mb-16
          max-w-6xl
        "
      >
        <p
          className="
            mb-4
            text-sm uppercase
            tracking-[6px]
            text-gray-500
          "
        >
          Selected Projects
        </p>

        <h2
          className="
            text-5xl font-bold
            md:text-7xl
          "
        >
          My <span className="text-gray-500">Works.</span>
        </h2>

        <p
          className="
            mt-5 max-w-2xl
            leading-7
            text-gray-400
          "
        >
          A collection of projects I've built while exploring modern
          technologies, creative interfaces, and full-stack development.
        </p>
      </div>

      {/* Projects */}
      <div
        className="
          relative z-10
          mx-auto
          flex max-w-6xl
          flex-wrap
          justify-center
          gap-8
        "
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="
              group
              relative
              w-[350px]
              overflow-hidden
              rounded-2xl
              border border-white/10
              bg-white/[0.03]

              transition-all duration-700
              hover:-translate-y-4
              hover:border-white/30
              hover:bg-white/[0.06]
              hover:shadow-[0_25px_70px_rgba(255,255,255,0.08)]

              max-sm:w-full
            "
          >
            {/* Project Number */}
            <div
              className="
                absolute right-5 top-5
                z-20
                text-xs
                tracking-[3px]
                text-white/50
                transition-all duration-500
                group-hover:text-white
              "
            >
              {project.number}
            </div>

            {/* Image */}
            <div
              className="
                relative
                h-60
                overflow-hidden
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                  h-full w-full
                  object-cover

                  transition-all duration-700
                  group-hover:scale-110
                  group-hover:rotate-1
                "
              />

              {/* Image Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/20
                  transition-all duration-500
                  group-hover:bg-black/0
                "
              />

              {/* Shine */}
              <div
                className="
                  absolute -left-[100%] top-0
                  h-full w-1/2
                  skew-x-[-20deg]
                  bg-white/10

                  transition-all duration-1000
                  group-hover:left-[150%]
                "
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3
                className="
                  text-2xl font-semibold
                  transition-all duration-500
                  group-hover:translate-x-2
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  mt-3
                  min-h-[72px]
                  text-sm
                  leading-6
                  text-gray-400
                "
              >
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-lg
                    bg-white
                    px-5 py-2.5
                    text-sm font-medium
                    text-black

                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-gray-200
                    hover:shadow-[0_8px_25px_rgba(255,255,255,0.15)]
                  "
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-lg
                    border border-white/20
                    px-5 py-2.5
                    text-sm
                    text-white

                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-white
                    hover:bg-white
                    hover:text-black
                  "
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Bottom Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                left-1/2
                h-32 w-32
                -translate-x-1/2
                rounded-full
                bg-white/10
                blur-3xl

                transition-all duration-700
                group-hover:scale-[2]
              "
            />
          </div>
        ))}
      </div>

      {/* Bottom Line */}
      <div
        className="
          relative z-10
          mx-auto mt-20
          max-w-6xl
          border-t border-white/10
          pt-6
          text-xs uppercase
          tracking-[4px]
          text-white/30
        "
      >
        Built with code & creativity.
      </div>
    </section>
  );
};

export default MyWorks;

