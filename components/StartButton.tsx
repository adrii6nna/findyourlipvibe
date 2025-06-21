// src/components/StartButton.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function StartButton() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const baseShadow = "shadow-[0_6px_0_0_#A674C1]";
  const hoverShadow = "shadow-[0_3px_0_0_#A674C1]";
  const pressedShadow = "shadow-inner";

  const translateClass = isPressed
    ? "translate-y-[3px]"
    : isHovered
    ? "translate-y-[1px]"
    : "translate-y-0";

  const shadowClass = isPressed
    ? pressedShadow
    : isHovered
    ? hoverShadow
    : baseShadow;

  return (
    <button
      onClick={() => router.push("/quiz")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className={`w-[140px] h-[45px] rounded-full 
        flex items-center justify-center font-bold text-xl tracking-wide 
        text-[#6C6177] transition-all duration-200 ease-out select-none
        ${translateClass} ${shadowClass}
        bg-[#FFF8F8]/60 border-[2px] border-[#A674C1] active:scale-[0.98]
      `}
    >
      <div className="flex items-center gap-1">
        <Image src="/star.svg" alt="star" width={20} height={20} />
        <span>start</span>
        <Image src="/star.svg" alt="star" width={20} height={20} />
      </div>
    </button>
  );
}