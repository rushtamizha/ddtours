"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  RiMapPin2Line, 
  RiFlightTakeoffLine, 
  RiHotelLine, 
  RiShipLine, 
  RiPassportLine, 
  RiMoneyDollarCircleLine,
  RiArrowRightUpLine
} from "react-icons/ri";

const Services = () => {
  const mainServices = [
    {
      title: "Flight Booking",
      desc: "Domestic & International flights at best prices. Compare and book instantly with seamless support.",
      icon: <RiFlightTakeoffLine />,
      color: "bg-[#0c4878]/5 text-[#0c4878]",
      btnText: "Book Now"
    },
    {
      title: "Hotel Booking",
      desc: "Wide range of hotels from budget to luxury. Best deals guaranteed across global destinations.",
      icon: <RiHotelLine />,
      color: "bg-[#189da3]/5 text-[#189da3]",
      btnText: "Book Now"
    },
    {
      title: "Car Rental",
      desc: "Self-drive & chauffeur-driven cars. Choose from our premium fleet for a comfortable local journey.",
      icon: <RiMapPin2Line />,
      color: "bg-[#0c4878]/5 text-[#0c4878]",
      btnText: "Book Now"
    },
    {
      title: "Cruise Packages",
      desc: "Luxury cruise experiences to exotic destinations worldwide with all-inclusive premium amenities.",
      icon: <RiShipLine />,
      color: "bg-[#189da3]/5 text-[#189da3]",
      btnText: "Book Now"
    },
    {
      title: "Visa & Passport",
      desc: "Complete assistance for visa processing and passport services to ensure a hassle-free journey.",
      icon: <RiPassportLine />,
      color: "bg-[#0c4878]/5 text-[#0c4878]",
      btnText: "Apply Now"
    },
    {
      title: "Forex Services",
      desc: "Best exchange rates for all major currencies with quick service for your international travel needs.",
      icon: <RiMoneyDollarCircleLine />,
      color: "bg-[#189da3]/5 text-[#189da3]",
      btnText: "Get Rates"
    }
  ];

  const handleWhatsApp = (service) => {
    const message = encodeURIComponent(`Hi Teakwood Holidays, I'm looking for ${service} services. Please help.`);
    window.open(`https://wa.me/919884546406?text=${message}`, "_blank");
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#189da3] font-semibold uppercase tracking-[0.2em] text-[10px] bg-[#189da3]/10 py-2 px-4 rounded-full border border-[#189da3]/20"
          >
            What We Offer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold text-[#0c4878] mt-6 leading-tight font-serif"
          >
            Our Premium Services
          </motion.h2>
          <p className="mt-4 text-gray-500 font-medium text-lg">
            Complete travel solutions under one roof.
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
              className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-[#189da3]/20 hover:shadow-[0_20px_50px_-20px_rgba(12,72,120,0.1)] transition-all duration-500 group flex flex-col h-full"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${service.color}`}>
                {service.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold text-[#0c4878] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium mb-8 flex-grow">
                {service.desc}
              </p>

              {/* Action Button */}
              <button
                onClick={() => handleWhatsApp(service.title)}
                className="inline-flex items-center gap-2 text-[#189da3] font-semibold text-sm hover:gap-3 transition-all duration-300 w-fit"
              >
                {service.btnText}
                <RiArrowRightUpLine className="text-lg" />
                <div className="h-[2px] w-0 group-hover:w-full bg-[#189da3] transition-all duration-300 absolute -bottom-1"></div>
              </button>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;