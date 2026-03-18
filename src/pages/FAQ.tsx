import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import WhatsAppForm from "@/components/WhatsAppForm";
import { allFaqs } from "@/lib/faqData";

export default function FAQ() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1400&h=500&fit=crop" alt="Studio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center pt-24">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            Häufig gestellte Fragen
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Antworten auf die wichtigsten Fragen rund um deine Laser-Behandlung bei Miradea Beauty
          </motion.p>
        </div>
      </section>

      {/* FAQ — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={allFaqs} variant="cream" />
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
