import React from "react";

const Main = () => {
  return (
    <section
      id="about"
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
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Soft Glow */}
      <div
        className="
          pointer-events-none
          absolute left-[-150px] top-[15%]
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

      {/* Content */}
      <div
        className="
          relative z-10
          mx-auto
          flex min-h-[80vh]
          max-w-6xl
          flex-col
          justify-center
        "
      >
        {/* Label */}
        <p
          className="
            mb-5
            text-sm uppercase
            tracking-[6px]
            text-gray-400
          "
        >
          About Me
        </p>

        {/* Heading */}
        <h2
          className="
            max-w-5xl
            text-5xl font-bold
            leading-[1.05]
            md:text-7xl
          "
        >
          Turning ideas into
          <br />
          <span
            className="
              text-gray-400
              transition-all duration-700
              hover:text-white
            "
          >
            digital experiences.
          </span>
        </h2>

        {/* Animated Divider */}
        <div
          className="
            my-10
            h-px w-24
            bg-white/50
            transition-all duration-700
            hover:w-48
          "
        />

        {/* Text + Stats */}
        <div
          className="
            flex
            items-start
            justify-between
            gap-16
            max-lg:flex-col
            max-lg:gap-10
          "
        >
          <p
            className="
              max-w-2xl
              text-lg
              leading-8
              text-gray-300
              md:text-xl
            "
          >
            I'm Maheen, a Full-Stack Web Developer focused on building
            modern, responsive, and interactive web experiences. I enjoy
            transforming ideas into clean, functional, and visually engaging
            digital products.
          </p>

          {/* Stats */}
          <div className="flex gap-12 max-sm:gap-7">
            <div
              className="
                group
                transition-all duration-500
                hover:-translate-y-2
              "
            >
              <h3
                className="
                  text-4xl font-bold
                  transition-all duration-500
                  group-hover:scale-110
                "
              >
                03
              </h3>

              <p
                className="
                  mt-2
                  text-xs uppercase
                  tracking-[3px]
                  text-gray-400
                "
              >
                Projects
              </p>
            </div>

            <div
              className="
                group
                transition-all duration-500
                hover:-translate-y-2
              "
            >
              <h3
                className="
                  text-4xl font-bold
                  transition-all duration-500
                  group-hover:scale-110
                "
              >
                ∞
              </h3>

              <p
                className="
                  mt-2
                  text-xs uppercase
                  tracking-[3px]
                  text-gray-400
                "
              >
                Ideas
              </p>
            </div>
          </div>
        </div>

        {/* Quote Card */}
        <div
          className="
            group
            mt-20
            max-w-4xl
            rounded-2xl
            border border-white/20
            bg-black/30
            p-8
            backdrop-blur-md

            transition-all duration-700
            hover:-translate-y-2
            hover:border-white/40
            hover:bg-black/45
            hover:shadow-[0_20px_60px_rgba(255,255,255,0.08)]

            max-md:p-6
          "
        >
          <p
            className="
              text-xl
              leading-8
              text-gray-300
              md:text-2xl
            "
          >
            "I don't just write code —
            <span
              className="
                text-white
                transition-all duration-500
                group-hover:tracking-wide
              "
            >
              {" "}
              I build experiences.
            </span>
            "
          </p>

          <div
            className="
              mt-6
              h-px w-12
              bg-white/50
              transition-all duration-700
              group-hover:w-32
            "
          />
        </div>
      </div>

      {/* Side Text */}
      <div
        className="
          absolute bottom-10 right-10
          hidden
          text-[10px]
          uppercase
          tracking-[5px]
          text-white/30
          lg:block
        "
      >
        Developer / Designer / Creator
      </div>
    </section>
  );
};

export default Main;
