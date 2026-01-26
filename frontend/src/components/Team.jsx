import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrash } from 'react-icons/fa';
import Trans from './Trans';

export default function Team({ team, setTeam, isAdminMode }) {
  const handleDelete = (id) => {
      setTeam(prev => prev.filter(m => m.id !== id));
  };

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">Meet Our <span className="text-blue-900"><Trans id="team.title">Amazing Team</Trans></span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <AnimatePresence>
            {team.map((member) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 relative"
              >
                {isAdminMode && <button onClick={() => handleDelete(member.id)} className="absolute top-2 right-2 text-red-500 z-10"><FaTrash /></button>}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full border-4 border-white shadow-md" />
                </div>
                <h3 className="text-xl font-bold text-gray-900"><Trans id={`team.member.name.${member.id}`}>{member.name}</Trans></h3>
                <p className="text-orange-600 font-medium"><Trans id={`team.member.role.${member.id}`}>{member.role}</Trans></p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}