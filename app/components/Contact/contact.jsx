"use client";
import React from "react";
const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        px-8
        py-24
        text-white
        max-md:px-5
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-[20%]
          h-72
          w-72
          rounded-full
          bg-blue-500/10
          blur-[120px]
          animate-pulse
        "
      />
      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          right-[5%]
          h-80
          w-80
          rounded-full
          bg-purple-500/10
          blur-[120px]
          animate-pulse
        "
      />
      {/* Main Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[80vh]
          max-w-6xl
          flex-col
          justify-center
        "
      >
        {/* Heading */}
        <div className="mb-16">
          <p
            className="
              mb-5
              text-xs
              uppercase
              tracking-[6px]
              text-gray-500
            "
          >
            Get In Touch
          </p>
          <h2
            className="
              max-w-4xl
              text-5xl
              font-bold
              leading-tight
              md:text-7xl
            "
          >
            Let's build
            <span className="text-gray-500"> something.</span>
          </h2>
          <p
            className="
              mt-6
              max-w-xl
              text-lg
              leading-8
              text-gray-400
            "
          >
            Have a project, idea or opportunity? Feel free to reach out and
            let's create something meaningful.
          </p>
        </div>
        {/* Contact Area */}
        <div
          className="
            flex
            items-start
            justify-between
            gap-16
            max-lg:flex-col
          "
        >
          {/* Email Card */}
          <div className="w-full max-w-md">
            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-md
                transition-all
                duration-500
                hover:border-white/20
                hover:bg-white/[0.05]
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[4px]
                  text-gray-500
                "
              >
                Contact
              </p>
              <h3 className="mt-5 text-2xl font-semibold">Let's talk.</h3>
              <p className="mt-4 leading-7 text-gray-400">
                I'm always interested in learning, building new projects and
                exploring new opportunities.
              </p>
              <a
                href="mailto:maheensidhu278@gmail.com"
                className="
                  mt-8
                  block
                  border-b
                  border-white/10
                  pb-4
                  text-gray-300
                  transition-all
                  duration-300
                  hover:border-white/40
                  hover:text-white
                "
              >
                maheensidhu278@gmail.com
              </a>
            </div>
          </div>
          {/* Social Links */}
          <div className="w-full max-w-xl">
            <div className="flex flex-col gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/maheen02-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  py-5
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:translate-x-3
                  hover:border-white/30
                  hover:bg-white
                  hover:text-black
                "
              >
                <span className="text-lg">GitHub</span>
                <span
                  className="
                    text-xl
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  ↗
                </span>
              </a>
              {/* Email */}
              <a
                href="mailto:maheensidhu278@gmail.com"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  py-5
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:translate-x-3
                  hover:border-white/30
                  hover:bg-white
                  hover:text-black
                "
              >
                <span className="text-lg">Email Me</span>
                <span
                  className="
                    text-xl
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div
          className="
            mt-24
            flex
            items-center
            justify-between
            border-t
            border-white/10
            pt-8
            max-md:flex-col
            max-md:items-start
            max-md:gap-4
          "
        >
          <p className="text-sm text-gray-500">© 2026 Maheen Abrar</p>
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
    </section>
  );
};
export default Contact;
