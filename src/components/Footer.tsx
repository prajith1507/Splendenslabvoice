
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Splendenslab IT Ventures Pvt Ltd</h3>
            <div className="text-slate-300 space-y-1">
              <p>4/197-2, R.V.C Complex</p>
              <p>Dasanaikanpatti</p>
              <p>Salem, Tamil Nadu, India</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              Let's get social. Follow and join our communities around the web!
            </h3>
            <div className="flex justify-center items-center space-x-6 mb-6">
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                <Instagram size={24} />
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/services" className="text-slate-400 hover:text-purple-400 transition-colors">
                MOBILE APPLICATIONS
              </Link>
              <Link to="/services" className="text-slate-400 hover:text-purple-400 transition-colors">
                WEB APPLICATIONS
              </Link>
              <Link to="/services" className="text-slate-400 hover:text-purple-400 transition-colors">
                SERVICES
              </Link>
              <Link to="/about" className="text-slate-400 hover:text-purple-400 transition-colors">
                ABOUT
              </Link>
              <Link to="/contact" className="text-slate-400 hover:text-purple-400 transition-colors">
                CONTACT
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="text-right">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Contact us thru</h3>
            <div className="text-slate-300">
              <p>contact@splendenslab.com</p>
              <br />
              <p className="font-semibold">Splendenslab</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2024 Splendenslab IT Ventures Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
