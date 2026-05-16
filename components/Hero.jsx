"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { ArrowRight, ChevronDown, Globe } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";

import Link from "next/link";
import tours, { heroData, companyConfig } from "@/tours";
const EnterpriseHero = () => {
  return (
    <section className="relative flex items-center justify-center w-full h-screen overflow-hidden capitalize bg-[#189da3]">
      {/* BACKGROUND SLIDER - Matching the deep blue tones */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          speed={2000}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {tours.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                <motion.img
                  src={slide.image}
                  className="object-cover w-full h-full"
                  alt={slide.title}
                />
                {/* Overlay: Blending Navbar's light aesthetic with Hero legibility */}
                <div className="absolute inset-0 bg-[#0c4878]/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#189da3]/50 via-transparent to-[#0c4878]/50" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CENTERED CONTENT */}
      <div className="container relative z-10 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          {/* Status Badge: Matching Navbar's rounded-full and blue-500 accents */}
          <div className="inline-flex items-center gap-3 px-6 py-2 mb-8 border rounded-full bg-white/10 backdrop-blur-md border-white/20">
            <Globe size={14} className="text-[#189da3] animate-pulse" />
            <span className="text-white text-[10px] font-semibold uppercase tracking-[0.3em]">
              India's Trusted Travel Partner Since 2006
            </span>
          </div>

          {/* Typography: Matching Navbar's font weights and spacing */}
          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-[0.9] tracking-tighter uppercase mb-4">
            Explore the World Your Way
          </h1>

          {/* Narrative: Using Slate-200 to match Navbar's text-slate utility */}
          <p className="max-w-2xl mx-auto mb-12 font-medium leading-relaxed tracking-wide text-slate-200 md:text-lg ">
            Discover amazing places at exclusive deals. Book flights, hotels, and holiday packages.
          </p>

          {/* Action Row: Matching Navbar's "Book Now" Button Style */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/packages">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-[#189da3] rounded-full font-semibold text-[12px] uppercase tracking-widest shadow-2xl shadow-blue-500/20 transition-all flex items-center gap-3 group"
              >
                View Packages
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Elements: Matching the Navbar's thin borders */}
      <div className="absolute z-20 flex items-end justify-between bottom-12 left-12 right-12">
        <div className="hidden lg:block">
          <p className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.4em] mb-2">
            Location
          </p>
          <p className="text-white text-[12px] font-semibold uppercase tracking-widest">
            Kerala, India
          </p>
        </div>

        {/* Scroll UI */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex-col items-center hidden gap-3"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#189da3] to-transparent" />
          <span className="text-[10px] text-[#189da3] font-semibold uppercase tracking-[0.3em] [writing-mode:vertical-lr]">
            Scroll
          </span>
        </motion.div>

        <div className="hidden text-right lg:block">
          <p className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.4em] mb-2">
            Established
          </p>
          <p className="text-white text-[12px] font-semibold uppercase tracking-widest">
            © 2026 {companyConfig.name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseHero;
