import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

import Contact from "./Components/Contact/Contact";
import CV from "./Components/CV/CV";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import InterestsSubjects from "./Components/InterestsSubjects/InterestsSubjects";
import Projects from "./Components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <InterestsSubjects />
      <CV />
      <Projects />
      <Contact />
      <Footer />
      <Link href="#home" className="scroll-top" id="scroll-top">
        <FaArrowUp></FaArrowUp>
      </Link>
    </>
  );
}
