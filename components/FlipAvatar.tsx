"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FlipAvatar({
  front,
  back,
  name,
}: {
  front: string;
  back: string;
  name: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        aria-label="Flip profile photo"
        onClick={() => setFlipped((f) => !f)}
        className="group relative h-40 w-40 sm:h-48 sm:w-48 cursor-pointer rounded-full outline-none"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className="relative h-full w-full rounded-full shadow-xl ring-4 ring-white/10"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute inset-0 overflow-hidden rounded-full"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image src={front} alt={`${name} profile photo`} fill sizes="192px" priority />
          </div>
          <div
            className="absolute inset-0 overflow-hidden rounded-full"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <Image src={back} alt={`${name} alternate photo`} fill sizes="192px" />
          </div>
        </motion.div>
        <span className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-sm shadow-md ring-4 ring-[var(--bg)] transition-transform group-hover:scale-110">
          🔄
        </span>
      </button>
      <p className="text-xs text-[var(--muted)]">click the photo</p>
    </div>
  );
}
