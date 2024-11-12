import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

export default App;
