import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Pages */
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Services2 from "./pages/Services2";   // ✅ NEW PAGE
import Blogs from "./pages/Blogs";
import CaseStudy from "./pages/CaseStudy";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Toast & Notifications */}
        <Toaster />
        <Sonner />

        {/* Router */}
        <BrowserRouter>
          <Routes>

            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services2" element={<Services2 />} /> {/* ✅ NEW ROUTE */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/contact" element={<Contact />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
