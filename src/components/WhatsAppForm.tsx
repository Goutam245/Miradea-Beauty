import { useState } from "react";
import { MessageCircle } from "lucide-react";

interface Props {
  heading?: string;
  subheading?: string;
  variant?: "dark" | "cream";
}

export default function WhatsAppForm({
  heading = "Deine Frage fehlt?",
  subheading = "Schick sie uns direkt per WhatsApp – wir antworten persönlich.",
  variant = "dark",
}: Props) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const isCream = variant === "cream";

  const handleSubmit = () => {
    if (!message.trim()) { setError("Bitte gib eine Nachricht ein."); return; }
    if (!agreed) { setError("Bitte stimme der Datenschutzrichtlinie zu."); return; }
    if (message.length > 1000) { setError("Nachricht ist zu lang (max 1000 Zeichen)."); return; }
    setError("");
    const text = encodeURIComponent(`${name ? `Name: ${name}\n` : ""}${message}`);
    window.open(`https://wa.me/436606340939?text=${text}`, "_blank");
  };

  const inputClass = isCream
    ? "w-full bg-white border border-cream-foreground/20 rounded-lg px-4 py-3 text-cream-foreground placeholder:text-cream-foreground/40 focus:outline-none focus:border-primary transition-colors"
    : "w-full bg-input border border-primary/20 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <div className="max-w-xl mx-auto text-center">
      <h3 className={`font-display text-2xl md:text-3xl font-semibold mb-2 ${isCream ? "text-cream-foreground" : "text-foreground"}`}>{heading}</h3>
      <p className={`mb-8 ${isCream ? "text-cream-foreground/70" : "text-muted-foreground"}`}>{subheading}</p>

      <div className="space-y-4 text-left">
        <input type="text" placeholder="Dein Name (optional)" value={name} onChange={(e) => setName(e.target.value)} maxLength={100} className={inputClass} />
        <textarea placeholder="Schreib hier deine Frage ..." value={message} onChange={(e) => setMessage(e.target.value)} maxLength={1000} rows={4}
          className={`${inputClass} resize-y`} />

        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 accent-primary" />
          <span className={`text-xs ${isCream ? "text-cream-foreground/60" : "text-muted-foreground"}`}>
            Ich stimme zu, dass meine Nachricht per WhatsApp an Miradea Beauty übermittelt wird.
          </span>
        </label>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button onClick={handleSubmit} data-gtm-event="whatsapp_form_submit"
          className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-heading font-semibold py-3 rounded-lg transition-colors">
          <MessageCircle size={18} /> FRAGE PER WHATSAPP SENDEN
        </button>

        <p className={`text-xs text-center ${isCream ? "text-cream-foreground/50" : "text-muted-foreground"}`}>
          Alternativ: <a href="mailto:office@miradea.at" className="text-primary hover:underline">office@miradea.at</a> · <a href="tel:+436606340939" className="text-primary hover:underline">+43 660 634 09 39</a>
        </p>
      </div>
    </div>
  );
}
