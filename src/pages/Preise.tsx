import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, MessageCircle, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PackageCalculator from "@/components/PackageCalculator";

const prices = [
  ["Oberlippe", "39€"], ["Kinn", "35€"], ["Wangen", "35€"], ["Gesicht komplett", "80€"],
  ["Hals", "45€"], ["Nacken", "40€"], ["Koteletten", "40€"], ["Dekolleté", "60€"],
  ["Brust", "60€"], ["Achseln", "55€"], ["Oberarme", "45€"], ["Unterarme", "50€"],
  ["Arme komplett", "80€"], ["Bauch", "60€"], ["Bikinizone", "50€"], ["Intim", "70€"],
  ["Intim & Bikinizone", "100€"], ["Po", "40€"], ["Oberschenkel", "90€"],
  ["Unterschenkel", "90€"], ["Beine komplett", "160€"], ["Kleine Zonen 5×5cm²", "60€"],
];

const packages = [
  { name: "Sun-Paket", zones: "Unterschenkel, Intim, Bikinizone und Achseln", original: "246€", price: "175€" },
  { name: "Velvet-Paket", zones: "Beine komplett, Intim, Bikinizone, Po und Achseln", original: "355€", price: "220€" },
  { name: "Silk-Paket", zones: "Beine komplett, Arme komplett, Intim, Bikinizone, Po und Achseln", original: "405€", price: "270€" },
  { name: "Soft-Paket", zones: "Ganzkörper – Schultern bis Füße ohne Gesicht & Hals", original: "", price: "330€" },
];

export default function Preise() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1400&h=600&fit=crop" alt="Klinik Interieur" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center pt-24">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            Laser Haarentfernung – Kosten & Pakete
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Spürbar wirksam & hautschonend. Gratis Test-Shot & ehrliche Beratung – ohne Wischtechnik, mit präziser Spot-Arbeitsweise.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/436606340939" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-heading font-semibold px-6 py-3 rounded-full transition-colors">
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a href="tel:+436606340939"
              className="flex items-center justify-center gap-2 border border-primary/40 text-primary font-heading font-semibold px-6 py-3 rounded-full hover:bg-primary/5 transition-colors">
              <Phone size={18} /> Anrufen
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Star size={14} className="text-primary fill-primary" /> 5/5 Google Bewertungen</span>
            <span>Sichtbare Ergebnisse ab der 1.–2. Sitzung</span>
            <span>Kostenloser Probeshot</span>
          </motion.div>
        </div>
      </section>

      {/* PRICE TABLE — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title="Preisliste – Frauen" subtitle="Alle Preise pro Einzelsitzung" dark={false} />
          <div className="max-w-2xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="gold-gradient px-6 py-3 flex justify-between font-heading text-sm font-semibold text-primary-foreground">
              <span>Zone</span><span>Preis</span>
            </div>
            {prices.map(([zone, price], i) => (
              <div key={i} className={`px-6 py-3 flex justify-between text-sm ${i % 2 === 0 ? "bg-white" : "bg-cream"}`}>
                <span className="text-cream-foreground">{zone}</span>
                <span className="text-primary font-semibold">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES — DARK */}
      <section className="py-24 bg-background noise-overlay">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Preisvorteilspakete" subtitle="Spare mit unseren vordefinierten Paketen" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 border border-primary/20 gold-glow-hover transition-all hover:-translate-y-1">
                <h4 className="font-heading text-sm font-semibold text-primary mb-2">{pkg.name}</h4>
                <p className="text-xs text-muted-foreground mb-4">{pkg.zones}</p>
                <div className="flex items-baseline gap-3">
                  {pkg.original && <span className="text-sm text-muted-foreground line-through">{pkg.original}</span>}
                  <span className="font-display text-2xl font-bold text-primary">{pkg.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title="Individueller Paket-Rechner" subtitle="Wähle deine Zonen aus. Dein persönlicher Paketpreis wird erst danach berechnet." dark={false} />
          <PackageCalculator variant="cream" />
        </div>
      </section>

      {/* CTA — DARK */}
      <section className="py-24 bg-background noise-overlay">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <SectionHeading title="Bereit für deine Behandlung?" subtitle="Sichere dir jetzt deinen kostenlosen Test-Shot." />
          <Link to="/kontakt" className="gold-gradient text-primary-foreground font-heading font-semibold px-10 py-4 rounded-full hover:opacity-90 transition-all inline-flex items-center gap-2 gold-glow">
            <ArrowRight size={18} /> Termin anfragen
          </Link>
        </div>
      </section>
    </main>
  );
}
