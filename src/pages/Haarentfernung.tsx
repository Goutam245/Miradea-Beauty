import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Shield, Calendar, Heart, Users, MapPin, ArrowRight, Star, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GoldDivider from "@/components/GoldDivider";
import PackageCalculator from "@/components/PackageCalculator";
import FAQAccordion from "@/components/FAQAccordion";
import WhatsAppForm from "@/components/WhatsAppForm";
import { allFaqs } from "@/lib/faqData";

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

const features = [
  { icon: Zap, title: "Zertifizierte Premium-Technologie", desc: "808nm Non-Crystal Diodenlaser – Goldstandard." },
  { icon: Shield, title: "Qualität statt Masse", desc: "Individuell auf Haut & Haar abgestimmt." },
  { icon: Calendar, title: "Planbar & nachhaltig", desc: "Klare Kostenstruktur, realistische Erwartungen." },
  { icon: Heart, title: "Kostenlose Erstberatung", desc: "Wir besprechen deine individuellen Ziele." },
  { icon: Users, title: "Diskret & professionell", desc: "Höchster Komfort in angenehmer Atmosphäre." },
  { icon: MapPin, title: "Linz, Oberösterreich", desc: "Zentral gelegen, Parkplätze vor dem Gebäude." },
];

const processSteps = [
  { num: "01", title: "Kostenlose Erstberatung", desc: "Wir besprechen Hautzustand, Ziele und klären alle Fragen." },
  { num: "02", title: "Individuelle Einstellung", desc: "Parameter werden individuell auf Haut & Haar abgestimmt." },
  { num: "03", title: "Behandlung", desc: "In ruhiger Atmosphäre, präzise und diskret — Zone für Zone." },
  { num: "04", title: "Nachsorge & Plan", desc: "Empfohlene Abstände, Pflegehinweise, Begleitung bis zum Ergebnis." },
];

const beforeTips = [
  { title: "Intakte Haare & Haarwurzeln", desc: "Mindestens 3–4 Wochen vor der Behandlung nicht zupfen oder epilieren. Rasieren ist erlaubt – idealerweise am Tag vor der Sitzung." },
  { title: "Optimale Haarlänge", desc: "Kurze Haare ermöglichen dem Laser eine Energieübertragung zur Haarwurzel. Lange Haare reduzieren die Wirksamkeit des Lasers." },
  { title: "Hautvorbereitung", desc: "Die Haut sollte am Behandlungstag frei von Cremes, Deo oder Deodorant sein, um Irritationen zu vermeiden." },
];

const afterTips = [
  { title: "Haut beruhigen", desc: "Verwende 24–48 Stunden eine sanfte, beruhigende Pflege wie Aloe Vera oder Panthenol." },
  { title: "Sonne vermeiden", desc: "Begrenze direkte Sonnenbelastung 7–14 Tage vor und nach der Behandlung und verwende täglich UV-Schutz." },
  { title: "Haare fallen verzögert aus", desc: "Die Haare lösen sich 7–21 Tage nach der Behandlung von selbst – bitte nicht zupfen oder epilieren." },
];

