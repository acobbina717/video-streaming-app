import Link from "next/link";
import Banner from "@/components/banner/Banner";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <div>
      <Banner
        title="Movie with a long ass name "
        subTitle="a movie with a long ass description for some reason "
        imgUrl="/static/clifford.webp"
      />
    </div>
  );
}
