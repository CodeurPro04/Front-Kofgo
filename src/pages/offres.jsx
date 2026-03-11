import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Star,
  Trophy,
  Award,
  Zap,
  BarChart2,
  Globe,
  Users,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
const AnimatedText = ({ text, className }) => {
  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {text}
    </motion.h1>
  );
};
function OFFRE() {

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-70 dark:opacity-50"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="/realisation.mp4"
              type="video/mp4"
            />
            Votre navigateur ne prend pas en charge les vidéos HTML5.
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-emerald-900/30"></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <AnimatedText
            text="Nos Offres"
            className="text-2xl md:text-7xl lg:text-8xl font-bold mb-6 text-white justify-center drop-shadow-lg"
          />
          <motion.p
            className="text-2xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            La formation indispensable pour restructurer avec méthode ,Leadership et Résultats.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          ></motion.div>
        </div>
      </section>



      </div>
  );
}

export default OFFRE;