"use client";

import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      type: "Frontend",
      symbol: "</>",
    },
    {
      name: "CSS",
      type: "Frontend",
      symbol: "#",
    },
    {
      name: "JavaScript",
      type: "Frontend + Backend",
      symbol: "JS",
    },
    {
      name: "React.js",
      type: "Frontend Library",
      symbol: "R",
    },
    {
      name: "Next.js",
      type: "React Framework",
      symbol: "N",
    },
    {
      name: "SQL",
      type: "Database",
      symbol: "DB",
    },
    {
      name: "MERN Stack",
      type: "Full-Stack",
      symbol: "M",
    },
    {
      name: "Tailwind CSS",
      type: "CSS Framework",
      symbol: "TW",
    },
  ];

  return (
    <section
      id="skills"
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
          absolute left-[-150px] top-[20%]
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
      <div className="relative z-10 mx-auto mb-16 max-w-6xl">
        <p
          className="
            mb-4
            text-sm uppercase
            tracking-[6px]
            text-gray-500
          "
        >
          My Expertise
        </p>

        <h2
          className="
            text-5xl font-bold
            md:text-7xl
          "
        >
          Skills<span className="text-gray-500">.</span>
        </h2>

        <p
          className="
            mt-5 max-w-2xl
            text-gray-400
            leading-7
          "
        >
          Technologies and tools I use to transform ideas into modern,
          functional digital experiences.
        </p>
      </div>

      {/* Skills */}
      <div
        className="
          relative z-10
          mx-auto
          flex max-w-6xl
          flex-wrap
          justify-center
          gap-5
        "
      >
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="
              group
              relative
              w-[260px]
              overflow-hidden
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              p-6

              transition-all duration-700
              hover:-translate-y-3
              hover:border-white/30
              hover:bg-white/[0.07]
              hover:shadow-[0_20px_50px_rgba(255,255,255,0.08)]

              max-sm:w-full
            "
          >
            {/* Number */}
            <span
              className="
                absolute right-5 top-4
                text-xs
                text-white/20
                transition-all duration-500
                group-hover:text-white/50
              "
            >
              0{index + 1}
            </span>

            {/* Animated Circle */}
            <div
              className="
                mb-8
                flex h-14 w-14
                items-center justify-center
                rounded-full
                border border-white/20
                bg-white/[0.04]
                text-sm font-bold
                text-white/70

                transition-all duration-700
                group-hover:rotate-12
                group-hover:scale-110
                group-hover:border-white/50
                group-hover:bg-white
                group-hover:text-black
              "
            >
              {skill.symbol}
            </div>

            {/* Name */}
            <h3
              className="
                text-xl font-semibold
                transition-all duration-500
                group-hover:translate-x-2
              "
            >
              {skill.name}
            </h3>

            {/* Type */}
            <p
              className="
                mt-2
                text-sm
                text-gray-500
                transition-all duration-500
                group-hover:text-gray-300
              "
            >
              {skill.type}
            </p>

            {/* Bottom animated line */}
            <div
              className="
                mt-6
                h-px w-8
                bg-white/30
                transition-all duration-700
                group-hover:w-full
              "
            />

            {/* Liquid Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-20
                -right-20
                h-32 w-32
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

      {/* Bottom text */}
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
        Always learning. Always building.
      </div>
    </section>
  );
};

export default Skills;
