import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import RealisationsSection from '@/components/RealisationsSection';
import StartupSection from '@/components/StartupSection';
import BlogSection from '@/components/BlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import StartupModal from '@/components/StartupModal';
import ConsultingPreloader from '@/components/ConsultingPreloader';

const PartnersSection = () => {
  const { t } = useTranslation();
  
  const partners = [
    { name: "DELOITTE", logo: "https://i.pinimg.com/736x/ca/1a/45/ca1a4577dc5c4cbf88f151f954c9ce32.jpg" },
    { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
    { name: "AMAZON", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "CISCO", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
    { name: "MICROSOFT", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "GOOGLE", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
    { name: "SALESFORCE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/330px-Salesforce.com_logo.svg.png" }
  ];

  // Configuration du défilement
  const itemWidth = 192; // w-48
  const gap = 24; // mx-6
  const totalWidth = (itemWidth + gap * 2) * partners.length;
  const scrollDuration = 50; // Durée augmentée à 60 secondes pour un défilement plus lent

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Fond dégradé premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-gray-900 to-teal-900/80 z-0"></div>
      
      {/* Effets de particules subtiles */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* En-tête premium */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 text-emerald-300 font-medium tracking-widest text-sm">
            COLLABORATIONS D'EXCEPTION
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              {t('partners.title')}
            </span>
          </h2>
          <p className="text-xl text-emerald-100/80 max-w-3xl mx-auto">
            {t('partners.subtitle')}
          </p>
        </motion.div>

        {/* Conteneur du carrousel */}
        <div className="relative h-48 overflow-hidden">
          {/* Flux unique avec défilement lent */}
          <motion.div
            className="absolute left-0 right-0 flex items-center h-full"
            animate={{
              x: [-totalWidth, 0],
            }}
            transition={{
              duration: scrollDuration,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...partners, ...partners].map((partner, i) => (
              <motion.div
                key={`partner-${i}`}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="mx-6 flex-shrink-0"
                style={{ width: `${itemWidth}px` }}
              >
                <div className="relative bg-gradient-to-b from-emerald-900/30 to-teal-900/20 p-6 rounded-2xl border border-emerald-800/30 hover:border-emerald-400/50 transition-all duration-300 h-32 w-full flex items-center justify-center backdrop-blur-sm shadow-lg hover:shadow-emerald-500/20 overflow-hidden">
                  {/* Effet de lumière au survol */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="relative max-h-16 max-w-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-500 brightness-0 invert hover:brightness-100 hover:invert-0"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Séparateur décoratif */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ 
            duration: 1.5, 
            ease: "circOut",
            delay: 0.3
          }}
          viewport={{ once: true }}
          className="mt-24 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"
        ></motion.div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <ConsultingPreloader />
      <StartupModal />
      
      {/* Smooth scroll container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PartnersSection />
        <RealisationsSection />
        <StartupSection />
        <BlogSection />
        <TestimonialsSection />
        <div id="NewsLetter"><ContactSection /></div>
      </motion.div>
    </>
  );
};

export default HomePage;