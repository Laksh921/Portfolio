import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/intro';
import About from './components/About';
import Portfolio from './components/portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
