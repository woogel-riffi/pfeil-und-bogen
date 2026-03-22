import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Verein from "./pages/Verein";
import Training from "./pages/Training";
import Partyraum from "./pages/Partyraum";
import Preise from "./pages/Preise";
import Kalender from "./pages/Kalender";
import UeberUns from "./pages/UeberUns";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/verein" element={<Verein />} />
            <Route path="/training" element={<Training />} />
            <Route path="/partyraum" element={<Partyraum />} />
            <Route path="/preise" element={<Preise />} />
            <Route path="/kalender" element={<Kalender />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;