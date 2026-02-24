import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  BarChart3,
  Zap,
  Users,
  Target,
  Lightbulb,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    icon: <BarChart3 className="w-12 h-10 text-kofgo-blue-500" />,
    titleKey: "services.strategy.title",
    descriptionKey: "services.strategy.description",
    featuresKey: [
      "services.strategy.feature1",
      "services.strategy.feature2",
      "services.strategy.feature3",
      "services.strategy.feature4",
      "services.strategy.feature5",
    ],
  },
  {
    icon: <Zap className="w-12 h-12 text-kofgo-gold-500" />,
    titleKey: "services.digital.title",
    descriptionKey: "services.digital.description",
    featuresKey: [
      "services.digital.feature1",
      "services.digital.feature2",
      "services.digital.feature3",
      "services.digital.feature4",
    ],
  },
  {
    icon: <Users className="w-12 h-12 text-kofgo-purple-500" />, // Nouvelle couleur pour varier
    titleKey: "services.leadership.title",
    descriptionKey: "services.leadership.description",
    featuresKey: [
      "services.leadership.feature1",
      "services.leadership.feature2",
      "services.leadership.feature3",
      "services.leadership.feature4",
    ],
  },
];

const ServiceCard = ({
  icon,
  titleKey,
  descriptionKey,
  featuresKey,
  index,
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-kofgo-gray-800 rounded-xl p-8 shadow-2xl hover:shadow-kofgo-blue-500/30 border border-kofgo-gray-700 hover:border-kofgo-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 group"
    >
      <div className="mb-6 text-center">
        <div className="inline-block p-4 bg-gradient-to-br from-emerald-500 via-teal-400 to-cyan-400 rounded-full group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-center text-kofgo-gold-400">
        {t(titleKey)}
      </h3>
      <p className="text-kofgo-gray-300 mb-6 text-center text-sm leading-relaxed">
        {t(descriptionKey)}
      </p>
      <ul className="space-y-3">
        {featuresKey.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-kofgo-gray-200"
          >
            <CheckCircle className="w-5 h-5 text-kofgo-purple-400 mr-3 mt-0.5 flex-shrink-0" />{" "}
            {/* Utilisation de la nouvelle couleur */}
            <span>{t(feature)}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate(); // Hook pour la navigation

  const handleLearnMoreClick = () => {
    navigate("/services"); // Redirection vers la page des services
  };

  return (
    <section id="services" className="py-24 bg-kofgo-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 drop-shadow-lg">
              {t("services.mainTitle")}
            </span>
          </h2>
          <p className="text-xl text-kofgo-gray-300 max-w-3xl mx-auto">
            {t("services.mainSubtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mt-20 text-center space-y-6"
        >
          <p className="text-lg text-kofgo-gray-300">{t("services.ctaText")}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              onClick={() => {
                // 1. Naviguer vers la page
                navigate("/contact#HomeContact");

                // 2. Scroll vers la section avec décalage
                setTimeout(() => {
                  const element = document.getElementById("HomeContact");
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
              }} // Redirection vers la page contact
              className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-white font-semibold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/30 hover:from-emerald-400 hover:via-teal-300 hover:to-cyan-300 transition-all duration-300 transform hover:scale-[1.02]"
            >
              {t("services.contactButton")}
            </Button>

            <Button
              size="lg"
              onClick={() => {
                // 1. Naviguer vers la page
                navigate("/services#HomeService");

                // 2. Scroll vers la section avec décalage
                setTimeout(() => {
                  const element = document.getElementById("HomeService");
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
              }} // Redirection vers la page contact
              variant="outline"
              className="border-kofgo-purple-500 text-kofgo-purple-400 hover:bg-kofgo-purple-500/10 hover:text-kofgo-purple-300 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              {t("services.learnMoreButton")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
