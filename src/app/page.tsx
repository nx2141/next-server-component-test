"use client";

import { useEffect, useState } from "react";
import { getTest } from "./lib/getText";
import { getRandomDadJoke } from "./lib/getRandomDadJoke";

export default function Home() {
  const [text, setText] = useState<string>("Loading...");
  const [dadJoke, setDadJoke] = useState<string>("Loading...");

  useEffect(() => {
    getTest()
      .then((data) => {
        setText(data.message); // JSONの `message` をセット
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setText("Error loading data");
      });

    getRandomDadJoke()
      .then((data) => {
        setDadJoke(data.joke);
      })
      .catch((error) => {
        console.error("Error fetching dad joke:", error);
        setDadJoke("Error loading dad joke");
      });
  }, []);

  return (
    <div className="text-white text-lg p-10">
      <h2 className="text-2xl font-bold border-0 border-b border-white mb-2 mt-8">
        NEXT ROUTER
      </h2>
      <p>{text}</p>
      <h2 className="text-2xl font-bold border-0 border-b border-white mb-2 mt-8">
        DAD JOKE
      </h2>
      <p>{dadJoke}</p>
    </div>
  );
}
