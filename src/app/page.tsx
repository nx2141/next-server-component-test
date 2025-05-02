import { Suspense, use } from "react";
import { dadJokePromise } from "./lib/apiPromises";

function FetchComponent() {
  const data = use(dadJokePromise);
  return (
    <>
      <p>{data.joke}</p>
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading…</p>}>
      <FetchComponent />
    </Suspense>
  );
}
