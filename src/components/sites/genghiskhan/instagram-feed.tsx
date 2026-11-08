"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart, MessageCircle, Play } from "lucide-react";
import { ASSETS, INSTAGRAM_POSTS, SOCIAL } from "./data";
import { InstagramIcon } from "./brand-icons";

/**
 * Smash Balloon "highlight" layout: 3 columns (2 on mobile), first post spans 2×2,
 * 6 posts initially (7 on mobile), "Load More" reveals the rest.
 */
export function InstagramFeed() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="pb-[12px]">
      <div className="grid grid-cols-2 gap-0 md:grid-cols-3">
        {INSTAGRAM_POSTS.map((post, i) => (
          <a
            key={post.id}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "group relative block aspect-square p-[6px]",
              i === 0 ? "col-span-2 row-span-2" : "",
              i === 6 && !expanded ? "md:hidden" : "",
            ].join(" ")}
          >
            <span className="relative block size-full overflow-hidden">
              <Image
                src={`${ASSETS}/instagram/${post.id}.jpg`}
                alt={post.caption}
                fill
                sizes={i === 0 ? "(min-width: 768px) 744px, 100vw" : "(min-width: 768px) 372px, 50vw"}
                className="object-cover"
              />
              <Play
                aria-hidden
                className="absolute left-1/2 top-1/2 size-[34px] -translate-x-1/2 -translate-y-1/2 text-white opacity-90 drop-shadow transition-opacity group-hover:opacity-0"
                strokeWidth={1.3}
              />
              <span className="absolute inset-0 flex flex-col justify-between bg-black/85 p-[15px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="line-clamp-3 text-[12px] leading-[1.1]">{post.caption}</span>
                <span className="flex justify-center gap-[10px] text-[13px]">
                  <span className="flex items-center gap-1">
                    <Heart className="size-[13px] fill-current" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="size-[13px] fill-current" /> {post.comments}
                  </span>
                </span>
              </span>
            </span>
          </a>
        ))}
      </div>
      <div className="mt-[6px] flex flex-wrap justify-center gap-[6px] text-[13px] leading-[19.5px]">
        {!expanded && (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="hidden rounded-[4px] bg-[#cfa670] px-[14px] py-[7px] text-white transition-opacity hover:opacity-85 md:block"
          >
            Load More
          </button>
        )}
        <a
          href={SOCIAL.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-[4px] bg-black px-[14px] py-[7px] text-white transition-opacity hover:opacity-85"
        >
          <InstagramIcon className="size-[13px]" /> Follow on Instagram
        </a>
      </div>
    </div>
  );
}
