"use client";

import React from "react";
import { motion } from "framer-motion";
import { RiCheckLine, RiPhoneFill, RiMailFill, RiMapPin2Fill } from "react-icons/ri";

const AboutUs = () => {
  const highlights = [
    { title: "Customized Packages", desc: "Tailored to your preferences" },
    { title: "Expert Guidance", desc: "Professional travel consultants" },
    { title: "Best Pricing", desc: "Competitive rates guaranteed" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Image & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8df0?auto=format&fit=crop&q=80" 
                alt="Travel Experience" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c4878]/60 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-10 -right-0 md:-right-10 bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex gap-8">
              <div className="text-center">
                <p className="text-3xl font-semibold text-[#0c4878]">4000+</p>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mt-1">Happy Customers</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <p className="text-3xl font-semibold text-[#189da3]">250+</p>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mt-1">Destinations</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#189da3] font-semibold uppercase tracking-[0.2em] text-[10px] bg-[#189da3]/10 py-2 px-4 rounded-full border border-[#189da3]/20">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#0c4878] mt-6 leading-tight font-serif">
              DD Tours & Travels - <br />
              <span className="text-[#189da3]">Your Travel Partner</span>
            </h2>
            <p className="mt-6 text-gray-500 font-medium leading-relaxed text-lg">
              Established in 2006, DD Tours & Travels has been creating memorable travel experiences for over 17 years. We are one of Madurai's most reputed travel agencies, offering personalized services with expertise and dedication.
            </p>

            {/* Highlights List */}
            <div className="mt-10 space-y-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#189da3]/10 flex items-center justify-center text-[#189da3] shrink-0 mt-1">
                    <RiCheckLine className="font-semibold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0c4878]">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info / Button */}
            <div className="mt-12 flex flex-wrap gap-6 items-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#0c4878] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#189da3] transition-all shadow-lg shadow-[#0c4878]/20"
              >
                Contact Us
              </button>
              
              <div className="flex gap-4">
                <a href="tel:+919884546406" className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-[#0c4878] hover:border-[#189da3] hover:text-[#189da3] transition-all">
                  <RiPhoneFill />
                </a>
                <a href="mailto:info@k4tourworld.com" className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-[#0c4878] hover:border-[#189da3] hover:text-[#189da3] transition-all">
                  <RiMailFill />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;