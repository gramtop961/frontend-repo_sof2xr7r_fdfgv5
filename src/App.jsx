import React from 'react';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import About from './components/About';
import Contact from './components/Contact';

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-white">
          <span className="text-lg font-semibold">BlueLens</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#portfolio" className="hover:text-white">Work</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <main>
        <div id="about">
          <About />
        </div>
        <BentoGrid />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-white/50">
        © {new Date().getFullYear()} BlueLens Studio. All rights reserved.
      </footer>
    </div>
  );
}
