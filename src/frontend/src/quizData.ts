// ─── Archetype & Attachment Types ───────────────────────────────────────────

export type FeminineArchetype =
  | "Eve"
  | "Ice Queen"
  | "Dark Queen"
  | "Helen"
  | "Lilith"
  | "Maiden"
  | "Mary"
  | "High Priestess"
  | "Sophia";

export type MasculineArchetype =
  | "Stoic"
  | "Tyrant"
  | "Shadow King"
  | "Don Juan"
  | "Trickster"
  | "Wounded Hero"
  | "Saint"
  | "Mentor"
  | "Logos";

export type Archetype = FeminineArchetype | MasculineArchetype;

export type AttachmentStyle =
  | "Secure"
  | "Anxious-Preoccupied"
  | "Dismissive-Avoidant"
  | "Fearful-Avoidant";

export type ShadowTrigger =
  | "Anger"
  | "Jealousy"
  | "Contempt"
  | "Shame"
  | "Withdrawal"
  | "Idolization";

// ─── Score Buckets ──────────────────────────────────────────────────────────

export type ArchetypeScores = Record<Archetype, number>;
export type AttachmentScores = Record<AttachmentStyle, number>;
export type ShadowScores = Record<ShadowTrigger, number>;

export interface ScoreResult {
  archetypeScores: ArchetypeScores;
  attachmentScores: AttachmentScores;
  shadowScores: ShadowScores;
  primaryArchetype: Archetype;
  secondaryArchetype: Archetype;
  topAttachment: AttachmentStyle;
  topShadow: ShadowTrigger;
}

// ─── Quiz Answer Scoring Map ─────────────────────────────────────────────────

export interface AnswerScore {
  archetypes: Partial<Record<Archetype, number>>;
  attachment: AttachmentStyle;
  shadow: ShadowTrigger;
}

export interface QuizOption {
  label: string;
  text: string;
  scores: AnswerScore;
}

export interface QuizQuestion {
  id: number;
  theme: string;
  question: string;
  options: QuizOption[];
}

// ─── Questions ───────────────────────────────────────────────────────────────

