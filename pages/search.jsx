import { useRouter } from "next/router";
import Router from "next/router";
import sanity from "../sanity";
import { useEffect, useState } from "react";
import Head from "next/head";
import Cards from "../components/Cards/Cards";
import Card from "../components/Card/Card";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import styles from "../components/Header/Header.module.scss";
import { useForm } from "react-hook-form";
import Button from "../components/Button/Button";

export default function Search({ posts }) {
  const router = useRouter();
  const { searchQuery } = router.query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    router
      .push({
        pathname: "/search",
        query: { searchQuery: data.searchQuery },
      })
      .then(() => router.reload());
  };

  let countPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [pagePosts, setPagePosts] = useState(posts.slice(0, countPerPage));

  const updatePage = (page) => {
    setCurrentPage(page);
    const to = countPerPage * page;
    const from = to - countPerPage;
    setPagePosts(posts.slice(from, to));
  };

  if (searchQuery) {
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
          Search Results for &quot;{searchQuery}&quot;
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
            We couldn&apos;t find any post that matches your search query :(
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
          What are you looking for? Let&apos;s see if we can find it.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            {...register("searchQuery")}
            type="text"
            placeholder="Search..."
            style={{
              border: "none",
              fontSize: "1.6rem",
              outline: "none",
              height: "4.2rem",
              width: "40rem",
              backgroundColor: "#E7F0FE",
              borderRadius: "5px",
              paddingLeft: "2rem",
            }}
          />
          <button
            type="submit"
            style={{
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <Button
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0258 13.8475L18.595 17.4159L17.4158 18.595L13.8475 15.0259C12.5198 16.0902 10.8683 16.6691 9.16666 16.6667C5.02666 16.6667 1.66666 13.3067 1.66666 9.16669C1.66666 5.02669 5.02666 1.66669 9.16666 1.66669C13.3067 1.66669 16.6667 5.02669 16.6667 9.16669C16.6691 10.8684 16.0902 12.5198 15.0258 13.8475ZM13.3542 13.2292C14.4118 12.1416 15.0024 10.6837 15 9.16669C15 5.94335 12.3892 3.33335 9.16666 3.33335C5.94333 3.33335 3.33333 5.94335 3.33333 9.16669C3.33333 12.3892 5.94333 15 9.16666 15C10.6837 15.0024 12.1416 14.4118 13.2292 13.3542L13.3542 13.2292Z"
                    fill="white"
                  />
                </svg>
              }
            />
          </button>
        </form>
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
