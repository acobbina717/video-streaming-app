import Link from "next/link";
import Banner from "@/components/banner/Banner";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <div>
      <h1>Netflix</h1>
      <Suspense fallback={<Loading />}>
        <Banner
          title="Movie"
          subTitle="a movie"
          imgUrl="/static/clifford.webp"
        />
      </Suspense>
    </div>
  );
}
