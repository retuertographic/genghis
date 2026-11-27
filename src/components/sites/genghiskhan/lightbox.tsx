"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useI18n } from "./i18n/context";

export type LightboxImage = { src: string; width: number; height: number; alt?: string };

/** Open/close state for a lightbox over a list of images. */
export function useLightbox(count: number) {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + count) % count)), [count]);
  return { index, open: setIndex, close, step };
}

/** Full-screen image viewer shared by every gallery: arrows, counter, Esc and arrow keys. */
export function Lightbox({
  images,
  index,
  onClose,
  onStep,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onStep: (delta: number) => void;
}) {
  const { t } = useI18n();

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, onClose, onStep]);

  if (index === null) return null;
  const img = images[index];
  const arrow = "absolute top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.imageGallery}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 gk-modal-in"
      onClick={onClose}
    >
      <button type="button" aria-label={t.close} className="absolute right-4 top-4 text-white/80 hover:text-white" onClick={onClose}>
        <X className="size-8" strokeWidth={1.5} />
      </button>
      <button
        type="button"
        aria-label={t.previous}
        className={`${arrow} left-2`}
        onClick={(e) => {
          e.stopPropagation();
          onStep(-1);
        }}
      >
        <ChevronLeft className="size-10" strokeWidth={1.5} />
      </button>
      <Image
        src={img.src}
        alt={img.alt ?? ""}
        width={img.width}
        height={img.height}
        className="max-h-[85vh] w-auto max-w-[85vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        type="button"
        aria-label={t.next}
        className={`${arrow} right-2`}
        onClick={(e) => {
          e.stopPropagation();
          onStep(1);
        }}
      >
        <ChevronRight className="size-10" strokeWidth={1.5} />
      </button>
      <div className="absolute bottom-4 text-sm text-white/70">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
