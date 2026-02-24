import React from "react";
import { motion } from "framer-motion";
import { Award, Users, TrendingUp, CheckSquare, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useNavigate } from 'react-router-dom';

const AboutSection = ({ scrollToSection }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const stats = [
    {
      value: 25,
      labelKey: "about.stats.experienceLabel",
      withPlus: true,
      icon: (
        <Briefcase className="w-7 h-7 text-kofgo-blue dark:text-kofgo-gold" />
      ),
    },
    {
      value: 150,
      labelKey: "about.stats.projectsLabel",
      withPlus: true,
      icon: (
        <CheckSquare className="w-7 h-7 text-kofgo-blue dark:text-kofgo-gold" />
      ),
    },
    {
      value: 95,
      labelKey: "about.stats.satisfactionLabel",
      icon: <Award className="w-7 h-7 text-kofgo-blue dark:text-kofgo-gold" />,
    },
    {
      value: 12,
      labelKey: "about.stats.expertsLabel",
      icon: <Users className="w-7 h-7 text-kofgo-blue dark:text-kofgo-gold" />,
    },
  ];

  return (
    <section
      id="apropos"
      className="relative py-32 bg-gradient-to-br from-white via-slate-100 to-slate-200 dark:from-black dark:via-neutral-900 dark:to-neutral-800 overflow-hidden"
    >
      {/* Effet de lumière d’ambiance */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-blue-400/20 blur-3xl opacity-70 dark:bg-amber-400/10" />

      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 items-center gap-20">
        {/* Texte principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 drop-shadow-lg">
              {t("about.title.line1")}
            </span>
            <span className="block text-gray-700 dark:text-neutral-300 mt-2">
              {t("about.title.line2")}
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-neutral-400 mb-6 leading-relaxed">
            {t("about.paragraph1")}
          </p>
          <p className="text-lg text-gray-600 dark:text-neutral-500 mb-10 leading-relaxed">
            {t("about.paragraph2")}
          </p>

          <Button
            onClick={() => {
                // 1. Naviguer vers la page
                navigate("/about#HomeAbout");

                // 2. Scroll vers la section avec décalage
                setTimeout(() => {
                  const element = document.getElementById("HomeAbout");
                  if (element) {
                    // Calcul de la position avec décalage
                    const offset = 120; // Ajustez cette valeur selon vos besoins
                    const elementPosition =
                      element.getBoundingClientRect().top + window.pageYOffset;

                    window.scrollTo({
                      top: elementPosition - offset,
                      behavior: "smooth",
                    });
                  }
                }, 100);
              }}
            className="px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 dark:from-kofgo-gold dark:to-amber-400 text-white shadow-xl hover:scale-105 transition-all duration-300 flex items-center"
          >
            {t("about.ctaButton")}
            <TrendingUp className="ml-3 w-5 h-5" />
          </Button>
        </motion.div>

        {/* Bloc stat + image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative space-y-8"
        >
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const { ref, inView } = useInView({ triggerOnce: true });
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <div className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400">
                    {inView ? (
                      <>
                        <CountUp end={stat.value} duration={2} />
                        {stat.withPlus && "+"}
                      </>
                    ) : stat.withPlus ? (
                      "0+"
                    ) : (
                      "0"
                    )}
                  </div>

                  <div className="text-center text-sm text-gray-500 dark:text-neutral-400 mt-1">
                    {t(stat.labelKey)}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.img
            src="/koff.png"
            alt={t("about.imageAlt")}
            className="rounded-2xl shadow-2xl object-cover aspect-video w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