export const QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    theme: "Conflict style under stress",
    question: "When a disagreement gets intense, what do you most often do?",
    options: [
      {
        label: "A",
        text: "I push to resolve it immediately — silence feels unbearable",
        scores: {
          archetypes: { Maiden: 2, Lilith: 2 },
          attachment: "Anxious-Preoccupied",
          shadow: "Anger",
        },
      },
      {
        label: "B",
        text: "I go quiet and withdraw until I feel safe",
        scores: {
          archetypes: { Stoic: 2, "Ice Queen": 2 },
          attachment: "Dismissive-Avoidant",
          shadow: "Withdrawal",
        },
      },
      {
        label: "C",
        text: "I raise my voice or say things I later regret",
        scores: {
          archetypes: { Tyrant: 2, "Dark Queen": 2 },
          attachment: "Fearful-Avoidant",
          shadow: "Anger",
        },
      },
      {
        label: "D",
        text: "I try to name what I'm feeling and find a middle ground",
        scores: {
          archetypes: { Sophia: 2, Logos: 2 },
          attachment: "Secure",
          shadow: "Shame",
        },
      },
    ],
  },
  {
    id: 2,
    theme: "Reaction to distance",
    question:
      "When your partner goes quiet or takes hours to reply, you typically:",
    options: [
      {
        label: "A",
        text: "Feel a spike of anxiety and send multiple follow-up messages",
        scores: {
          archetypes: { Maiden: 2, "Wounded Hero": 2 },
          attachment: "Anxious-Preoccupied",
          shadow: "Jealousy",
        },
      },
      {
        label: "B",
        text: "Tell yourself they're busy and feel fine until they reach out",
        scores: {
          archetypes: { Sophia: 2, Mentor: 2 },
          attachment: "Secure",
          shadow: "Withdrawal",
        },
      },
      {
        label: "C",
        text: "Feel relieved — space is welcome",
        scores: {
          archetypes: { "Ice Queen": 2, Stoic: 2 },
          attachment: "Dismissive-Avoidant",
          shadow: "Withdrawal",
        },
      },
      {
        label: "D",
        text: "Oscillate between 'they're fine' and 'something is wrong with me'",
        scores: {
          archetypes: { Lilith: 2, "Shadow King": 2 },
          attachment: "Fearful-Avoidant",
          shadow: "Shame",
        },
      },
    ],
  },
  {
    id: 3,
    theme: "Control vs. engulfment",
    question:
      "In a close relationship, which tension do you feel most strongly?",
    options: [
      {
        label: "A",
        text: "I worry I'll lose myself if I get too close",
        scores: {
          archetypes: { "Ice Queen": 2, Stoic: 2 },
          attachment: "Dismissive-Avoidant",
          shadow: "Contempt",
        },
      },
      {
        label: "B",
        text: "I worry my partner will leave if I'm not enough",
        scores: {
          archetypes: { Maiden: 2, "Wounded Hero": 2 },
          attachment: "Anxious-Preoccupied",
          shadow: "Shame",
        },
      },
      {
        label: "C",
        text: "I want to be in control of how close we get — on my terms",
        scores: {
          archetypes: { "Dark Queen": 2, Tyrant: 2 },
          attachment: "Fearful-Avoidant",
          shadow: "Contempt",
        },
      },
      {
        label: "D",
        text: "I feel mostly comfortable with closeness and distance naturally shifting",
        scores: {
          archetypes: { "High Priestess": 2, Logos: 2 },
          attachment: "Secure",
          shadow: "Idolization",
        },
      },
    ],
  },
  {
    id: 4,
    theme: "Idealization & devaluation",
    question:
      "Has a partner ever gone from feeling 'perfect' to 'impossible' very quickly for you?",
    options: [
      {
        label: "A",
        text: "Yes — I can put them on a pedestal, then feel intensely disappointed",
        scores: {
          archetypes: { Helen: 2, "Don Juan": 2 },
          attachment: "Anxious-Preoccupied",
          shadow: "Idolization",
        },
      },
      {
        label: "B",
        text: "No — I tend to see people's flaws early and keep my expectations low",
        scores: {
          archetypes: { Stoic: 2, "Ice Queen": 2 },
          attachment: "Dismissive-Avoidant",
          shadow: "Contempt",
        },
      },
      {
        label: "C",
        text: "Yes — I swing between feeling they complete me and resenting them",
        scores: {
          archetypes: { Lilith: 2, "Shadow King": 2 },
          attachment: "Fearful-Avoidant",
          shadow: "Idolization",
        },
      },
      {
        label: "D",
        text: "I try to hold a realistic, compassionate view even when I'm hurt",
        scores: {
          archetypes: { Sophia: 2, Mentor: 2 },
          attachment: "Secure",
          shadow: "Shame",
        },
      },
    ],
  },
  {
    id: 5,
    theme: "Jealousy & replacement sensitivity",
    question: "When your partner spends time with someone attractive, you:",
    options: [
      {
        label: "A",
        text: "Feel a sharp pang and want to know every detail",
        scores: {
          archetypes: { Eve: 2, "Wounded Hero": 2 },
          attachment: "Anxious-Preoccupied",
          shadow: "Jealousy",
        },
      },
      {
        label: "B",
        text: "Trust them completely — jealousy rarely enters the picture",
        scores: {
          archetypes: { Sophia: 2, Logos: 2 },
          attachment: "Secure",
          shadow: "Idolization",
        },
      },
      {
        label: "C",
        text: "Feel a quiet contempt or pull back emotionally as a protective move",
        scores: {
          archetypes: { "Dark Queen": 2, Tyrant: 2 },
          attachment: "Dismissive-Avoidant",
          shadow: "Contempt",
        },
      },
      {
        label: "D",
        text: "Feel threatened and may test them or become passive-aggressive",
        scores: {
          archetypes: { Lilith: 2, "Shadow King": 2 },
          attachment: "Fearful-Avoidant",
          shadow: "Jealousy",
        },
      },
    ],
  },
  {
    id: 6,
    theme: "Emotional availability",
    question:
      "How would your partner most likely describe your emotional presence?",
    options: [
      {
        label: "A",
        text: "Warm and all-in — sometimes too much",
        scores: {
          archetypes: { Mary: 2, Saint: 2 },
          attachment: "Anxious-Preoccupied",
          shadow: "Shame",
        },
      },
      {
        label: "B",
        text: "Cool, reliable, but hard to read",
        scores: {
          archetypes: { "Ice Queen": 2, Stoic: 2 },
          attachment: "Dismissive-Avoidant",
          shadow: "Withdrawal",
        },
      },
      {
        label: "C",
        text: "Intense and magnetic — unpredictable in highs and lows",
        scores: {
          archetypes: { Lilith: 2, "Don Juan": 2 },
          attachment: "Fearful-Avoidant",
          shadow: "Anger",
        },
      },
      {
        label: "D",
        text: "Present, honest, and willing to be vulnerable",
        scores: {
          archetypes: { "High Priestess": 2, Mentor: 2 },
          attachment: "Secure",
          shadow: "Idolization",
        },
      },
    ],
  },
  {
    id: 7,
    theme: "Fixing & rescuing",
    question: "In relationships, which pattern feels most like you?",
    options: [
      {
        label: "A",
        text: "I often try to help or fix my partner's pain — I feel responsible for their happiness",
        scores: {
          archetypes: { Mary: 2, Saint: 2 },
          attachment: "Anxious-Preoccupied",
          shadow: "Shame",
        },
      },
      {
        label: "B",
        text: "I prefer we both handle our own problems — dependency feels suffocating",
        scores: {
          archetypes: { Stoic: 2, "Ice Queen": 2 },
          attachment: "Dismissive-Avoidant",
          shadow: "Contempt",
        },
      },
      {
        label: "C",
        text: "I can play the saviour, then feel resentful when it's not reciprocated",
        scores: {
          archetypes: { "Wounded Hero": 2, "Dark Queen": 2 },
          attachment: "Fearful-Avoidant",
          shadow: "Anger",
        },
      },
      {
        label: "D",
        text: "I offer support while respecting their autonomy and my own limits",
        scores: {
          archetypes: { Sophia: 2, Logos: 2 },
          attachment: "Secure",
          shadow: "Withdrawal",
        },
      },
    ],
  },
  {
    id: 8,
    theme: "Stability vs. volatility",
    question:
      "How would you describe the emotional climate you tend to create in relationships?",
    options: [
      {
        label: "A",
        text: "Passionate and intense — we have great highs but real storms",
        scores: {
          archetypes: { Helen: 2, "Don Juan": 2 },
          attachment: "Fearful-Avoidant",
          shadow: "Anger",
        },
      },
      {
        label: "B",
        text: "Stable and predictable — I avoid drama even if it means suppressing feelings",
        scores: {
          archetypes: { Stoic: 2, Mary: 2 },
          attachment: "Dismissive-Avoidant",
          shadow: "Withdrawal",
        },
      },
      {
        label: "C",
        text: "Warm but anxious — I need frequent reassurance to feel steady",
        scores: {
          archetypes: { Maiden: 2, "Wounded Hero": 2 },
          attachment: "Anxious-Preoccupied",
          shadow: "Shame",
        },
      },
      {
        label: "D",
        text: "Generally calm — I can hold space for difficulty without losing myself",
        scores: {
          archetypes: { "High Priestess": 2, Mentor: 2 },
          attachment: "Secure",
          shadow: "Idolization",
        },
      },
    ],
  },
  {
    id: 9,
    theme: "Shame & criticism sensitivity",
    question:
      "When your partner criticises something you did, your first internal response is:",
    options: [
      {
        label: "A",
        text: "Immediate shame — I take it very personally and replay it",
        scores: {
          archetypes: { Maiden: 2, "Wounded Hero": 2 },
          attachment: "Anxious-Preoccupied",
          shadow: "Shame",
        },
      },
      {
        label: "B",
        text: "Detachment — criticism rarely lands deeply, I move on quickly",
        scores: {
          archetypes: { "Ice Queen": 2, Stoic: 2 },
          attachment: "Dismissive-Avoidant",
          shadow: "Contempt",
        },
      },
      {
        label: "C",
        text: "Defensiveness or counter-attack — being criticised feels like an attack",
        scores: {
          archetypes: { "Dark Queen": 2, Tyrant: 2 },
          attachment: "Fearful-Avoidant",
          shadow: "Anger",
        },
      },
      {
        label: "D",
        text: "Curiosity — I try to understand their point, even if it stings at first",
        scores: {
          archetypes: { Sophia: 2, Logos: 2 },
          attachment: "Secure",
          shadow: "Shame",
        },
      },
    ],
  },
  {
    id: 10,
    theme: "Capacity for repair",
    question: "After a conflict, what is most true for you?",
    options: [
      {
        label: "A",
        text: "I want to reconnect quickly — I'll apologise even when I'm not sure it was my fault",
        scores: {
          archetypes: { Mary: 2, Maiden: 2 },
          attachment: "Anxious-Preoccupied",
          shadow: "Shame",
        },
      },
      {
        label: "B",
        text: "I need significant time alone before I can re-engage — sometimes days",
        scores: {
          archetypes: { Stoic: 2, "Ice Queen": 2 },
          attachment: "Dismissive-Avoidant",
          shadow: "Withdrawal",
        },
      },
      {
        label: "C",
        text: "I find genuine repair difficult — I tend to hold onto resentment",
        scores: {
          archetypes: { "Dark Queen": 2, "Shadow King": 2 },
          attachment: "Fearful-Avoidant",
          shadow: "Contempt",
        },
      },
      {
        label: "D",
        text: "I believe in honest repair — naming what happened and rebuilding together",
        scores: {
          archetypes: { Sophia: 2, Logos: 2 },
          attachment: "Secure",
          shadow: "Idolization",
        },
      },
    ],
  },
];

