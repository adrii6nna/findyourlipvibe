"use client";

import React from "react";
import Image from "next/image";

interface ProgressBarProps {
    total: number;
    current: number;
}

export default function ProgressBar({ total, current }: ProgressBarProps) {
    const percent = Math.min((current / total) * 100, 100);

    return (
        <div className="w-full max-w-md relative h-6 mb-6">
            {/* ⬜ 背景條 */}
            <div className="w-full h-4 bg-[#FFEDED] rounded-full overflow-hidden border border-[#FBC3D6]">
                {/* 🌸 粉色進度條（圓頭） */}
                <div
                    className="h-full rounded-full transition-all duration-300 ease-out"
                    style={{
                        width: `${percent}%`,
                        backgroundImage:
                            "linear-gradient(135deg, #FBBEDC 0%, #FFC0CB 40%, #FF9ECF 60%, #FBBEDC 100%)",
                        backgroundSize: "200% 100%",
                        animation: "shine 2s infinite linear",
                    }}
                />


                {/* 💄 口紅圖示，跟進度走 */}
                <div
                    className="absolute top-[-20px] transition-all duration-300 ease-out"
                    style={{ left: `calc(${percent}% - 25px)` }} // 口紅中心偏移
                >
                    <div className="w-[50px] h-[50px] relative">
                        <Image
                            src="/lipstick.png"
                            alt="lipstick"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
            </div>
            );
}