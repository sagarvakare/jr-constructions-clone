import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Trans from './Trans';

export default function Contact() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Info */}
        <div className="bg-gray-900 text-white p-12">
           <h2 className="text-4xl font-bold mb-8">Get In <span className="text-orange-500"><Trans id="contact.title">Touch</Trans></span></h2>
           <div className="space-y-6">
              <div className="flex items-center gap-4"><FaPhone className="text-orange-500"/> <div><p className="font-bold">+91 8073345519</p></div></div>
              <div className="flex items-center gap-4"><FaEnvelope className="text-orange-500"/> <div><p className="font-bold">S H constructions@gmail.com</p></div></div>
              <div className="flex items-center gap-4"><FaMapMarkerAlt className="text-orange-500"/> <div><p className="font-bold"><Trans id="contact.location">Rajaji Nagar, Bengaluru</Trans></p></div></div>
           </div>
        </div>
        {/* Form */}
        <div className="p-12 bg-white">
          <form className="space-y-6">
             <input type="text" placeholder="Full Name" className="w-full border-b-2 py-3 focus:outline-none focus:border-orange-500" />
             <input type="email" placeholder="Email" className="w-full border-b-2 py-3 focus:outline-none focus:border-orange-500" />
             <motion.button whileHover={{ scale: 1.02 }} className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 rounded-lg"><Trans id="contact.send_message">Send Message</Trans></motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}