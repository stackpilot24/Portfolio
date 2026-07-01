// ─────────────────────────────────────────────────────────────────────────
// EDIT THIS FILE to update everything about you — name, bio, links, photos,
// education and skills. Changes here show up everywhere on the site.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Samyak Jain",
  title: "Full-Stack Developer & AI Enthusiast",

  // A few short, punchy lines that rotate/animate in the hero.
  roles: [
    "I build full-stack web apps",
    "I ship AI-powered products",
    "Next.js · TypeScript · PostgreSQL",
    "I turn ideas into working software",
  ],

  tagline:
    "Final-year CS student who loves shipping polished, AI-powered products — " +
    "from college-discovery platforms to autonomous study tools.",

  // Longer summary shown in the About section. Written from the projects below.
  bio:
    "I'm a final-year B.Tech Computer Science student at KIIT University and a " +
    "full-stack developer who enjoys taking a rough idea all the way to a shipped, " +
    "usable product. I build with Next.js and TypeScript on top of PostgreSQL " +
    "(Prisma & Supabase), and I'm especially drawn to AI-powered tools — think an " +
    "engine that turns any PDF or PPTX into smart flashcards, a platform that helps " +
    "students compare 170+ colleges with AI guidance, and multi-agent assistants " +
    "built on LangChain and Gemini. I also enjoy Python and machine-learning side " +
    "projects. I care about clean UI, real-time data, and software that actually gets used.",

  // What you're currently after — shown as a highlighted line in About.
  lookingFor: "Open to SDE / full-stack internships and new-grad roles.",

  location: "India",

  // ── Education ────────────────────────────────────────────────────────────
  education: {
    school: "KIIT University",
    degree: "B.Tech, Computer Science & Engineering",
    graduationYear: "2026",
    startYear: "2022",
    detail: "Bhubaneswar, India",
    focus: "Full-stack web development & applied AI / machine learning",
    highlights: [
      "Built & shipped 6+ live products during my degree",
      "Self-taught Next.js, Prisma and the Gemini / LangChain AI stack",
      "Explored ML through phishing-detection and price-prediction projects",
    ],
  },

  // ── Skills / tech stack ──────────────────────────────────────────────────
  // Grouped so the site can render them as neat categories.
  skills: [
    { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { group: "Backend", items: ["Node.js", "Next.js API Routes", "Prisma", "Supabase", "PostgreSQL"] },
    { group: "AI / ML", items: ["Google Gemini", "LangChain", "Python", "scikit-learn", "Streamlit"] },
    { group: "Tools", items: ["Git", "REST APIs", "Vercel", "Jupyter", "Pandas / NumPy"] },
  ],

  // Used to pull your repos live from GitHub. Required.
  githubUsername: "stackpilot24",

  // Leave any of these blank ("") to hide that link/button from the site.
  links: {
    github: "https://github.com/stackpilot24",
    linkedin: "https://www.linkedin.com/in/samyakjain-24april/",
    twitter: "",
    email: "samyakjain1524@gmail.com",
    website: "",
    resume: "/resume.pdf",
  },

  // Front = what visitors see first. Back = revealed when they click it.
  // Replace these files in /public/images with your own photos and keep
  // the same names, or change the paths below.
  avatar: {
    front: "/images/avatar-front.jpg",
    back: "/images/avatar-back.jpg",
  },

  // Accent color used for highlights/buttons across the site (hex value).
  // Warm, non-blue. Easy swaps: "#b45309" rust · "#047857" emerald · "#be123c" rose.
  accentColor: "#c2410c",

  // ── Contact form ─────────────────────────────────────────────────────────
  // The contact form works out of the box: with no key it opens the visitor's
  // email app pre-filled to you. To receive submissions straight to your inbox
  // WITHOUT any backend, get a free access key at https://web3forms.com
  // (enter your email, they email you a key) and paste it below.
  contact: {
    web3formsKey: "40d61d08-aa94-45f0-bb2c-b749256717eb", // e.g. "a1b2c3d4-....." — leave "" to use the email fallback
    heading: "Let's build something together",
    blurb:
      "Have a role, a project, or just want to say hi? Drop me a message and I'll get back to you.",
  },
};

export type Profile = typeof profile;
