import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { useTranslation } from "react-i18next";

// Pages
import HomePage from "@/pages/HomePage";
import AboutCompany from "@/components/AboutCompany";
import ServicesPage from "@/pages/ServicesPage";
import RealisationsPage from "@/pages/RealisationsPage";
import StartupPage from "@/pages/StartupPage";
import BlogPage from "@/pages/BlogPage";
import BlogDetailPage from "@/pages/BlogDetailPage";
import ContactPage from "@/pages/ContactPage";
import AdminPage from "@/pages/AdminPage";

function Layout({ children }) {
  const location = useLocation();
  const hideNavFooter = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <main className="min-h-screen bg-background text-foreground scroll-smooth flex flex-col flex-grow">
        {children}
      </main>
      {!hideNavFooter && <Footer />}
      <Chatbot />
      <Toaster />
    </>
  );
}

// Route protégée avec hash
function AdminProtectedRoute({ component: Component }) {
  const { hash } = useParams();
  const validHash = import.meta.env.VITE_ADMIN_HASH;

  if (hash !== validHash) {
    return <Navigate to="/" replace />;
  }

  return <Component />;
}

function App() {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Routes publiques */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutCompany />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/realisations" element={<RealisationsPage />} />
          <Route path="/startup" element={<StartupPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Routes admin AVEC HASH obligatoire */}
          <Route path="/admin/:hash" element={<AdminProtectedRoute component={AdminPage} />} />

          {/* Redirection des routes inconnues */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
