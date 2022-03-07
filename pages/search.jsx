import { useRouter } from "next/router";
import Router from "next/router";
import sanity from "../sanity";
import { useEffect, useState } from "react";
import Head from "next/head";
import Cards from "../components/Cards/Cards";
import Card from "../components/Card/Card";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

// let searchQuery = Router.query.searchQuery;

export default function Search({ posts }) {
  // console.log(searchQuery);
  const router = useRouter();
  const { searchQuery } = router.query;

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
        <title>Search</title>
      </Head>
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          maxWidth: "45rem",
          margin: "5rem 0",
        }}
      >
        Search Results
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

export async function getServerSideProps(context) {
  let searchQuery = context.query.searchQuery;
  const posts = await sanity.fetch(
    `
*[[title, body, description] match [$searchQuery]] | order(publishedAt asc) {
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
   
  }`,
    { searchQuery }
  );

  return {
    props: {
      posts,
    },
  };
}
