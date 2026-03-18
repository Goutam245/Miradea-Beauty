import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  items: FAQItem[];
  variant?: "dark" | "cream";
}

export default function FAQAccordion({ items, variant = "dark" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isCream = variant === "cream";

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className={`w-full flex items-center justify-between font-heading text-sm md:text-base font-semibold px-5 py-4 rounded-xl text-left transition-all ${
                isCream
                  ? "bg-white shadow-sm text-cream-foreground hover:shadow-md border border-cream-foreground/10"
                  : "gold-gradient text-primary-foreground"
              }`}
            >
              <span>{item.question}</span>
              {isOpen ? <X size={18} className="shrink-0 ml-2" /> : <Plus size={18} className="shrink-0 ml-2" />}
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className={`px-5 py-4 text-sm leading-relaxed rounded-b-xl ${
                    isCream
                      ? "text-cream-foreground/70 bg-white/50 border-x border-b border-cream-foreground/10"
                      : "text-muted-foreground border-x border-b border-primary/10"
                  }`}>
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
