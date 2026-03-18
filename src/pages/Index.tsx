import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Star, Zap, Shield, Calendar, Heart, MapPin, Users, ArrowRight, Phone, MessageCircle, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GoldDivider from "@/components/GoldDivider";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQAccordion from "@/components/FAQAccordion";
import LeadForm from "@/components/LeadForm";
import { allFaqs } from "@/lib/faqData";

const features = [
  { icon: Zap, title: "Zertifizierte Premium-Technologie", desc: "808nm Non-Crystal Diodenlaser – höchste Präzision." },
  { icon: Shield, title: "Qualität statt Masse", desc: "Individuelle Behandlung – Haar & Haut einzeln betrachtet." },
  { icon: Calendar, title: "Planbar & nachhaltig", desc: "Realistische Einschätzung, klarer Behandlungsplan." },
  { icon: Heart, title: "Kostenlose Erstberatung", desc: "Analyse, Beratung & persönlicher Behandlungsplan – inklusive." },
  { icon: Users, title: "Diskret & professionell", desc: "Angenehme Atmosphäre, klare Hygienestandards." },
  { icon: MapPin, title: "Linz, Oberösterreich", desc: "Zentral gelegen, mit kostenlosen Parkplätzen." },
];

const processSteps = [
  { num: "01", title: "Kostenlose Erstberatung", desc: "Wir besprechen Hautzustand, Ziele und klären alle Fragen." },
  { num: "02", title: "Individuelle Einstellung", desc: "Parameter werden individuell auf Haut & Haar abgestimmt." },
  { num: "03", title: "Behandlung", desc: "In ruhiger Atmosphäre, präzise und diskret — Zone für Zone." },
  { num: "04", title: "Nachsorge & Plan", desc: "Empfohlene Abstände, Pflegehinweise, Begleitung bis zum Ergebnis." },
];

const reviews = [
  { name: "Jasmin Studirach", initials: "JS", date: "vor 2 Wochen", text: "Absolut top! Bin sehr zufrieden. Sie hat mich gut beraten und erklärt was man alles wissen sollte. Ich fühle mich bei ihr sehr gut aufgehoben." },
  { name: "sina heinze", initials: "SH", date: "vor 3 Monaten", text: "Ich bin seit August 2025 im Studio Miradea. Ich bin sehr zufrieden. Es ist alles schön sauber. Meine Haare bei den behandelten Stellen werden weniger." },
  { name: "Nina Znep", initials: "NZ", date: "vor 3 Monaten", text: "War heute das erste Mal dabei. Überhaupt keine Schmerzen und wurde nicht enttäuscht. Sehr professionell und freundlich!" },
];

