import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Trans from './Trans';

const hover3D = {
  rest: { scale: 1, rotateX: 0, rotateY: 0, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" },
  hover: { 
    scale: 1.05, rotateX: 5, rotateY: 5, 
    boxShadow: "20px 20px 50px rgba(0,0,0,0.2)",
    transition: { type: "spring", stiffness: 300 } 
  }
};

export default function Services({ services, setServices, isAdminMode }) {
  
  const handleDelete = (id) => {
    if(window.confirm("Delete this service?")) {
      setServices(prev => prev.filter(item => item.id !== id));
    }
  };

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">Our <span className="text-orange-500"><Trans id="services.title">Services</Trans></span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <AnimatePresence>
          {services.map((service) => (
            <motion.div 
              key={service.id}
              initial="rest" whileHover="hover" animate="rest"
              variants={hover3D}
              exit={{ opacity: 0, scale: 0.5 }}
              className="bg-white p-8 rounded-2xl relative border-t-4 border-orange-500 group"
            >
              {isAdminMode && (
                <div className="absolute top-4 right-4 flex gap-2 z-20">
                  <button className="p-2 bg-blue-100 text-blue-600 rounded-full"><FaEdit /></button>
                  <button onClick={() => handleDelete(service.id)} className="p-2 bg-red-100 text-red-600 rounded-full"><FaTrash /></button>
                </div>
              )}
              
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl text-blue-700 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800"><Trans id={`service.title.${service.id}`}>{service.title}</Trans></h3>
              <p className="text-gray-600 mb-6"><Trans id={`service.desc.${service.id}`}>{service.desc}</Trans></p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}