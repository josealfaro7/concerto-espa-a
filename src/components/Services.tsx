import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { id: '01', title: 'Terraza', desc: 'Un espacio al aire libre diseñado para disfrutar de la tarde y la noche en el mejor ambiente.' },
  { id: '02', title: 'Cachimbas', desc: 'Shishas premium con una cuidada selección de sabores exclusivos para acompañar tu velada.' },
  { id: '03', title: 'Coctelería', desc: 'Mixología de autor y destilados de alta gama preparados por nuestros expertos bartenders.' },
  { id: '04', title: 'Zona VIP', desc: 'Atención hiper-personalizada, mesas exclusivas y privacidad en el corazón de la fiesta.' },
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Services: React.FC = () => {
  return (
    <section className="px-6 py-32 border-t-[1px] border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="flex flex-col space-y-6">
              <div className="flex items-baseline space-x-4 border-b border-white/10 pb-4">
                <span className="font-sans font-light text-sm text-gold tracking-widest">{service.id}.</span>
                <h3 className="font-serif text-2xl md:text-3xl text-white uppercase tracking-wider">{service.title}</h3>
              </div>
              <p className="font-sans font-medium text-sm md:text-base text-gray-400 leading-relaxed tracking-wider">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
