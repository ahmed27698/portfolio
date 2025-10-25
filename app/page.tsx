import Nav from "./components/nav"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Welcoming from "./components/Welcoming";
import Footer from "./components/Footer";
export default async function Home() {

  return (
    <div>
      <Nav />
      <Hero />
      <Welcoming/>
      <AboutMe />
      <Skills/>
      <Projects />
      <Footer />
    </div>
  );
}
