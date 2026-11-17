import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Produto from "./pages/Produto";
import Beneficios from "./pages/Beneficios";
import ComoFunciona from "./pages/ComoFunciona";
import PorQueSWI from "./pages/PorQueSWI";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produto" element={<Produto />} />
          <Route path="/beneficios" element={<Beneficios />} />
          <Route path="/funcionamento" element={<ComoFunciona />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/cool-flame" element={<PorQueSWI />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/depoimentos" element={<Index />} />
          <Route path="/contato" element={<Contato />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
