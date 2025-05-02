// lib/apiPromises.ts
export const dadJokePromise = fetch("https://icanhazdadjoke.com/", {
  headers: { Accept: "application/json" },
}).then((r) => {
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json(); // { joke: string, id: … }
});

export const lukePromise = fetch("https://swapi.dev/api/people/1").then((r) => {
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json(); // { name, gender, … }
});

export const peoplePromise = fetch("https://swapi.dev/api/people").then((r) => {
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json(); // { results: [...] }
});
