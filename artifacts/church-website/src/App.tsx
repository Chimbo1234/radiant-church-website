import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import SermonDetail from "./pages/SermonDetail";
import Live from "./pages/Live";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Prayer from "./pages/Prayer";
import Giving from "./pages/Giving";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import History from "./pages/History";   // ← ADD THIS
import NotFound from "@/pages/not-found";
import Assemblies from "./pages/Assemblies";
import AssemblyDetail from "./pages/AssemblyDetail";



const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/sermons" component={Sermons} />
        <Route path="/sermons/:id" component={SermonDetail} />
        <Route path="/live" component={Live} />
        <Route path="/ministries" component={Ministries} />
        <Route path="/events" component={Events} />
        <Route path="/events/:id" component={EventDetail} />
        <Route path="/prayer" component={Prayer} />
        <Route path="/giving" component={Giving} />
        <Route path="/contact" component={Contact} />
        <Route path="/media" component={Media} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogDetail} />
        <Route path="/history" component={History} />  {/* ← ADD THIS */}
<Route path="/assemblies" component={Assemblies} />
<Route path="/assemblies/:slug" component={AssemblyDetail} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="radiant-theme">
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;