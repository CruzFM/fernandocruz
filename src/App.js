// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
