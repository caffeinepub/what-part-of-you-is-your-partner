import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import {
  Anchor,
  BookOpen,
  CheckCircle2,
  Heart,
  MessageCircle,
  Printer,
  RefreshCcw,
  Share2,
  Target,
  TrendingUp,
  XCircle,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { toast } from "sonner";
import {
  ATTACHMENT_DESCRIPTIONS,
  type PartnerGender,
  RESULT_CONTENT,
  SHADOW_DESCRIPTIONS,
  type ScoreResult,
  type SharePayload,
  type UserGender,
  encodeSharePayload,
} from "../quizData";

interface ResultsPageProps {
  scores: ScoreResult;
  userGender: UserGender;
  partnerGender: PartnerGender;
  answers: number[];
  onReset: () => void;
}

const SECTION_ICONS = [
  BookOpen,
  Zap,
  Anchor,
  Heart,
  Target,
  MessageCircle,
  TrendingUp,
];

const SECTION_LABELS = [
  "Your Likely Pattern",
  "What You're Projecting",
  "Your Attachment Style Signal",
  "What This Creates in Conflict",
  "Recommendation",
  "What to Say Next",
  "Do's & Don'ts",
];

export function ResultsPage({
  scores,
  userGender,
  partnerGender,
  answers,
  onReset,
}: ResultsPageProps) {
  const { primaryArchetype, secondaryArchetype, topAttachment, topShadow } =
    scores;

  const primary = RESULT_CONTENT[primaryArchetype];
  const secondary = RESULT_CONTENT[secondaryArchetype];

  const partnerLabel = {
    male: "a male partner",
    female: "a female partner",
    nonbinary: "a nonbinary/gender-fluid partner",
    prefer_not: "a partner",
  }[partnerGender];

  const spectrumLabel =
    userGender === "male"
      ? "Feminine Projection Spectrum"
      : "Masculine Projection Spectrum";

  function handleShare() {
    const payload: SharePayload = { userGender, partnerGender, answers };
    const encoded = encodeSharePayload(payload);
    const url = new URL(window.location.href);
    url.searchParams.set("r", encoded);
    navigator.clipboard.writeText(url.toString()).then(() => {
      toast.success("Link copied to clipboard", {
        description: "Share it to let someone see your results.",
      });
    });
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div className="gradient-bg min-h-screen">
      <Toaster position="top-center" />

      {/* Header */}
      <header className="pt-10 pb-5 px-6 text-center max-w-3xl mx-auto no-print">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3"
        >
          {spectrumLabel}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-foreground leading-tight mb-2"
          style={{
            fontSize: "clamp(1.6rem, 4.5vw, 2.75rem)",
            letterSpacing: "-0.015em",
          }}
        >
          Your Reflection
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-muted-foreground text-base"
        >
          In relationship with {partnerLabel}
        </motion.p>
      </header>

      {/* Primary result card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="px-4 mb-8 max-w-3xl mx-auto"
      >
        <div className="parchment-card rounded-3xl p-7 sm:p-9 border border-sage/20 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-sage-light/40 -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

          <div className="relative">
            <p className="font-sans text-xs uppercase tracking-[0.22em] text-sage mb-2">
              Primary Pattern
            </p>
            <h2
              className="font-display text-foreground mb-1 font-normal leading-none"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 3.75rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {primaryArchetype}
            </h2>
            <p className="font-sans text-xs text-muted-foreground mb-6">
              Secondary influence:{" "}
              <span
                className="italic font-serif text-foreground/65"
                style={{ fontSize: "0.85rem" }}
              >
                {secondaryArchetype}
              </span>
            </p>

            <div className="divider-ornament mb-5">
              <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                Core wound
              </span>
            </div>

            <p
              className="font-serif italic leading-relaxed mb-6"
              style={{
                fontSize: "clamp(1.05rem, 2.5vw, 1.2rem)",
                color: "oklch(var(--foreground) / 0.88)",
              }}
            >
              "{primary.coreWound}"
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <ResultBadge
                label="Attachment Signal"
                value={topAttachment}
                color="sage"
              />
              <ResultBadge
                label="Shadow Trigger"
                value={topShadow}
                color="rose"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Accordion sections */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="px-4 max-w-3xl mx-auto mb-10"
      >
        <Accordion type="multiple" className="space-y-3">
          {/* Section 1: Pattern */}
          <AccordionSection
            value="section-1"
            ocid="results.section.1"
            icon={SECTION_ICONS[0]}
            label={SECTION_LABELS[0]}
            index={1}
          >
            <SectionContent>
              <p className="font-serif text-base text-foreground/85 leading-relaxed">
                Your answers point most strongly toward the{" "}
                <strong className="font-display text-foreground">
                  {primaryArchetype}
                </strong>{" "}
                pattern, with a secondary current of{" "}
                <strong className="font-display text-foreground">
                  {secondaryArchetype}
                </strong>
                .
              </p>
              <p className="font-serif text-base text-foreground/85 leading-relaxed mt-3">
                {secondary.coreWound}
              </p>
              <AttachmentNote style={topAttachment} />
            </SectionContent>
          </AccordionSection>

          {/* Section 2: Projection */}
          <AccordionSection
            value="section-2"
            ocid="results.section.2"
            icon={SECTION_ICONS[1]}
            label={SECTION_LABELS[1]}
            index={2}
          >
            <SectionContent>
              <p className="font-serif text-base text-foreground/85 leading-relaxed">
                {primary.projection}
              </p>
              <div className="mt-5 p-4 rounded-xl bg-sage-light/40 border border-sage/20">
                <p className="font-sans text-xs uppercase tracking-widest text-sage mb-2">
                  Your shadow trigger: {topShadow}
                </p>
                <p className="font-serif text-sm text-foreground/80 leading-relaxed">
                  {SHADOW_DESCRIPTIONS[topShadow]}
                </p>
              </div>
            </SectionContent>
          </AccordionSection>

          {/* Section 3: Attachment */}
          <AccordionSection
            value="section-3"
            ocid="results.section.3"
            icon={SECTION_ICONS[2]}
            label={SECTION_LABELS[2]}
            index={3}
          >
            <SectionContent>
              <div className="mb-4">
                <span className="inline-block font-display text-2xl text-foreground mb-2">
                  {topAttachment}
                </span>
                <p className="font-serif text-base text-foreground/85 leading-relaxed">
                  {ATTACHMENT_DESCRIPTIONS[topAttachment]}
                </p>
              </div>

              {/* Score breakdown */}
              <div className="mt-5 space-y-2">
                {(
                  Object.entries(scores.attachmentScores) as [string, number][]
                ).map(([style, score]) => (
                  <div key={style} className="flex items-center gap-3">
                    <span className="font-sans text-xs text-muted-foreground w-44 flex-shrink-0">
                      {style}
                    </span>
                    <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          style === topAttachment
                            ? "bg-sage"
                            : "bg-muted-foreground/30"
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${(score / 10) * 100}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                    <span className="font-sans text-xs text-muted-foreground w-6 text-right">
                      {score}
                    </span>
                  </div>
                ))}
              </div>
            </SectionContent>
          </AccordionSection>

          {/* Section 4: Conflict pattern */}
          <AccordionSection
            value="section-4"
            ocid="results.section.4"
            icon={SECTION_ICONS[3]}
            label={SECTION_LABELS[3]}
            index={4}
          >
            <SectionContent>
              <p className="font-serif text-base text-foreground/85 leading-relaxed">
                {primary.conflictPattern}
              </p>
            </SectionContent>
          </AccordionSection>

          {/* Section 5: Recommendation */}
          <AccordionSection
            value="section-5"
            ocid="results.section.5"
            icon={SECTION_ICONS[4]}
            label={SECTION_LABELS[4]}
            index={5}
          >
            <SectionContent>
              <div className="mb-6">
                <p className="font-sans text-xs uppercase tracking-widest text-sage mb-3">
                  Realize
                </p>
                <ul className="space-y-3">
                  {primary.realize.map((item) => (
                    <li
                      key={item.slice(0, 30)}
                      className="flex gap-3 items-start"
                    >
                      <span className="mt-1 w-5 h-5 rounded-full bg-sage-light border border-sage/30 flex-shrink-0 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                      </span>
                      <span className="font-serif text-base text-foreground/85 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-rose mb-3">
                  Action
                </p>
                <ul className="space-y-3">
                  {primary.action.map((item) => (
                    <li
                      key={item.slice(0, 30)}
                      className="flex gap-3 items-start"
                    >
                      <span className="mt-1 w-5 h-5 rounded-full bg-accent flex-shrink-0 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose" />
                      </span>
                      <span className="font-serif text-base text-foreground/85 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionContent>
          </AccordionSection>

          {/* Section 6: Scripts */}
          <AccordionSection
            value="section-6"
            ocid="results.section.6"
            icon={SECTION_ICONS[5]}
            label={SECTION_LABELS[5]}
            index={6}
          >
            <SectionContent>
              <p className="font-serif text-sm text-muted-foreground mb-5 leading-relaxed">
                These are offered in the spirit of the book — calm, non-blaming,
                open-hearted. Adapt them to your own voice.
              </p>
              <div className="space-y-4">
                {primary.scripts.map((script) => (
                  <div key={script.slice(0, 30)} className="script-quote">
                    <p className="font-serif text-base text-foreground/85 leading-relaxed">
                      {script}
                    </p>
                  </div>
                ))}
              </div>
            </SectionContent>
          </AccordionSection>

          {/* Section 7: Dos & Don'ts + Growth */}
          <AccordionSection
            value="section-7"
            ocid="results.section.7"
            icon={SECTION_ICONS[6]}
            label={SECTION_LABELS[6]}
            index={7}
          >
            <SectionContent>
              <div className="grid sm:grid-cols-2 gap-6 mb-7">
                {/* Dos */}
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-sage mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Do
                  </p>
                  <ul className="space-y-2">
                    {primary.dos.map((item) => (
                      <li
                        key={item.slice(0, 30)}
                        className="flex gap-2.5 items-start font-serif text-sm text-foreground/85 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Don'ts */}
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-rose mb-3 flex items-center gap-2">
                    <XCircle className="w-3.5 h-3.5" />
                    Don't
                  </p>
                  <ul className="space-y-2">
                    {primary.donts.map((item) => (
                      <li
                        key={item.slice(0, 30)}
                        className="flex gap-2.5 items-start font-serif text-sm text-foreground/85 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Growth direction — ceremonial card */}
              <div
                className="rounded-2xl border border-gold/35 relative overflow-hidden"
                style={{
                  background: "oklch(var(--parchment))",
                  boxShadow:
                    "0 2px 20px oklch(var(--gold) / 0.10), 0 1px 4px oklch(var(--gold) / 0.08)",
                }}
              >
                {/* Gold left accent */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background: "oklch(var(--gold) / 0.7)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/6 via-transparent to-rose/4 pointer-events-none rounded-2xl" />
                <div className="relative px-7 py-6 pl-9">
                  <p
                    className="font-sans text-xs uppercase tracking-[0.22em] mb-3"
                    style={{ color: "oklch(var(--gold))" }}
                  >
                    Your growth direction
                  </p>
                  <p
                    className="font-serif leading-relaxed italic"
                    style={{
                      fontSize: "1.08rem",
                      color: "oklch(var(--foreground) / 0.88)",
                    }}
                  >
                    {primary.growthDirection}
                  </p>
                </div>
              </div>
            </SectionContent>
          </AccordionSection>
        </Accordion>
      </motion.div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="px-4 pb-16 max-w-3xl mx-auto no-print"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            data-ocid="results.reset_button"
            variant="outline"
            onClick={onReset}
            className="font-sans rounded-full border-border hover:border-sage/50 hover:bg-sage-light/30 transition-all"
          >
            <RefreshCcw className="w-4 h-4 mr-2" />
            Reset quiz
          </Button>
          <Button
            data-ocid="results.share_button"
            variant="outline"
            onClick={handleShare}
            className="font-sans rounded-full border-border hover:border-sage/50 hover:bg-sage-light/30 transition-all"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share results
          </Button>
          <Button
            data-ocid="results.print_button"
            variant="outline"
            onClick={handlePrint}
            className="font-sans rounded-full border-border hover:border-sage/50 hover:bg-sage-light/30 transition-all"
          >
            <Printer className="w-4 h-4 mr-2" />
            Print / Save PDF
          </Button>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="pb-8 text-center no-print">
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
        <p className="text-xs text-muted-foreground/60 font-sans mt-1 max-w-sm mx-auto px-4">
          Educational reflection only. Not a clinical assessment. Not a
          substitute for therapy.
        </p>
      </footer>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

interface AccordionSectionProps {
  value: string;
  ocid: string;
  icon: React.ElementType;
  label: string;
  index: number;
  children: React.ReactNode;
}

function AccordionSection({
  value,
  ocid,
  icon: Icon,
  label,
  children,
}: AccordionSectionProps) {
  return (
    <AccordionItem
      value={value}
      className="parchment-card rounded-2xl border border-border overflow-hidden"
    >
      <AccordionTrigger
        data-ocid={ocid}
        className="px-6 py-5 hover:no-underline hover:bg-sage-light/25 transition-colors [&[data-state=open]]:bg-sage-light/25 group"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-sage-light border border-sage/25 flex items-center justify-center flex-shrink-0 group-hover:border-sage/50 transition-colors">
            <Icon className="w-4 h-4 text-sage" />
          </div>
          <span className="font-display text-[1.05rem] text-foreground text-left tracking-tight">
            {label}
          </span>
        </div>
      </AccordionTrigger>
      {/* Divider between trigger and content when open */}
      <AccordionContent className="px-6 pb-7 pt-0">
        <div className="h-px bg-border mb-5" />
        <AnimatePresence>{children}</AnimatePresence>
      </AccordionContent>
    </AccordionItem>
  );
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

interface ResultBadgeProps {
  label: string;
  value: string;
  color: "sage" | "rose";
}

function ResultBadge({ label, value, color }: ResultBadgeProps) {
  return (
    <div
      className={`px-4 py-2 rounded-full border text-sm font-sans ${
        color === "sage"
          ? "bg-sage-light/50 border-sage/30 text-sage"
          : "bg-accent/60 border-rose/20 text-rose"
      }`}
    >
      <span className="opacity-70 text-xs">{label}: </span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

interface AttachmentNoteProps {
  style: string;
}

function AttachmentNote({ style }: AttachmentNoteProps) {
  return (
    <div className="mt-4 text-sm text-muted-foreground font-sans">
      Attachment signal: <strong>{style}</strong>
    </div>
  );
}
