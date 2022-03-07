import { useRouter } from "next/router";
import Router from "next/router";
import sanity from "../sanity";
import { useEffect, useState } from "react";
import Head from "next/head";
import Cards from "../components/Cards/Cards";
import Card from "../components/Card/Card";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

export default function Search({ posts }) {
  const router = useRouter();
  const { searchQuery } = router.query;

  if (searchQuery) {
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
            maxWidth: "70rem",
            margin: "5rem 0",
          }}
        >
          Search Results for "{searchQuery}"
        </h1>

        {posts.length > 0 ? (
          <>
            {" "}
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
          </>
        ) : (
          <p
            style={{
              fontSize: "3rem",
              fontWeight: "300",
              color: "var(--text-grey)",
            }}
          >
            We couldn't find any post that matches your search query :(
          </p>
        )}
      </main>
    );
  } else {
    return (
      <>
        <Head>
          <title>Search</title>
        </Head>
        <p
          style={{
            fontSize: "3rem",
            fontWeight: "300",
            color: "var(--text-grey)",
          }}
        >
          We don't do that here. Search for something.
        </p>
      </>
    );
  }
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
    { searchQuery: `${searchQuery}*` }
  );

  return {
    props: {
      posts,
    },
  };
}
