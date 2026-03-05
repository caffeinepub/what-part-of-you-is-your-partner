import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { QUESTIONS } from "../quizData";

interface QuizScreenProps {
  currentQuestion: number; // 1-indexed
  answers: number[];
  onAnswer: (answerIndex: number) => void;
  onNext: () => void;
}

export function QuizScreen({
  currentQuestion,
  answers,
  onAnswer,
  onNext,
}: QuizScreenProps) {
  const questionIndex = currentQuestion - 1;
  const question = QUESTIONS[questionIndex];
  const selectedAnswer = answers[questionIndex] ?? -1;
  const progress = (currentQuestion / QUESTIONS.length) * 100;

  const direction = 1;

  if (!question) return null;

  const canProceed = selectedAnswer !== -1;

  return (
    <div className="gradient-bg min-h-screen flex flex-col">
      {/* Progress bar */}
      <div className="w-full h-1 bg-border">
        <motion.div
          className="h-full bg-sage progress-glow"
          initial={{
            width: `${((currentQuestion - 1) / QUESTIONS.length) * 100}%`,
          }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Header */}
      <header className="pt-6 pb-2 px-6 flex items-center justify-between max-w-2xl mx-auto w-full">
        <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          Question {currentQuestion} of {QUESTIONS.length}
        </span>
        <span className="font-sans text-xs text-muted-foreground">
          {question.theme}
        </span>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentQuestion}
              custom={direction}
              initial={{ opacity: 0, x: 30 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 * direction }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Question */}
              <h2
                className="font-display text-foreground mb-8 leading-snug text-center px-2 font-normal"
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                {question.question}
              </h2>

              {/* Options */}
              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const ocidMap = [
                    "quiz.option.1",
                    "quiz.option.2",
                    "quiz.option.3",
                    "quiz.option.4",
                  ];

                  return (
                    <motion.button
                      key={option.label}
                      data-ocid={ocidMap[index]}
                      onClick={() => onAnswer(index)}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                      className={`option-card w-full text-left px-5 py-4 sm:py-5 rounded-2xl border bg-card transition-all flex gap-4 items-start ${
                        isSelected ? "selected border-sage/60" : "border-border"
                      }`}
                    >
                      {/* Option label badge */}
                      <span
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans font-semibold transition-all duration-200 ${
                          isSelected
                            ? "bg-sage text-cream shadow-sm"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {isSelected ? "✓" : option.label}
                      </span>

                      {/* Option text */}
                      <span
                        className={`font-serif text-base leading-relaxed pt-0.5 transition-colors duration-200 ${
                          isSelected ? "text-foreground" : "text-foreground/85"
                        }`}
                      >
                        {option.text}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Next button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: canProceed ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-8 flex justify-center"
              >
                <Button
                  data-ocid="quiz.next_button"
                  onClick={onNext}
                  disabled={!canProceed}
                  size="lg"
                  className="bg-sage hover:bg-sage/90 text-cream font-sans px-8 py-5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-40 disabled:translate-y-0"
                >
                  {currentQuestion < QUESTIONS.length ? (
                    <>
                      Next question
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </>
                  ) : (
                    "See my results →"
                  )}
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Dots indicator */}
      <div className="pb-8 flex justify-center gap-1.5">
        {QUESTIONS.map((q) => (
          <div
            key={q.id}
            className={`rounded-full transition-all duration-300 ${
              q.id < currentQuestion
                ? "w-5 h-1.5 bg-sage"
                : q.id === currentQuestion
                  ? "w-5 h-1.5 bg-sage"
                  : "w-1.5 h-1.5 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
