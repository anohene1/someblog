import Header from "../components/Header/Header";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import LatestCard from "../components/LatestCard/LatestCard";
import Cards from "../components/Cards/Cards";
import Card from "../components/Card/Card";
import HighlightCard from "../components/HighlightCard/HighlightCard";
import Button from "../components/Button/Button";
import Link from "next/link";
import sanity, { urlFor } from "../sanity";

export default function Home({ posts }) {
  console.log(posts);
  const latestPost = posts[0];
  return (
    <div>
      <Head>
        <title>SomeBlog</title>
      </Head>
      <Hero />
      <LatestCard
        title={latestPost.title}
        description={latestPost.description}
        publishedAt={latestPost.publishedAt}
        link={latestPost.slug.current}
        image={latestPost.mainImage}
      />
      <Cards>
        {posts.slice(1, 4).map((post) => (
          <Card
            key={post._id}
            title={post.title}
            description={post.description}
            publishedAt={post.publishedAt}
            link={post.slug.current}
            image={post.mainImage}
          />
        ))}
      </Cards>
      <HighlightCard />
      <div
        style={{ display: "flex", justifyContent: "end", marginTop: "3rem" }}
      >
        <Link href="/posts">
          <Button text="See more" />
        </Link>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const posts = await sanity.fetch(`
 *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    body,
    mainImage,
  publishedAt,
  author-> {
  name,
  image,
},
description,
slug
   
  }
  `);

  return {
    props: {
      posts,
    },
  };
}
