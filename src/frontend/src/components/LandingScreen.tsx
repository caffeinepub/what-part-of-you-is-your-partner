import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface LandingScreenProps {
  onStart: () => void;
}

export function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <div className="gradient-bg min-h-screen flex flex-col">
      {/* Ornamental header */}
      <header className="pt-8 pb-4 text-center no-print">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-sm tracking-[0.25em] uppercase text-muted-foreground font-sans"
        >
          A Jungian Relationship Mirror
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="text-xs tracking-wide text-muted-foreground/70 font-sans mt-1"
        >
          By Greg Derbedrossian &mdash; Relationship &amp; Attachment Expert
          &mdash; Clinical Psychology (Summa Cum Laude)
        </motion.p>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full mx-auto text-center">
          {/* Ornamental top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-light border border-sage/30 mb-6">
              <Sparkles className="w-7 h-7 text-sage" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display text-foreground leading-[1.08] mb-5"
            style={{ fontSize: "clamp(2.4rem, 7vw, 4.5rem)" }}
          >
            <span className="block font-normal tracking-tight">
              What Part of You
            </span>
            <span
              className="block italic text-sage"
              style={{ fontSize: "1.12em", letterSpacing: "-0.01em" }}
            >
              is Your Partner?
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-serif text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg mx-auto"
          >
            A gentle self-inquiry based on Jungian projections, attachment
            patterns, and the feminine and masculine archetype spectrums.
          </motion.p>

          {/* What you'll discover */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="parchment-card rounded-2xl p-7 mb-10 text-left"
          >
            <p className="font-serif text-sm uppercase tracking-widest text-muted-foreground mb-4 text-center">
              What this reflection reveals
            </p>
            <ul className="space-y-2.5">
              {[
                "The relationship archetype most alive in you right now",
                "What you may be projecting onto your partner",
                "Your likely attachment style and how it shapes conflict",
                "Practical steps toward more conscious, grounded love",
                "Words to say to open the heart — yours, and theirs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                  <span className="font-serif text-foreground/80 text-base leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Start button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              data-ocid="landing.start_button"
              onClick={onStart}
              size="lg"
              className="bg-sage hover:bg-sage/90 text-cream font-sans px-10 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Begin the Reflection
            </Button>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-8 text-xs text-muted-foreground leading-relaxed max-w-md mx-auto font-sans"
          >
            This is an educational reflection tool, not a clinical assessment or
            substitute for therapy. It is offered in the spirit of Jungian
            self-inquiry — to illuminate patterns, not to diagnose. Please use
            it gently.
          </motion.p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center no-print">
        <p className="text-xs text-muted-foreground font-sans">
          © {new Date().getFullYear()}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Built with love using caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
