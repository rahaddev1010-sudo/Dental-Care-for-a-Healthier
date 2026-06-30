import { Outlet, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Clock, MapPin, Menu, X, Facebook, Twitter, Instagram, Linkedin, Smile } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-light text-dark font-sans">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center bg-dark text-white/90 py-2 px-6 lg:px-12 text-sm">
        <div className="flex space-x-6">
          <div className="flex items-center"><Phone size={14} className="mr-2 text-primary" /> +1 (555) 123-4567</div>
          <div className="flex items-center"><Mail size={14} className="mr-2 text-primary" /> info@dentisclinic.com</div>
        </div>
        <div className="flex space-x-6">
          <div className="flex items-center"><Clock size={14} className="mr-2 text-primary" /> Mon-Sat: 8:00 AM - 6:00 PM</div>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-primary transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter size={16} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Instagram size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-md py-5'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
              <Smile className="text-primary w-8 h-8" />
            </div>
            <span className="text-xl font-heading font-bold text-dark tracking-tight">Dental Care<span className="text-primary">.</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-dark/80'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-0.5">
              Book Appointment
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-dark p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`font-medium text-lg ${location.pathname === link.path ? 'text-primary' : 'text-dark/80'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link to="/contact" className="block w-full text-center bg-primary text-white px-6 py-3 rounded-xl font-medium">
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white pt-16 pb-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-6">
                <Smile className="text-primary w-8 h-8" />
                <span className="text-2xl font-heading font-bold tracking-tight">Dental Care<span className="text-primary">.</span></span>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Providing exceptional dental care through expertise, innovation, and compassion. Healthy Smiles Start Here.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Linkedin size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-heading font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> General Dentistry</li>
                <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Cosmetic Dentistry</li>
                <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Dental Implants</li>
                <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Orthodontics</li>
                <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Pediatric Dentistry</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-heading font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                  <span>123 Dental Care Avenue,<br />New York, NY 10001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-primary w-5 h-5 shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-primary w-5 h-5 shrink-0" />
                  <span>info@dentisclinic.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                  <span>Mon-Sat: 8:00 AM - 6:00 PM<br />Sun: Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Dental Care for a Healthier. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
