"use client";

import { useEffect, useState } from "react";
import { getTest } from "./lib/getText";
import { getRandomDadJoke } from "./lib/getRandomDadJoke";
import { getStarWarsPeople } from "./lib/getStarWarsPeople";
import { getStarWarsPeoples } from "./lib/getStarWarsPeoples";

export default function Home() {
  const [text, setText] = useState<string>("Loading...");
  const [dadJoke, setDadJoke] = useState<string>("Loading...");
  const [starWarsPeople, setStarWarsPeople] = useState<string>("Loading...");
  const [starWarsPeoples, setStarWarsPeoples] = useState<any[]>([]);

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

    getStarWarsPeople()
      .then((data) => {
        setStarWarsPeople(data.name);
      })
      .catch((error) => {
        console.error("Error fetching dad joke:", error);
        setDadJoke("Error loading dad joke");
      });

    getStarWarsPeoples()
      .then((data) => {
        setStarWarsPeoples(data.results);
      })
      .catch((error) => {
        console.error("Error fetching Star Wars peoples:", error);
        setStarWarsPeoples([]);
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
      <h2 className="text-2xl font-bold border-0 border-b border-white mb-2 mt-8">
        STAR WARS PEOPLE
      </h2>
      <p>{starWarsPeople}</p>
      <h2 className="text-2xl font-bold border-0 border-b border-white mb-2 mt-8">
        STAR WARS PEOPLES
      </h2>
      {starWarsPeoples.map((data, index) => {
        return (
          <p key={index}>
            {data.name}(gender:{data.gender})
          </p>
        );
      })}
    </div>
  );
}
