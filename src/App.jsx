import React, { createContext, useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Projects/Project'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import '../src/App.css'


//create theme context
const ThemeContext = createContext();

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : "light"
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])
  // Toggle menu visibility and icon
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };



  return (
    // <ThemeProvider value={theme}>
    <div style={{ backgroundColor: theme === "light" ? '#fff' : '#000' }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <Home blur={showMenu} />
        <About blur={showMenu} />
        <Project blur={showMenu} />
        <Skills blur={showMenu} />
        <Education blur={showMenu} />
        <Experience blur={showMenu} />
        <Contact blur={showMenu} />
      </ThemeContext.Provider>
    </div>

    // </ThemeProvider>
  )
}

export default App
export { ThemeContext }