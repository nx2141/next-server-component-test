"use client";

import { useEffect, useState } from "react";
import { getTest } from "./lib/getText";

export default function Home() {
  const [text, setText] = useState<string>("Loading...");

  useEffect(() => {
    getTest()
      .then((data) => {
        setText(data.message); // JSONの `message` をセット
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setText("Error loading data");
      });
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>{text}</p>
    </div>
  );
}
