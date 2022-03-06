import Header from "../components/Header/Header";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import LatestCard from "../components/LatestCard/LatestCard";
import Cards from "../components/Cards/Cards";
import Card from "../components/Card/Card";
import HighlightCard from "../components/HighlightCard/HighlightCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SomeBlog</title>
      </Head>
      <Hero />
      <LatestCard />
      <Cards>
        <Card />
        <Card />
        <Card />
      </Cards>
      <HighlightCard />
    </div>
  );
}