// ─── Archetype Spectrum Groups ───────────────────────────────────────────────

export const FEMININE_ARCHETYPES: FeminineArchetype[] = [
  "Eve",
  "Ice Queen",
  "Dark Queen",
  "Helen",
  "Lilith",
  "Maiden",
  "Mary",
  "High Priestess",
  "Sophia",
];

export const MASCULINE_ARCHETYPES: MasculineArchetype[] = [
  "Stoic",
  "Tyrant",
  "Shadow King",
  "Don Juan",
  "Trickster",
  "Wounded Hero",
  "Saint",
  "Mentor",
  "Logos",
];

// ─── Result Content ───────────────────────────────────────────────────────────

export interface ArchetypeResult {
  coreWound: string;
  projection: string;
  conflictPattern: string;
  realize: string[];
  action: string[];
  scripts: string[];
  dos: string[];
  donts: string[];
  growthDirection: string;
}

export const RESULT_CONTENT: Record<Archetype, ArchetypeResult> = {
  Eve: {
    coreWound:
      "The fear of abandonment dressed as devotion. You give endlessly hoping it will make you unforgettable.",
    projection:
      "You project your disowned need for independence onto your partner. Their freedom triggers your deepest fear: that without giving, you are not enough.",
    conflictPattern:
      "Over-giving leads to resentment. You attract partners who take without reciprocating, confirming your belief that love requires constant self-sacrifice.",
    realize: [
      "Notice when you are doing for others what you need to do for yourself. Ask: 'Am I giving from fullness, or from fear of losing them?'",
      "Journal on where you first learned that love had to be earned. Whose approval were you trying to keep?",
    ],
    action: [
      "Practice receiving. When someone offers care, pause before deflecting. Let it land.",
      "Introduce one boundary this week — something you say no to, not out of punishment, but out of self-respect.",
      "Consider therapy focused on attachment and self-worth, especially if this pattern is long-standing.",
    ],
    scripts: [
      "'I notice I've been over-giving. I want to love you freely, not out of fear of losing you.'",
      "'I'm learning to trust that I'm enough without always doing more. I need a little patience from you while I find that balance.'",
    ],
    dos: [
      "Honour your own needs as a baseline, not a reward",
      "Allow your partner to show up for you — it's fair",
      "Speak your truth gently but without apology",
    ],
    donts: [
      "Don't measure your worth by how much you sacrifice",
      "Don't confuse neediness in others as proof of love",
      "Don't wait for permission to take up space in the relationship",
    ],
    growthDirection:
      "Your path leads toward Sophia — the woman who loves from wisdom and wholeness, not from wound. You are already generous. The work is learning that your presence, not your performance, is what creates real intimacy.",
  },

  "Ice Queen": {
    coreWound:
      "Emotional pain was once overwhelming, so you built a fortress. Distance became survival.",
    projection:
      "You project your disowned vulnerability and need for warmth onto others. Emotionally expressive people both attract and irritate you — they carry what you've buried.",
    conflictPattern:
      "Partners feel shut out and escalate to reach you. Your withdrawal is read as indifference, triggering their anxiety — which confirms your belief that closeness is dangerous.",
    realize: [
      "Notice the moment you shut down in conflict. What is the emotion underneath the stillness? Name it, even just to yourself.",
      "Ask yourself: when did emotional expression become unsafe? Whose emotional world were you managing as a child?",
    ],
    action: [
      "Try one small act of emotional disclosure this week — not a revelation, just a feeling. 'I felt hurt when...' is enough.",
      "Allow your partner 60 seconds to express themselves without fixing, problem-solving, or leaving the room.",
      "Consider somatic or body-based therapy if numbness is persistent — the feelings are there, they just need a safe door.",
    ],
    scripts: [
      "'I go quiet when I'm overwhelmed. It's not rejection. I'm learning to stay.'",
      "'I care more than I show. I'm working on letting that be visible.'",
    ],
    dos: [
      "Give yourself permission to feel without immediately managing or analysing",
      "Acknowledge your partner's emotional experience even if you don't share it",
      "Recognise that vulnerability is not weakness — it is the only path to real closeness",
    ],
    donts: [
      "Don't mistake emotional distance for strength",
      "Don't let logic become a weapon to dismiss feeling",
      "Don't wait until you've 'worked it all out' before reconnecting",
    ],
    growthDirection:
      "Your path leads toward High Priestess — the woman who holds both wisdom and warmth, who is still and present rather than still and absent. Your depth is your gift. The work is letting someone in.",
  },

  "Dark Queen": {
    coreWound:
      "Power became your protection. When love felt unsafe, control felt like the only sane response.",
    projection:
      "You project your disowned helplessness and tenderness. Softness in others can trigger contempt — because you've had to suppress your own.",
    conflictPattern:
      "You may dominate, punish with silence, or use intensity as a control mechanism. Partners either submit or leave, confirming that closeness always costs someone.",
    realize: [
      "Notice when you are managing an emotion by controlling the environment instead of feeling it. Ask: 'What am I actually afraid of right now?'",
      "Explore where you first learned that showing need was dangerous. Who required you to be strong at a cost?",
    ],
    action: [
      "Experiment with one moment of allowing your partner to lead — noticing what arises in you when you're not in control.",
      "Replace one critical statement this week with a request: not 'you always...' but 'I need...'",
      "Therapist-assisted shadow work is strongly recommended to explore the tender parts behind the armour.",
    ],
    scripts: [
      "'I've been controlling things because I'm scared, not because I don't trust you. I want to work on that.'",
      "'I know I can come across as harsh. What I actually feel is more fragile than I let on.'",
    ],
    dos: [
      "Distinguish between strength and armour — one empowers, one isolates",
      "Let tenderness be a sign of security, not risk",
      "Use your power to build safety, not manage threats",
    ],
    donts: [
      "Don't mistake your partner's boundaries for abandonment",
      "Don't use contempt as a distance-creator",
      "Don't confuse emotional intensity with emotional intimacy",
    ],
    growthDirection:
      "Your path leads toward Sophia — a woman who is powerful AND soft, whose authority comes from wholeness rather than defence. The queen who no longer needs walls is the most formidable of all.",
  },

  Helen: {
    coreWound:
      "Your identity became entangled with being desired. Love feels real only when it feels dramatic.",
    projection:
      "You project your disowned ordinariness onto partners. You may unconsciously create drama to test whether love can survive it — or to feel alive within it.",
    conflictPattern:
      "Intensity cycles — passion, rupture, reunion — become the heartbeat of the relationship. The calm that follows conflict feels boring, which seeds the next storm.",
    realize: [
      "Ask yourself: 'Do I feel more real in crisis than in peace?' This is the pattern to observe, not judge.",
      "Notice if you are attracted to partners who require a lot of 'work.' What does that effort feel like in your body — anxiety or aliveness?",
    ],
    action: [
      "Practice sitting with quiet connection. A boring Tuesday is not a sign the love is dead — it is the love stabilising.",
      "When you feel the urge to escalate, try naming the feeling instead: 'I feel restless' or 'I'm scared we're becoming ordinary.'",
      "Consider whether passion addiction is at play and explore it with a therapist who understands attachment and nervous system regulation.",
    ],
    scripts: [
      "'I realise I sometimes stir things up when I'm scared the connection is fading. I want to stop doing that.'",
      "'I want real intimacy, not just intensity. I'm willing to work on the difference.'",
    ],
    dos: [
      "Learn to find beauty in constancy",
      "Value repair as much as romance",
      "Invest in connection rituals that don't require crisis",
    ],
    donts: [
      "Don't equate intensity with depth",
      "Don't sabotage stability because stillness feels like loss",
      "Don't use your partner's jealousy or attention as proof of love",
    ],
    growthDirection:
      "Your path leads toward High Priestess — a woman who is captivating AND still, whose presence draws people in without needing spectacle. Real love does not need a storm to prove it exists.",
  },

  Lilith: {
    coreWound:
      "You were once controlled or diminished, and you vowed never again. Autonomy became sacred, sometimes at the cost of intimacy.",
    projection:
      "You project your disowned need for belonging and softness. Partners who are emotionally available may feel threatening — their warmth can feel like a trap.",
    conflictPattern:
      "You may self-sabotage at the point of real closeness, reading genuine love as possession. A push-pull dynamic keeps partners uncertain and keeps you feeling free but lonely.",
    realize: [
      "Notice the moment closeness begins to feel like confinement. Is that your present reality — or an old story?",
      "Ask: 'Am I protecting real freedom, or am I protecting a wound that looks like freedom?'",
    ],
    action: [
      "Practise staying one moment longer in closeness than feels comfortable. Discomfort is not always danger.",
      "Communicate the fear rather than acting on it: 'I feel myself wanting to pull away. I'm not sure why yet, but I want to stay.'",
      "Explore your relational history with a therapist. The wound that taught you that love means losing yourself can be healed.",
    ],
    scripts: [
      "'I sometimes run before I'm truly in danger. I'm learning to tell the difference between a real threat and old fear.'",
      "'I want to be free AND close. I'm working on believing those two things can coexist.'",
    ],
    dos: [
      "Honour your autonomy AND your need for connection — they are not opposites",
      "Let your partner be an individual, not a symbol of past confinement",
      "Stay curious about your triggers rather than immediately acting on them",
    ],
    donts: [
      "Don't confuse love with loss of self",
      "Don't punish partners for the wounds others left",
      "Don't mistake chaos for freedom",
    ],
    growthDirection:
      "Your path leads toward Sophia — the woman who is whole unto herself AND capable of profound union. The deepest freedom is not distance. It is presence without fear.",
  },

  Maiden: {
    coreWound:
      "You carry the belief that you are not yet ready, not yet enough. Dependency can feel safer than the terrifying risk of standing in your own authority.",
    projection:
      "You project your disowned confidence and self-direction onto strong partners. You may attract people who lead, rescue, or guide — and quietly resent them for it.",
    conflictPattern:
      "Excessive reassurance-seeking and over-reliance can suffocate partners. When they pull back to breathe, your anxiety spikes, confirming the belief that you are too much.",
    realize: [
      "Notice when you are seeking reassurance to soothe a fear only you can address. Ask: 'What would I do if I trusted myself here?'",
      "Journal on one decision you've been outsourcing to others. Make it yourself. Notice what happens.",
    ],
    action: [
      "Take one autonomous action this week that belongs entirely to you — no consultation required.",
      "When anxiety spikes, try self-soothing before reaching for your partner. A five-minute solo grounding practice is powerful.",
      "Work with a therapist or coach on self-efficacy. Growing up is not a betrayal of tenderness — it is its fullest expression.",
    ],
    scripts: [
      "'I know I lean on you a lot. I'm working on building more trust in myself so our love can feel lighter.'",
      "'I don't want you to be my parent. I want you to be my partner. That means I need to grow into that too.'",
    ],
    dos: [
      "Celebrate small acts of self-reliance",
      "Bring your full voice into decisions, not just your agreement",
      "Trust that your needs are reasonable and worth expressing clearly",
    ],
    donts: [
      "Don't make your partner responsible for your emotional regulation",
      "Don't apologise for having needs — only for how you express them",
      "Don't confuse self-development with losing your softness",
    ],
    growthDirection:
      "Your path leads toward High Priestess — a woman of quiet inner authority who loves from strength, not from need. You are ready. You have always been ready. The work is believing it.",
  },

  Mary: {
    coreWound:
      "Love became synonymous with sacrifice. You believe your value lies in being needed, not in being known.",
    projection:
      "You project your disowned need to be cared for. Martyrdom is the shadow — giving until resentment accumulates and eventually erupts, confusing everyone.",
    conflictPattern:
      "Chronic over-functioning breeds quiet resentment. Partners don't know you need anything because you never ask. When you finally break, it feels disproportionate to them.",
    realize: [
      "Track one day where you notice every time you give without being asked. How many moments were from love — and how many were to avoid the guilt of not giving?",
      "Ask yourself: 'What do I actually need right now?' Sit with the answer. It is not selfish. It is necessary.",
    ],
    action: [
      "Make one direct request this week without softening it into a suggestion or apology.",
      "Practise receiving care without immediately returning it — let it be asymmetrical for a moment.",
      "Work on the belief that your needs are a burden. They are not. In healthy love, your needs are an invitation.",
    ],
    scripts: [
      "'I've been giving a lot and not asking for much. I want to change that — not because I'm upset, but because I want us to be more balanced.'",
      "'I need something. I know that might surprise you. But I'm practising asking.'",
    ],
    dos: [
      "Let yourself be known, not just needed",
      "Ask directly — people cannot give what they don't know you want",
      "Value rest as much as giving",
    ],
    donts: [
      "Don't keep score silently while giving openly",
      "Don't make your resentment your partner's problem when you never expressed the need",
      "Don't confuse self-sacrifice with love — it is fear wearing love's clothes",
    ],
    growthDirection:
      "Your path leads toward Sophia — a woman who loves generously AND receives fully. The holiest love is not one-sided. Real devotion includes yourself.",
  },

  "High Priestess": {
    coreWound:
      "You understand so much that sometimes you hover above the emotional field rather than entering it. Wisdom without surrender can become isolation.",
    projection:
      "You project your disowned emotional chaos and rawness. Deep, messy feeling in others may unsettle or quietly fascinate you. You may be waiting to feel safe enough to truly let go.",
    conflictPattern:
      "Your insight can be used to manage distance — analysing rather than feeling, advising rather than connecting. Partners may feel they have a counsellor, not a partner.",
    realize: [
      "Notice when you retreat into your head during emotional moments. The question is not 'what is happening?' — it is 'what am I feeling?'",
      "Explore what it would mean to be emotionally surprised by someone — to not have the answer. Is that terrifying or freeing?",
    ],
    action: [
      "Practise one moment of emotional nakedness per week — sharing a feeling before you've understood it.",
      "Let your partner see you uncertain. It is not weakness. It is intimacy.",
      "Explore embodiment practices (breathwork, somatic therapy) if you find that feelings live in your head rather than your body.",
    ],
    scripts: [
      "'I process a lot alone. I want to learn to let you in while I'm still figuring things out.'",
      "'I don't always know what I feel right away. But I want to try to share it with you before I have it all sorted.'",
    ],
    dos: [
      "Trust emotional messiness as part of genuine intimacy",
      "Let love be something that happens to you, not only something you understand",
      "Value your partner's emotional world, even when it is less ordered than yours",
    ],
    donts: [
      "Don't use analysis as armour",
      "Don't mistake insight for intimacy",
      "Don't wait until you've processed everything to let your partner in",
    ],
    growthDirection:
      "You are already close to Sophia. The final step is the step down from the tower — into the messy, beautiful, unscripted field of real human love. You are wise enough to survive it.",
  },

  Sophia: {
    coreWound:
      "Even integrated beings carry old echoes. Yours may be an occasional tendency to over-spiritualise difficulty, or to expect others to have done the same work you have.",
    projection:
      "Your shadow is subtle — perhaps impatience with unexamined people, or a quiet belief that if they just understood themselves, everything would be fine.",
    conflictPattern:
      "Occasional over-functioning as the 'grounded one,' taking on too much emotional stewardship in the relationship.",
    realize: [
      "Notice when your groundedness becomes a form of control — when staying calm is a way of not fully showing up.",
      "Explore whether you allow yourself to be truly met, or whether you unconsciously keep a slight edge of independence as insurance.",
    ],
    action: [
      "Invite your partner into genuine co-creation rather than offering wisdom from a position of relative remove.",
      "Let yourself be held sometimes. You don't always have to be the steady one.",
      "Celebrate this: you have done significant inner work. Now the practice is letting it deepen in relationship, not just in solitude.",
    ],
    scripts: [
      "'I want us to grow together — not just side by side, but truly interwoven.'",
      "'I'm learning that real intimacy means I need to be as vulnerable as I want you to be.'",
    ],
    dos: [
      "Let love remain a living, imperfect practice",
      "Allow your partner to surprise you",
      "Bring humility to your strength",
    ],
    donts: [
      "Don't mistake equanimity for emotional presence",
      "Don't spiritualise pain when it simply needs to be felt",
      "Don't expect others to have arrived where you are",
    ],
    growthDirection:
      "You are the destination for many of these patterns. Your continued growth lies in deepening reciprocity — love that is not just given wisely, but received fully and with wonder.",
  },

  Stoic: {
    coreWound:
      "Emotion was weakness where you grew up — or it was simply not safe. Competence became the only currency of value.",
    projection:
      "You project your disowned emotional life onto others. Feeling people attract and frustrate you. Their expressiveness is the part of you that has never been permitted to speak.",
    conflictPattern:
      "Partners feel alone in the relationship's emotional life. Your reliability is real, but your absence behind it leaves an intimacy gap that quietly widens.",
    realize: [
      "Notice when you substitute action or problem-solving for emotional presence. Ask: 'What is my partner actually needing right now — a solution, or to feel less alone?'",
      "Track a week of emotional moments you deflected. What was underneath each one?",
    ],
    action: [
      "Try staying present for one emotional conversation without offering a fix. Just listen. Ask: 'Is there more?'",
      "Name one feeling per day — to yourself first, then perhaps to your partner. This is not indulgence. It is integration.",
      "Consider a therapist or men's group focused on emotional literacy. You are not broken. You were taught to be like this. It can be untaught.",
    ],
    scripts: [
      "'I'm not always good at saying this, but what you're going through matters to me. I'm here.'",
      "'I know I go quiet. I'm working on being more present even when I don't have the answers.'",
    ],
    dos: [
      "Value emotional presence as much as practical reliability",
      "Let your steadiness be warm, not just solid",
      "Allow yourself to not know — it opens doors words cannot",
    ],
    donts: [
      "Don't use logic to dismiss what feelings are communicating",
      "Don't mistake silence for strength when it is actually distance",
      "Don't expect your partner to be satisfied with actions alone",
    ],
    growthDirection:
      "Your path leads toward Mentor — a man who is strong AND present, who brings his wisdom AND his warmth. The most powerful thing you can do is let someone truly see you.",
  },

  Tyrant: {
    coreWound:
      "Powerlessness was once your reality. Control became the antidote. But the armour became the prison.",
    projection:
      "You project your disowned vulnerability and need to be held. In others, softness and need trigger contempt — because they remind you of the part of yourself you were forced to bury.",
    conflictPattern:
      "Control tactics — whether overt or subtle — create fear or shutdown in partners. They comply or leave. Either outcome confirms that power, not love, is what holds relationships together.",
    realize: [
      "Notice when control is fear in disguise. Ask: 'What am I actually afraid of losing right now?'",
      "Trace the origins of your need to dominate. Who had power over you? Who needed you to be in control?",
    ],
    action: [
      "Practise one intentional act of relinquishing control this week — let your partner make a decision without your input.",
      "Replace demands with disclosures: 'I feel afraid when...' is more honest than 'You need to...'",
      "Individual therapy, particularly work on shame and early power dynamics, is strongly recommended.",
    ],
    scripts: [
      "'I know I can be controlling. I'm trying to understand what drives it. I want a partnership, not a kingdom.'",
      "'When I feel out of control, I get demanding. I'm working on catching that before it gets to you.'",
    ],
    dos: [
      "See your partner as an ally, not a territory to manage",
      "Let love be something you receive, not just enforce",
      "Use your strength to create safety, not submission",
    ],
    donts: [
      "Don't confuse compliance with love — one is fear, one is choice",
      "Don't let shame about your pattern cause you to double down on it",
      "Don't mistake your certainty for truth",
    ],
    growthDirection:
      "Your path leads toward Logos — a man who leads through integrity and transparency, whose authority is earned through love, not enforced through fear. The strongest men are the ones who no longer need to prove it.",
  },

  "Shadow King": {
    coreWound:
      "You carry the wound of misused or withheld power. You may have inherited or lived through authority that was corrupt — and absorbed it.",
    projection:
      "You project the disowned 'good king' — fairness, accountability, genuine care. You are drawn to people who embody these, and you may undermine them.",
    conflictPattern:
      "Passive power dynamics — strategic withdrawal, subtle manipulation, or undermining — replace open conflict. Partners struggle to name what is happening, which is part of the dynamic.",
    realize: [
      "Notice when your power moves are indirect. Ask: 'Why can't I say this directly?' The answer is often shame or fear of exposure.",
      "Explore what it would mean to lead without needing to be right. What does rightness protect you from?",
    ],
    action: [
      "Choose one situation this week where you act with transparent fairness, even at a cost to yourself.",
      "Name the game when you catch yourself playing it: 'I was about to do that thing where I...'",
      "Deep shadow work with a Jungian-informed therapist is transformative for this pattern. It takes courage. You have it.",
    ],
    scripts: [
      "'I've been playing games instead of being straight with you. I want to stop. Here is what I actually need.'",
      "'I know I can be hard to read. I want to try being direct, even though it doesn't come naturally.'",
    ],
    dos: [
      "Lead with honesty, especially when it costs you something",
      "Use your perceptiveness for connection, not strategy",
      "Build a legacy of integrity in the relationship",
    ],
    donts: [
      "Don't let your intelligence become a weapon",
      "Don't confuse being complex with being deep",
      "Don't keep score — it poisons everything",
    ],
    growthDirection:
      "Your path leads toward Mentor — a man who uses his power to illuminate others rather than control them. The Shadow King becomes great the moment he chooses light over leverage.",
  },

  "Don Juan": {
    coreWound:
      "Seduction became a language when real intimacy felt too risky or had never been modelled. Conquest fills a void that connection would dissolve.",
    projection:
      "You project your disowned capacity for stillness, depth, and constancy. Partners who want to settle carry what you've been running from.",
    conflictPattern:
      "The chase is real; the arrival is terrifying. Once desired, the person loses their allure. This creates cycles of pursuit, capture, and quiet escape — often leaving genuine people hurt.",
    realize: [
      "Notice when the attraction begins to fade and the restlessness sets in. Ask: 'Is this person actually less interesting — or am I afraid of what comes next?'",
      "Journal on what you imagine real, settled love would feel like. Not the romance — the Tuesday morning. Does that image feel like death or like home?",
    ],
    action: [
      "Stay past the moment of conquest. Make a deliberate choice to remain and discover what depth feels like.",
      "Bring the same quality of attention you give to pursuit into presence. Listen for the inner world, not just the outer performance.",
      "Consider therapy exploring intimacy avoidance and what being fully known by someone would mean.",
    ],
    scripts: [
      "'I've been drawn to the chase more than the closeness. I want to change that with you.'",
      "'Staying is harder than pursuing for me. I want you to know I'm choosing to stay.'",
    ],
    dos: [
      "Let someone know you fully — not just perform to them",
      "Value depth over novelty",
      "Let your magnetism serve connection, not escape",
    ],
    donts: [
      "Don't mistake excitement for love",
      "Don't let boredom be your signal to leave before you've truly arrived",
      "Don't collect experiences at the expense of people's hearts",
    ],
    growthDirection:
      "Your path leads toward Logos — a man of depth, constancy, and authentic presence. The real adventure is not the conquest. It is the person you become when you finally stay.",
  },

  Trickster: {
    coreWound:
      "Directness once brought pain or punishment, so you learned to approach truth sideways. Humour and indirection became armour.",
    projection:
      "You project your disowned sincerity and earnestness. People who take things seriously — including love — may feel like targets, but they carry what you've suppressed.",
    conflictPattern:
      "Partners can never quite pin you down. Evasiveness, humour at the wrong moments, and slipping away from serious conversations erode trust over time.",
    realize: [
      "Notice when you use humour or redirection to avoid something real. Ask: 'What would I have to feel if I stayed serious for a moment?'",
      "Observe the pattern: when does the Trickster show up? Intimacy? Accountability? Commitment?",
    ],
    action: [
      "Choose one serious conversation this week and stay in it without deflecting. You don't have to be heavy — just honest.",
      "Let someone respond to the real you — not the performance. Offer one genuine, unguarded statement.",
      "Explore whether the avoidance is linked to early experiences where seriousness brought danger. Therapy can help decode this.",
    ],
    scripts: [
      "'I know I joke my way out of hard moments. I want to be real with you. This matters to me.'",
      "'I'm practising being serious without it feeling like a trap. Bear with me.'",
    ],
    dos: [
      "Let your wit be a bridge, not a wall",
      "Value sincerity as much as cleverness",
      "Let people see the weight you carry under the lightness",
    ],
    donts: [
      "Don't use humour to avoid accountability",
      "Don't let irony become your substitute for intimacy",
      "Don't mistake being elusive for being interesting",
    ],
    growthDirection:
      "Your path leads toward Mentor — a man who can be both playful and profound, whose lightness illuminates rather than obscures. The deepest truth you can tell is the one you've been avoiding.",
  },

  "Wounded Hero": {
    coreWound:
      "You have survived real pain — and it became your identity. Suffering gave you depth, but also a reason to stay small or to see the world as a battlefield.",
    projection:
      "You project your disowned joy, lightness, and capacity for wholeness. People who seem unbroken may trigger both envy and suspicion — you may be waiting for their wound to show.",
    conflictPattern:
      "Pain becomes a language of connection. Relationships can unconsciously become arenas for re-enacting old wounds rather than building something new.",
    realize: [
      "Ask: 'Am I still carrying wounds that have already healed — just because they feel familiar?' The past self-preservation instinct can outlive its usefulness.",
      "Notice if your narrative about your pain is serving your growth — or keeping you from claiming the life you actually want.",
    ],
    action: [
      "Take one intentional step toward something you want — not away from something you fear.",
      "Practise gratitude not as a spiritual exercise, but as a deliberate re-routing of your nervous system's threat detection.",
      "Work with a therapist on post-traumatic growth — the process of not just surviving, but integrating.",
    ],
    scripts: [
      "'I sometimes relate through my wounds more than my hopes. I want to connect with you through both.'",
      "'I know I can be heavy. I also have a lot of light. I want to show you more of that.'",
    ],
    dos: [
      "Let your resilience become generativity — give to others what you needed",
      "Allow joy without guilt",
      "See healing not as forgetting the wound but as being larger than it",
    ],
    donts: [
      "Don't use your history as a reason not to show up fully",
      "Don't make your partner responsible for healing what happened before them",
      "Don't equate emotional safety with someone sharing your particular pain",
    ],
    growthDirection:
      "Your path leads toward Mentor — a man who transforms suffering into wisdom and wisdom into love. Your wounds are not your ceiling. They are the foundation of extraordinary depth.",
  },

  Saint: {
    coreWound:
      "Goodness became a strategy. By being beyond reproach, you hoped to earn love and avoid conflict.",
    projection:
      "You project your disowned selfishness, anger, and ordinariness. People who act from self-interest may trigger strong judgment — they embody what you've suppressed in yourself.",
    conflictPattern:
      "Performing goodness crowds out authenticity. Partners sense they are receiving the 'saintly' version rather than the real person. Resentment builds quietly behind the virtue.",
    realize: [
      "Notice when you are being good instead of being real. Ask: 'What would I want right now if I weren't trying to be the right person?'",
      "Explore the relationship between your goodness and your fear. What do you believe would happen if you were merely human?",
    ],
    action: [
      "Express one selfish want this week without framing it as a contribution to others.",
      "Allow yourself to be imperfect in front of your partner. Make a small mistake and let it be small.",
      "Work with a therapist on the connection between people-pleasing, perfectionism, and the loss of authentic self.",
    ],
    scripts: [
      "'I've been performing goodness more than living it. I want to be real with you, including the parts that are less than perfect.'",
      "'I have needs and wants that I usually hide because they don't feel noble enough. I want to start sharing them with you.'",
    ],
    dos: [
      "Let your kindness be genuine, not strategic",
      "Bring your flaws into the relationship — they are what make you real",
      "Value honesty over harmony",
    ],
    donts: [
      "Don't use virtue as a shield against vulnerability",
      "Don't judge others for having the desires you suppress",
      "Don't wait until you're resentful to say what you need",
    ],
    growthDirection:
      "Your path leads toward Logos — a man who is genuinely good because he is genuinely whole, not because he is afraid of his shadow. Real goodness does not perform. It simply is.",
  },

  Mentor: {
    coreWound:
      "You may give guidance as a form of connection, because being needed feels safer than being wanted. Teaching can substitute for intimacy.",
    projection:
      "You project your disowned need for guidance and support. Being the one who is guided can feel uncomfortable — vulnerability in that direction is the edge.",
    conflictPattern:
      "Relationships can become subtly asymmetric — you as guide, them as student. This prevents genuine mutuality and keeps intimacy at a managed distance.",
    realize: [
      "Notice when you shift into 'mentor mode' in emotional moments. Ask: 'Is this person asking for my wisdom — or for my presence?'",
      "Explore what it would feel like to ask for guidance yourself. Who in your life do you allow to truly mentor you?",
    ],
    action: [
      "Practise being a learner in your relationship — let your partner teach you something, without reducing it to a lesson.",
      "Ask for support once this week without framing it as something you are 'working through' or have 'already handled.'",
      "Explore what genuine peer-love — neither leading nor following — would look and feel like for you.",
    ],
    scripts: [
      "'I know I can slip into advising when you just need me present. Tell me when that happens — I want to just be here.'",
      "'I want us to be equals in this, not teacher and student. That means I need to let you hold me sometimes too.'",
    ],
    dos: [
      "Bring your full self, not just your wisdom",
      "Let love be mutual, not one-directional",
      "Receive as gracefully as you give",
    ],
    donts: [
      "Don't intellectualise connection",
      "Don't confuse guidance with intimacy",
      "Don't make your value contingent on being useful",
    ],
    growthDirection:
      "You are already near Logos. The final step is full mutuality — a love where you are held as completely as you hold others. Your wisdom is a gift. Your openness to receive is the gift that makes it whole.",
  },

  Logos: {
    coreWound:
      "Even integrated men carry residue. Yours may be a tendency to over-function as 'the reasonable one,' or to grow quietly impatient with partners who haven't done the same work.",
    projection:
      "Your shadow is subtle — perhaps an unconscious superiority around self-awareness, or a reluctance to be truly destabilised by love.",
    conflictPattern:
      "Occasional emotional over-management — keeping things 'clear' when they need to be felt.",
    realize: [
      "Notice when your clarity becomes a subtle form of distance — when being right about the dynamic prevents you from being inside it.",
      "Ask whether you allow your partner to fully change you — or whether love operates at a slight remove from your core.",
    ],
    action: [
      "Invite disorder into the relationship intentionally. Let something be unresolved for a day without fixing it.",
      "Tell your partner something that makes you feel genuinely uncertain — not something you've already processed, but something still raw.",
      "Continue building — this work never finishes. The practice is the destination.",
    ],
    scripts: [
      "'I want this relationship to move me, not just improve me. I'm opening to that.'",
      "'I want to be changed by loving you — not just to love you well.'",
    ],
    dos: [
      "Stay in the uncertainty long enough to feel it",
      "Let love be wilder than your understanding of it",
      "Cherish your partner's growth as much as your own",
    ],
    donts: [
      "Don't let emotional competence become a ceiling",
      "Don't over-process when the moment calls for presence",
      "Don't expect the path to be linear — for either of you",
    ],
    growthDirection:
      "You are the destination many patterns aim for. Your ongoing growth is not a new direction — it is deeper entry into the love you are already capable of. Keep going.",
  },
};

