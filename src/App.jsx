import React, { useContext, useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Projects/Project'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import '../src/App.css'
// import { ThemeContext, ThemeProvider } from './utils/ThemeContext'
const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  // Toggle menu visibility and icon
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  // const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    // <ThemeProvider value={theme}>
    <>
      <Header showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
      <Home blur={showMenu} />
      <About blur={showMenu} />
      <Project blur={showMenu} />
      <Skills blur={showMenu} />
      <Education blur={showMenu} />
      <Experience blur={showMenu} />
      <Contact blur={showMenu} />
    </>

    // </ThemeProvider>
  )
}

export default App