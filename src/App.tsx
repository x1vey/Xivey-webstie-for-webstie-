import { useEffect, useState } from "react";
import Lenis from "lenis";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Examples from "./pages/Examples.tsx";
import NotFound from "./pages/NotFound.tsx";
import Preloader from "./components/Preloader.tsx";

const queryClient = new QueryClient();

const App = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ready) return;
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, [ready]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Preloader onComplete={() => setReady(true)} />
        {ready && (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/examples" element={<Examples />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
