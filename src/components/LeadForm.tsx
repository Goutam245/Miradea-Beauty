import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    title: "Welches Geschlecht hast du?",
    options: ["Weiblich"],
    note: "Miradea Beauty behandelt ausschließlich Frauen. Bitte 'Weiblich' wählen.",
  },
  {
    title: "Welche Behandlung interessiert dich?",
    options: ["Dauerhafte Haarentfernung", "Bodyforming", "Beckenbodentraining"],
  },
  {
    title: "Welche Zonen interessieren dich?",
    options: ["Gesicht", "Achseln", "Arme", "Brust/Bauch", "Bikini/Intim", "Beine", "Rücken", "Andere"],
    multi: true,
  },
  {
    title: "Wann möchtest du starten?",
    options: ["Sofort", "In 1–3 Monaten", "Nur informieren"],
  },
];

export default function LeadForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectOption = (value: string) => {
    const current = steps[step];
    if (current.multi) {
      const prev = (answers[step] as string[]) || [];
      const next = prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value];
      setAnswers({ ...answers, [step]: next });
    } else {
      setAnswers({ ...answers, [step]: value });
      setTimeout(() => setStep(s => Math.min(s + 1, steps.length)), 400);
    }
  };

  const handleSubmit = () => {
    if (!name.trim() || !phone.trim() || !agreed) return;
    const text = Object.entries(answers).map(([i, v]) => `${steps[Number(i)].title} ${Array.isArray(v) ? v.join(", ") : v}`).join("\n");
    const msg = encodeURIComponent(`Anfrage von ${name}\nTel: ${phone}\n\n${text}`);
    window.open(`https://wa.me/436606340939?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const progress = ((step + 1) / (steps.length + 1)) * 100;
  const isLastStep = step >= steps.length;

  if (submitted) {
    return (
      <div className="text-center py-12">
        <span className="text-4xl mb-4 block">✦</span>
        <h3 className="font-display text-2xl text-foreground mb-2">Vielen Dank!</h3>
        <p className="text-muted-foreground">Wir melden uns in Kürze bei dir.</p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <div className="mb-6">
        <p className="text-xs text-muted-foreground mb-2 font-heading">Schritt {step + 1} von {steps.length + 1}</p>
        <div className="w-full h-1.5 bg-input rounded-full overflow-hidden">
          <motion.div className="h-full gold-gradient rounded-full" animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!isLastStep ? (
          <motion.div key={step} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }}>
            <h4 className="font-display text-xl md:text-2xl text-foreground mb-6">{steps[step].title}</h4>
            <div className="space-y-3">
              {steps[step].options.map((opt) => {
                const isSelected = steps[step].multi
                  ? ((answers[step] as string[]) || []).includes(opt)
                  : answers[step] === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => selectOption(opt)}
                    className={`w-full text-left px-5 py-3 rounded-lg border text-sm font-body transition-all ${
                      isSelected
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-primary/10 bg-input text-muted-foreground hover:border-primary/30"
                    }`}
                  >
                    {isSelected ? "●" : "○"} {opt}
                  </button>
                );
              })}
            </div>
            {steps[step].note && <p className="text-xs text-muted-foreground mt-3">{steps[step].note}</p>}
            {steps[step].multi && (
              <button onClick={() => setStep(s => s + 1)} className="gold-gradient text-primary-foreground font-heading font-semibold px-8 py-2.5 rounded-lg mt-6 hover:opacity-90 transition-opacity">
                Weiter
              </button>
            )}
          </motion.div>
        ) : (
          <motion.div key="contact" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}>
            <h4 className="font-display text-xl md:text-2xl text-foreground mb-6">Deine Kontaktdaten</h4>
            <div className="space-y-4">
              <input type="text" placeholder="Dein Name" value={name} onChange={e => setName(e.target.value)} maxLength={100}
                className="w-full bg-input border border-primary/20 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
              <input type="tel" placeholder="Telefon / WhatsApp" value={phone} onChange={e => setPhone(e.target.value)} maxLength={20}
                className="w-full bg-input border border-primary/20 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-1 accent-primary" />
                <span className="text-xs text-muted-foreground">Ich stimme zu, dass meine Nachricht per WhatsApp an Miradea Beauty übermittelt wird.</span>
              </label>
              <button onClick={handleSubmit} data-gtm-event="lead_form_submit"
                className="w-full gold-gradient text-primary-foreground font-heading font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity">
                Termin anfragen →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {step > 0 && (
        <button onClick={() => setStep(s => s - 1)} className="text-xs text-muted-foreground hover:text-primary mt-4 transition-colors">
          ← Zurück
        </button>
      )}
    </div>
  );
}
