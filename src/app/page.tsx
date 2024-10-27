import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';

const HomePage: React.FC = () => {
  return (
    <div className="">
      <Header />
      <main>
        <About />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
