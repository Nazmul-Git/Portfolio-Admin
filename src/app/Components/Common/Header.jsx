'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-indigo-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-2xl font-extrabold">
          <Link href="/" className="text-white hover:text-teal-400">My Portfolio</Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white hover:text-teal-400">Home</Link>
            </li>
            <li>
              <Link href="/works" className="text-white hover:text-teal-400">Works</Link>
            </li>
            <li>
              <Link href="/services" className="text-white hover:text-teal-400">Services</Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-teal-400">About</Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-teal-400">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu (Mobile) */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-700">
          <ul className="space-y-4 px-6 py-4">
            <li>
              <Link href="/" className="text-white hover:text-teal-400" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link href="/works" className="text-white hover:text-teal-400" onClick={toggleMenu}>Works</Link>
            </li>
            <li>
              <Link href="/services" className="text-white hover:text-teal-400" onClick={toggleMenu}>Services</Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-teal-400" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-teal-400" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
