// import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {
  console.log("renderized")

  const [darkMode, setDarkMode] = React.useState( false )

  // console.log(darkMode)

  // React.useEffect( () => {
  //   localStorage.setItem("dark", darkMode ? darkMode : false);
  // }, [darkMode] )

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }


  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode}/>
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <AboutMe darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
