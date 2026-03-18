import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "Startseite", path: "/" },
  { label: "Dauerhafte Haarentfernung", path: "/haarentfernung" },
  { label: "Bodyforming", path: "/bodyforming" },
  { label: "Beckenbodentraining", path: "/beckenbodentraining" },
  { label: "Preise", path: "/preise" },
  { label: "FAQ", path: "/faq" },
  { label: "Kontakt", path: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-4">
              <span className="font-display text-2xl font-bold text-foreground">MIRADEA</span>
              <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-primary ml-2">Beauty</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">Premium Laserstudio in Linz, Österreich</p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: MessageCircle, href: "https://wa.me/436606340939" },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary mb-6">Seiten</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary mb-6">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Eduard-Sueß-Straße 19, 4020 Linz</li>
              <li><a href="tel:+436606340939" className="hover:text-primary transition-colors">+43 660 634 09 39</a></li>
              <li><a href="mailto:office@miradea.at" className="hover:text-primary transition-colors">office@miradea.at</a></li>
              <li className="pt-2">
                <strong className="text-foreground">Öffnungszeiten:</strong><br />
                Mo & Fr: 09:00–17:30<br />
                Di–Do: 09:00–15:00
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-divider my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2025 Miradea Beauty. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
            <Link to="/agb" className="hover:text-primary transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
