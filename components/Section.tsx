import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <h2 className="text-center text-2xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="mx-auto mt-2 max-w-lg text-center text-sm text-[var(--muted)]">{subtitle}</p>}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
