// import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from "./components/Header/Header"
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import {Routes, Route} from 'react-router-dom';
import Error404 from './components/Error404/Error404';
import { Footer } from './components/Footer/Footer';
import { Certifications } from './components/Certifications/Certifications'

function App() {

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
        <Route path='/certifications' element={<Certifications />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
