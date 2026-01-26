import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrash } from 'react-icons/fa';
import Trans from './Trans';

export default function Projects({ projects, setProjects, isAdminMode }) {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  const handleDelete = (id) => {
    if(window.confirm("Delete this project?")) {
      setProjects(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Our <span className="text-orange-500"><Trans id="projects.title">Projects</Trans></span></h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {["All", "Residential", "Commercial"].map((cat) => (
              <button 
                key={cat} onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${filter === cat ? 'bg-orange-500 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-600'}`}
              >
                <Trans id={`projects.filter.${cat.toLowerCase()}`}>{cat}</Trans>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                key={project.id}
                className="relative group rounded-xl overflow-hidden h-64 shadow-lg cursor-pointer"
              >
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-orange-400 font-bold text-sm uppercase"><Trans id={`projects.category.${project.category.toLowerCase()}`}>{project.category}</Trans></span>
                  <h3 className="text-white text-xl font-bold"><Trans id={`projects.project.title.${project.id}`}>{project.title}</Trans></h3>
                </div>
                {isAdminMode && (
                  <button onClick={() => handleDelete(project.id)} className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full z-20"><FaTrash /></button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}