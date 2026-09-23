"use client";

import React from "react";

const Intro = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "SQL",
    "MERN",
  ];

  const qualities = [
    "Creative",
    "Problem Solver",
    "Fast Learner",
    "Detail Oriented",
    "Consistent",
    "Curious",
  ];

  return (
    <main
      id="intro"
      className="
        relative min-h-screen
        overflow-hidden
        bg-black
        px-8 py-24
        text-white
        max-md:px-5
      "
    >
      {/* Background Video */}
      <video
        className="
          absolute inset-0
          h-full w-full
          object-cover
          scale-105
        "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/blueBackground.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Background Glows */}
      <div
        className="
          pointer-events-none
          absolute left-[15%] top-[15%]
          h-72 w-72
          rounded-full
          bg-purple-500/10
          blur-[120px]
          animate-pulse
        "
      />

      <div
        className="
          pointer-events-none
          absolute bottom-[5%] right-[10%]
          h-80 w-80
          rounded-full
          bg-blue-500/10
          blur-[120px]
          animate-pulse
        "
      />

      {/* Main Content */}
      <div
        className="
          relative z-10
          mx-auto
          max-w-6xl
          pt-12
          max-md:pt-8
        "
      >
        {/* INTRO */}
        <div className="animate-pulse">
          <p
            className="
              mb-4
              text-xs uppercase
              tracking-[6px]
              text-gray-500
            "
          >
            Hello, I'm
          </p>

          <h1
            className="
              text-6xl
              font-bold
              tracking-tight
              md:text-8xl
            "
          >
            Maheen
            <span className="text-gray-500"> Abrar.</span>
          </h1>

          <p
            className="
              mt-6
              max-w-xl
              text-lg
              leading-8
              text-gray-400
              md:text-xl
            "
          >
            Full-Stack Web Developer building modern, responsive and
            interactive digital experiences.
          </p>
        </div>

        {/* INFO AREA */}
        <div
          className="
            mt-20
            flex
            items-center
            justify-between
            gap-16
            max-lg:flex-col
          "
        >
          {/* LEFT — CIRCLE */}
          <div
            className="
              relative
              flex
              h-[330px]
              w-[330px]
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/[0.03]
              backdrop-blur-md
              animate-bounce
              max-sm:h-[270px]
              max-sm:w-[270px]
            "
          >
            {/* Outer Circle */}
            <div
              className="
                absolute
                inset-[-15px]
                rounded-full
                border
                border-dashed
                border-white/20
                animate-spin
              "
            />

            {/* Inner Circle */}
            <div
              className="
                absolute
                inset-[25px]
                rounded-full
                border
                border-white/10
              "
            />

            <div className="relative z-10 text-center">
              <p className="text-6xl font-bold md:text-7xl">
                16
              </p>

              <p
                className="
                  mt-2
                  text-xs
                  uppercase
                  tracking-[4px]
                  text-gray-500
                "
              >
                Years Old
              </p>

              <div className="mx-auto my-5 h-px w-12 bg-white/30" />

              <p className="text-2xl font-semibold">
                01
              </p>

              <p
                className="
                  mt-1
                  text-[10px]
                  uppercase
                  tracking-[3px]
                  text-gray-500
                "
              >
                Year Experience
              </p>
            </div>

            {/* Floating Dot */}
            <span
              className="
                absolute
                right-5
                top-10
                h-3
                w-3
                rounded-full
                bg-white
                shadow-[0_0_20px_white]
                animate-ping
              "
            />
          </div>

          {/* RIGHT — INFORMATION */}
          <div className="w-full max-w-2xl">
            <p
              className="
                mb-5
                text-xs
                uppercase
                tracking-[5px]
                text-gray-500
              "
            >
              A little about me
            </p>

            <h2
              className="
                text-3xl
                font-semibold
                leading-tight
                md:text-5xl
              "
            >
              I turn ideas into
              <span className="text-gray-500">
                {" "}something real.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              I'm passionate about web development and enjoy
              creating interfaces that are not only functional but
              also interesting to interact with. I like experimenting
              with animations, responsive layouts and modern
              technologies.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              I'm constantly learning, building projects and
              improving my skills as I explore the world of
              full-stack development.
            </p>
          </div>
        </div>

        {/* FLOATING SKILLS */}
        <div className="relative mt-24 min-h-[300px]">
          <p
            className="
              mb-10
              text-xs
              uppercase
              tracking-[5px]
              text-gray-500
            "
          >
            My Skills
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-5
            "
          >
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="
                  group
                  relative
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-center
                  backdrop-blur-md
                  transition-all
                  duration-700
                  hover:-translate-y-5
                  hover:rotate-3
                  hover:border-white/40
                  hover:bg-white
                  hover:text-black
                  hover:shadow-[0_20px_50px_rgba(255,255,255,0.12)]
                  animate-pulse
                  max-sm:h-24
                  max-sm:w-24
                "
              >
                {/* Number */}
                <span
                  className="
                    absolute
                    right-2
                    top-2
                    text-[9px]
                    text-white/20
                    transition-all
                    group-hover:text-black/40
                  "
                >
                  0{index + 1}
                </span>

                <span className="relative z-10 text-sm font-medium">
                  {skill}
                </span>

                {/* Glow */}
                <div
                  className="
                    absolute
                    -bottom-10
                    -left-10
                    h-20
                    w-20
                    rounded-full
                    bg-white/10
                    blur-2xl
                    transition-all
                    duration-700
                    group-hover:scale-[3]
                  "
                />
              </div>
            ))}
          </div>
        </div>

        {/* QUALITIES */}
        <div className="mt-20">
          <p
            className="
              mb-8
              text-xs
              uppercase
              tracking-[5px]
              text-gray-500
            "
          >
            What describes me
          </p>

          <div className="flex flex-wrap gap-3">
            {qualities.map((quality) => (
              <span
                key={quality}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  py-3
                  text-sm
                  text-gray-400
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-white/40
                  hover:bg-white
                  hover:text-black
                "
              >
                {quality}
              </span>
            ))}
          </div>
        </div>

        {/* LANGUAGES */}
        <div
          className="
            mt-20
            flex
            items-center
            justify-between
            border-t
            border-white/10
            pt-8
            max-md:flex-col
            max-md:items-start
            max-md:gap-5
          "
        >
          <div>
            <p className="text-xs uppercase tracking-[4px] text-gray-500">
              Languages
            </p>

            <p className="mt-3 text-gray-300">
              English · Urdu
            </p>
          </div>

          <p
            className="
              text-xs
              uppercase
              tracking-[4px]
              text-white/20
            "
          >
            Learn • Build • Create
          </p>
        </div>
      </div>
    </main>
  );
};

export default Intro;