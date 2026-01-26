import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHardHat } from 'react-icons/fa';
import Trans from './Trans';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold mb-6">
            <FaHardHat className="text-jr-orange" />
            <span>S H <span className="text-jr-orange">Construction</span></span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            <Trans id="footer.description">Building legacies. We are committed to delivering excellence in every brick we lay.</Trans>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-6 border-b-2 border-jr-orange inline-block pb-2"><Trans id="footer.quick_links">Quick Links</Trans></h4>
          <ul className="space-y-3 text-gray-400">
            {['Home', 'Services', 'Projects', 'Team', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-jr-orange transition-colors flex items-center gap-2">
                  <span className="text-jr-orange">›</span> <Trans id={`footer.link.${item.toLowerCase()}`}>{item}</Trans>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-bold mb-6 border-b-2 border-jr-orange inline-block pb-2"><Trans id="footer.our_services">Our Services</Trans></h4>
          <ul className="space-y-3 text-gray-400">
            <li><Trans id="footer.service.residential">Residential Construction</Trans></li>
            <li><Trans id="footer.service.commercial">Commercial Complexes</Trans></li>
            <li><Trans id="footer.service.industrial">Industrial Projects</Trans></li>
            <li><Trans id="footer.service.interior">Interior Design</Trans></li>
            <li><Trans id="footer.service.renovations">Renovations</Trans></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-xl font-bold mb-6 border-b-2 border-jr-orange inline-block pb-2"><Trans id="footer.connect">Connect With Us</Trans></h4>
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-jr-orange hover:text-white transition-all transform hover:scale-110">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} <Trans id="footer.company_name">S H Construction</Trans>. <Trans id="footer.rights">All Rights Reserved.</Trans></p>
      </div>
    </footer>
  );
}