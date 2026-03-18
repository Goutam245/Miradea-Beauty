import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Heart, Shield, Users, Baby } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import WhatsAppForm from "@/components/WhatsAppForm";

const targetAudience = [
  { icon: Baby, title: "Nach der Schwangerschaft", desc: "Wiederaufbau und Stärkung des Beckenbodens nach der Geburt." },
  { icon: Shield, title: "Blasenschwäche", desc: "Verbesserung der Blasenkontrolle bei Inkontinenz-Symptomen." },
  { icon: Heart, title: "Allgemeines Wohlbefinden", desc: "Stärkung der Core-Muskulatur für mehr Lebensqualität." },
  { icon: Users, title: "Präventiv", desc: "Vorbeugung von Beckenbodenschwäche in jedem Alter." },
];

const benefits = [
  "Nicht-invasiv und schmerzfrei",
  "Spürbare Ergebnisse ab der ersten Sitzung",
  "Keine Ausfallzeit nach der Behandlung",
  "Diskrete und professionelle Atmosphäre",
  "Medizinisch fundierter Ansatz",
  "Individuell angepasste Programme",
];

const processSteps = [
  { num: "01", title: "Beratungsgespräch", desc: "Diskretes Gespräch über deine Anliegen und Ziele." },
  { num: "02", title: "Behandlungsplan", desc: "Individueller Plan basierend auf deinen Bedürfnissen." },
  { num: "03", title: "Behandlung", desc: "Entspannte Sitzung — du sitzt bequem und voll bekleidet." },
  { num: "04", title: "Fortschrittskontrolle", desc: "Regelmäßige Überprüfung und Anpassung des Plans." },
];

const faqs = [
  { question: "Was ist professionelles Beckenbodentraining?", answer: "Es handelt sich um eine nicht-invasive Technologie, die die Beckenbodenmuskulatur durch elektromagnetische Stimulation stärkt — vergleichbar mit tausenden Kegel-Übungen in einer Sitzung." },
  { question: "Für wen ist es geeignet?", answer: "Das Training eignet sich für Frauen nach der Schwangerschaft, bei Blasenschwäche, zur Prävention oder einfach zur Stärkung der Core-Muskulatur." },
  { question: "Wie viele Sitzungen werden empfohlen?", answer: "Wir empfehlen in der Regel 6–8 Sitzungen für optimale Ergebnisse. Der genaue Plan wird individuell erstellt." },
  { question: "Ist die Behandlung unangenehm?", answer: "Nein, die meisten Kund:innen empfinden die Behandlung als angenehm. Du sitzt bequem und bist voll bekleidet." },
  { question: "Wie schnell spüre ich Ergebnisse?", answer: "Viele Kund:innen berichten von spürbaren Verbesserungen bereits nach der ersten oder zweiten Sitzung." },
];

export default function Beckenbodentraining() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1400&h=800&fit=crop" alt="Beckenbodentraining" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center pt-24">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block font-heading text-xs uppercase tracking-[0.25em] text-primary border border-primary/30 rounded-full px-5 py-2 mb-6">
            ✦ Beckenbodentraining · Linz
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Stärke von innen. Spürbar ab der ersten Sitzung.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Professionelles Beckenbodentraining bei Miradea Beauty – diskret, effektiv und medizinisch fundiert.
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
          <SectionHeading title="Was ist Beckenbodentraining?" dark={false} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop" alt="Beckenbodentraining" className="rounded-2xl shadow-lg border-2 border-primary/20 w-full" />
            </motion.div>
            <p className="text-cream-foreground/70 leading-relaxed text-lg">
              Professionelles Beckenbodentraining nutzt elektromagnetische Technologie, um die Beckenbodenmuskulatur gezielt zu stärken. Die Behandlung ist nicht-invasiv, du sitzt bequem und voll bekleidet. Eine Sitzung entspricht tausenden Kegel-Übungen und liefert spürbare Ergebnisse ab der ersten Anwendung.
            </p>
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE — DARK */}
      <section className="py-24 bg-background noise-overlay">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Für wen ist es geeignet?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {targetAudience.map(({ icon: Icon, title, desc }, i) => (
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

      {/* BENEFITS — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title="Vorteile" dark={false} />
          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                <Check className="text-primary shrink-0" size={18} />
                <span className="text-sm text-cream-foreground">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — DARK */}
      <section className="py-24 bg-background noise-overlay">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading badge="Ablauf" title="Dein Weg zu mehr Stärke" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="glass-card rounded-xl p-6 text-center">
                <span className="font-display text-5xl font-bold text-primary/15">{step.num}</span>
                <h4 className="font-heading text-sm font-semibold text-foreground mt-2 mb-2">{step.title}</h4>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title="Preise – Beckenbodentraining" dark={false} />
          <div className="max-w-md mx-auto bg-white rounded-xl p-8 text-center shadow-lg">
            <p className="text-cream-foreground/70 mb-4">Die Preise werden individuell im Beratungsgespräch besprochen.</p>
            <p className="font-display text-3xl font-bold text-primary mb-4">ab 60€ / Sitzung</p>
            <Link to="/kontakt" className="gold-gradient text-primary-foreground font-heading font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-all inline-flex items-center gap-2">
              Beratungstermin vereinbaren <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ — DARK */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Häufige Fragen" />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <WhatsAppForm variant="cream" />
        </div>
      </section>
    </main>
  );
}
