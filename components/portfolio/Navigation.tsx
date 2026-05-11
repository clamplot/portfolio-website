'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Corbin Lamplot
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#about" className="hover:text-emerald-400 transition-colors">About</Link>
          <Link href="#projects" className="hover:text-emerald-400 transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-white/10">
          <div className="flex flex-col px-6 py-8 gap-6 text-lg">
            <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}