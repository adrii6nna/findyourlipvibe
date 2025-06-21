// src/data/questions.ts

export type PersonalityType = "soft-bloom" | "muse-wave" | "sunset-rush" | "neon-heat";

export interface Option {
  text: string;
  type: PersonalityType;
}

export interface Question {
  question: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    question: "哪個地方最能讓你感到快樂？",
    options: [
      { text: "書店角落＋耳機裡播放 city pop", type: "soft-bloom" },
      { text: "美術館寧靜空間＋舒服的冷氣", type: "muse-wave" },
      { text: "沙灘＋光腳踩浪花＋大笑", type: "sunset-rush" },
      { text: "派對或 live club", type: "neon-heat" },
    ],
  },

  {
    question: "你在穿搭上最看重什麼？",
    options: [
      { text: "質感與配色的平衡", type: "soft-bloom" },
      { text: "氣質感與細節（耳環、妝容）", type: "muse-wave" },
      { text: "自在好活動+曬太陽也ok", type: "sunset-rush" },
      { text: "吸睛程度與整體氣場", type: "neon-heat" },
    ],
  },
  {
    question: "你的 dream 旅遊地是哪裡？",
    options: [
      { text: "東京巷弄的選物店、古著街", type: "soft-bloom" },
      { text: "巴黎或米蘭的藝文區、畫廊街", type: "muse-wave" },
      { text: "夏威夷、峇里島、沖繩的沙灘", type: "sunset-rush" },
      { text: "紐約、邁阿密的夜生活", type: "neon-heat" },
    ],
  },
  {
    question: "你最理想的社交狀態是？",
    options: [
      { text: "與幾位老朋友一起散步喝咖啡", type: "soft-bloom" },
      { text: "與欣賞藝術的人聊天，談彼此靈感", type: "muse-wave" },
      { text: "跟一群人跳海，之後在沙灘上彈吉他", type: "sunset-rush" },
      { text: "週末要有一場瘋狂的 party", type: "neon-heat" },
    ],
  },
  {
    question: "你的自拍風格是？",
    options: [
      { text: "微光自然、眼神飄遠、有日記感", type: "soft-bloom" },
      { text: "柔光濾鏡＋精緻五官捕捉", type: "muse-wave" },
      { text: "抓住陽光灑在臉上的瞬間", type: "sunset-rush" },
      { text: "閃光燈拍正面＋妝容高調亮眼", type: "neon-heat" },
    ],
  },
  {
    question: "你的生活靈感來源最接近？",
    options: [
      { text: "手寫日記、膠卷相機、日常觀察", type: "soft-bloom" },
      { text: "藝術展覽、Pinterest、雜誌剪貼", type: "muse-wave" },
      { text: "大自然、浪、風、自由、體驗派", type: "sunset-rush" },
      { text: "社群動態、舞台魅力、偶像明星", type: "neon-heat" },
    ],
  },
  {
    question: "哪句話最貼近你現在的狀態？",
    options: [
      { text: "我喜歡安靜地發光。", type: "soft-bloom" },
      { text: "溫柔是一種力量，細膩能看見更大的世界。", type: "muse-wave" },
      { text: "我想探索世界的每一個角落。", type: "sunset-rush" },
      { text: "我希望走到哪裡都讓人記得。", type: "neon-heat" },
    ],
  },
];
