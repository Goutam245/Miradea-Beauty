import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function Kontakt() {
  const [form, setForm] = useState({ firma: "", person: "", email: "", phone: "", message: "", agreed: false });
  const [error, setError] = useState("");

  const handlePartnerSubmit = () => {
    if (!form.email.trim() || !form.message.trim()) { setError("Bitte fülle alle Pflichtfelder aus."); return; }
    if (!form.agreed) { setError("Bitte stimme der Datenschutzrichtlinie zu."); return; }
    setError("");
    const text = encodeURIComponent(`Partner-Anfrage\nFirma: ${form.firma}\nPerson: ${form.person}\nE-Mail: ${form.email}\nTel: ${form.phone}\n\n${form.message}`);
    window.open(`https://wa.me/436606340939?text=${text}`, "_blank");
  };

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1400&h=600&fit=crop" alt="Studio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center pt-24">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block font-heading text-xs uppercase tracking-[0.25em] text-primary border border-primary/30 rounded-full px-5 py-2 mb-6">
            ✦ Premium Laserstudio
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            Kontaktiere uns
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Buche deinen kostenlosen Test-Shot oder stelle uns deine Fragen – wir freuen uns auf dich!
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/436606340939" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-heading font-semibold px-6 py-3 rounded-full transition-colors">
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a href="tel:+436606340939"
              className="flex items-center justify-center gap-2 border border-primary/40 text-primary font-heading font-semibold px-6 py-3 rounded-full hover:bg-primary/5 transition-colors">
              <Phone size={18} /> Anrufen
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3 text-sm">
                <p><strong className="text-cream-foreground">Studio:</strong> <span className="text-cream-foreground/70">Miradea Beauty – Linz</span></p>
                <p><strong className="text-cream-foreground">Plz & Ort:</strong> <span className="text-cream-foreground/70">4020 Linz</span></p>
                <p><strong className="text-cream-foreground">E-Mail:</strong> <a href="mailto:office@miradea.at" className="text-primary hover:underline">office@miradea.at</a></p>
                <div>
                  <strong className="text-cream-foreground">Öffnungszeiten:</strong>
                  <p className="text-cream-foreground/70">Mo & Fr: 09:00–17:30</p>
                  <p className="text-cream-foreground/70">Di–Do: 09:00–15:00</p>
                  <p className="text-cream-foreground/70">Nur mit Terminvereinbarung möglich!</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p><strong className="text-cream-foreground">Adresse:</strong> <span className="text-cream-foreground/70">Eduard-Sueß-Straße 19</span></p>
                <p><strong className="text-cream-foreground">Telefon:</strong> <a href="tel:+436606340939" className="text-primary hover:underline">+43 660 634 09 39</a></p>
              </div>
            </div>
            <div className="mt-6 p-4 gold-gradient rounded-lg text-center text-sm text-primary-foreground font-heading">
              <MapPin className="inline mr-1" size={16} /> Unser Studio befindet sich im 2. Stock! Kostenlose Parkplätze direkt vor dem Gebäude.
            </div>
          </div>
        </div>
      </section>

      {/* MAP — DARK */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-primary/20">
            <iframe
              title="Miradea Beauty Standort"
              src="https://www.openstreetmap.org/export/embed.html?bbox=14.27%2C48.28%2C14.32%2C48.31&layer=mapnik&marker=48.2955%2C14.2958"
              width="100%" height="400" style={{ border: 0 }} loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* PARTNER — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4 max-w-xl">
          <SectionHeading title="Partner-Anfrage" subtitle="Bist du an einer Zusammenarbeit interessiert? Schreib uns!" dark={false} />
          <div className="space-y-4">
            {[
              { key: "firma", placeholder: "Firmenname", type: "text" },
              { key: "person", placeholder: "Ansprechpartner", type: "text" },
              { key: "email", placeholder: "E-Mail *", type: "email" },
              { key: "phone", placeholder: "Telefon", type: "tel" },
            ].map(({ key, placeholder, type }) => (
              <input key={key} type={type} placeholder={placeholder}
                value={form[key as keyof typeof form] as string}
                onChange={e => setForm({ ...form, [key]: e.target.value })}
                maxLength={200}
                className="w-full bg-white border border-cream-foreground/20 rounded-lg px-4 py-3 text-cream-foreground placeholder:text-cream-foreground/40 focus:outline-none focus:border-primary transition-colors" />
            ))}
            <textarea placeholder="Nachricht *" value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              maxLength={1000} rows={4}
              className="w-full bg-white border border-cream-foreground/20 rounded-lg px-4 py-3 text-cream-foreground placeholder:text-cream-foreground/40 focus:outline-none focus:border-primary transition-colors resize-y" />
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={form.agreed} onChange={e => setForm({ ...form, agreed: e.target.checked })} className="mt-1 accent-primary" />
              <span className="text-xs text-cream-foreground/60">Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzrichtlinie zu.</span>
            </label>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button onClick={handlePartnerSubmit}
              className="w-full gold-gradient text-primary-foreground font-heading font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity">
              Anfrage senden →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
