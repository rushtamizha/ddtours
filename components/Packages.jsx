"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaArrowRight, FaGlobeAmericas, FaMapMarkedAlt } from "react-icons/fa";
import { RiMapPin2Line, RiTimeLine } from "react-icons/ri";
import tours from "@/tours";


const Packages = () => {
  const [activeTab, setActiveTab] = useState("Domestic");

  // Filter packages based on tab
  const currentPackages = tours.filter((item) => item.category === activeTab);

  const handleWhatsApp = (pkgName) => {
    const message = encodeURIComponent(
      `Hi Teakwood Holidays, I'm interested in the ${pkgName} package. Please share details.`
    );
    window.open(`https://wa.me/919884546406?text=${message}`, "_blank");
  };

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Toggle & Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-full text-center lg:text-left">
            <span className="text-[#189da3] font-semibold uppercase tracking-[0.2em] text-[10px] bg-[#189da3]/10 py-2 px-4 rounded-full border border-[#189da3]/20 ">
              Featured Packages
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-wider text-[#0c4878] font-serif mt-5">
              Curated Collections
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="inline-flex p-1 bg-gray-50 border border-gray-200 rounded-full shadow-sm">
              <button
                onClick={() => setActiveTab("Domestic")}
                className={`flex items-center gap-2 px-6 md:px-10 py-2.5 md:py-3.5 rounded-full transition-all text-xs md:text-sm font-semibold ${
                  activeTab === "Domestic" 
                  ? "bg-[#0c4878] text-white shadow-lg" 
                  : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <FaMapMarkedAlt /> Domestic
              </button>
              <button
                onClick={() => setActiveTab("International")}
                className={`flex items-center gap-2 px-6 md:px-10 py-2.5 md:py-3.5 rounded-full transition-all text-xs md:text-sm font-semibold ${
                  activeTab === "International" 
                  ? "bg-[#0c4878] text-white shadow-lg" 
                  : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <FaGlobeAmericas /> International
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Grid List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {currentPackages.map((pkg, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-[#189da3]/30 hover:shadow-xl hover:shadow-[#0c4878]/5 transition-all duration-500 group flex flex-col h-full"
              >
                {/* Image Area */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                    <RiTimeLine className="text-[#189da3] text-sm" />
                    <span className="text-[10px] font-semibold text-[#0c4878] tracking-wider uppercase">
                      {pkg.duration}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-[#189da3] mb-3">
                    <RiMapPin2Line className="text-sm" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em]">
                      {pkg.location}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#0c4878] mb-3 group-hover:text-[#189da3] transition-colors leading-tight">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8 flex-grow">
                    {pkg.description.length > 100 
                      ? `${pkg.description.slice(0, 100)}...` 
                      : pkg.description}
                  </p>

                  <button
                    onClick={() => handleWhatsApp(pkg.title)}
                    className="w-full flex items-center justify-center gap-3 bg-[#0c4878] text-white py-4 rounded-xl md:rounded-2xl font-semibold hover:bg-[#189da3] transition-all duration-300 group/btn relative overflow-hidden"
                  >
                    <FaWhatsapp className="text-xl relative z-10" />
                    <span className="relative z-10">Enquire Now</span>
                    <FaArrowRight className="text-sm opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300 relative z-10" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {currentPackages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 font-medium">No packages found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Packages;