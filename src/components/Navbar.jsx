import React from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Briefcase,
  Globe,
  Home,
  Info,
  Settings,
  Trophy,
  Rocket,
  Newspaper,
  Mail,
  Package,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ scrollToSection }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
  {
    path: "/",
    labelKey: "nav.home",
    icon: <Home className="w-5 h-5 mr-2" />,
  },
  {
    path: "/about",
    labelKey: "nav.about",
    icon: <Info className="w-5 h-5 mr-2" />,
  },
  {
    path: "/services",
    labelKey: "nav.services",
    icon: <Settings className="w-5 h-5 mr-2" />,
  },
  {
    path: "/realisations",
    labelKey: "nav.achievements",
    icon: <Trophy className="w-5 h-5 mr-2" />,
  },
  {
    path: "/offres",
    labelKey: "Offre",
    icon: <Package className="w-5 h-5 mr-2" />,
  },
  {
    path: "/startup",
    labelKey: "nav.startup",
    icon: <Rocket className="w-5 h-5 mr-2" />,
  },
  {
    path: "/blog",
    labelKey: "nav.blog",
    icon: <Newspaper className="w-5 h-5 mr-2" />,
  },
  {
    path: "/contact",
    labelKey: "nav.contact",
    icon: <Mail className="w-5 h-5 mr-2" />,
  },
  {
    path: "/inscription",
    labelKey: "nav.inscription", 
    icon: <GraduationCap className="w-5 h-5 mr-2" />, 
  },
];


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-lg border-b border-black/10 dark:border-white/10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center space-x-3"
          >
            <div className="w-24 h-24 flex items-center justify-center">
              <img
                src="/kofgologo.png"
                alt="KofGo Logo"
                className="w-20 h-20 object-contain"
              />
            </div>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Button
                  key={link.path}
                  variant="ghost"
                  onClick={() => navigate(link.path)}
                  className={`transition-all duration-300 px-3 py-2 rounded-lg text-sm font-medium flex items-center
                  ${
                    isActive
                      ? "text-white dark:text-green-400 font-bold bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 dark:bg-green-900/20"
                      : "text-black dark:text-white hover:text-black dark:hover:text-green-400 hover:bg-green-100/40 dark:hover:bg-green-900/20"
                  }`}
                >
                  {link.icon}
                  {t(link.labelKey)}
                </Button>
              );
            })}
            <div className="ml-4 flex items-center space-x-1">
              <Button
                variant={i18n.language === "fr" ? "default" : "ghost"}
                size="sm"
                onClick={() => changeLanguage("fr")}
                className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold ${
                  i18n.language === "fr"
                    ? "bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-white"
                    : "text-black dark:text-white hover:bg-green-100/40 dark:hover:bg-green-900/20"
                }`}
              >
                <img src="/flags/fr.png" alt="Français" className="w-4 h-4" />
                FR
              </Button>

              <Button
                variant={i18n.language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => changeLanguage("en")}
                className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold ${
                  i18n.language === "en"
                    ? "bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-white"
                    : "text-black dark:text-white hover:bg-green-100/40 dark:hover:bg-green-900/20"
                }`}
              >
                <img src="/flags/eng.png" alt="English" className="w-4 h-4" />
                EN
              </Button>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-black dark:text-white hover:text-green-700 dark:hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600 rounded-md"
            aria-label={t("nav.openMenu")}
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden bg-white dark:bg-black border-t border-black/10 dark:border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Button
                  key={link.path}
                  variant="ghost"
                  onClick={() => {
                    navigate(link.path);
                    setIsMenuOpen(false);
                  }}
                  className={`transition-all duration-300 px-3 py-2 rounded-lg text-sm font-medium flex items-center
                  ${
                    isActive
                      ? "text-white dark:text-green-400 font-bold bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 dark:bg-green-900/20"
                      : "text-black dark:text-white hover:text-black dark:hover:text-green-400 hover:bg-green-100/40 dark:hover:bg-green-900/20"
                  }`}
                >
                  {link.icon}
                  {t(link.labelKey)}
                </Button>
              );
            })}

            <div className="pt-4 pb-2 px-3 border-t border-black/10 dark:border-white/10">
              <p className="text-sm font-medium text-black dark:text-white mb-2 flex items-center">
                <Globe size={16} className="mr-2" />
                {t("nav.language")}
              </p>
              <div className="flex space-x-2">
                <Button
                  variant={i18n.language === "fr" ? "default" : "ghost"}
                  onClick={() => changeLanguage("fr")}
                  className={`w-full flex items-center gap-2 font-semibold ${
                    i18n.language === "fr"
                      ? "bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-white"
                      : "text-black dark:text-white hover:bg-green-100/40 dark:hover:bg-green-900/20"
                  }`}
                >
                  <img src="/flags/fr.png" alt="Français" className="w-4 h-4" />
                  Français
                </Button>

                <Button
                  variant={i18n.language === "en" ? "default" : "ghost"}
                  onClick={() => changeLanguage("en")}
                  className={`w-full flex items-center gap-2 font-semibold ${
                    i18n.language === "en"
                      ? "bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-white"
                      : "text-black dark:text-white hover:bg-green-100/40 dark:hover:bg-green-900/20"
                  }`}
                >
                  <img src="/flags/eng.png" alt="English" className="w-4 h-4" />
                  English
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
