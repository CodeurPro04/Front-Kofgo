import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  TrendingUp,
  Users,
  Globe,
  Briefcase,
} from "lucide-react";

import ContactSection from "@/components/ContactSection";
import BlogHero from "@/components/BlogHero";

const BlogPage = () => {
  return (
    <>
      {/* HERO */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <BlogHero />
      </section>

      {/* ARTICLES */}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-300">
                DERNIERS ARTICLES
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Une sélection d’analyses, de retours d’expérience et de points de vue pour éclairer vos décisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                image:
                  "https://th.bing.com/th/id/OIP.dg0QOCoPwBSMLEsgIZb77AHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
                title:
                  "Le télétravail : entre promesse d’équilibre et réalité organisationnelle",
                description:
                  "Comment les entreprises peuvent structurer un modèle hybride performant et durable.",
                excerpt: "Petit extrait...",
              },
              {
                id: 2,
                image: "https://tse3.mm.bing.net/th/id/OIP.-Iht2ji2x4MxqEHhHJk_3AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
                title: "Les tendances incontournables du développement web en 2025",
                description: "Les technologies qui redéfinissent la performance digitale.",
                excerpt: "Petit extrait...",
              },
              {
                id: 3,
                image:
                  "https://img.freepik.com/photos-premium/photo-grand-angle-reunion-affaires-qui-se-deroule-dans-bureau-moderne-aux-parois-verre_891336-41156.jpg",
                title:
                  "Forum International sur le Financement - Notre participation",
                description:
                  "Retour sur deux jours d’échanges stratégiques autour de l’innovation et du financement",
                excerpt: "Petit extrait...",
              },
            ].map((item) => (
              <motion.div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                {/* IMAGE SAFE */}
                <div className="w-full h-60 rounded-md overflow-hidden mb-4">
                  <img
                    src={
                      item.image ||
                      "https://via.placeholder.com/600x400?text=Image+indisponible"
                    }
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>

                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {item.description}
                </p>

                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {item.excerpt}
                </p>

                <button className="text-emerald-500 hover:underline">
                  Lire l'article
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-28 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-300">
                CATEGORIES
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Pour naviguer facilement dans nos analyses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {[
              { title: "Stratégie & Transformation", icon: <Target size={28} /> },
              { title: "Digital & Innovation", icon: <Lightbulb size={28} /> },
              { title: "Finance & Performance", icon: <TrendingUp size={28} /> },
              { title: "Leadership & Organisation", icon: <Users size={28} /> },
              { title: "Afrique & Diaspora Business", icon: <Globe size={28} /> },
              { title: "Conseil & Management", icon: <Briefcase size={28} /> },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#F5F6F7] dark:bg-gray-800 rounded-2xl aspect-square flex flex-col items-center justify-center text-center p-2 cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
              
                <div className="text-emerald-500 mb-2">{item.icon}</div>
                <h3 className="text-sm md:text-base font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
               
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-28 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Les{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-300">
             Ressources recommandées
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Des contenus sélectionnés pour approfondir vos réflexions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Guides pratiques" },
              { title: "	Études sectorielles"},
              { title: "	Retours d’expérience" },
              { title: "	Notes d’analyse"},
              
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#F5F6F7] dark:bg-gray-800 rounded-xl text-emerald-500  items-center justify-center text-center p-2 cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
              
                <h3 className="text-sm md:text-base font-semibold  dark:text-white">
                  {item.title}
                </h3>
               
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default BlogPage;