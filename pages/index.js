import Header from "../components/Header/Header";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import LatestCard from "../components/LatestCard/LatestCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SomeBlog</title>
      </Head>
      <Hero />
      <LatestCard />
    </div>
  );
}
