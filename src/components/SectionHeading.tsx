import { motion } from "framer-motion";

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}

export default function SectionHeading({ badge, title, subtitle, center = true, dark = true }: Props) {
  const textColor = dark ? "text-foreground" : "text-cream-foreground";
  const subColor = dark ? "text-muted-foreground" : "text-cream-foreground/70";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {badge && (
        <span className="inline-block font-heading text-xs uppercase tracking-[0.25em] text-primary border border-primary/30 rounded-full px-4 py-1.5 mb-4">
          ✦ {badge}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ${textColor}`}>
        {title}
      </h2>
      <div className="w-20 h-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-4" />
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl ${center ? "mx-auto" : ""} ${subColor}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}
