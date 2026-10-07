import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    fecha: '',
    personas: '',
    zona: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nombre, fecha, personas, zona } = formData;
    
    // Format date from YYYY-MM-DD to DD/MM/YYYY
    const dateObj = new Date(fecha);
    const dia = String(dateObj.getDate()).padStart(2, '0');
    const mes = String(dateObj.getMonth() + 1).padStart(2, '0');
    const anio = dateObj.getFullYear();
    const fechaFormat = `${dia}/${mes}/${anio}`;

    const mensaje = `Hola, quiero hacer una reserva a nombre de ${nombre}, para ${personas} personas, en la zona ${zona} el día ${fechaFormat}.`;
    const urlWa = `https://wa.me/34659096549?text=${encodeURIComponent(mensaje)}`;
    
    window.open(urlWa, '_blank');
  };

  return (
    <section id="reserva" className="px-6 py-32 border-t-[1px] border-white/5 flex justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full max-w-2xl"
      >
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl text-gold tracking-widest uppercase mb-4">Reserva</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          
          <div className="relative">
            <input
              type="text"
              name="nombre"
              required
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre Completo"
              className="w-full bg-transparent border-b border-white/30 py-3 text-white font-sans font-medium tracking-wider placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors duration-500"
            />
          </div>

          <div className="relative">
            <input
              type="date"
              name="fecha"
              required
              value={formData.fecha}
              onChange={handleChange}
              onClick={(e) => {
                try {
                  (e.target as HTMLInputElement).showPicker();
                } catch (err) {}
              }}
              onFocus={(e) => {
                try {
                  (e.target as HTMLInputElement).showPicker();
                } catch (err) {}
              }}
              className="w-full bg-transparent border-b border-white/30 py-3 text-white font-sans font-medium tracking-wider focus:outline-none focus:border-white transition-colors duration-500 [color-scheme:dark] cursor-pointer"
            />
          </div>

          <div className="relative">
            <input
              type="number"
              name="personas"
              required
              min="1"
              max="50"
              value={formData.personas}
              onChange={handleChange}
              placeholder="Número de Personas"
              className="w-full bg-transparent border-b border-white/30 py-3 text-white font-sans font-medium tracking-wider placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors duration-500"
            />
          </div>

          <div className="relative">
            <select
              name="zona"
              required
              value={formData.zona}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/30 py-3 text-white font-sans font-medium tracking-wider focus:outline-none focus:border-white transition-colors duration-500 appearance-none cursor-pointer"
            >
              <option value="" disabled className="bg-black text-gray-500">Seleccionar Zona</option>
              <option value="General" className="bg-black text-white">General</option>
              <option value="Terraza" className="bg-black text-white">Terraza</option>
              <option value="VIP" className="bg-black text-white">VIP</option>
            </select>
          </div>

          <div className="pt-8 text-center">
            <button
              type="submit"
              className="inline-block px-12 py-4 text-xs font-sans font-medium tracking-[0.2em] text-gold uppercase border border-gold hover:bg-gold hover:text-black transition-all duration-500 ease-in-out w-full md:w-auto"
            >
              CONFIRMAR RESERVA
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Reservation;
