import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>SomeBlog</title>
      </Head>
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          maxWidth: "70rem",
          margin: "5rem 0",
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: "3rem",
          fontWeight: "300",
          color: "var(--text-grey)",
        }}
      >
        The page you&apos;re looking for cannot be found, but that&apos;s not
        the end of the world. You can{" "}
        <Link href="/">
          <a style={{ textDecoration: "underline" }}>click here</a>
        </Link>{" "}
        to checkout some of our latest articles.
      </p>
    </>
  );
}
