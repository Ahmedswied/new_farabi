'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Crew', href: '/crew' },
    { name: 'Organization', href: '/organization' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    { name: 'Admin', href: '/admin/login', className: 'font-semibold text-blue-600' }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              ALFarabi
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-blue-600 transition-colors ${item.className || ''}`}
              >
                {item.name}
              </Link>
            ))}
            <button className="px-3 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
              EN / AR
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 hover:text-blue-600 transition-colors ${item.className || ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full text-left px-3 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 mt-2">
              EN / AR
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
