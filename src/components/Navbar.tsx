import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '#what-is-it', label: 'What Is It?' },
  { href: '#why-it-matters', label: 'Why It Matters' },
  { href: '#insurance', label: 'Insurance' },
  { href: '#calculator', label: 'Calculate Savings' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center gap-2 text-primary-700 font-semibold text-lg">
            <Building2 className="w-6 h-6" />
            <span className="hidden sm:inline">Standard Unit By-Law</span>
            <span className="sm:hidden">By-Law Guide</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#calculator"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              See Your Savings
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#calculator"
              onClick={() => setIsOpen(false)}
              className="block mt-2 bg-green-600 text-white px-4 py-2 rounded-lg text-center font-semibold"
            >
              See Your Savings
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
