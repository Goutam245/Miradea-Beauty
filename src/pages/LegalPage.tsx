import { motion } from "framer-motion";

interface Props {
  title: string;
}

export default function LegalPage({ title }: Props) {
  return (
    <main>
      <section className="relative min-h-[40vh] flex items-center justify-center noise-overlay">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
        <div className="relative z-10 container mx-auto px-4 text-center pt-24">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            {title}
          </motion.h1>
        </div>
      </section>
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-2xl mx-auto glass-card rounded-xl p-8 border border-primary/20">
          <p className="text-muted-foreground text-center">Dieser Bereich wird in Kürze ausgefüllt.</p>
        </div>
      </section>
    </main>
  );
}
