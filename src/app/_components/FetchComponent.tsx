// // app/FetchComponent.tsx
// import { use } from "react";
// import { dadJokePromise, lukePromise } from "../lib/apiPromises";

// export default async function FetchComponent() {
//   // Promise.all で並列にデータを取得し、最も遅いレスポンスを待機
//   const [jokeData, lukeData] = await use(
//     Promise.all([dadJokePromise, lukePromise])
//   );
//   return (
//     <section>
//       <p><strong>Joke:</strong> {jokeData.joke}</p>
//       <p><strong>Luke:</strong> {lukeData.name}</p>
//     </section>
//   );
// }
