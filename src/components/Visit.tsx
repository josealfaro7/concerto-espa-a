import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const Visit: React.FC = () => {
  return (
    <section className="px-6 py-32 border-t-[1px] border-white/5 relative">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8"
        >
          {/* Dónde */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <h3 className="font-serif text-sm text-gold uppercase tracking-[0.2em]">Dónde</h3>
            <div className="font-sans font-medium text-sm md:text-base text-gray-200 leading-relaxed tracking-wider">
              <p>C. Cándida Jimeno Gargallo, 6</p>
              <p>Alicante, España</p>
            </div>
          </motion.div>

          {/* Cuándo */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <h3 className="font-serif text-sm text-gold uppercase tracking-[0.2em]">Cuándo</h3>
            <div className="font-sans font-medium text-sm md:text-base text-gray-200 leading-relaxed tracking-wider space-y-2">
              <p>Lunes a jueves: 20:00 - 03:30</p>
              <p>Viernes y sábado: 15:00 - 03:30</p>
            </div>
          </motion.div>

          {/* Contacto */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <h3 className="font-serif text-sm text-gold uppercase tracking-[0.2em]">Contacto</h3>
            <div className="font-sans font-medium text-sm md:text-base text-gray-200 leading-relaxed tracking-wider space-y-2">
              <p>
                <a href="tel:+34659096549" className="text-gold hover:text-white transition-colors duration-300">
                  659 09 65 49
                </a>
              </p>
              <p>
                <a href="mailto:vip@grupoconcerto.com" className="text-gold hover:text-white transition-colors duration-300">
                  vip@grupoconcerto.com
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Visit;
