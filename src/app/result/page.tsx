"use client"

import React, { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import resultData from "../../data/resultData"
import { useMemo } from "react"

export default function ResultPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const resultType = searchParams.get("type")

    // 固定結果
    const result = useMemo(() => {
        return resultData.find((item) => item.id === resultType) ||
            resultData[Math.floor(Math.random() * resultData.length)]
    }, [resultType])

    // 按鈕互動狀態
    const [hoverBuy, setHoverBuy] = useState(false)
    const [pressBuy, setPressBuy] = useState(false)
    const [hoverRestart, setHoverRestart] = useState(false)
    const [pressRestart, setPressRestart] = useState(false)

    

    // 公用 class function
    const buttonClasses = (hover: boolean, press: boolean) => {
        const translate = press
            ? "translate-y-[3px]"
            : hover
                ? "translate-y-[1px]"
                : "translate-y-0"
        const shadow = press
            ? "shadow-inner"
            : hover
                ? "shadow-[0_3px_0_0_#A674C1]"
                : "shadow-[0_6px_0_0_#A674C1]"

                return `rounded-full 
                flex items-center justify-center font-bold text-base tracking-wide 
                text-[#6C6177] transition-all duration-200 ease-out select-none
                ${translate} ${shadow}
                bg-[#FFF8F8]/60 border-[2px] border-[#A674C1] active:scale-[0.98]`
              
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4 relative"
            style={{
                backgroundImage: "url('/stars-overlay.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <div className="relative w-full max-w-md">
                <Image
                    src={`/${result.lipstickImg}`}
                    alt="lip result"
                    width={600}
                    height={900}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                />

                {/* 按鈕區塊 */}
                <div className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2
             flex flex-row justify-center items-center gap-3 w-full px-4">
                    {/* 購買按鈕 */}
                    <button
                        onClick={() => window.open(result.link, "_blank")}
                        onMouseEnter={() => setHoverBuy(true)}
                        onMouseLeave={() => {
                            setHoverBuy(false)
                            setPressBuy(false)
                        }}
                        onMouseDown={() => setPressBuy(true)}
                        onMouseUp={() => setPressBuy(false)}
                        className={`w-full max-w-[180px] h-[45px] ${buttonClasses(hoverBuy, pressBuy)}`}

                    >
                        <div className="flex items-center gap-1">
                            <Image src="/star.svg" alt="star" width={18} height={18} />
                            <span className="text-sm">點我購買</span>
                            <Image src="/star.svg" alt="star" width={18} height={18} />
                        </div>
                    </button>

                    {/* 重測按鈕 */}
                    <button
                        onClick={() => router.push("/")}
                        onMouseEnter={() => setHoverRestart(true)}
                        onMouseLeave={() => {
                            setHoverRestart(false)
                            setPressRestart(false)
                        }}
                        onMouseDown={() => setPressRestart(true)}
                        onMouseUp={() => setPressRestart(false)}
                        className={`w-[50px] h-[45px] ${buttonClasses(hoverRestart, pressRestart)}`}

                    >
                        <Image src="/restart.png" alt="restart" width={16} height={16} />
                    </button>

                </div>
            </div>
        </div>
    )
}
