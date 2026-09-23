import React from "react";

const Home = () => {
  return (
    <main
      id="home"
      className="
        relative min-h-screen overflow-hidden
        flex items-center justify-center
        bg-black text-white
        px-8
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
        <source src="/codeimg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Animated Glow */}
      <div
        className="
          absolute left-[15%] top-[20%]
          h-72 w-72
          rounded-full
          bg-purple-500/10
          blur-[100px]
          animate-pulse
        "
      />

      <div
        className="
          absolute bottom-[10%] right-[15%]
          h-64 w-64
          rounded-full
          bg-blue-500/10
          blur-[100px]
          animate-pulse
        "
      />

      {/* Content */}
      <div
        className="
          relative z-10
          flex w-full max-w-6xl
          items-center justify-center
          gap-16
          max-lg:flex-col
          max-lg:gap-10
        "
      >
        {/* Hero Text */}
        <div
          className="
            group
            relative
            max-w-xl
            rounded-3xl
            border border-white/20
            bg-black/30
            p-10
            backdrop-blur-md
            transition-all duration-700
            hover:-translate-y-2
            hover:border-white/50
            hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]
            max-md:p-7
          "
        >
          {/* Animated Border Glow */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              rounded-3xl
              border border-transparent
              transition-all duration-700
              group-hover:border-white/20
            "
          />

          <p
            className="
              mb-5
              text-sm uppercase
              tracking-[6px]
              text-gray-400
              transition-all duration-500
              group-hover:tracking-[8px]
            "
          >
            Full-Stack Developer
          </p>

          <h1
            className="
              font-serif
              text-5xl font-bold
              leading-tight
              md:text-7xl
            "
          >
            Think.
            <br />
            Build.
            <br />
            <span className="text-gray-400">Deploy.</span>
          </h1>

          <div className="my-7 h-px w-24 bg-white/40 transition-all duration-700 group-hover:w-40" />

          <p className="max-w-md text-base leading-7 text-gray-300 md:text-lg">
            Crafting digital experiences with purpose.
          </p>

          {/* Small animated dot */}
          <span
            className="
              absolute
              right-7 top-7
              h-2 w-2
              rounded-full
              bg-white
              shadow-[0_0_15px_white]
              animate-ping
            "
          />
        </div>

        {/* Introduction */}
        <div
          className="
            max-w-md
            rounded-3xl
            border border-white/10
            bg-black/25
            p-8
            backdrop-blur-md
            transition-all duration-700
            hover:-translate-y-2
            hover:border-white/30
            hover:bg-black/40
            max-md:p-6
          "
        >
          <p
            className="
              mb-4
              text-lg font-medium
              text-white
            "
          >
            Hey, it's me, Maheen.
          </p>

          <p className="text-sm leading-7 text-gray-400 md:text-base">
            I'm a Full-Stack Web Developer passionate about building modern,
            responsive, and interactive web applications. I turn ideas into
            functional digital experiences using clean code, creative design,
            and modern technologies.
          </p>

          {/* Animated line */}
          <div
            className="
              mt-7
              h-px w-16
              bg-white/40
              transition-all duration-700
              hover:w-32
            "
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="
          absolute bottom-8
          left-1/2
          -translate-x-1/2
          flex flex-col
          items-center
          gap-2
          text-[10px]
          uppercase
          tracking-[4px]
          text-white/40
        "
      >
        <span>Scroll</span>

        <span
          className="
            h-10 w-px
            bg-gradient-to-b
            from-white/60
            to-transparent
            animate-pulse
          "
        />
      </div>
    </main>
  );
};

export default Home;
