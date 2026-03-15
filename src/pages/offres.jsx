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
  TrendingUp,
 UserCheck,
  Lightbulb ,
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
      
{/* section strategie  */}

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
             
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-300 drop-shadow-lg">
            CONSEIL ET TRANSFORMATION<br/> STRATEGIQUE
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <UserCheck className="h-10 w-10 text-emerald-500" />,
                title: "Restructuration & transformation d'entreprise",
                description:
                  "restructurer avec méthode , restaurer la performence et sécuriser la croissance.",
                intervention: [
                 "Diagnostic stratégique 360°",
"Analyse organisationnelle",
"Plan de restructuration
détaillé",
"Réorganisation RH",
"Optimisation des processus",
"Pilotage opérationnel de la
transformation",
"Accompagnement 90 jours",

                ],
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-emerald-500" />,
                title: "Vision & Positionnement stratégique",
                description:
                  "clarifier la visions , les priorités et les axes de développement.",
                intervention: [
                 "Séminaire stratégique
dirigeant",
"Analyse marché &
concurrence",
"Définition des axes
stratégiques",
"Élaboration du plan
d’action annuel",
"Mise en place des
indicateurs clés (KPIs)",

                ],
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
                title: "optimisation organisionnelle & processus",
                description: "fluidifier l'organisation et renforcer l'éfficacité. ",
                intervention: [
             "Cartographie des
processus",
"Identification des
doublons et frictions",
"Redéfinition des rôles",
"Organigramme cible",
"Mise en place de rituels de
pilotage",


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
                  <strong>objectif :</strong>{item.description}
                </p>
                <ul className="space-y-3 text-gray-600">
                <strong > intervention:</strong>
                  {item.intervention.map((intervention, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="flex-shrink-0 mt-1 h-5 w-5 text-emerald-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                       {intervention}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          
        </div>
      </section>
{/* secction RESSOURCES
HUMAINES &
PERFORMANCE */}

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
             
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-300 drop-shadow-lg">
            RESSOURCES HUMAINES & PERFORMANCE

              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <UserCheck className="h-10 w-10 text-emerald-500" />,
                title: "Structuration des Rôles & Fiches de Poste.",
                description:
                  "clarifier les responsabilités et aligner les équipes sur la stratégie.",
                intervention: [
                 "Analyse des missions",
"Rédaction des fiches de
poste",
"Définition des
compétences clés",
"Alignement stratégique
des fonctions",
                ],
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-emerald-500" />,
                title: "Système d’Objectifs & Performance",
                description:
                  "installer une culture de
responsabilité et de résultats.",
                intervention: [
                 "Définition d’objectifs SMART",
"Mise en place des KPIs",
"Alignement individuel /
collectif",
"Suivi trimestriel structuré",

                ],
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
                title: "Structuration & Accompagnement RH",
                description: "professionnaliser la fonction RH. ",
                intervention: [
                "Formalisation des processus RH",
"Gestion des compétences",
"Mobilité interne",
"Gestion des conflits",
"Développement de la culture
d’entreprise",


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
                  <strong>objectif :</strong>{item.description}
                </p>
                <ul className="space-y-3 text-gray-600">
                <strong > intervention:</strong>
                  {item.intervention.map((intervention, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="flex-shrink-0 mt-1 h-5 w-5 text-emerald-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                       {intervention}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          
        </div>
      </section>
      
//       FORMATIONS PROFESSIONNELLES PREMIUM
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
             
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-300 drop-shadow-lg">
            FORMATIONS PROFESSIONNELLES PREMIUM


              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <UserCheck className="h-10 w-10 text-emerald-500" />,
                title: "Piloter une Restructuration d’Entreprise",
                description:"",
                  {/* "Formation phare du cabine", */}
                intervention: [
                "Diagnostic 360°",
"Élaboration d’un plan
de restructuration",
"Leadership en période
de crise",
"Réorganisation RH",
"Pilotage par indicateurs",
                ],
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-emerald-500" />,
                title: "Leadership
& Management",
                description:
                  "",
                intervention: [
                 "Leadership moderne",
"Communication managériale",
"Gestion des conflits",
"Motivation & engagement",
"Prise de décision stratégique",

                ],
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
                title: "Culture de Performance & Pilotage ",
                description: "",
                intervention: [
                "Objectifs & KPIs",
"Tableaux de bord",
"Rituels de pilotage",
"Feedback &
coaching
managérial",
                ],
              },
               {
                icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
                title: "Organisation & Gestion du Changement ",
                description: "",
                intervention: [
                "Cartographie des
processus",
"Optimisation
opérationnelle",
"Conduite du changement",
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
                <ul className="space-y-3 text-gray-600">
                <strong > intervention:</strong>
                  {item.intervention.map((intervention, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="flex-shrink-0 mt-1 h-5 w-5 text-emerald-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                       {intervention}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          
        </div>
      </section>

     {/* COMMUNICATION & IMAGE PROFESSIONNELLe */}
     
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
             
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-300 drop-shadow-lg">
         COMMUNICATION & IMAGE PROFESSIONNELLE

              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <UserCheck className="h-10 w-10 text-emerald-500" />,
                title: "Création de Site Web Professionnel",
                description:
                  "Renforcer la crédibilité digital.",
                intervention: [
                "Site vitrine professionnel",
"Pages services",
"Présentation équipe",
"Blog / actualités",
"SEO de base",
                ],
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-emerald-500" />,
                title: " Identité Visuelle & Branding",
                description:
                  "Renforcer la crédibilité digital",
                intervention: [
                 "Création de logo",
"Charte graphique",
"Templates professionnels",
"Supports de communication",

                ],
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
                title: "Communication Corporate & Outils Stratégique",
                description: " ",
                intervention: [
                "Définition des messages
clés",
"Pitch commercial",
"Présentations
professionnelles",
"Supports internes de
communication",


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
                <ul className="space-y-3 text-gray-600">
               
                  {item.intervention.map((intervention, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="flex-shrink-0 mt-1 h-5 w-5 text-emerald-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                       {intervention}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          
        </div>
      </section>
      {/* section offre premium */}
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
             
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-300 drop-shadow-lg">
         OFFRES PREMIUM DIRIGEANTS

              </span>
            </h2>
           
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <UserCheck className="h-10 w-10 text-emerald-500" />,
                title: "Accompagnement Dirigeant 90 Jours",
                
                intervention: [
                "Coaching stratégique",
"Priorisation des actions",
"Suivi hebdomadaire",
"Mise en place des
indicateurs",
"Résultats mesurables",
                ],
              },
              {/* continue */}
              {
                icon: <Lightbulb className="h-10 w-10 text-emerald-500" />,
                title: " Identité Visuelle & Branding",
                description:
                  "Renforcer la crédibilité digital",
                intervention: [
                 "Création de logo",
"Charte graphique",
"Templates professionnels",
"Supports de communication",

                ],
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
                title: "Communication Corporate & Outils Stratégique",
                description: " ",
                intervention: [
                "Définition des messages
clés",
"Pitch commercial",
"Présentations
professionnelles",
"Supports internes de
communication",


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
                
                <ul className="space-y-3 text-gray-600">
               
                  {item.intervention.map((intervention, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="flex-shrink-0 mt-1 h-5 w-5 text-emerald-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                       {intervention}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          
        </div>
      </section>
      </div>
  );
}

export default OFFRE;