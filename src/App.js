// import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import TestComponent from "./components/TestComponent/TestComponent"
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

import {Routes, Route} from 'react-router-dom';
import Error404 from './components/Error404/Error404';

function App() {
  // console.log("renderized")


  const [darkMode, setDarkMode] = React.useState( false );

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className={darkMode ? 'darkMode min-h-screen' : 'min-h-screen'}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
      
      {/* <TestComponent /> */}
      {/* <Hero darkMode={darkMode}/>
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <AboutMe darkMode={darkMode} />
      <Footer /> */}
    </div>
  );
}

export default App;
