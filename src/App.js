// import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import TestComponent from "./components/TestComponent/TestComponent"

function App() {
  // console.log("renderized")


  const [darkMode, setDarkMode] = React.useState( false );

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className={darkMode ? 'darkMode' : ''}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <TestComponent />
      {/* <Hero darkMode={darkMode}/>
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <AboutMe darkMode={darkMode} />
      <Footer /> */}
    </div>
  );
}

export default App;
