import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section className="px-6 py-32 md:py-48 flex justify-center items-center relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-3xl text-center md:text-left relative"
      >
        <p className="font-sans font-medium text-xl md:text-3xl lg:text-4xl leading-relaxed md:leading-relaxed text-gray-100 tracking-wide drop-shadow-md">
          Nacido en 2008, <span className="font-serif italic text-gold font-bold">Club Concerto</span> es un proyecto en el que cada detalle importa. Evolucionamos del famoso tardeo al anochecer, transformándonos en un refugio de elegancia con <span className="text-gold font-bold">coctelería premium, terraza, cachimbas y zona VIP</span> en plena Calle Castaños.
        </p>
      </motion.div>
    </section>
  );
};

export default Experience;
