import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Portfolio } from "@/pages/Portfolio";

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center">
        <div className="text-8xl font-black mb-4" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)", color: "transparent" }}>404</div>
        <p className="text-white/40 text-sm tracking-[0.2em] uppercase">Page Not Found</p>
        <a href="/" className="mt-8 inline-block text-white/60 hover:text-white text-xs tracking-[0.15em] uppercase border border-white/20 px-6 py-3 transition-colors">
          Return Home
        </a>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base="">
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