export default function Haarentfernung() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1400&h=800&fit=crop" alt="Laser Haarentfernung" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center pt-24">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block font-heading text-xs uppercase tracking-[0.25em] text-primary border border-primary/30 rounded-full px-5 py-2 mb-6">
            ✦ 808nm Diodenlaser · Linz
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Weniger Haare. Mehr Freiheit!
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Spürbar wirksam ab der 1. Sitzung – präzise Spot-Arbeitsweise statt Wischtechnik.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="gold-gradient text-primary-foreground font-heading font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-all gold-glow">
              Jetzt kostenlose Erstberatung sichern
            </Link>
            <Link to="/preise" className="border border-primary/40 text-primary font-heading font-semibold px-8 py-3.5 rounded-full hover:bg-primary/5 transition-all">
              Preise ansehen
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mt-12 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Star size={14} className="text-primary fill-primary" /> 5/5 Google Bewertungen</span>
            <span>Kostenloser Probeshot</span>
            <span>Test-Shot inklusive</span>
          </motion.div>
        </div>
      </section>

      {/* VIDEO PLACEHOLDER — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title="Wie funktioniert die Laser-Haarentfernung?" dark={false} />
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video rounded-2xl border-2 border-primary/20 bg-white shadow-lg flex items-center justify-center overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=450&fit=crop" alt="Laser Behandlung" className="w-full h-full object-cover opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center gold-glow cursor-pointer hover:scale-110 transition-transform">
                  <span className="text-primary-foreground text-3xl ml-1">▶</span>
                </div>
              </div>
              <p className="absolute bottom-4 text-sm text-cream-foreground/50">Video-Platzhalter – Erklärvideo wird hier eingefügt</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES — DARK */}
      <section className="py-24 bg-background noise-overlay">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Warum Miradea für deine Haarentfernung?" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 gold-glow-hover transition-all hover:-translate-y-1">
                <Icon className="text-primary mb-3" size={24} />
                <h4 className="font-heading text-sm font-semibold text-foreground mb-2">{title}</h4>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <SectionHeading badge="So läuft's ab" title="In 4 Schritten zu glatter Haut" dark={false} />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm relative">
                <span className="font-display text-5xl font-bold text-primary/15">{step.num}</span>
                <h4 className="font-heading text-sm font-semibold text-cream-foreground mt-2 mb-2">{step.title}</h4>
                <p className="text-xs text-cream-foreground/60">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE TABLE — DARK */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Preise – Frauen" subtitle="Alle Preise pro Einzelsitzung" />
          <div className="max-w-2xl mx-auto glass-card rounded-xl overflow-hidden">
            <div className="gold-gradient px-6 py-3 flex justify-between font-heading text-sm font-semibold text-primary-foreground">
              <span>Zone</span><span>Preis</span>
            </div>
            {prices.map(([zone, price], i) => (
              <div key={i} className={`px-6 py-3 flex justify-between text-sm ${i % 2 === 0 ? "bg-card" : "bg-background"}`}>
                <span className="text-foreground">{zone}</span>
                <span className="text-primary font-semibold">{price}</span>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <SectionHeading title="Preisvorteilspakete" />
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
        </div>
      </section>

      {/* CALCULATOR — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title="Individueller Paket-Rechner" subtitle="Wähle deine Zonen aus. Dein persönlicher Paketpreis wird erst danach berechnet." dark={false} />
          <PackageCalculator variant="cream" />
        </div>
      </section>

      {/* BEFORE TREATMENT — DARK */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Vor der Behandlung – wichtige Punkte" subtitle="Damit deine Laser-Behandlung sicher, hautschonend und effektiv verläuft." />
          <div className="max-w-3xl mx-auto space-y-4">
            {beforeTips.map((tip, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6">
                <h4 className="font-heading text-sm font-semibold text-foreground flex items-center gap-2 mb-2"><Check className="text-primary" size={18} /> {tip.title}</h4>
                <p className="text-sm text-muted-foreground">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AFTER TREATMENT — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title="Nach der Behandlung – das solltest du beachten" dark={false} />
          <div className="max-w-3xl mx-auto space-y-4">
            {afterTips.map((tip, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-heading text-sm font-semibold text-cream-foreground flex items-center gap-2 mb-2"><Check className="text-primary" size={18} /> {tip.title}</h4>
                <p className="text-sm text-cream-foreground/70">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — DARK */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Häufige Fragen" />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={allFaqs.slice(0, 5)} />
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <WhatsAppForm heading="Hast du eine Frage?" subheading="Schick sie uns direkt per WhatsApp – wir antworten persönlich." variant="cream" />
        </div>
      </section>
    </main>
  );
}
