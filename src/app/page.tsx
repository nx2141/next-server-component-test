// app/page.tsx
import { Suspense } from "react";
// import FetchComponent from "./_components/FetchComponent";

export default function Page() {
  return (
    <main>
      {/* 並列フェッチを含むコンポーネントを Suspense 境界で包む */}
      <Suspense fallback={<p>Loading joke and Luke...</p>}>
        {/* <FetchComponent /> */}
      </Suspense>
    </main>
  );
}
