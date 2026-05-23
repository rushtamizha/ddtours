"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  RiPhoneFill, 
  RiMailFill, 
  RiMapPin2Fill, 
  RiTimeFill,
  RiWhatsappLine
} from "react-icons/ri";

const Contact = () => {
  const contactDetails = [
    {
      title: "Call Us",
      value: "+919597121924",
      link: "tel:+919843111922",
      icon: <RiPhoneFill />,
      color: "bg-[#0c4878]/5 text-[#0c4878]"
    },
    {
      title: "Email Us",
      value: "ddtoursandtravelsixm@gmail.com",
      link: "mailto:k4tourworld@gmail.com",
      icon: <RiMailFill />,
      color: "bg-[#189da3]/5 text-[#189da3]"
    },
    {
      title: "Visit Us",
      value: "Plot No 1,Ganesh Nagar first Street Suryanagar, K. Pudur Madurai 625007",
      link: "https://maps.google.com",
      icon: <RiMapPin2Fill />,
      color: "bg-[#0c4878]/5 text-[#0c4878]"
    },
    {
      title: "Working Hours",
      value: "Mon-Sat: 9AM-7PM | Sun: 10AM-5PM",
      link: null,
      icon: <RiTimeFill />,
      color: "bg-[#189da3]/5 text-[#189da3]"
    }
  ];

  return (
    <section id="contact" className="py-30 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#189da3] font-semibold uppercase tracking-[0.2em] text-[10px] bg-[#189da3]/10 py-2 px-4 rounded-full border border-[#189da3]/20"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold text-[#0c4878] mt-6 leading-tight font-serif"
          >
            Contact Us
          </motion.h2>
          <p className="mt-4 text-gray-500 font-medium">
            We're here to help you plan your perfect journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Information */}
          <div className="lg:col-span-2 grid gap-6">
            {contactDetails.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link || "#"}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`flex items-start gap-5 p-6 bg-white rounded-3xl border border-gray-100 hover:shadow-xl hover:shadow-[#0c4878]/5 transition-all group ${!item.link && 'pointer-events-none'}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-transform group-hover:scale-110 ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-1">{item.title}</h4>
                  <p className="text-[#0c4878] font-semibold text-lg leading-snug">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Quick WhatsApp CTA */}
            <a 
              href="https://wa.me/919597121924" 
              target="_blank"
              className="flex items-center justify-center gap-3 bg-[#25d366] text-white py-5 rounded-3xl font-semibold hover:opacity-90 transition-all shadow-lg shadow-[#25d366]/20 mt-4"
            >
              <RiWhatsappLine className="text-2xl" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Google Map Integration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-3 h-[400px] lg:h-full min-h-[450px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.123456789!2d78.1326!3d9.9328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5871f34567b%3A0x1234567890abcdef!2s17%2C%20Gokhale%20Rd%2C%20Chinna%20Chokkikulam%2C%20Madurai%2C%20Tamil%20Nadu%20625002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1]"
            ></iframe>
            
            {/* Map Overlay Label */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0c4878] text-white flex items-center justify-center">
                  <RiMapPin2Fill />
                </div>
                <p className="text-xs font-semibold text-[#0c4878]">
                  Plot No 1,Ganesh Nagar<br/> first Street
                  Suryanagar, K. Pudur
<br/>Madurai 625007.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;