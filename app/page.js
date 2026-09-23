import Contact from "./components/Contact/contact";
import Home from "./components/Home/home";
import Intro from "./components/Introduction/Intro";
import Main from "./components/main/page";
import MyWorks from "./components/mywork/page";
import Skills from "./components/skills/page";


export default function Page() {
  return (
    <>
      <Home/>
      <Intro/>
      <Main />
      <MyWorks />
      <Skills/>
      <Contact/>
      
    </>
  );
}