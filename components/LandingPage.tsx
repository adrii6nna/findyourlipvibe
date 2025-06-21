"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import StartButton from "../components/StartButton";


export default function LandingPage() {
  const router = useRouter();
  const [state, setState] = useState<"default" | "hover" | "click">("default");

  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#e6cdfd] to-[#c8a6f4] relative flex items-center justify-center">
      {/* 背景星星 */}
      <div className="absolute inset-0 bg-[url('/stars-overlay.png')] bg-cover pointer-events-none" />

      {/* 內容區塊 */}
      <div className="bg-[#FFEDED]/10 rounded-3xl px-8 py-8 shadow-2xl max-w-sm z-10 text-center border-[2px] border-[#A674C1]">
        <div className="flex justify-center mb-4">
          <Image
            src="/brand.png"
            alt="Chloe"
            width={80}
            height={40}
            className="h-auto"

          />
        </div>

        <div className="rounded-xl overflow-hidden mb-4">
          <Image
            src="/main-visual.png"
            alt="Find Your Lip Vibe"
            width={400}
            height={500}
            className="w-full h-auto"

          />
        </div>

        <p className="text-xs font-semibold text-[#FBEEFF] tracking-wider mb-4 leading-relaxed">
          品牌聯名活動來了～<br />
          馬上來看看屬於你的 lip vibe!<br />
          分享 IG 馬上私訊小盒子領取折扣碼
        </p>

        {/* 改進版按鈕 */}
        <div className="w-full flex items-center justify-center mb-4">
          <StartButton />
        </div>
      </div>
    </div>
  );
}