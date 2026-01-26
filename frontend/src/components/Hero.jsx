import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Trans from './Trans';

export default function Hero() {
  return (
    <section className="relative w-full py-20 px-6 lg:px-20 bg-white overflow-hidden">
      {/* Background Blob */}
      <motion.div 
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-50 -z-10" 
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 60 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            <Trans id="hero.title.line1">Building Dreams</Trans> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              <Trans id="hero.title.line2">Crafting Reality</Trans>
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            <Trans id="hero.description">For over 10 years, <span className="font-bold text-orange-600">S H  Constructions</span> has been at the forefront of construction excellence. We create legacies.</Trans>
          </p>
          
          <div className="mt-8 space-y-3">
            {["Licensed & Fully Insured", "LEED Certified Green Building", "24/7 Customer Support"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                <FaCheckCircle className="text-orange-500" /> <Trans id={`hero.feature.${i}`}>{item}</Trans>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" alt="Interior" className="w-full object-cover h-[500px]" />
          </div>
          <div className="absolute top-10 left-[-20px] w-full h-full bg-blue-900 rounded-3xl -z-0"></div>
        </motion.div>
      </div>
    </section>
  );
}