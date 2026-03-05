import { useEffect, useState } from "react";
import {
  PartnerGenderScreen,
  UserGenderScreen,
} from "./components/GenderScreen";
import { LandingScreen } from "./components/LandingScreen";
import { QuizScreen } from "./components/QuizScreen";
import { ResultsPage } from "./components/ResultsPage";
import {
  type PartnerGender,
  QUESTIONS,
  type ScoreResult,
  type UserGender,
  computeScores,
  decodeSharePayload,
} from "./quizData";

type Screen = "LANDING" | "USER_GENDER" | "PARTNER_GENDER" | "QUIZ" | "RESULTS";

export default function App() {
  const [screen, setScreen] = useState<Screen>("LANDING");
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [partnerGender, setPartnerGender] = useState<PartnerGender | null>(
    null,
  );
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [scores, setScores] = useState<ScoreResult | null>(null);

  // ── On mount: check for shared result in URL ──────────────────────────────
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get("r");
    if (encoded) {
      const payload = decodeSharePayload(encoded);
      if (
        payload?.userGender &&
        payload.partnerGender &&
        Array.isArray(payload.answers) &&
        payload.answers.length === QUESTIONS.length
      ) {
        const computed = computeScores(
          payload.answers,
          payload.userGender,
          payload.partnerGender,
        );
        setUserGender(payload.userGender);
        setPartnerGender(payload.partnerGender);
        setAnswers(payload.answers);
        setScores(computed);
        setScreen("RESULTS");
      }
    }
  }, []);

  // ── Handlers ──────────────────────────────────────────────────────────────

  function handleStart() {
    setScreen("USER_GENDER");
  }

  function handleUserGender(gender: UserGender) {
    setUserGender(gender);
    setScreen("PARTNER_GENDER");
  }

  function handlePartnerGender(gender: PartnerGender) {
    setPartnerGender(gender);
    setAnswers([]);
    setCurrentQuestion(1);
    setScreen("QUIZ");
  }

  function handleAnswer(answerIndex: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentQuestion - 1] = answerIndex;
      return next;
    });
  }

  function handleNext() {
    if (currentQuestion < QUESTIONS.length) {
      setCurrentQuestion((q) => q + 1);
    } else {
      // Compute results
      if (userGender && partnerGender) {
        const computed = computeScores(answers, userGender, partnerGender);
        setScores(computed);
        setScreen("RESULTS");
        // Clean URL
        window.history.replaceState({}, "", window.location.pathname);
      }
    }
  }

  function handleReset() {
    setScreen("LANDING");
    setUserGender(null);
    setPartnerGender(null);
    setAnswers([]);
    setCurrentQuestion(1);
    setScores(null);
    window.history.replaceState({}, "", window.location.pathname);
  }

  // ── Render ────────────────────────────────────────────────────────────────

  if (screen === "LANDING") {
    return <LandingScreen onStart={handleStart} />;
  }

  if (screen === "USER_GENDER") {
    return <UserGenderScreen onSelect={handleUserGender} />;
  }

  if (screen === "PARTNER_GENDER") {
    return <PartnerGenderScreen onSelect={handlePartnerGender} />;
  }

  if (screen === "QUIZ") {
    return (
      <QuizScreen
        currentQuestion={currentQuestion}
        answers={answers}
        onAnswer={handleAnswer}
        onNext={handleNext}
      />
    );
  }

  if (screen === "RESULTS" && scores && userGender && partnerGender) {
    return (
      <ResultsPage
        scores={scores}
        userGender={userGender}
        partnerGender={partnerGender}
        answers={answers}
        onReset={handleReset}
      />
    );
  }

  // Fallback (should not occur)
  return <LandingScreen onStart={handleStart} />;
}
