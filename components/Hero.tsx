import { profile } from "@/data/profile.config";
import FlipAvatar from "./FlipAvatar";
import SocialLinks from "./SocialLinks";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 pb-20 pt-16 text-center sm:pt-24">
      <Reveal>
        <FlipAvatar front={profile.avatar.front} back={profile.avatar.back} name={profile.name} />
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{profile.name}</h1>
        <p className="mt-2 text-lg" style={{ color: "var(--accent)" }}>
          {profile.title}
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="max-w-xl text-balance text-[var(--muted)]">{profile.tagline}</p>
      </Reveal>

      <Reveal delay={0.3}>
        <SocialLinks />
      </Reveal>
    </section>
  );
}
