
import React from "react";
import "./main.css";

const Main = () => {
  return (
    <>
      <section className="min-h-screen relative overflow-hidden text-white px-8 py-20 flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105 blur-[2px]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Soft Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>

        {/* Content */}
        <div className="max-w-6xl mx-auto w-full relative z-10">

          <p className="text-sm text-gray-500 tracking-[5px] uppercase mb-6">
            About Me
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Hi, I'm <span className="text-gray-500">Maheen.</span>
            <br />
            I am a Full-Stack Web Developer.
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl leading-8 mb-12">
            I'm a Full-Stack Web Developer focused on creating modern,
            responsive and interactive web experiences. I enjoy turning ideas
            into clean and functional digital products.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">

            <div className="border border-gray-800 p-6 hover:bg-white hover:text-black transition">
              <h3 className="text-xl font-semibold">HTML</h3>
              <p className="text-sm mt-2 opacity-60">Frontend</p>
            </div>

            <div className="border border-gray-800 p-6 hover:bg-white hover:text-black transition">
              <h3 className="text-xl font-semibold">CSS</h3>
              <p className="text-sm mt-2 opacity-60">Frontend</p>
            </div>

            <div className="border border-gray-800 p-6 hover:bg-white hover:text-black transition">
              <h3 className="text-xl font-semibold">JAVASCRIPT</h3>
              <p className="text-sm mt-2 opacity-60">
                Frontend + Backend
              </p>
            </div>

            <div className="border border-gray-800 p-6 hover:bg-white hover:text-black transition">
              <h3 className="text-xl font-semibold">REACT.JS</h3>
              <p className="text-sm mt-2 opacity-60">
                Frontend Library
              </p>
            </div>

            <div className="border border-gray-800 p-6 hover:bg-white hover:text-black transition">
              <h3 className="text-xl font-semibold">Next.Js</h3>
              <p className="text-sm mt-2 opacity-60">
                React Framework
              </p>
            </div>

            <div className="border border-gray-800 p-6 hover:bg-white hover:text-black transition">
              <h3 className="text-xl font-semibold">SQL</h3>
              <p className="text-sm mt-2 opacity-60">
                Database / Database Language
              </p>
            </div>

            <div className="border border-gray-800 p-6 hover:bg-white hover:text-black transition">
              <h3 className="text-xl font-semibold">MERN-STACK</h3>
              <p className="text-sm mt-2 opacity-60">
                Full-Stack
              </p>
            </div>
            {/* 
            <div className="border border-gray-800 p-6 hover:bg-white hover:text-black transition">
              <h3 className="text-xl font-semibold">MongoDB</h3>
              <p className="text-sm mt-2 opacity-60">
                Database
              </p>
            </div> */}
            {/* <div className="border border-gray-800 p-6 hover:bg-white hover:text-black transition">
              <h3 className="text-xl font-semibold">Express.js</h3>
              <p className="text-sm mt-2 opacity-60">
                Backend
              </p>
            </div> */}
            <div className="border border-gray-800 p-6 hover:bg-white hover:text-black transition">
              <h3 className="text-xl font-semibold">Tailwind CSS</h3>
              <p className="text-sm mt-2 opacity-60">
                Using Tailwind css
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
