import sanity from "../../sanity";
import Card from "../../components/Card/Card";
import Cards from "../../components/Cards/Cards";
import Head from "next/head";

export default function Posts({ posts }) {
  return (
    <main>
      <Head>
        <title>All Articles</title>
      </Head>
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          maxWidth: "45rem",
          margin: "5rem 0",
        }}
      >
        All Articles
      </h1>
      <Cards>
        {posts.map((post) => (
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
    </main>
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
