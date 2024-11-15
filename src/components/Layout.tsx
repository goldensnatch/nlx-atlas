import { Link, Outlet } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-semibold">NLX:Atlas</span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <nav className={cn(
            "absolute top-16 left-0 w-full bg-white lg:static lg:w-auto lg:bg-transparent",
            "transform transition-transform duration-200 ease-in-out lg:transform-none",
            isMenuOpen ? "translate-y-0" : "-translate-y-full lg:translate-y-0",
            "shadow-md lg:shadow-none"
          )}>
            <ul className="container mx-auto px-4 py-4 lg:p-0 flex flex-col lg:flex-row lg:items-center lg:space-x-8">
              <li>
                <Link 
                  to="/services" 
                  className="block py-2 lg:py-0 text-gray-600 hover:text-green-600"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="block py-2 lg:py-0 text-gray-600 hover:text-green-600"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block py-2 lg:py-0 text-gray-600 hover:text-green-600"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/login" 
                  className="block py-2 lg:py-0 text-white bg-green-600 hover:bg-green-700 px-4 rounded-md"
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-16 min-h-[calc(100vh-4rem)]">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Email: info@nlxatlas.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-green-400">About Us</Link></li>
                <li><Link to="/services" className="hover:text-green-400">Services</Link></li>
                <li><Link to="/projects" className="hover:text-green-400">Projects</Link></li>
                <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-400">Facebook</a>
                <a href="#" className="hover:text-green-400">Twitter</a>
                <a href="#" className="hover:text-green-400">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} NLX:Atlas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}