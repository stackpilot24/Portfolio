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
    "MERN · Next.js · Django",
    "I turn ideas into working software",
  ],

  tagline:
    "Final-year CS student who loves shipping polished, AI-powered products — " +
    "from college-discovery platforms to autonomous study tools.",

  // Longer summary shown in the About section. Written from the projects below.
  bio:
    "I'm a final-year B.Tech Computer Science student at KIIT University and a " +
    "full-stack developer who enjoys taking a rough idea all the way to a shipped, " +
    "usable product. I work across the MERN stack, Next.js and Django, and I'm " +
    "especially drawn to building AI-powered tools — think an engine that turns any " +
    "PDF or PPTX into smart flashcards, a platform that helps students compare 170+ " +
    "colleges with AI guidance, and multi-agent assistants built on LangChain and " +
    "Gemini. I care about clean UI, real-time data, and software that actually gets used.",

  // What you're currently after — shown as a highlighted line in About.
  lookingFor: "Open to SDE / full-stack internships and new-grad roles.",

  location: "India",

  // ── Education ────────────────────────────────────────────────────────────
  education: {
    school: "KIIT University",
    degree: "B.Tech, Computer Science & Engineering",
    graduationYear: "2026",
    detail: "Bhubaneswar, India",
  },

  // ── Skills / tech stack ──────────────────────────────────────────────────
  // Grouped so the site can render them as neat categories.
  skills: [
    { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { group: "Backend", items: ["Node.js", "Express", "Django", "Prisma", "Supabase"] },
    { group: "AI / ML", items: ["LangChain", "Gemini AI", "Python", "scikit-learn"] },
    { group: "Tools", items: ["Git", "PostgreSQL", "MongoDB", "REST APIs"] },
  ],

  // Used to pull your repos live from GitHub. Required.
  githubUsername: "stackpilot24",

  // Leave any of these blank ("") to hide that link/button from the site.
  links: {
    github: "https://github.com/stackpilot24",
    linkedin: "",
    twitter: "",
    email: "samyakjain1524@gmail.com",
    website: "",
    resume: "",
  },

  // Front = what visitors see first. Back = revealed when they click it.
  // Replace these files in /public/images with your own photos and keep
  // the same names, or change the paths below.
  avatar: {
    front: "/images/avatar-front.svg",
    back: "/images/avatar-back.svg",
  },

  // Accent color used for highlights/buttons across the site (hex value).
  accentColor: "#6366f1",
};

export type Profile = typeof profile;
