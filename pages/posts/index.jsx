import sanity from "../../sanity";
import Card from "../../components/Card/Card";
import Cards from "../../components/Cards/Cards";
import Head from "next/head";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { useState } from "react";

export default function Posts({ posts }) {
  let countPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [pagePosts, setPagePosts] = useState(posts.slice(0, countPerPage));

  const updatePage = (page) => {
    setCurrentPage(page);
    const to = countPerPage * page;
    const from = to - countPerPage;
    setPagePosts(posts.slice(from, to));
  };

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
        {pagePosts.map((post) => (
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
      <Pagination
        pageSize={countPerPage}
        total={posts.length}
        onChange={updatePage}
        current={currentPage}
        style={{
          fontWeight: "600",
          margin: "5rem auto",
          textAlign: "center",
        }}
      />
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
