import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Projects/Project'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'

const App = () => {
  return (
    <div><Header />
      <Home />
      <About />
      <Project />
      <Skills />
      <Education />
    </div>
  )
}

export default App