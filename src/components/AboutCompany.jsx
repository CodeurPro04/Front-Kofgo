import React from "react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  Award,
  ShieldCheck,
  // GitMerge,
  Globe,
  CircuitBoard,
  CheckCircle,
  Rocket,
  Users,
  // Cpu,
  BarChart2,
  UserCheck,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

// Composant AnimatedText pour les titres
const AnimatedText = ({ text, className }) => {
  const letters = text.split("");

  return (
    <div className={`flex flex-wrap ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.03, duration: 0.5 }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

const AboutPage = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const navigate = useNavigate();
  const stats = [
    {
      value: 95,
      suffix: "%",
      label: "Clients Satisfaits",
      icon: <Users className="h-8 w-8 text-emerald-500" />,
    },
    {
      value: 150,
      suffix: "+",
      label: "Projets Réalisés",
      icon: <CheckCircle className="h-8 w-8 text-emerald-500" />,
    },
    {
      value: 12,
      label: "Pays d'Intervention",
      icon: <Globe className="h-8 w-8 text-emerald-500" />,
    },
    {
      value: 25,
      label: "Partenaires stratégiques",
      icon: <Award className="h-8 w-8 text-emerald-500" />,
    },
  ];
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden"
        id="HomeAbout"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-70 dark:opacity-50"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="/about.mp4"
              type="video/mp4"
            />
            Votre navigateur ne prend pas en charge les vidéos HTML5.
          </video>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-emerald-900/30"></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <AnimatedText
            text="Notre histoire"
            className="text-2xl md:text-7xl lg:text-8xl font-bold mb-6 text-white justify-center"
          />
          <motion.p
            className="text-2xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Découvrez ce qui fait de KOF-GO CONSULTING un partenaire de
            confiance
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          ></motion.div>
        </div>
      </section>

      {/* Notre Histoire - Design Excellence */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto relative overflow-hidden">
        {/* Arrière-plan premium amélioré */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-50/70 to-white dark:from-gray-950 dark:via-gray-900/70 dark:to-gray-950"></div>
          <div className="absolute top-1/2 right-0 w-[1200px] h-[1200px] -mr-96 -mt-[600px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-teal-400/5 to-transparent rounded-full opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] -ml-64 -mb-64 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/5 to-transparent rounded-full opacity-50"></div>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10">
          {/* En-tête premium élégant */}
          <motion.div
            className="text-center mb-16 md:mb-28 px-4 sm:px-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Badge premium */}
            <motion.span
              className="inline-block mb-6 text-emerald-400 font-medium tracking-widest text-xs sm:text-sm uppercase rounded-full px-5 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-400/10 border border-emerald-400/20 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              KOF-GO CONSULTING
            </motion.span>

            {/* Texte d'introduction */}
            <motion.div
              className="relative max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Effets décoratifs */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl"></div>

              {/* Contenu principal */}
              <div className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-200/70 dark:border-gray-700/50 shadow-lg">
                {/* Premier paragraphe */}
                <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                    KOF-GO CONSULTING
                  </span>
                  , c'est plus qu'un cabinet de conseil.
                  <br />
                  C'est une vision audacieuse née en 2020, portée par deux
                  entrepreneurs engagés,{" "}
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    KOFFI KONAN
                  </span>{" "}
                  et{" "}
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    RICHARD TAGO
                  </span>
                  , qui partagent une même conviction
                </p>

                {/* Point clé visuel */}
                <div className="relative pl-12 mb-8">
                  <div className="absolute left-0 top-0 w-8 h-8 flex items-center justify-center bg-emerald-500 rounded-full text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                  <p className="italic font-medium text-emerald-700 dark:text-emerald-300">
                    Les entreprises africaines et internationales méritent un
                    accompagnement stratégique de haut niveau, ancré dans leur
                    réalité et capable de libérer leur vrai potentiel.
                  </p>
                </div>

                {/* Deuxième paragraphe */}
                <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  Conscients des blocages que rencontrent les porteurs de
                  projet, les dirigeants de PME, ou les responsables
                  institutionnels — manque de structure, d'orientation
                  stratégique, d'accès au financement ou à l'innovation — ils
                  ont décidé de créer un cabinet hybride, à la fois proche du
                  terrain et aligné sur les standards internationaux du conseil.
                </p>

                {/* Liste des réalisations */}
                <div className="mb-8">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Depuis,{" "}
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      KOF-GO CONSULTING
                    </span>{" "}
                    est devenu un partenaire de référence pour :
                  </p>

                  <ul className="grid sm:grid-cols-3 gap-4">
                    {[
                      "Les projets à fort impact",
                      "Les ambitions durables",
                      "Les acteurs innovants",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 bg-emerald-50/50 dark:bg-emerald-900/10 p-4 rounded-lg border border-emerald-100 dark:border-emerald-900/20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="flex-shrink-0 mt-1 w-5 h-5 text-emerald-500" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Engagement final */}
                <p className="text-gray-700 dark:text-gray-300 font-medium text-lg">
                  Notre engagement est simple : faire émerger les projets qui
                  transforment, accompagner les visions qui bousculent, et
                  soutenir les leaders qui osent aller plus loin.
                </p>
              </div>
            </motion.div>

            {/* Titre principal */}
            <motion.h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-tight max-w-6xl mx-auto mt-12 md:mt-16 px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 drop-shadow-2xl">
                Notre parcours
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 dark:from-gray-300 dark:via-gray-200 dark:to-white drop-shadow-lg">
                vers l'excellence
              </span>
            </motion.h2>

            {/* Séparateur élégant */}
            <motion.div
              className="mt-14 md:mt-20 flex justify-center"
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="h-px w-48 bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent"></div>
            </motion.div>
          </motion.div>

          {/* Grille contenu */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Frise chronologique ultra-premium */}
            <div className="relative">
              {/* Ligne de temps artistique améliorée */}
              <div className="absolute left-8 sm:left-10 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-emerald-500/80 to-transparent dark:via-emerald-400/80 shadow-[0_0_15px_2px_rgba(16,185,129,0.2)]"></div>

              {[
                {
                  year: "2020",
                  title: "Naissance de KOF-GO CONSULTING",
                  content:
                    "Création du cabinet par KOFFI KONAN et TAGO RICHARD, avec pour ambition d'apporter une expertise stratégique adaptée aux réalités africaines et internationales.",
                  color: "emerald",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
                {
                  year: "2021 - 2022",
                  title:
                    "Premiers succès clients & Ouverture du département Digital",
                  content:
                    "Accompagnement stratégique de plusieurs PME en Côte d'Ivoire et dans la sous-région et en France , Développement de l'offre digitale incluant le marketing numérique et la transformation digitale.",
                  color: "amber",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
                {
                  year: "2023 - 2025",
                  title: "Certification ISO 9001 & 60+ projets accompagnés",
                  content:
                    "Obtention de la certification pour la qualité du management et l'approche centrée sur le client. Atteinte d'une centaine de projets réalisés avec succès dans 8 pays africains",
                  color: "amber",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative pl-20 sm:pl-28 py-8 group ${
                    index !== 4
                      ? "border-b border-gray-200/50 dark:border-gray-800/50"
                      : ""
                  }`}
                >
                  {/* Marqueur de date amélioré */}
                  <div
                    className={`absolute left-8 sm:left-10 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-${item.color}-500 flex items-center justify-center border-4 border-white dark:border-gray-950 shadow-lg group-hover:scale-110 transition-all duration-300 z-10`}
                  >
                    {item.icon}
                  </div>

                  {/* Carte d'événement premium */}
                  <div
                    className={`relative bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-800/50 group-hover:border-${item.color}-300/30 overflow-hidden`}
                  >
                    {/* Effet de fond */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    <div className="relative z-10">
                      <div
                        className={`flex items-center gap-2 text-sm font-semibold mb-3 text-${item.color}-500`}
                      >
                        <span>{item.year}</span>
                        <span className="w-8 h-px bg-current opacity-50"></span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Section média ultra-premium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[600px] sm:h-[700px] lg:h-[750px] rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl border border-gray-200/50 dark:border-gray-800/50 group transition-all duration-500"
            >
              {/* Image principale avec effet de zoom */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-teal-400/5 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Équipe KOF-GO en action"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay textuel premium */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 md:p-16 bg-gradient-to-t from-gray-900/95 via-gray-900/50 to-transparent">
                <div className="max-w-md">
                  <div className="text-emerald-400 font-medium mb-3 sm:mb-4 flex items-center gap-2">
                    <span>Notre ADN</span>
                    <span className="w-8 h-px bg-emerald-400/50"></span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-5 leading-tight">
                    L'excellence comme standard
                  </h3>
                  <p className="text-gray-300/90 text-sm sm:text-base leading-relaxed text-justify">
                    Être un acteur de référence du conseil stratégique en
                    Afrique et à l’international, en créant des passerelles
                    concrètes entre les idées, les ambitions et la performance.
                    Nous croyons en un continent où chaque entreprise, chaque
                    projet, chaque talent peut devenir un levier de
                    transformation économique durable, lorsqu’il est
                    bien accompagné.
                  </p>
                </div>
              </div>

              {/* Élément décoratif animé */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 backdrop-blur-sm flex items-center justify-center border border-emerald-400/30 hover:bg-emerald-500/30 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Bouton CTA ultra-premium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-20 sm:mt-24"
          >
            <button
              onClick={() => {
                // 1. Naviguer vers la page
                navigate("/services");

                // 2. Scroll vers la section avec décalage
                setTimeout(() => {
                  const element = document.getElementById("Proces");
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
              className="relative overflow-hidden group px-8 sm:px-14 py-3 sm:py-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                Découvrir notre méthodologie
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute -inset-1 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      
     <section className="py-28 bg-gray-50 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      className="text-center mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
        NOTRE{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-300 drop-shadow-lg">
          IDENTITE
        </span>
      </h2>

      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-7xl mx-auto">
        KOF GO CONSULTING est un cabinet de conseil indépendant dédié à la
        structuration, la transformation et la performance des organisations en
        Afrique et en Europe. Nous accompagnons les PME, associations,
        entrepreneurs et institutions dans leurs projets stratégiques,
        digitaux et organisationnels. Notre conviction est simple : la
        performance durable naît de la clarté, de la rigueur et de l’exécution.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {[
        {
          icon: <ShieldCheck className="h-10 w-10 text-emerald-500" />,
          title: "Notre mission",
          description:
            "Aider les organisations à gagner en efficacité, en visibilité et en impact grâce à :",
          principles: [
            "une stratégie claire",
            "une organisation structurée",
            "des outils digitaux performants",
            "une communication professionnelle",
            "un accompagnement humain et pragmatique",
          ],
        },

        {
          icon: <ShieldCheck className="h-10 w-10 text-emerald-500" />,
          title: "Notre approche",
          description: "Nous combinons :",
          principles: [
            "la rigueur des cabinets internationaux",
            "la proximité d’une équipe à taille humaine",
            "la compréhension fine des réalités africaines et européennes",
            "une exécution rapide et orientée résultats",
          ],
          description2: "Chaque mission est menée avec :",
          principe: [
            "professionnalisme",
            "confidentialité",
            "efficacité",
            "suivi personnalisé",
          ],
        },

        {
          icon: <ShieldCheck className="h-10 w-10 text-emerald-500" />,
          title: "Nos domaines d’expertise",
          description: "",
          principles: [
            "Conseil stratégique & organisationnel",
            "Digital & développement web",
            "Communication & identité visuelle",
            "Accompagnement opérationnel",
            "Structuration RH & performance",
          ],
        },

        {
          icon: <ShieldCheck className="h-10 w-10 text-emerald-500" />,
          title: "Notre ambition",
          description:
            "Devenir un cabinet de référence pour les organisations qui veulent se professionnaliser, se digitaliser et se développer durablement.",
          principles: [],
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          whileHover={{ y: -10 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-emerald-100 dark:bg-emerald-900/20 rounded-xl">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold">{item.title}</h3>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {item.description}
          </p>

          <ul className="space-y-3 mb-6">
            {item.principles.map((principle, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 mt-1 h-5 w-5 text-emerald-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  {principle}
                </span>
              </li>
            ))}
          </ul>

          {item.description2 && (
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {item.description2}
            </p>
          )}

          {item.principe && (
            <ul className="space-y-3">
              {item.principe.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1 h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700 dark:text-gray-300">{p}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* Nos objectifs */}
      <section className="py-28 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                NOTRE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-300 drop-shadow-lg">
              PROMESSE
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
             Un cabinet de conseil à taille humaine, avec l’exigence des grands.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
            {[
              {
                icon: <ShieldCheck className="h-10 w-10 text-emerald-500" />,
                title: "Nous combinons :",
                 description:
                  "Chaque mission est menée avec transparence, exigence et sens du service.",
                principles: [
                 "la rigueur des cabinets internationaux",
                 	"la proximité d’une équipe engagée",
                  "la compréhension des réalités africaines et européennes",
                 "une exécution rapide et orientée résultats",

                ],
              }
              
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-emerald-100 dark:bg-emerald-900/20 rounded-xl">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.principles.map((principle, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="flex-shrink-0 mt-1 h-5 w-5 text-emerald-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {principle}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-28 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-300 drop-shadow-lg">
              POURQUOI NOUS CHOISIR ?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
             Une approche unique, pensée pour les organisations en croissance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          
            {/* []
            .map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              > */}
              <div className=" items-center gap-4 mb-6 max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                <div className="flex items-center  mb-6">
                 <CheckCircle className="flex-shrink-0 mt-1 h-5 w-5 text-black" />
                  <h3 className="text-2xl font-bold"> Clarté</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                 Nous simplifions ce qui est complexe et donnons une direction claire.
                </p>
                 <div className="flex items-center gap-4 mb-6">
                 <CheckCircle className="flex-shrink-0 mt-1 h-5 w-5 text-black" />
                  <h3 className="text-2xl font-bold"> Rigueur</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                Nous appliquons les standards des cabinets internationaux.
                </p>
                 <div className="flex items-center gap-4 mb-6">
                 <CheckCircle className="flex-shrink-0 mt-1 h-5 w-5 text-black" />
                  <h3 className="text-2xl font-bold"> Proximité</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                Nous travaillons avec vous, pas au-dessus de vous.
                </p>
               
               <div className="flex items-center gap-4 mb-6">
                 <CheckCircle className="flex-shrink-0 mt-1 h-5 w-5 text-black" />
                  <h3 className="text-2xl font-bold"> Exécution</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
               Nous livrons des résultats concrets, pas seulement des recommandations.
                </p>
                 <div className="flex items-center gap-4 mb-6">
                 <CheckCircle className="flex-shrink-0 mt-1 h-5 w-5 text-black" />
                  <h3 className="text-2xl font-bold text-black">Agilité</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
               Nous nous adaptons à votre réalité, vos ressources et vos priorités.
                </p>
               </div>
              {/* </motion.div>
            )) */}
          </div>
        </div>
        </section>
      {/* 🤝 Notre domaine d'expertise */}
      <section className="py-28 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Nos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-300 drop-shadow-lg">
              DOMAINES D’EXPERTISE
              </span>
            </h2>
            {/* <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ce que nous faisons chaque jour pour concrétiser les ambitions de
              nos partenaires
            </p> */}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <UserCheck className="h-10 w-10 text-emerald-500" />,
                title: "Conseil stratégique & organisationnel",
                description:
                  "",
                principles: [
                  "Vision & plan stratégique",
"Structuration d’entreprise",
"Processus & gouvernance",
"Performance & pilotage",
"Accompagnement du changement",

                ],
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-emerald-500" />,
                title: "Digital & développement web",
                description:
                  "",
                principles: [
                 "Sites vitrines",
                 "Sites e commerce",
"Développement sur mesure",

"Optimisation & maintenance",
"Audit digital",

                ],
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
                title: "Communication & identité visuelle",
                description: "",
                principles: [
                  "Stratégie de communication",
"Création de contenus",
"Identité visuelle",
"Gestion des réseaux sociaux",
"Campagnes digitales",


                ],
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
                title: "Accompagnement opérationnel",
                description: "",
                principles: [
                  "	Mise en œuvre de projets",
"	Tableaux de bord",
"Reporting",
"Support aux équipes",
"Suivi opérationnel",



                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-emerald-100 dark:bg-emerald-900/20 rounded-xl">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.principles.map((principle, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="flex-shrink-0 mt-1 h-5 w-5 text-emerald-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {principle}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          
        </div>
      </section>

<section className="py-28 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                NOS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-300 drop-shadow-lg">
               RÉALISATIONS
              </span>
            </h2>
            
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
            {[
              {
                icon: <ShieldCheck className="h-10 w-10 text-emerald-500" />,
                title: ",",
                 description:
                  "Des projets concrets, des résultats mesurables Projet NARAF ",
                principles: [
                 " Conception du site web officiel",
"Analyse des besoins",
"Design & développement",
"Mise en ligne",
"	Accompagnement post lancement",

                ],
              }
              
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-emerald-100 dark:bg-emerald-900/20 rounded-xl">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.principles.map((principle, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="flex-shrink-0 mt-1 h-5 w-5 text-emerald-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {principle}
                      </span>
                    </li>
                    
                  ))}
                </ul>

              </motion.div>
            
            ))}
           
          </div>
          <motion.div
            className="mt-16 max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 dark:text-gray-300 text-center text-lg leading-relaxed italic">
              "KOF GO CONSULTING accompagne les PME, associations, entrepreneurs et institutions en Afrique et en Europe dans leurs projets de transformation, de structuration et de digitalisation."<br/>
<strong>Clarté, Rigueur, Exécution.</strong>

            </p>
          </motion.div>
        </div>

      </section>
      
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto relative overflow-hidden">
        {/* Message du Directeur Général */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
        >
          {/* Image du Directeur */}
          <div className="flex-shrink-0">
            <img
              src="/dgkoffi.png" // remplace par le chemin réel
              alt="Directeur Général"
              className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-emerald-500"
            />
          </div>

          {/* Texte et signature */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
              Message du Directeur Général
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              "Chez <strong>KOF-GO CONSULTING</strong>, nous croyons que
              l'excellence est un voyage, pas une destination. Depuis notre
              création, nous nous sommes engagés à transformer les défis de nos
              clients en opportunités durables. Merci pour votre confiance
              constante."
            </p>
            <div className="mt-4">
              <p className="text-lg font-medium text-emerald-600 dark:text-emerald-400">
                KONAN KOFFI
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                Directeur Général
              </p>
              {/* Image de signature */}
              <div className="mt-2">
                <img
                  src="/signature1.png"
                  alt="Signature de KONAN KOFFI"
                  className="mx-auto md:mx-0 h-16 w-auto opacity-90"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Impact */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center drop-shadow-lg">
          Impact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-300 drop-shadow-lg">
            en Chiffres
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
          Des résultats concrets
        </p>
        <br />
        <br />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image section */}
          <motion.div
            className="relative h-[500px] rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Impact KofGo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/80 flex flex-col justify-end p-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Notre Impact en Chiffres
              </h3>
              <p className="text-gray-300 max-w-lg">
                Des résultats concrets qui témoignent de notre engagement auprès
                de nos clients
              </p>
            </div>
          </motion.div>

          {/* Stats section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-3xl font-bold">
                        {inView ? (
                          <>
                            <CountUp end={stat.value} duration={2} />
                            {stat.suffix || ""}
                          </>
                        ) : (
                          `0${stat.suffix || ""}`
                        )}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RSE Engagement */}
            <div className="mt-12 bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-xl border border-emerald-100 dark:border-emerald-900/20">
              <h4 className="font-bold text-lg mb-3">Notre engagement RSE</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Chez KofGo, nous croyons en une croissance inclusive et durable.
                5% de nos bénéfices sont réinvestis dans des programmes de
                formation pour jeunes entrepreneurs africains.
              </p>
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
              >
                Découvrir nos initiatives
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-28 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Rencontrez{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-300 drop-shadow-lg">
                Notre Équipe
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Des experts passionnés, dédiés à votre réussite
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Konan KOFFI",
                role: "Directeur Général – Cofondateur",
                bio: "Titulaire de diplômes d'ingénieur en QSE (Qualité, Sécurité et Environnement) à CESI et d'un Mastère en management de direction opérationnelle à ENM Normandie, Innocent KOFFI incarne un leadership structuré, orienté résultats et ancré dans les réalités du terrain. Fort d'expériences en gestion de projet, conseil stratégique, QSE et accompagnement opérationnel, il intervient aujourd'hui à la tête de KOF-GO CONSULTING, où il pilote la vision globale, la stratégie de développement et la coordination des projets d'envergure. Son approche est à la fois rigoureuse, humaine et tournée vers la performance durable.",
                photo: "/dgkoffi.png",
                linkedin: "https://www.linkedin.com/in/innocent-koffi/",
              },
              {
                name: "Richard TAGO",
                role: "Directeur Général Adjoint – KOF-GO CONSULTING",
                bio: "Expert en Comptabilité, Finance d'Entreprise et Contrôle de Gestion Professionnel aguerri de la finance, Richard TAGO incarne l'alliance entre rigueur comptable, vision stratégique et excellence opérationnelle.",
                photo:
                  "/richard.jpg",
                linkedin:
                  "https://www.linkedin.com/in/richard-tago-85ab9015b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              },
              {
                name: "Suzanne KOFFI",
                role: "Digital Marketer & Graphic Designer",
                bio: "Experte en marketing digital et en design, elle garantit la cohérence de notre communication visuelle et de nos contenus. Elle conçoit l'ensemble de nos supports graphiques, pilote notre présence sur les réseaux sociaux, et veille à renforcer une identité de marque forte, impactante et alignée avec notre stratégie globale.",
                photo:
                  "/suzanne.jpg",
                linkedin:
                  "https://www.linkedin.com/in/suzanne-badou-koffi-3399231a7/",
              },
              {
                name: "Cedrick KONATE",
                role: "Developpeur Full stack",
                bio: "Développeur Full Stack passionné avec 3 ans d’expérience dans la conception et le développement d’applications web performantes. Il maîtrise aussi bien le frontend que le backend, ce qui lui permet de gérer des projets de bout en bout, de l’interface utilisateur à l’architecture serveur. Curieux et rigoureux, il met un point d’honneur à proposer des solutions efficaces, évolutives et centrées sur l’utilisateur.",
                photo:
                  "/cedrick.JPG",
                linkedin:
                  "https://www.linkedin.com/in/kouakou-cedrick-konate-956159280/",
              },
            ].map((member, index) => {
              const [isExpanded, setIsExpanded] = useState(false);
              const bioRef = useRef(null);
              const [needsExpand, setNeedsExpand] = useState(false);

              useEffect(() => {
                if (bioRef.current) {
                  setNeedsExpand(
                    bioRef.current.scrollHeight > bioRef.current.clientHeight
                  );
                }
              }, []);

              return (
                <motion.div
                  key={index}
                  className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 h-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="h-64 w-full overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-emerald-600 dark:text-emerald-400 mb-3">
                        {member.role}
                      </p>
                      <div
                        ref={bioRef}
                        className={`text-gray-600 dark:text-gray-300 mb-4 ${
                          !isExpanded ? "line-clamp-5" : ""
                        }`}
                      >
                        {member.bio}
                      </div>
                    </div>

                    <div className="mt-auto space-y-3">
                      {needsExpand && (
                        <button
                          onClick={() => setIsExpanded(!isExpanded)}
                          className="text-emerald-600 dark:text-emerald-400 text-sm font-medium hover:underline"
                        >
                          {isExpanded ? "Voir moins" : "Voir plus"}
                        </button>
                      )}

                      <Button
                        onClick={() => window.open(member.linkedin, "_blank")}
                        variant="outline"
                        className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                      >
                        Voir le profil
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 px-8 text-center">
        <div className="absolute inset-0 bg-[url('/construction-cta.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-emerald-900/90"></div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Prêt à concrétiser{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 drop-shadow-lg">
              votre vision
            </span>{" "}
            ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est à votre disposition pour discuter de
            votre projet et vous proposer des solutions sur-mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
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
              }}
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-500"
            >
              Contactez-nous
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                // 1. Naviguer vers la page
                navigate("/startup#HomeStartup");

                // 2. Scroll vers la section avec décalage
                setTimeout(() => {
                  const element = document.getElementById("HomeStartup");
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
              className="text-black border-white hover:bg-white/10 hover:text-white"
            >
              Explorer notre espace Start-up
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
