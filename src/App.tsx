import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CrazyCursorEnhanced } from "@/components/CrazyCursorEnhanced";

/* Lazy load pages for code splitting */
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Services2 = lazy(() => import("./pages/Services2"));
const Blogs = lazy(() => import("./pages/Blogs"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

/* Loading component for Suspense fallback */
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#050505]">
    <div className="relative">
      <div className="w-12 h-12 rounded-full border-2 border-white/20 border-t-orange-500 animate-spin"></div>
      <div className="absolute inset-0 w-12 h-12 rounded-full bg-orange-500/10 blur-xl animate-pulse"></div>
    </div>
  </div>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Custom Crazy Cursor */}
        <CrazyCursorEnhanced />

        {/* Toast & Notifications */}
        <Toaster />
        <Sonner />

        {/* Router */}
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>

              {/* Main Pages */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services2" element={<Services2 />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/case-study" element={<CaseStudy />} />
              <Route path="/contact" element={<Contact />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
