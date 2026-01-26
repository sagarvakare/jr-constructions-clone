import React, { useState } from 'react';
import { FaHammer, FaWrench, FaHome } from 'react-icons/fa';

// Import your components
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer'; // ✅ ADDED THIS IMPORT
import Trans from '../components/Trans';

// --- MOCK DATA ---
const initialServices = [
  { id: 1, icon: <FaHammer />, title: "Structure Works", desc: "End-to-end civil works for large-scale projects." },
  { id: 2, icon: <FaWrench />, title: "Turnkey Projects", desc: "Concept to completion solutions." },
  { id: 3, icon: <FaHome />, title: "Interior Works", desc: "Stylish and functional interior solutions." },
];

const initialProjects = [
  { id: 1, category: "Residential", title: "Pratham Heights", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400" },
  { id: 2, category: "Commercial", title: "Westside Complex", img: "https://images.unsplash.com/photo-1486406140926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400" },
  { id: 3, category: "Residential", title: "Govt. School Wing", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400" },
];

const initialTeam = [
  { id: 1, name: "Raghu B N", role: "Managing Director", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Javeed", role: "Managing Director", img: "https://randomuser.me/api/portraits/men/45.jpg" },
];

const initialTestimonials = [
  { id: 1, name: "Manish Gadia", role: "MD, Pratham Builders", text: "Support provided was very good." },
  { id: 2, name: "Sriram", role: "GM, Casagrand", text: "Completed on time with professionalism." },
];

export default function ModernHome() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [services, setServices] = useState(initialServices);
  const [projects, setProjects] = useState(initialProjects);
  const [team, setTeam] = useState(initialTeam);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 overflow-x-hidden">
      
      {/* Admin Toggle */}
      <button 
        onClick={() => setIsAdminMode(!isAdminMode)}
        className={`fixed bottom-5 right-5 z-50 px-6 py-3 rounded-full shadow-2xl font-bold transition-all ${isAdminMode ? 'bg-red-600 text-white' : 'bg-gray-800 text-white'}`}
      >
        {isAdminMode ? <Trans id="home.exit_admin">Exit Admin Mode</Trans> : <Trans id="home.enable_admin">Enable Admin Mode</Trans>}
      </button>

      {/* --- SECTIONS WITH IDs FOR NAVIGATION --- */}
      {/* Navbar looks for id="hero" */}
      <div id="hero">
        <Hero />
      </div>

      {/* Navbar looks for id="services" */}
      <div id="services">
        <Services services={services} setServices={setServices} isAdminMode={isAdminMode} />
      </div>

      {/* Navbar looks for id="projects" */}
      <div id="projects">
        <Projects projects={projects} setProjects={setProjects} isAdminMode={isAdminMode} />
      </div>

      {/* Navbar looks for id="team" */}
      <div id="team">
        <Team team={team} setTeam={setTeam} isAdminMode={isAdminMode} />
      </div>

      {/* Testimonials (Optional ID) */}
      <div id="testimonials">
        <Testimonials testimonials={initialTestimonials} />
      </div>

      {/* Navbar looks for id="contact" */}
      <div id="contact">
        <Contact />
      </div>

      {/* ✅ REPLACED OLD FOOTER WITH NEW COMPONENT */}
      <Footer />
      
    </div>
  );
}