"use client";

import { useCallback, useEffect } from "react";
import { cn } from "@mew/ui/utils/cn";
import { Dialog } from "@mew/ui/components/Dialog";
import { XIcon, DownloadIcon } from "@mew/ui/icons";

type PropsT = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  src: string;
  alt?: string;
  downloadFileName?: string;
};

async function downloadImage(src: string, fileName?: string) {
  try {
    const res = await fetch(src);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName ?? src.split("/").pop() ?? "image.png";
    a.click();
    URL.revokeObjectURL(url);
  } catch {
    window.open(src, "_blank");
  }
}

export function ImageLightbox(props: PropsT) {
  const { open, onOpenChange, src, alt = "Generated image", downloadFileName } = props;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    },
    [onOpenChange]
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange} size="fullscreen">
      <div
        className="relative flex items-center justify-center w-full h-full"
        onClick={() => onOpenChange(false)}
      >
        {/* Controls */}
        <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
          {downloadFileName && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                downloadImage(src, downloadFileName);
              }}
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-lg",
                "bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 outline-none"
              )}
              aria-label="Download image"
            >
              <DownloadIcon className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenChange(false);
            }}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-lg",
              "bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 outline-none"
            )}
            aria-label="Close"
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Image */}
        <div
          className="relative max-w-[90vw] max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-[90vw] max-h-[90vh] rounded-2xl object-contain shadow-2xl"
          />
        </div>
      </div>
    </Dialog>
  );
}
