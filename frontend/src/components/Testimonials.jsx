import React from 'react';
import { FaQuoteLeft, FaStar, FaBuilding } from 'react-icons/fa';
import Trans from './Trans';

export default function Testimonials({ testimonials }) {
  return (
    <section className="py-20 bg-blue-700 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            What Our <span className="text-orange-500"><Trans id="testimonials.title">Clients Say</Trans></span>
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            <Trans id="testimonials.description">Don't just take our word for it. Here's what our satisfied clients have to say about working with JR Constructions & Solutions.</Trans>
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-white text-gray-800 p-8 rounded-xl shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-b-4 border-transparent hover:border-orange-500"
            >
              
              {/* QUOTE ICON & STARS */}
              <div className="flex justify-between items-start mb-6">
                <FaQuoteLeft className="text-4xl text-orange-500 opacity-20" />
                <div className="flex gap-1">
                   {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                   ))}
                </div>
              </div>

              {/* QUOTE TEXT */}
              <p className="text-gray-600 italic mb-8 leading-relaxed text-lg">
                "<Trans id={`testimonial.text.${item.id}`}>{item.text}</Trans>"
              </p>

              {/* CLIENT INFO */}
              <div className="flex items-center gap-4 mt-auto border-t pt-6 border-gray-100">
                {/* Logo Placeholder (or Image) */}
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-blue-700">
                   {/* If you have real logos, use <img src={item.logo} /> here */}
                   <FaBuilding className="text-xl" />
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 text-base"><Trans id={`testimonial.name.${item.id}`}>{item.name}</Trans></h4>
                  <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">
                    <Trans id={`testimonial.role.${item.id}`}>{item.role}</Trans>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}