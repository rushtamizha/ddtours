"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  RiMapPin2Line, 
  RiFlightTakeoffLine, 
  RiHotelLine, 
  RiShipLine, 
  RiPassportLine, 
  RiShieldCheckLine 
} from "react-icons/ri";

const Services = () => {
  const mainServices = [
    {
      title: "Tour Packages",
      desc: "Expertly curated Domestic and International holiday packages tailored to your preferences and budget.",
      icon: <RiMapPin2Line />,
      color: "bg-blue-50 text-[#189da3]"
    },
    {
      title: "Flight Tickets",
      desc: "Seamless air travel booking for domestic and international routes with the best competitive fares.",
      icon: <RiFlightTakeoffLine />,
      color: "bg-indigo-50 text-[#0c4878]"
    },
    {
      title: "Hotels & Cabs",
      desc: "Handpicked luxury accommodations paired with reliable private cab solutions for ultimate comfort.",
      icon: <RiHotelLine />,
      color: "bg-[#189da3]/5 text-[#189da3]"
    },
    {
      title: "Cruise Services",
      desc: "Breathtaking sea expeditions across global waters with premium liners and all-inclusive amenities.",
      icon: <RiShipLine />,
      color: "bg-indigo-50 text-[#0c4878]"
    },
    {
      title: "Passport & Visa",
      desc: "Hassle-free documentation support and visa processing assistance for a smooth global journey.",
      icon: <RiPassportLine />,
      color: "bg-[#189da3]/5 text-[#189da3]"
    },
    {
      title: "Travel Insurance",
      desc: "Comprehensive coverage plans to protect you against unforeseen events and ensure peace of mind.",
      icon: <RiShieldCheckLine />,
      color: "bg-blue-50 text-[#0c4878]"
    }
  ];

  return (
    <section id="services" className=" py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#189da3] font-semibold uppercase tracking-[0.2em] text-[10px] bg-[#189da3]/10 py-2 px-4 rounded-full border border-[#189da3]/20"
          >
            Professional Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-4xl font-semibold text-[#0c4878] mt-4 leading-tight  font-serif"
          >
            Comprehensive Travel Solutions
          </motion.h2>
          <p className="mt-6 text-gray-500 font-medium leading-relaxed">
            From documentation to destination, Teakwood Holidays provides end-to-end 
            support to ensure your journey is as smooth as your destination is beautiful.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-[#189da3]/30 hover:shadow-[0_30px_60px_-15px_rgba(37,48,97,0.1)] transition-all duration-500 group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl  font-semibold text-[#0c4878] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm  leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;