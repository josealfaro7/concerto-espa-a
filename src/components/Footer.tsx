import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-32 pb-12 border-t-[1px] border-white/5 relative z-10 w-full">
      {/* Top Section: Info Grid - WIDER SPREAD */}
      <div className="px-6 md:px-16 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24 md:mb-32">
          {/* Ubicación */}
          <div className="flex flex-col space-y-5 text-center md:text-left">
            <h3 className="font-serif text-xl md:text-2xl text-gold tracking-wide">Ubicación</h3>
            <div className="font-sans font-medium text-base md:text-lg text-white leading-loose tracking-wider">
              <p>C. Cándida Jimeno Gargallo, 6</p>
              <p>Alicante, España</p>
            </div>
          </div>

          {/* Horarios */}
          <div className="flex flex-col space-y-5 text-center md:text-left">
            <h3 className="font-serif text-xl md:text-2xl text-gold tracking-wide">Horarios</h3>
            <div className="font-sans font-medium text-base md:text-lg text-white leading-loose tracking-wider space-y-2">
              <p>Lunes a jueves: 20:00 - 03:30</p>
              <p>Viernes y sábado: 15:00 - 03:30</p>
            </div>
          </div>

          {/* Contacto */}
          <div className="flex flex-col space-y-5 text-center md:text-left">
            <h3 className="font-serif text-xl md:text-2xl text-gold tracking-wide">Contacto</h3>
            <div className="font-sans font-medium text-base md:text-lg text-white leading-loose tracking-wider space-y-2">
              <p>
                <a href="tel:+34659096549" className="text-gold hover:text-white transition-colors duration-300">
                  +34 659 09 65 49
                </a>
              </p>
              <p>
                <a href="mailto:vip@grupoconcerto.com" className="text-gold hover:text-white transition-colors duration-300">
                  vip@grupoconcerto.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Legal & Social - STANDARD WIDTH */}
      <div className="px-6 max-w-6xl mx-auto w-full">
        <div className="pt-8 border-t-[1px] border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left font-sans font-medium text-xs text-gray-500 tracking-widest uppercase">
          <div className="text-gold">
            <p>&copy; {new Date().getFullYear()} GRUPO CONCERTO. Todos los derechos reservados.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:space-y-0">
            <a href="#" className="hover:text-gold transition-colors duration-300">Aviso Legal</a>
            <a href="#" className="hover:text-gold transition-colors duration-300">Privacidad</a>
            <a href="#" className="hover:text-gold transition-colors duration-300">Cookies</a>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold transition-colors duration-300">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors duration-300">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
