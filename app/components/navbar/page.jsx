"use client";

import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed left-0 top-0 z-50 h-screen w-56 border-r border-white/20 bg-black/70 backdrop-blur-md">
      <div className="flex h-full flex-col items-center justify-center gap-6 p-6">

        <h2 className="mb-10 text-2xl font-bold tracking-widest text-white">
          MAHEEN
        </h2>

        <Button
          variant="ghost"
          className="w-full text-lg text-white transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-black"
          onClick={() => scrollToSection("home")}
        >
          Home
        </Button>

        <Button
          variant="ghost"
          className="w-full text-lg text-white transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-black"
          onClick={() => scrollToSection("about")}
        >
          About
        </Button>

        <Button
          variant="ghost"
          className="w-full text-lg text-white transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-black"
          onClick={() => scrollToSection("works")}
        >
          Works
        </Button>

        <Button
          variant="ghost"
          className="w-full text-lg text-white transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-black"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </Button>

      </div>
    </nav>
  );
};

export default Navbar;