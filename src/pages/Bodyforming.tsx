import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import WhatsAppForm from "@/components/WhatsAppForm";

const benefits = [
  { title: "Nicht-invasiv", desc: "Keine Operation, keine Nadeln, keine Ausfallzeit." },
  { title: "Sichtbare Ergebnisse", desc: "Bereits nach wenigen Sitzungen messbare Verbesserungen." },
  { title: "Schmerzfrei", desc: "Angenehme Behandlung ohne Betäubung erforderlich." },
  { title: "Individuell anpassbar", desc: "Programme werden auf deine Bedürfnisse abgestimmt." },
  { title: "Zeitsparend", desc: "Kurze Behandlungsdauer, die in jeden Alltag passt." },
  { title: "Nachhaltig", desc: "Langfristige Ergebnisse mit regelmäßigen Sitzungen." },
];

const processSteps = [
  { num: "01", title: "Beratungsgespräch", desc: "Analyse deiner Wünsche und Zielbereiche." },
  { num: "02", title: "Behandlungsplan", desc: "Individueller Plan basierend auf deinen Zielen." },
  { num: "03", title: "Behandlung", desc: "Entspannte Sitzung mit modernster Technologie." },
  { num: "04", title: "Ergebniskontrolle", desc: "Fortschrittsüberprüfung und Anpassung." },
];

const faqs = [
  { question: "Was ist Bodyforming?", answer: "Bodyforming ist eine nicht-invasive Methode zur Körperkonturierung, die mit modernster Technologie arbeitet, um gezielt Fettdepots zu reduzieren und die Haut zu straffen." },
  { question: "Wie viele Sitzungen brauche ich?", answer: "Die Anzahl der Sitzungen variiert je nach Behandlungsbereich und individuellen Zielen. In der Regel empfehlen wir 6–10 Sitzungen für optimale Ergebnisse." },
  { question: "Ist die Behandlung schmerzhaft?", answer: "Nein, die Behandlung ist in der Regel schmerzfrei. Die meisten Kund:innen empfinden die Sitzung als angenehm und entspannend." },
  { question: "Welche Bereiche können behandelt werden?", answer: "Typische Behandlungszonen sind Bauch, Oberschenkel, Arme, Hüften und Gesäß. Im Beratungsgespräch besprechen wir deine individuellen Wünsche." },
  { question: "Wie schnell sehe ich Ergebnisse?", answer: "Erste sichtbare Veränderungen zeigen sich oft bereits nach 2–3 Sitzungen. Das volle Ergebnis entwickelt sich über den gesamten Behandlungszeitraum." },
];

export default function Bodyforming() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1400&h=800&fit=crop" alt="Bodyforming" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center pt-24">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block font-heading text-xs uppercase tracking-[0.25em] text-primary border border-primary/30 rounded-full px-5 py-2 mb-6">
            ✦ Körperkonturierung · Linz
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Dein Körper. Deine Form. Deine Freiheit.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Nicht-invasive Körperformung mit modernster Technologie – für sichtbare Ergebnisse ohne OP.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <Link to="/kontakt" className="gold-gradient text-primary-foreground font-heading font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-all inline-flex items-center gap-2 gold-glow">
              <ArrowRight size={18} /> Beratung anfragen
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHAT IS — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title="Was ist Bodyforming?" dark={false} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop" alt="Bodyforming Behandlung" className="rounded-2xl shadow-lg border-2 border-primary/20 w-full" />
            </motion.div>
            <p className="text-cream-foreground/70 leading-relaxed text-lg">
              Bodyforming, auch bekannt als Körperkonturierung, ist eine nicht-invasive Behandlungsmethode, die darauf abzielt, den Körper zu formen und zu straffen – ohne chirurgische Eingriffe. Bei Miradea Beauty nutzen wir modernste Technologie, um gezielt Fettdepots zu reduzieren und das Hautbild zu verbessern.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS — DARK */}
      <section className="py-24 bg-background noise-overlay">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Vorteile der Behandlung" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 gold-glow-hover transition-all hover:-translate-y-1">
                <Check className="text-primary mb-3" size={24} />
                <h4 className="font-heading text-sm font-semibold text-foreground mb-2">{b.title}</h4>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Ablauf" title="Dein Weg zum Wunschkörper" dark={false} />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm">
                <span className="font-display text-5xl font-bold text-primary/15">{step.num}</span>
                <h4 className="font-heading text-sm font-semibold text-cream-foreground mt-2 mb-2">{step.title}</h4>
                <p className="text-xs text-cream-foreground/60">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES — DARK */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Preise – Bodyforming" />
          <div className="max-w-md mx-auto glass-card rounded-xl p-8 text-center">
            <p className="text-muted-foreground mb-4">Die Preise variieren je nach Behandlungsbereich und Anzahl der Sitzungen.</p>
            <p className="font-display text-3xl font-bold text-primary mb-4">ab 80€ / Sitzung</p>
            <Link to="/kontakt" className="gold-gradient text-primary-foreground font-heading font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-all inline-flex items-center gap-2">
              Beratungstermin vereinbaren <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title="Häufige Fragen zum Bodyforming" dark={false} />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} variant="cream" />
          </div>
        </div>
      </section>

      {/* CTA — DARK */}
      <section className="py-24 bg-background noise-overlay">
        <div className="container mx-auto px-4 relative z-10">
          <WhatsAppForm />
        </div>
      </section>
    </main>
  );
}
