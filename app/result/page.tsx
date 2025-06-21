import React from "react";
import { Suspense } from "react";
import ResultPage from "./ResultPage";

export default function Page() {
  return (
    <Suspense fallback={<div>載入中...</div>}>
      <ResultPage />
    </Suspense>
  );
}
