// lib/apiPromises.ts

// Dad Joke API
export const dadJokePromise = fetch("https://icanhazdadjoke.com/", {
  headers: { Accept: "application/json" },
}).then((res) => {
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json(); // { joke: string, id: string }
});

// SWAPI Luke Skywalker
export const lukePromise = fetch("https://swapi.dev/api/people/1").then(
  (res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json(); // { name: string, ... }
  },
);
