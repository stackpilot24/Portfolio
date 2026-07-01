"use client";

import { useState } from "react";
import { profile } from "@/data/profile.config";
import SocialLinks from "./SocialLinks";
import CopyEmailButton from "./CopyEmailButton";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { contact, links, name } = profile;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const senderName = String(data.get("name") || "");
    const senderEmail = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    // Preferred path: Web3Forms (no backend needed) if a key is configured.
    if (contact.web3formsKey) {
      setStatus("sending");
      setError("");
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: contact.web3formsKey,
            subject: `Portfolio message from ${senderName}`,
            from_name: senderName,
            email: senderEmail,
            message,
          }),
        });
        const json = await res.json();
        if (json.success) {
          setStatus("success");
          form.reset();
        } else {
          setStatus("error");
          setError(json.message || "Something went wrong. Please try the email button instead.");
        }
      } catch {
        setStatus("error");
        setError("Network error. Please try the email button below instead.");
      }
      return;
    }

    // Fallback: open the visitor's email app pre-filled to you.
    const subject = encodeURIComponent(`Portfolio message from ${senderName}`);
    const body = encodeURIComponent(`${message}\n\n— ${senderName} (${senderEmail})`);
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    form.reset();
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
      {/* Left: pitch + direct contact */}
      <div className="flex flex-col gap-5 md:col-span-2">
        <div>
          <h3 className="text-xl font-semibold">{contact.heading}</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">{contact.blurb}</p>
        </div>

        {links.email && (
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-wide text-[var(--muted)]">Email</p>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={`mailto:${links.email}`}
                className="rounded-full px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                style={{ background: "var(--accent)" }}
              >
                {links.email}
              </a>
              <CopyEmailButton email={links.email} />
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-wide text-[var(--muted)]">Elsewhere</p>
          <SocialLinks />
        </div>
      </div>

      {/* Right: message form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 md:col-span-3"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-[var(--muted)]">Your name</span>
            <input
              name="name"
              required
              autoComplete="name"
              placeholder="Jane Doe"
              className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none transition focus:border-[var(--accent)]"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-[var(--muted)]">Your email</span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="jane@example.com"
              className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none transition focus:border-[var(--accent)]"
            />
          </label>
        </div>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="text-[var(--muted)]">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Hi Samyak, I'd love to talk about…"
            className="resize-y rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none transition focus:border-[var(--accent)]"
          />
        </label>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90 disabled:opacity-60"
            style={{ background: "var(--accent)" }}
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "success" && (
            <span className="text-sm text-green-600">
              ✓ Thanks{contact.web3formsKey ? ", I'll be in touch!" : " — opening your email app…"}
            </span>
          )}
          {status === "error" && <span className="text-sm text-red-500">{error}</span>}
        </div>
        <p className="text-xs text-[var(--muted)]">
          Prefer email? Write directly to{" "}
          <a href={`mailto:${links.email}`} className="underline hover:text-[var(--accent)]">
            {links.email}
          </a>
          .
        </p>
      </form>
    </div>
  );
}
