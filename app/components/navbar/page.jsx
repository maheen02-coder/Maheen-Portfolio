"use client";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "intro" },
    { name: "Works", id: "works" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];
  return (
    <nav
      className="
        fixed left-0 top-0 z-[100]
        h-screen w-56
        overflow-hidden
        border-r border-white/10
        bg-black/70
        backdrop-blur-xl
        max-md:h-16
        max-md:w-full
        max-md:border-r-0
        max-md:border-b
      "
    >
      {/* Moving Glow */}
      <div
        className="
          pointer-events-none
          absolute -left-20 top-20
          h-40 w-40
          rounded-full
          bg-white/10
          blur-3xl
          animate-pulse
          max-md:left-1/2
          max-md:top-0
        "
      />
      <div
        className="
          relative z-10
          flex h-full
          flex-col
          items-center
          justify-center
          px-5
          max-md:flex-row
          max-md:justify-between
          max-md:px-4
        "
      >
        {/* MAHEEN LOGO */}
        <button
          onClick={() => scrollToSection("intro")}
          className="
            group relative
            mb-16
            cursor-pointer
            bg-transparent
            p-0
            max-md:mb-0
          "
        >
          <h2
            className="
              text-2xl font-bold
              tracking-[5px]
              text-white
              transition-all duration-500
              group-hover:scale-105
              group-hover:tracking-[9px]
              max-md:text-lg
              max-md:tracking-[3px]
            "
          >
            MAHEEN
          </h2>
          <span
            className="
              absolute -right-3 -top-1
              h-1.5 w-1.5
              rounded-full
              bg-white
              shadow-[0_0_12px_white]
              animate-ping
            "
          />
        </button>
        {/* Navigation Links */}
        <div
          className="
            flex w-full
            flex-col gap-4
            max-md:w-auto
            max-md:flex-row
            max-md:gap-1
          "
        >
          {links.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              onClick={() => scrollToSection(link.id)}
              className="
                group relative
                h-14 w-full
                justify-start
                overflow-hidden
                rounded-xl
                border border-transparent
                px-5
                text-white/70
                transition-all duration-500
                hover:translate-x-2
                hover:scale-[1.03]
                hover:border-white/20
                hover:bg-white
                hover:text-black
                hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]
                max-md:h-10
                max-md:w-auto
                max-md:justify-center
                max-md:px-3
                max-md:text-xs
                max-[500px]:px-2
                max-[500px]:text-[10px]
              "
            >
              {/* Liquid Effect */}
              <span
                className="
                  absolute
                  left-[-20%]
                  top-1/2
                  h-8 w-8
                  -translate-y-1/2
                  rounded-full
                  bg-white
                  blur-sm
                  transition-all duration-700
                  group-hover:left-[15%]
                  group-hover:h-32
                  group-hover:w-[130%]
                "
              />
              {/* Text */}
              <span
                className="
                  relative z-20
                  transition-all duration-500
                  group-hover:translate-x-2
                  group-hover:tracking-wider
                "
              >
                {link.name}
              </span>
              {/* Right Line */}
              <span
                className="
                  absolute right-4
                  h-px w-0
                  bg-black
                  transition-all duration-500
                  group-hover:w-5
                  max-md:hidden
                "
              />
            </Button>
          ))}
        </div>
        {/* Vertical Glowing Line */}
        <div
          className="
            absolute right-0
            top-[20%]
            h-[60%]
            w-px
            animate-pulse
            bg-gradient-to-b
            from-transparent
            via-white/50
            to-transparent
            max-md:hidden
          "
        />
        {/* Bottom Line */}
        <div
          className="
            absolute bottom-16
            h-px w-24
            animate-pulse
            bg-white/30
            max-md:hidden
          "
        />
      </div>
    </nav>
  );
};
export default Navbar;
