"use client";

import { cn } from "@/utils/cn";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  items
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  items: {
    src: string
  }[]
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  useEffect(() => {
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    }
    addAnimation();
  }, [getDirection, getSpeed]);

  const [start, setStart] = useState(false);
  return (
    <div
      ref={containerRef}
      className={`scroller w-full overflow-hidden ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex gap-4 py-4 w-max h-max",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className={clsx('w-[350px] max-w-full relative flex-shrink-0 px-8 py-6 md:w-[450px]', {
              'md:!w-[700px]': items.length >= 2
            })}
            key={idx}
          >
            <Image src={items[idx].src} alt="carousel" width={100} height={100} className={clsx('w-full h-full object-cover', {
              '!object-contain': items.length >= 2
            })} sizes="100vw" />
          </li>
        ))}
      </ul>
    </div>
  );
};
