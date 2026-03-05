import { motion } from "motion/react";
import type { PartnerGender, UserGender } from "../quizData";

// ─── User Gender Screen ──────────────────────────────────────────────────────

interface UserGenderScreenProps {
  onSelect: (gender: UserGender) => void;
}

export function UserGenderScreen({ onSelect }: UserGenderScreenProps) {
  return (
    <GenderLayout
      step="1 of 2"
      title="I identify as..."
      subtitle="This helps us calibrate which archetype spectrum reflects your projections most accurately."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md mx-auto">
        <GenderCard
          ocid="gender.male_button"
          emoji="♂"
          label="Male"
          description="Use the masculine projection spectrum"
          onClick={() => onSelect("male")}
        />
        <GenderCard
          ocid="gender.female_button"
          emoji="♀"
          label="Female"
          description="Use the feminine projection spectrum"
          onClick={() => onSelect("female")}
        />
      </div>
    </GenderLayout>
  );
}

// ─── Partner Gender Screen ───────────────────────────────────────────────────

interface PartnerGenderScreenProps {
  onSelect: (gender: PartnerGender) => void;
}

export function PartnerGenderScreen({ onSelect }: PartnerGenderScreenProps) {
  return (
    <GenderLayout
      step="2 of 2"
      title="My partner is..."
      subtitle="This helps contextualise the dynamics your answers point toward."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md mx-auto">
        <GenderCard
          ocid="partner.male_button"
          emoji="♂"
          label="Male"
          description="A male partner"
          onClick={() => onSelect("male")}
        />
        <GenderCard
          ocid="partner.female_button"
          emoji="♀"
          label="Female"
          description="A female partner"
          onClick={() => onSelect("female")}
        />
        <GenderCard
          ocid="partner.nonbinary_button"
          emoji="◈"
          label="Nonbinary / varies"
          description="Gender-fluid or nonbinary"
          onClick={() => onSelect("nonbinary")}
        />
        <GenderCard
          ocid="partner.prefernot_button"
          emoji="○"
          label="Prefer not to say"
          description="Keep this private"
          onClick={() => onSelect("prefer_not")}
        />
      </div>
    </GenderLayout>
  );
}

// ─── Shared Layout ───────────────────────────────────────────────────────────

interface GenderLayoutProps {
  step: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

function GenderLayout({ step, title, subtitle, children }: GenderLayoutProps) {
  return (
    <div className="gradient-bg min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg mx-auto text-center screen-fade">
        {/* Step indicator */}
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
          {step}
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl sm:text-4xl text-foreground mb-3"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-muted-foreground text-base mb-10 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

// ─── Gender Card ─────────────────────────────────────────────────────────────

interface GenderCardProps {
  ocid: string;
  emoji: string;
  label: string;
  description: string;
  onClick: () => void;
}

function GenderCard({
  ocid,
  emoji,
  label,
  description,
  onClick,
}: GenderCardProps) {
  return (
    <button
      type="button"
      data-ocid={ocid}
      onClick={onClick}
      className="group parchment-card rounded-2xl p-6 text-center border border-border hover:border-sage/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer text-left"
    >
      <div className="text-3xl mb-3 text-sage font-serif">{emoji}</div>
      <div className="font-display text-lg text-foreground mb-1">{label}</div>
      <div className="font-sans text-xs text-muted-foreground leading-relaxed">
        {description}
      </div>
    </button>
  );
}
