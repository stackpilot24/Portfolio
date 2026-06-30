import { profile } from "@/data/profile.config";
import CopyEmailButton from "./CopyEmailButton";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[var(--border)] py-10 text-center">
      <p className="text-sm text-[var(--muted)]">Want to get in touch?</p>
      <div className="mt-3 flex items-center justify-center gap-3">
        {profile.links.email && (
          <>
            <a
              href={`mailto:${profile.links.email}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              style={{ background: "var(--accent)" }}
            >
              {profile.links.email}
            </a>
            <CopyEmailButton email={profile.links.email} />
          </>
        )}
      </div>
      <p className="mt-8 text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
