"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaWhatsapp, FaArrowRight, FaArrowLeft, FaGlobeAmericas, FaMapMarkedAlt } from "react-icons/fa";
import { RiMapPin2Line, RiTimeLine } from "react-icons/ri";
import { packages } from "@/data";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

const Packages = () => {
  const [activeTab, setActiveTab] = useState("Domestic");

  const currentPackages = packages.filter((item) => item.type === activeTab);

  const handleWhatsApp = (pkgName) => {
    const message = encodeURIComponent(`Hi Teakwood Holidays, I'm interested in the ${pkgName} package. Please share details.`);
    window.open(`https://wa.me/919884546406?text=${message}`, "_blank");
  };

  return (
    <section className="py-10  bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Toggle & Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-full text-center lg:text-left">
            <span className="text-[#189da3] font-semibold uppercase tracking-[0.2em] text-[10px] bg-[#189da3]/10 py-2 px-4 rounded-full border border-[#189da3]/20 ">
              Featured Packages
            </span>
            <h2 className="text-4xl font-semibold tracking-wider text-[#0c4878]  font-serif mt-5">
              Curated Collections
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="inline-flex p-1 bg-white border border-gray-200 rounded-full shadow-xs">
              <button
                onClick={() => setActiveTab("Domestic")}
                className={`flex items-center gap-2 px-5 md:px-8 py-2 md:py-3 rounded-full transition-all text-xs md:text-sm font-semibold ${
                  activeTab === "Domestic" 
                  ? "bg-[#0c4878] text-white shadow-md" 
                  : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <FaMapMarkedAlt /> Domestic
              </button>
              <button
                onClick={() => setActiveTab("International")}
                className={`flex items-center gap-2 px-5 md:px-8 py-2 md:py-3 rounded-full transition-all text-xs md:text-sm font-semibold ${
                  activeTab === "International" 
                  ? "bg-[#0c4878] text-white shadow-md" 
                  : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <FaGlobeAmericas /> International
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              className="!overflow-visible"
            >
              {currentPackages.map((pkg, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-sm transition-all duration-500 group h-full flex flex-col">
                    {/* Image Area */}
                    <div className="relative h-60 md:h-72 overflow-hidden">
                      <img 
                        src={pkg.image} 
                        alt={pkg.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                        <RiTimeLine className="text-[#189da3] text-sm" />
                        <span className="text-[10px] font-semibold text-[#0c4878] tracking-wider uppercase">{pkg.duration}</span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-[#189da3] mb-3">
                        <RiMapPin2Line className="text-sm" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em]">{pkg.location}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-[#0c4878] mb-3 group-hover:text-[#189da3] transition-colors leading-tight">
                        {pkg.title}
                      </h3>
                      <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6 flex-grow">
                        {pkg.description.slice(0,80)}...
                      </p>

                      <button
                        onClick={() => handleWhatsApp(pkg.title)}
                        className="w-full flex items-center justify-center gap-3 bg-[#0c4878] text-white py-4 rounded-xl md:rounded-2xl font-semibold hover:bg-[#189da3] transition-all duration-300 shadow-lg shadow-[#0c4878]/10 group/btn relative overflow-hidden"
                      >
                        <FaWhatsapp className="text-xl relative z-10" />
                        <span className="relative z-10">Enquire Now</span>
                        <FaArrowRight className="text-sm opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300 relative z-10" />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #0c4878;
          opacity: 0.2;
          border-radius: 4px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 24px;
          opacity: 1;
          background: #189da3;
        }
        @media (min-width: 768px) {
          .custom-pagination .swiper-pagination-bullet { width: 8px; height: 8px; }
          .custom-pagination .swiper-pagination-bullet-active { width: 32px; }
        }
      `}</style>
    </section>
  );
};

export default Packages;