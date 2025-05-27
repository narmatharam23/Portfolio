import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navigation'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <Navbar />
      <main className="pt-16">
        <Home />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
