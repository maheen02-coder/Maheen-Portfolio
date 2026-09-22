import React from "react";
import './home.css'
const Home =()=> {
  return(
    <>
    <main className="h-screen flex items-center justify-center">
      <div className="relative w-full h-full">
        <video className="absolute inset-0 w-full h-full object-cover scale-105 blur-[2px]" autoPlay muted loop>
          <source src="/codeimg.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-1/3
        x` left-1/7 flex items-center gap-50 ">
          <h1 className="text-white border-3 border-white rounded-lg p-6 font-serif text-2xl">
            Think. Build. Deploy. <br />
            Crafting digital experiences with purpose.
          </h1>
          <div>
            {/* <img
              src="/myfile - Copy.png"
              height={570}
              width={370}
              alt="My image"
            /> */}
            <br />
            <figcaption className="border-2 border-solid p-[15px] rounded-3xl">
              <span>
                Hey its me , Maheen! <br />
                I'm a Full-Stack Web Developer passionate about building modern,{" "}
                <br /> responsive, and user-friendly web applications. I turn
                ideas into <br />
                functional digital experiences using clean code, creative
                design, and <br /> modern technologies.
              </span>
            </figcaption>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}
export default Home;