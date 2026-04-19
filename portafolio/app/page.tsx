import CV from "./Components/CV/CV";
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
    </>
  );
}
