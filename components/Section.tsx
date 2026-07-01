import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  title,
  subtitle,
  index,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  index?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-9 sm:py-11">
      <Reveal>
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline gap-3">
            {index && <span className="section-index text-xs">{index}</span>}
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
          </div>
          {subtitle && <p className="max-w-xl text-sm text-[var(--muted)]">{subtitle}</p>}
          <div className="rule mt-2 w-full" />
        </div>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