// ─── Scoring Engine ───────────────────────────────────────────────────────────

export type UserGender = "male" | "female";
export type PartnerGender = "male" | "female" | "nonbinary" | "prefer_not";

function createEmptyScores(): {
  archetypeScores: ArchetypeScores;
  attachmentScores: AttachmentScores;
  shadowScores: ShadowScores;
} {
  const allArchetypes: Archetype[] = [
    ...FEMININE_ARCHETYPES,
    ...MASCULINE_ARCHETYPES,
  ];
  const archetypeScores = Object.fromEntries(
    allArchetypes.map((a) => [a, 0]),
  ) as ArchetypeScores;

  const attachmentScores: AttachmentScores = {
    Secure: 0,
    "Anxious-Preoccupied": 0,
    "Dismissive-Avoidant": 0,
    "Fearful-Avoidant": 0,
  };

  const shadowScores: ShadowScores = {
    Anger: 0,
    Jealousy: 0,
    Contempt: 0,
    Shame: 0,
    Withdrawal: 0,
    Idolization: 0,
  };

  return { archetypeScores, attachmentScores, shadowScores };
}

export function computeScores(
  answers: number[],
  userGender: UserGender,
  partnerGender: PartnerGender,
): ScoreResult {
  const { archetypeScores, attachmentScores, shadowScores } =
    createEmptyScores();

  // Tally scores from answers
  answers.forEach((answerIndex, questionIndex) => {
    const question = QUESTIONS[questionIndex];
    if (!question) return;
    const option = question.options[answerIndex];
    if (!option) return;

    const { scores } = option;

    // Archetype scores
    for (const [archetype, pts] of Object.entries(scores.archetypes)) {
      if (archetype in archetypeScores) {
        archetypeScores[archetype as Archetype] += pts ?? 0;
      }
    }

    // Attachment
    attachmentScores[scores.attachment] += 1;

    // Shadow
    shadowScores[scores.shadow] += 1;
  });

  // Determine active spectrum
  let activeSpectrum: Archetype[];

  if (userGender === "male") {
    // Male user projects onto feminine archetypes
    activeSpectrum = FEMININE_ARCHETYPES;
  } else if (userGender === "female") {
    // Female user projects onto masculine archetypes
    activeSpectrum = MASCULINE_ARCHETYPES;
  } else {
    // Infer from which side scored higher
    const femScore = FEMININE_ARCHETYPES.reduce(
      (sum, a) => sum + archetypeScores[a],
      0,
    );
    const mascScore = MASCULINE_ARCHETYPES.reduce(
      (sum, a) => sum + archetypeScores[a],
      0,
    );
    activeSpectrum =
      femScore >= mascScore ? FEMININE_ARCHETYPES : MASCULINE_ARCHETYPES;
  }

  // If partner is nonbinary/prefer_not, also check if we need to infer
  // (already handled above via userGender)
  void partnerGender; // acknowledged, used for context in results display

  // Sort active spectrum by score
  const sorted = [...activeSpectrum].sort(
    (a, b) => archetypeScores[b] - archetypeScores[a],
  );

  const primaryArchetype = sorted[0];
  const secondaryArchetype = sorted[1];

  // Top attachment
  const topAttachment = (
    Object.entries(attachmentScores) as [AttachmentStyle, number][]
  ).sort(([, a], [, b]) => b - a)[0][0];

  // Top shadow
  const topShadow = (
    Object.entries(shadowScores) as [ShadowTrigger, number][]
  ).sort(([, a], [, b]) => b - a)[0][0];

  return {
    archetypeScores,
    attachmentScores,
    shadowScores,
    primaryArchetype,
    secondaryArchetype,
    topAttachment,
    topShadow,
  };
}

