import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="space-y-12 max-w-4xl"
      >
        <h1 className="font-serif text-3xl md:text-5xl tracking-widest text-gold uppercase">
          Concerto
        </h1>
        
        <div className="space-y-6 relative w-full">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight drop-shadow-lg">
            LA <span className="text-gold">DIVERSIÓN</span><br />ESTÁ ASEGURADA
          </h2>
          
          <p className="font-sans font-medium text-sm md:text-lg text-gray-200 tracking-[0.3em] uppercase drop-shadow-md">
            Esta semana se vive acá.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="pt-8"
        >
          <a
            href="#reserva"
            className="inline-block px-12 py-4 text-xs font-sans font-medium tracking-[0.2em] text-gold uppercase border border-gold hover:bg-gold hover:text-black transition-all duration-500 ease-in-out"
          >
            HAZ TU RESERVA
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