const serviceCards = [
  { title: "Dauerhafte Haarentfernung", desc: "808nm Diodenlaser – präzise, sicher und schonend. Spürbare Ergebnisse ab der 1. Sitzung.", tags: ["Präzise", "Hauttyp I–IV", "Ab 35€"], path: "/haarentfernung", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop" },
  { title: "Bodyforming", desc: "Moderne Körperkonturierung ohne Operation – sichtbare Formung und Straffung.", tags: ["Nicht-invasiv", "Körperformung", "Sichtbar"], path: "/bodyforming", image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop" },
  { title: "Beckenbodentraining", desc: "Professionelles Beckenbodentraining – diskret, effektiv und medizinisch fundiert.", tags: ["Diskret", "Medizinisch", "Effektiv"], path: "/beckenbodentraining", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop" },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80", alt: "Laser Gerät" },
  { src: "https://images.unsplash.com/photo-1629909615716-b6ac8a03a203?w=800&q=80", alt: "Modernes Klinik-Interieur" },
  { src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&q=80", alt: "Hautbehandlung" },
  { src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=700&q=80", alt: "Studio-Interieur" },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80", alt: "Laser-Haarentfernung" },
];

export default function Index() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(5,5,10,0.93) 0%, rgba(5,5,10,0.80) 45%, rgba(5,5,10,0.88) 100%), url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}>
        <div className="absolute inset-0 pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left content */}
            <div className="lg:col-span-3">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="inline-block font-heading text-xs uppercase tracking-[0.25em] text-primary border border-primary/30 rounded-full px-5 py-2 mb-6">
                ✦ Premium Laserstudio · Linz, AT
              </motion.span>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="font-display font-semibold text-foreground mb-6" style={{ fontSize: 'clamp(42px, 6vw, 80px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                Dauerhafte Haarentfernung, Bodyforming & Beckenbodentraining
              </motion.h1>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="w-24 h-0.5 gold-gradient rounded-full mb-6" />

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                className="text-foreground/80 text-lg md:text-xl max-w-xl mb-10">
                Spürbar wirksam ab der 1. Sitzung – präzise Spot-Arbeitsweise statt Wischtechnik.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-col sm:flex-row gap-4">
                <Link to="/kontakt" data-gtm-event="hero_cta_termin"
                  className="gold-gradient text-primary-foreground font-heading font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-all gold-glow-hover inline-flex items-center gap-2">
                  <ArrowRight size={18} /> Termin anfragen
                </Link>
                <Link to="/preise"
                  className="border border-primary/40 text-primary font-heading font-semibold px-8 py-3.5 rounded-full hover:bg-primary/5 transition-all">
                  Preise ansehen ↓
                </Link>
              </motion.div>
            </div>

            {/* Right floating card */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
              className="lg:col-span-2 hidden lg:block">
              <div className="bg-background/85 backdrop-blur-xl border border-primary/30 rounded-2xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-5">Kostenlose Erstberatung</h3>
                <div className="space-y-3 mb-6">
                  {[
                    "808 nm Non-Crystal Diodenlaser",
                    "Hauttyp I–IV, präzise & hautschonend",
                    "Abstände 6–12 Wochen für echte Wirkung",
                    "Keine Massenabfertigung",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/kontakt"
                  className="block w-full text-center gold-gradient text-primary-foreground font-heading font-semibold py-3.5 rounded-lg hover:opacity-90 transition-opacity gold-glow">
                  JETZT KOSTENLOSE ERSTBERATUNG SICHERN →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle text-primary z-10">
          <ChevronDown size={28} />
        </motion.div>

        {/* Stats bar */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
          className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-xl border-t border-primary/10 z-10">
          <div className="container mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <AnimatedCounter end={58} suffix="+" label="Zufriedene Kund:innen" />
            <AnimatedCounter end={5} suffix="/5" label="Google Bewertungen" />
            <div className="text-center">
              <span className="font-display text-3xl md:text-4xl font-bold text-primary">Gratis</span>
              <p className="text-xs text-muted-foreground mt-1 font-heading">Test-Shot</p>
            </div>
            <div className="text-center">
              <span className="font-display text-3xl md:text-4xl font-bold text-primary">Inkl.</span>
              <p className="text-xs text-muted-foreground mt-1 font-heading">Erstberatung</p>
            </div>
          </div>
        </motion.div>
      </section>

      <GoldDivider />

      {/* BRAND INTRO — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="font-display text-7xl text-primary/20 leading-none">"</span>
              <blockquote className="font-display text-2xl md:text-3xl italic text-cream-foreground leading-relaxed -mt-8 mb-6">
                Bei uns bekommst du keine Schnellbehandlung — sondern eine hochwertige Laser-Haarentfernung mit Fokus auf Sicherheit, Komfort und sichtbare Ergebnisse.
              </blockquote>
              <div className="w-16 h-0.5 gold-gradient rounded-full mb-3" />
              <p className="font-heading text-sm text-cream-foreground/60">— Miradea Beauty Team, Linz</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop"
                  alt="Beratung im Laserstudio" className="rounded-2xl shadow-xl w-full object-cover border-2 border-primary/20" />
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                {["⚡ 808nm Technologie", "🛡️ Hauttyp I–IV sicher", "📍 Linz"].map((pill) => (
                  <span key={pill} className="font-heading text-xs bg-cream-foreground/10 text-cream-foreground/70 px-4 py-2 rounded-full">{pill}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* SERVICES — DARK */}
      <section className="py-24 bg-background noise-overlay">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Unsere Behandlungen" subtitle="Drei spezialisierte Leistungen — individuell auf dich abgestimmt." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <Link to={card.path} className="block bg-card rounded-2xl overflow-hidden h-full group hover:bg-card-hover border border-primary/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 gold-glow-hover">
                  <div className="h-56 overflow-hidden relative">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{card.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {card.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-heading uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">#{tag}</span>
                      ))}
                    </div>
                    <span className="text-sm text-primary font-heading font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Mehr erfahren <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* WHY MIRADEA — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="lg:col-span-2">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=80"
                alt="Professionelle Beratung" className="rounded-2xl w-full object-cover object-top border-2 border-primary/40" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,175,90,0.1)' }} />
            </motion.div>
            <div className="lg:col-span-3">
              <SectionHeading title="Warum Miradea Beauty?" subtitle="Wir sind kein Schönheitssalon. Wir sind dein Premium-Laserstudio in Linz." center={false} dark={false} />
              <div className="space-y-0">
                {features.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="flex gap-4 py-5 border-b border-cream-foreground/10 last:border-0">
                    <Icon className="text-primary shrink-0 mt-1" size={22} />
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-cream-foreground mb-1">{title}</h4>
                      <p className="text-sm text-cream-foreground/60">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* PROCESS — DARK */}
      <section className="py-24 bg-background noise-overlay">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading badge="So läuft's ab" title="In 4 Schritten zu glatter Haut" subtitle="Transparent, sicher und strukturiert – damit du genau weißt, was dich erwartet." />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {processSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="text-center relative">
                <span className="font-display text-7xl font-bold text-primary/10 block leading-none">{step.num}</span>
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center mx-auto -mt-4 mb-3 relative z-10">
                  <span className="text-primary-foreground font-heading text-sm font-bold">{i + 1}</span>
                </div>
                <h4 className="font-heading text-sm font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-12 -right-3 w-6 h-px bg-primary/30" />}
              </motion.div>
            ))}
          </div>
          {/* Image strip */}
          <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden h-48 md:h-64">
            <img src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=1400&h=400&fit=crop" alt="Klinik" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-background/50" />
          </motion.div>
        </div>
      </section>

      <GoldDivider />

      {/* STATS — GOLD */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #B8952E 0%, #D4AF5A 40%, #E8C97A 60%, #C9A040 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 58, suffix: "+", label: "Zufriedene Kund:innen" },
              { end: 5, suffix: "/5", label: "Google Bewertungen" },
              { end: 12, suffix: "", label: "Ø Sitzungen pro Behandlung", prefix: "8–" },
              { end: 1, suffix: ".", label: "Sitzung spürbare Ergebnisse" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center">
                <span className="font-display font-bold" style={{ fontSize: 'clamp(40px, 5vw, 64px)', color: '#0C0C14' }}>
                  {stat.prefix || ""}{stat.end}{stat.suffix}
                </span>
                <p className="font-heading text-xs font-medium uppercase tracking-wider mt-1" style={{ color: 'rgba(5,5,10,0.7)' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* REVIEWS — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title="Bewertungen unserer Kund:innen" subtitle="Echte Google-Bewertungen zur Laser-Haarentfernung bei Miradea Beauty in Linz." dark={false} />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
            <div className="md:col-span-1">
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-primary/15">
                <p className="font-heading text-xs uppercase tracking-widest text-primary mb-3">Ausgezeichnet</p>
                <div className="flex justify-center gap-1 mb-3">
                  {Array(5).fill(0).map((_, i) => <Star key={i} size={20} className="text-primary fill-primary" />)}
                </div>
                <p className="font-display text-2xl font-bold text-cream-foreground mb-1">4.9 von 5</p>
                <p className="text-xs text-cream-foreground/60 mb-3">58 Bewertungen</p>
                <div className="text-xs text-cream-foreground/40 font-heading">Google</div>
                <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-xs text-primary font-heading font-semibold hover:underline">
                  Alle lesen →
                </a>
              </div>
            </div>
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-5">
              {reviews.map((r, i) => {
                const avatarPhotos = [
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
                ];
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-7 border border-primary/15 hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <img src={avatarPhotos[i]} alt={r.name}
                        className="w-[52px] h-[52px] rounded-full object-cover object-top flex-shrink-0"
                        style={{ border: '2px solid rgba(212,175,90,0.6)', boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }} />
                      <div>
                        <p className="text-sm font-semibold text-cream-foreground">{r.name}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex gap-0.5">{Array(5).fill(0).map((_, j) => <Star key={j} size={12} className="text-primary fill-primary" />)}</div>
                          <span className="text-[10px] text-cream-foreground/40">{r.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-cream-foreground/70 leading-relaxed">{r.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* GALLERY — DARK */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Einblicke in unser Studio" subtitle="Moderne Ausstattung, angenehme Atmosphäre – mitten in Linz." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative overflow-hidden rounded-2xl group ${i === 0 || i === 2 ? "row-span-2" : ""} ${i === 1 || i === 3 ? "aspect-video" : "aspect-[3/4]"}`}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="font-heading text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity">{img.alt}</span>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* LEAD FORM — DARK DEEP */}
      <section className="py-24 relative noise-overlay" style={{ background: "hsl(230 30% 3%)" }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(42_55%_59%/0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="border-l-2 border-primary pl-6 mb-8">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">Jetzt Erstberatung sichern</h2>
                <p className="text-primary font-heading text-sm">Kostenlos & unverbindlich</p>
              </div>
              <p className="text-muted-foreground mb-8">Beantworte 5 kurze Fragen. Wir stimmen deine kostenlose Erstberatung individuell auf dich ab und erklären, wie du die besten Pakete sichern kannst.</p>
              <div className="space-y-3 mb-8">
                {["100% kostenlos & unverbindlich", "Persönliche Beratung", "Individuelle Paketzusammenstellung", "Antwort innerhalb von 24h"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={16} className="text-primary shrink-0" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
              <div className="hidden lg:block">
                <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80" alt="Individuelle Beratung"
                  className="rounded-xl w-full max-w-sm" loading="lazy" />
                <p className="text-sm text-foreground/70 mt-3 font-heading">Individuelle Beratung & persönliche Betreuung</p>
                <div className="flex gap-1 mt-1">{Array(5).fill(0).map((_, i) => <Star key={i} size={14} className="text-primary fill-primary" />)}</div>
              </div>
            </div>
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* FAQ — CREAM */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading title="Häufige Fragen" subtitle="Kurz & klar beantwortet" center={false} dark={false} />
              <div className="text-8xl text-primary/20 font-display font-bold mb-6 hidden lg:block">?</div>
              <Link to="/faq" className="text-primary font-heading text-sm font-semibold border border-primary/30 px-6 py-2.5 rounded-full hover:bg-primary/10 transition-colors inline-flex items-center gap-2">
                Alle Fragen ansehen <ArrowRight size={14} />
              </Link>
            </div>
            <div className="lg:col-span-3">
              <FAQAccordion items={allFaqs.slice(0, 5)} variant="cream" />
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* FINAL CTA — DARK with background image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1400&h=600&fit=crop" alt="Studio" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-block font-heading text-xs uppercase tracking-[0.25em] text-primary border border-primary/30 rounded-full px-5 py-2 mb-6">
            ✦ Starte jetzt
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Bereit für deine Verwandlung?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Vereinbare jetzt deine kostenlose Erstberatung und erfahre, wie wir dich auf dem Weg zu mehr Wohlbefinden begleiten können.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://wa.me/436606340939" target="_blank" rel="noopener noreferrer" data-gtm-event="footer_whatsapp"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-heading font-semibold px-8 py-3.5 rounded-full transition-colors">
              <MessageCircle size={18} /> WhatsApp schreiben
            </a>
            <a href="tel:+436606340939" data-gtm-event="footer_call"
              className="flex items-center justify-center gap-2 border border-primary/40 text-primary font-heading font-semibold px-8 py-3.5 rounded-full hover:bg-primary/5 transition-colors">
              <Phone size={18} /> +43 660 634 09 39
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Eduard-Sueß-Straße 19, 4020 Linz</span>
            <span>✉️ office@miradea.at</span>
            <span>Mo & Fr: 09:00–17:30 | Di–Do: 09:00–15:00</span>
          </div>
        </div>
      </section>
    </main>
  );
}
