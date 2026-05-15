"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaWhatsapp 
} from "react-icons/fa";
import { 
  RiMailLine, 
  RiPhoneLine, 
  RiMapPinLine, 
  RiArrowRightSLine 
} from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Packages", href: "/packages" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Flight Booking", href: "/services" },
    { name: "Hotel Booking", href: "/services" },
    { name: "Car Rental", href: "/services" },
    { name: "Visa Services", href: "/services" },
    { name: "Forex Services", href: "/services" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", color: "hover:bg-blue-600" },
    { icon: <FaInstagram />, href: "#", color: "hover:bg-pink-600" },
    { icon: <FaTwitter />, href: "#", color: "hover:bg-sky-500" },
    { icon: <FaLinkedinIn />, href: "#", color: "hover:bg-blue-700" },
    { icon: <FaWhatsapp />, href: "https://wa.me/919843111922", color: "hover:bg-green-500" },
  ];

  return (
    <footer className="bg-[#0c4878] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold tracking-wider">
              DD Tour <span className="text-[#189da3]">Travels</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted travel partner since 2006. We specialize in creating 
              memorable journeys across the globe with personalized care and expertise.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-300 hover:text-[#189da3] text-sm flex items-center gap-2 transition-colors group">
                    <RiArrowRightSLine className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Services</h4>
            <ul className="space-y-4">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a href={service.href} className="text-gray-300 hover:text-[#189da3] text-sm flex items-center gap-2 transition-colors group">
                    <RiArrowRightSLine className="group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contact Info</h4>
            <div className="space-y-4">
              <a href="tel:+919843111922" className="flex items-start gap-4 text-gray-300 hover:text-[#189da3] transition-colors">
                <RiPhoneLine className="text-xl text-[#189da3]" />
                <span className="text-sm">+91 98431 11922</span>
              </a>
              <a href="mailto:k4tourworld@gmail.com" className="flex items-start gap-4 text-gray-300 hover:text-[#189da3] transition-colors">
                <RiMailLine className="text-xl text-[#189da3]" />
                <span className="text-sm break-all">dd@gmail.com</span>
              </a>
              <div className="flex items-start gap-4 text-gray-300">
                <RiMapPinLine className="text-xl text-[#189da3] shrink-0" />
                <span className="text-sm leading-relaxed">
                  17, Gokhale Road, Chinna Chokkikulam, near PWD office, Madurai - 625002
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-400 text-xs">
            © {currentYear} <span className="text-white font-semibold">K4 Tour World</span>. All Rights Reserved.
          </p>
          <p className="text-gray-400 text-xs">
            Powered by <span className="text-[#189da3] hover:underline cursor-pointer">DD Tours and Travels</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;