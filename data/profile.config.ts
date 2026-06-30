// ─────────────────────────────────────────────────────────────────────────
// EDIT THIS FILE to update everything about you — name, bio, links, photos.
// Changes here show up everywhere on the site automatically.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Your Name",
  title: "Software Engineer",
  tagline: "I build things for the web and ship them.",
  bio:
    "Write 2-3 sentences here about your background, what you work on, " +
    "and what you're looking for. This shows up right under your name on " +
    "the homepage.",
  location: "Your City, Country",

  // Used to pull your repos live from GitHub. Required.
  githubUsername: "your-github-username",

  // Leave any of these blank ("") to hide that link/button from the site.
  links: {
    github: "https://github.com/your-github-username",
    linkedin: "",
    twitter: "",
    email: "you@example.com",
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