// ─── URL Encoding ─────────────────────────────────────────────────────────────

export interface SharePayload {
  userGender: UserGender;
  partnerGender: PartnerGender;
  answers: number[];
}

export function encodeSharePayload(payload: SharePayload): string {
  return btoa(JSON.stringify(payload));
}

export function decodeSharePayload(encoded: string): SharePayload | null {
  try {
    return JSON.parse(atob(encoded)) as SharePayload;
  } catch {
    return null;
  }
}

// ─── Attachment Style Descriptions ─────────────────────────────────────────

export const ATTACHMENT_DESCRIPTIONS: Record<AttachmentStyle, string> = {
  Secure:
    "You tend to feel comfortable with closeness and can tolerate distance without excessive anxiety. You're able to communicate needs and respond to your partner's with relative ease.",
  "Anxious-Preoccupied":
    "You crave closeness but worry about whether it will last. Distance triggers anxiety, and you may seek reassurance frequently. Your sensitivity is also your depth.",
  "Dismissive-Avoidant":
    "You value independence highly and may downplay the need for closeness. You tend to self-soothe by withdrawing rather than reaching for connection under stress.",
  "Fearful-Avoidant":
    "You want deep connection but fear it simultaneously. This creates push-pull dynamics — moving toward closeness, then retreating when it feels too real.",
};

// ─── Shadow Trigger Descriptions ────────────────────────────────────────────

export const SHADOW_DESCRIPTIONS: Record<ShadowTrigger, string> = {
  Anger:
    "Anger in relationships often signals a boundary being crossed, a need being unmet, or a part of yourself you've been conditioned to disown. It deserves attention, not suppression.",
  Jealousy:
    "Jealousy often points to a fear of replacement or unworthiness. It asks: 'Am I enough?' The answer, once found, belongs inside you — not in your partner's behaviour.",
  Contempt:
    "Contempt is frequently a protection against one's own perceived inadequacy, projected outward. It creates distance precisely when closeness is feared.",
  Shame:
    "Shame is the belief that something is fundamentally wrong with you. In relationship, it drives either over-performance or collapse — rarely honest disclosure.",
  Withdrawal:
    "Withdrawal can be a reasonable need for space, or a habitual avoidance of difficult emotion. The difference lies in whether you return — and how.",
  Idolization:
    "Idealising a partner carries both beauty and danger. It often projects qualities you disown in yourself. When the idol falls, the disillusionment can be severe.",
};
