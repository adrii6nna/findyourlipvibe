"use client";

import React from "react";
import Image from "next/image";

interface LipResultCardProps {
    id: string;
    titleImg: string;
    lipstickImg: string;
    hashtags: string[];
    description: string[];
}

export default function LipResultCard({
    id,
    titleImg,
    lipstickImg,
    hashtags,
    description,
}: LipResultCardProps) {
    return (
        <div className="bg-[#D3B2F5]/30  item-center backdrop-blur-md rounded-2xl w-[360px] p-4 text-white shadow-xl">
            <div className="w-full h-12 bg-pink-200 flex items-center justify-center rounded-t-2xl">
                <Image
                    src={`/01.png`} // 根據結果類型切換
                    alt="title"
                    width={160}
                    height={30}
                />
            </div>
            <div className="flex justify-center gap-2 mb-3">
                {hashtags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-white/20 px-2 py-1 rounded-full text-xs text-white"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
            <div className="flex gap-4 items-center">
                <Image
                    src={`/${lipstickImg}`}
                    alt={`${id}-lipstick`}
                    width={100}
                    height={100}
                />
                <div className="flex flex-col text-sm gap-1">
                    {description.map((line, idx) => (
                        <p key={idx}>{line}</p>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-1 mt-3 overflow-hidden">
                {Array.from({ length: 10 }).map((_, idx) => (
                    <Image
                        key={idx}
                        src="/brand.png"
                        alt="brand"
                        width={24}
                        height={24}
                    />
                ))}
            </div>

            <div className="flex justify-center items-center gap-4 mt-6">
                <button className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full shadow-md">
                    ✦ 點我購買 ✦
                </button>
                <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                    <Image src="/next.svg" alt="restart" width={18} height={18} />
                </button>
            </div>

        </div>
    );
}