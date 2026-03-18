import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Zone {
  name: string;
  price: number;
}

interface ZoneGroup {
  label: string;
  zones: Zone[];
}

const zoneGroups: ZoneGroup[] = [
  {
    label: "Kopf & Hals",
    zones: [
      { name: "Oberlippe", price: 39 },
      { name: "Kinn", price: 35 },
      { name: "Wangen", price: 35 },
      { name: "Gesicht komplett", price: 80 },
      { name: "Hals", price: 45 },
      { name: "Nacken", price: 40 },
    ],
  },
  {
    label: "Oberkörper",
    zones: [
      { name: "Koteletten", price: 40 },
      { name: "Dekolleté", price: 60 },
      { name: "Brust", price: 60 },
      { name: "Achseln", price: 55 },
      { name: "Oberarme", price: 45 },
      { name: "Unterarme", price: 50 },
      { name: "Arme komplett", price: 80 },
      { name: "Bauch", price: 60 },
    ],
  },
  {
    label: "Unterkörper",
    zones: [
      { name: "Bikinizone", price: 50 },
      { name: "Intim", price: 70 },
      { name: "Intim & Bikinizone", price: 100 },
      { name: "Po", price: 40 },
      { name: "Oberschenkel", price: 90 },
      { name: "Unterschenkel", price: 90 },
      { name: "Beine komplett", price: 160 },
    ],
  },
  {
    label: "Extras",
    zones: [
      { name: "Kleine Zonen 5×5cm²", price: 60 },
    ],
  },
];

interface Props {
  variant?: "dark" | "cream";
}

export default function PackageCalculator({ variant = "dark" }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const isCream = variant === "cream";

  const toggle = (name: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name); else next.add(name);
      return next;
    });
  };

  const { subtotal, packagePrice, hasPackage } = useMemo(() => {
    let total = 0;
    for (const group of zoneGroups) {
      for (const zone of group.zones) {
        if (selected.has(zone.name)) total += zone.price;
      }
    }
    const qualified = selected.size >= 4;
    const discount = qualified ? Math.round(total * 0.7) : total;
    return { subtotal: total, packagePrice: discount, hasPackage: qualified };
  }, [selected]);

  const btnClass = (isSelected: boolean) =>
    isCream
      ? `flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-body transition-all border ${
          isSelected ? "border-primary bg-primary/10 text-cream-foreground" : "border-cream-foreground/15 bg-white text-cream-foreground/70 hover:border-primary/30"
        }`
      : `flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-body transition-all border ${
          isSelected ? "border-primary bg-primary/10 text-foreground" : "border-primary/10 bg-input text-muted-foreground hover:border-primary/30"
        }`;

  const panelBg = isCream ? "bg-white rounded-xl p-6 shadow-lg sticky top-24" : "glass-card rounded-xl p-6 sticky top-24";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 space-y-6">
        {zoneGroups.map((group) => (
          <div key={group.label}>
            <h4 className={`font-heading text-xs uppercase tracking-widest text-primary mb-3`}>✦ {group.label}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {group.zones.map((zone) => {
                const isSelected = selected.has(zone.name);
                return (
                  <button key={zone.name} onClick={() => toggle(zone.name)} className={btnClass(isSelected)}>
                    <span className="flex items-center gap-2">
                      <span className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                        isSelected ? "bg-primary border-primary" : "border-primary/30"
                      }`}>
                        {isSelected && <Check size={12} className="text-primary-foreground" />}
                      </span>
                      {zone.name}
                    </span>
                    <span className="text-primary font-semibold">{zone.price}€</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="lg:col-span-2">
        <div className={panelBg}>
          <h4 className="font-heading text-sm uppercase tracking-widest text-primary mb-4">Paket-Rechner</h4>

          {selected.size > 0 ? (
            <div className="space-y-2 mb-6">
              {Array.from(selected).map((name) => {
                const zone = zoneGroups.flatMap(g => g.zones).find(z => z.name === name);
                return (
                  <div key={name} className="flex justify-between text-sm">
                    <span className={isCream ? "text-cream-foreground/60" : "text-muted-foreground"}>{name}</span>
                    <span className={isCream ? "text-cream-foreground" : "text-foreground"}>{zone?.price}€</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className={`text-sm mb-6 ${isCream ? "text-cream-foreground/50" : "text-muted-foreground"}`}>Wähle deine Zonen aus der Liste links.</p>
          )}

          <div className="gold-divider mb-4" />

          <div className="flex justify-between text-sm mb-2">
            <span className={isCream ? "text-cream-foreground/60" : "text-muted-foreground"}>Ausgewählte Zonen</span>
            <span className={isCream ? "text-cream-foreground" : "text-foreground"}>{selected.size}</span>
          </div>

          {!hasPackage && selected.size > 0 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs text-primary my-3 p-2 rounded border border-primary/20 bg-primary/5">
              ⚠ Bitte wähle mindestens 4 Zonen – der Paketpreis wird erst danach berechnet.
            </motion.p>
          )}

          <div className="flex justify-between items-end mt-4">
            <span className={`font-heading text-sm ${isCream ? "text-cream-foreground/60" : "text-muted-foreground"}`}>Dein Paketpreis</span>
            <motion.span key={packagePrice} initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="font-display text-3xl font-bold text-primary">
              {hasPackage ? `${packagePrice}€` : `${subtotal}€`}
            </motion.span>
          </div>

          {hasPackage && (
            <p className={`text-xs mt-1 text-right ${isCream ? "text-cream-foreground/50" : "text-muted-foreground"}`}>
              statt <span className="line-through">{subtotal}€</span>
            </p>
          )}

          <a href="https://wa.me/436606340939?text=Ich%20m%C3%B6chte%20ein%20Paket%20anfragen" target="_blank" rel="noopener noreferrer" data-gtm-event="package_inquiry"
            className="block w-full text-center gold-gradient text-primary-foreground font-heading font-semibold py-3 rounded-lg mt-6 hover:opacity-90 transition-opacity">
            → Paket anfragen
          </a>
        </div>
      </div>
    </div>
  );
}
