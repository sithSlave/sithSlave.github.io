import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {

  const [currentPage, setCurrentPage] = useState('Portfolio');

  function displaySection(page) {
    switch (page) {
      case 'About Me':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <Portfolio />;
    }
  }

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className='body'>
        {displaySection(currentPage)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
