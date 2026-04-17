import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteContentProvider } from "@/contexts/SiteContentContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Programs from "./pages/Programs.tsx";
import Donate from "./pages/Donate.tsx";
import GetInvolved from "./pages/GetInvolved.tsx";
import News from "./pages/News.tsx";
import NewsArticle from "./pages/NewsArticle.tsx";
import Contact from "./pages/Contact.tsx";
import Gallery from "./pages/Gallery.tsx";
import FAQPage from "./pages/FAQ.tsx";
import Events from "./pages/Events.tsx";
import Careers from "./pages/Careers.tsx";
import Terms from "./pages/Terms.tsx";
import Privacy from "./pages/Privacy.tsx";
import NotFound from "./pages/NotFound.tsx";
import AdminLogin from "./pages/admin/AdminLogin.tsx";
import AdminLayout from "./pages/admin/AdminLayout.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";
import AdminGlobalSettings from "./pages/admin/AdminGlobalSettings.tsx";
import AdminHomePage from "./pages/admin/AdminHomePage.tsx";
import AdminAboutPage from "./pages/admin/AdminAboutPage.tsx";
import AdminProgramsPage from "./pages/admin/AdminProgramsPage.tsx";
import AdminGalleryPage from "./pages/admin/AdminGalleryPage.tsx";
import AdminContactPage from "./pages/admin/AdminContactPage.tsx";
import AdminDonatePage from "./pages/admin/AdminDonatePage.tsx";
import AdminGetInvolvedPage from "./pages/admin/AdminGetInvolvedPage.tsx";
import AdminNewsPage from "./pages/admin/AdminNewsPage.tsx";
import AdminFAQPage from "./pages/admin/AdminFAQPage.tsx";
import AdminEventsPage from "./pages/admin/AdminEventsPage.tsx";
import AdminCareersPage from "./pages/admin/AdminCareersPage.tsx";
import AdminTermsPage from "./pages/admin/AdminTermsPage.tsx";
import AdminPrivacyPage from "./pages/admin/AdminPrivacyPage.tsx";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="global" element={<AdminGlobalSettings />} />
          <Route path="home" element={<AdminHomePage />} />
          <Route path="about" element={<AdminAboutPage />} />
          <Route path="programs" element={<AdminProgramsPage />} />
          <Route path="gallery" element={<AdminGalleryPage />} />
          <Route path="contact" element={<AdminContactPage />} />
          <Route path="donate" element={<AdminDonatePage />} />
          <Route path="get-involved" element={<AdminGetInvolvedPage />} />
          <Route path="news" element={<AdminNewsPage />} />
          <Route path="faq" element={<AdminFAQPage />} />
          <Route path="events" element={<AdminEventsPage />} />
          <Route path="careers" element={<AdminCareersPage />} />
          <Route path="terms" element={<AdminTermsPage />} />
          <Route path="privacy" element={<AdminPrivacyPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SiteContentProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </SiteContentProvider>
  </QueryClientProvider>
);

export default App;
