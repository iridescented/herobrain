//!TODO: Update social media links when available

import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#647C9F] via-[#97CEC8] to-[#647C9F] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8" />
              <span className="font-spicy text-2xl font-bold">Hero Brain</span>
            </div>
            <p className="text-white/90 leading-relaxed">
              Creating playful yet professional experiences that bring people together and inspire collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-spicy text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {[
                { path: '/services', label: 'Services' },
                { path: '/team', label: 'Meet the Team' },
                { path: '/testimonials', label: 'Testimonials' },
                // { path: '/blog', label: 'Blog' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-white/90 hover:text-[#FBD66E] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-spicy text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FBD66E]" />
                <span className="text-white/90">herobrain.consultations@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FBD66E]" />
                <span className="text-white/90">+60 16-7048484</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#FBD66E]" />
                <span className="text-white/90">72, Jln Horizon Perdana 1, Tmn Horizon Hills, 79100, Iskandar Puteri, Johor, Malaysia</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-spicy text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Linkedin, href: '#' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#FBD66E] hover:text-[#647C9F] transition-all duration-200 hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © 2025 Hero Brain. Made with ❤️ in Malaysia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;