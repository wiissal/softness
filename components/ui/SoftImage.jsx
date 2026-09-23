"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * next/image with a soft, on-brand fallback.
 * If a photo ever fails to load, the layout keeps its shape and
 * shows a warm gradient instead of a broken image icon.
 * The parent must be positioned (relative) and have a height.
 */
export default function SoftImage({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className = "",
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 bg-gradient-to-br from-sand via-linen to-sage-soft"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}