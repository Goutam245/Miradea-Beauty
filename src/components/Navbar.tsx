import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const treatments = [
  { label: "Dauerhafte Haarentfernung", path: "/haarentfernung" },
  { label: "Bodyforming", path: "/bodyforming" },
  { label: "Beckenbodentraining", path: "/beckenbodentraining" },
];

const navLinks = [
  { label: "Startseite", path: "/" },
  { label: "Preise", path: "/preise" },
  { label: "FAQ", path: "/faq" },
  { label: "Kontakt", path: "/kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/95 backdrop-blur-xl shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col items-start">
            <span className="font-display text-2xl font-bold tracking-wide text-foreground">MIRADEA</span>
            <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-primary -mt-1">Beauty</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="font-heading text-sm tracking-wide text-foreground hover:text-primary transition-colors">
              Startseite
            </Link>

            <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button className="font-heading text-sm tracking-wide text-foreground hover:text-primary transition-colors flex items-center gap-1">
                Behandlungen <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 mt-2 w-64 glass-card rounded-lg p-2"
                  >
                    {treatments.map((t) => (
                      <Link
                        key={t.path}
                        to={t.path}
                        className="block px-4 py-3 rounded-md text-sm font-heading text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        {t.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {["Preise", "FAQ", "Kontakt"].map((label) => (
              <Link
                key={label}
                to={`/${label.toLowerCase()}`}
                className="font-heading text-sm tracking-wide text-foreground hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}

            <Link
              to="/kontakt"
              className="gold-gradient text-primary-foreground font-heading text-sm font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Termin anfragen →
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-foreground p-2">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6 pt-20"
          >
            {navLinks.map((link, i) => (
              <motion.div key={link.path} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                <Link to={link.path} className="font-display text-3xl text-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="gold-divider w-32 my-2" />
            {treatments.map((t, i) => (
              <motion.div key={t.path} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (navLinks.length + i) * 0.08 }}>
                <Link to={t.path} className="font-heading text-lg text-muted-foreground hover:text-primary transition-colors">
                  {t.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <Link to="/kontakt" className="gold-gradient text-primary-foreground font-heading text-sm font-semibold px-8 py-3 rounded-full mt-4 inline-block">
                Termin anfragen →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
