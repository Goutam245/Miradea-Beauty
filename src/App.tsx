import { Suspense, lazy, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";

const Haarentfernung = lazy(() => import("./pages/Haarentfernung"));
const Bodyforming = lazy(() => import("./pages/Bodyforming"));
const Beckenbodentraining = lazy(() => import("./pages/Beckenbodentraining"));
const Preise = lazy(() => import("./pages/Preise"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/haarentfernung" element={<Haarentfernung />} />
            <Route path="/bodyforming" element={<Bodyforming />} />
            <Route path="/beckenbodentraining" element={<Beckenbodentraining />} />
            <Route path="/preise" element={<Preise />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<LegalPage title="Impressum" />} />
            <Route path="/datenschutz" element={<LegalPage title="Datenschutzerklärung" />} />
            <Route path="/agb" element={<LegalPage title="Allgemeine Geschäftsbedingungen" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
