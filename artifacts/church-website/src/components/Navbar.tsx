import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sermons", label: "Sermons" },
  { href: "/events", label: "Events" },
  { href: "/ministries", label: "Ministries" },
  { href: "/live", label: "Live" },
  { href: "/history", label: "History" },
];

const LOGO_URL = "https://scontent.fluh1-2.fna.fbcdn.net/v/t39.30808-6/700708516_1426973766123852_2211573182973582220_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0zKRw9TKYoAQ7kNvwG9gZON&_nc_oc=Ado1ylTTZSDmOBXxZmda08wnaXTHvnoS-zifdXSwxATPJZdrK1KeB3E0eKEEQxNkaULdNr9TjLsDTMuIUhMftC6R&_nc_zt=23&_nc_ht=scontent.fluh1-2.fna&_nc_gid=TK2bfFYkOqE_R3Fvyg8_QA&_nc_ss=7b289&oh=00_Af-KpCwzG4cSd96GVS8rK1E6vUMnErqNWC1IMw0WgUaBVg&oe=6A26B2C2";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-border py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo + AFM text */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-border/40 flex-shrink-0">
                <img
                  src={LOGO_URL}
                  alt="AFM Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif text-2xl tracking-widest font-light text-foreground">
                AFM
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-sm tracking-widest uppercase transition-colors hover:text-primary cursor-pointer ${
                    location === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <div className="w-4 h-4 rounded-full bg-foreground" />
            </Button>
            <Link href="/giving">
              <Button
                variant="outline"
                className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background tracking-widest uppercase text-xs px-6"
              >
                Give
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col p-6 overflow-hidden"
          >
            {/* Header: logo + close — always visible */}
            <div className="flex items-center justify-between mb-8 flex-shrink-0">
              <Link href="/">
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-border/40 flex-shrink-0">
                    <img
                      src={LOGO_URL}
                      alt="AFM Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-serif text-2xl tracking-widest font-light text-foreground">
                    Apostolic Faith Mission In India
                  </span>
                </div>
              </Link>
              <button
                className="text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Scrollable nav links */}
            <nav className="flex flex-col gap-6 overflow-y-auto flex-1 pb-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="font-serif text-4xl text-foreground font-light tracking-wide cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="h-px bg-border my-4" />
              <Link href="/giving">
                <span
                  className="font-serif text-4xl text-primary font-light tracking-wide cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Giving
                </span>
              </Link>
              <Link href="/prayer">
                <span
                  className="font-serif text-4xl text-foreground font-light tracking-wide cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Prayer
                </span>
              </Link>
              <Link href="/contact">
                <span
                  className="font-serif text-4xl text-foreground font-light tracking-wide cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </span>
              </Link>
            </nav>

            {/* Theme toggle — always visible at bottom */}
            <div className="flex justify-between items-center pt-4 flex-shrink-0 border-t border-border">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-12 h-12 rounded-full border border-border"
              >
                <div className="w-4 h-4 rounded-full bg-foreground" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}