"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import ProgressBar from "../../components/ProgressBar"
import { questions } from "../../data/questions"
import type { PersonalityType } from "../../data/questions"

export default function QuizPage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<PersonalityType[]>([])

  const handleAnswer = (type: PersonalityType) => {
    const newAnswers = [...answers, type]
    setAnswers(newAnswers)

    if (step + 1 < questions.length) {
      setStep(step + 1)
    } else {
      const result = getResultType(newAnswers)
      router.push(`/result?type=${result}`)
    }
  }

  const getResultType = (answers: PersonalityType[]): PersonalityType => {
    const count = answers.reduce((acc: Record<PersonalityType, number>, type) => {
      acc[type] = (acc[type] || 0) + 1
      return acc
    }, {
      "soft-bloom": 0,
      "muse-wave": 0,
      "sunset-rush": 0,
      "neon-heat": 0
    })

    // 找出最高分數
    const max = Math.max(...Object.values(count))

    // 找出所有達到最高分的類型（可能多個）
    const topTypes = Object.entries(count)
      .filter(([_, value]) => value === max)
      .map(([key]) => key as PersonalityType)

    // 隨機選一個（即使只有一個也可以）
    const randomIndex = Math.floor(Math.random() * topTypes.length)
    return topTypes[randomIndex]
  }

  const current = questions[step]

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden">
      {/* 背景圖 */}
      <Image
        src="/stars-overlay.png"
        alt="background"
        fill
        className="object-cover z-[-1]"
      />

      {/* 卡片內容 */}
      <div className="bg-[#FFEDED]/10 shadow-xl rounded-2xl px-10 py-16 max-w-md w-full border-2 border-[#A674C1]">
        

        <ProgressBar total={questions.length} current={step} />

        <div className="flex justify-center mb-8">
          <Image
            src="/brand.png"
            alt="Chloe"
            width={80}
            height={40}
            className="h-auto"
          />
        </div>

        <h2 className="text-md text-[#ffffff] tracking-wider font-bold mb-8">
          {current.question}
        </h2>

        <div className="space-y-4">
          {current.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(opt.type)}
              className="w-full py-3 px-4 bg-[#FFF8F8]/60 border-[2px] border-[#A674C1] rounded-full shadow-[0_6px_0_0_#A674C1] text-[#6C6177] text-xs font-semibold hover:translate-y-[2px] active:translate-y-[4px] transition-all duration-200"
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
