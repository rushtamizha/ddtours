"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  RiShieldCheckLine, 
  RiPriceTag3Line, 
  RiCustomerService2Line, 
  RiTeamLine, 
  RiRefreshLine, 
  RiAwardLine 
} from "react-icons/ri";

const WhyChooseUs = () => {
  const features = [
    {
      title: "100% Trusted",
      desc: "Your data and bookings are completely secure with our encrypted systems.",
      icon: <RiShieldCheckLine />,
    },
    {
      title: "Best Price Guarantee",
      desc: "Get the best deals and exclusive offers on all domestic and international bookings.",
      icon: <RiPriceTag3Line />,
    },
    {
      title: "24/7 Support",
      desc: "Round the clock customer support to assist you at every step of your journey.",
      icon: <RiCustomerService2Line />,
    },
    {
      title: "Expert Team",
      desc: "Experienced travel consultants dedicated to crafting your perfect itinerary.",
      icon: <RiTeamLine />,
    },
    {
      title: "Easy Cancellation",
      desc: "Hassle-free cancellation and transparent refund process for peace of mind.",
      icon: <RiRefreshLine />,
    },
    {
      title: "10+ Years Experience",
      desc: "Proudly serving travelers since 2016 with excellence and reliability.",
      icon: <RiAwardLine />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#189da3] font-semibold uppercase tracking-[0.2em] text-[10px] bg-[#189da3]/10 py-2 px-4 rounded-full border border-[#189da3]/20"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold text-[#0c4878] mt-6 leading-tight font-serif"
          >
            India's Most Trusted <br />
            <span className="text-[#189da3]">Travel Partner</span>
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-white rounded-[2rem] border border-gray-100 hover:border-[#189da3]/20 hover:shadow-xl hover:shadow-[#0c4878]/5 transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-gray-50 text-[#189da3] flex items-center justify-center text-3xl mb-6 group-hover:bg-[#0c4878] group-hover:text-white transition-all duration-500 group-hover:rotate-[360deg]">
                  {item.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-[#0c4878] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary (Optional Footer) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 p-8 rounded-[2.5rem] bg-[#0c4878] text-white flex flex-wrap justify-around items-center gap-8 text-center"
        >
          <div>
            <p className="text-3xl md:text-4xl font-semibold mb-1">5k+</p>
            <p className="text-[#189da3] text-xs font-semibold uppercase tracking-widest">Happy Travelers</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10"></div>
          <div>
            <p className="text-3xl md:text-4xl font-semibold mb-1">100%</p>
            <p className="text-[#189da3] text-xs font-semibold uppercase tracking-widest">Satisfaction Rate</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10"></div>
          <div>
            <p className="text-3xl md:text-4xl font-semibold mb-1">24/7</p>
            <p className="text-[#189da3] text-xs font-semibold uppercase tracking-widest">Global Support</p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;