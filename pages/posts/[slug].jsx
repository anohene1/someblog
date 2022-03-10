import sanity, { urlFor } from "../../sanity";
import Image from "next/image";
import PortableText from "react-portable-text";
import styles from "./Slug.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Post({ post }) {
  // const date = new Date(post.publishedAt).toDateString();
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div style={{ width: "100%", height: "50rem", position: "relative" }}>
        <Image
          src={urlFor(post.mainImage).url()}
          layout="fill"
          objectFit="contain"
          alt=""
        />
      </div>
      <article className={styles.article}>
        <h1 className={styles.mainHeading}>{post.title}</h1>
        <div className={styles.metadata}>
          <h3>Written by {post.author.name}</h3>
          <span>{new Date(post.publishedAt).toDateString()}</span>
        </div>
        <hr />
        <PortableText
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          content={post.body}
          serializers={{
            h1: (props) => <h1 className={styles.postHeading} {...props} />,
            p: (props) => <p className={styles.paragraph} {...props} />,
            normal: (props) => <p className={styles.paragraph} {...props} />,
            h2: (props) => <h2 className="" {...props} />,
            h4: (props) => <h4 className={styles.postSubHeading} {...props} />,
            li: ({ children }) => <li className="">{children}</li>,
            link: ({ href, children }) => (
              <a href={href} className="">
                {children}
              </a>
            ),
          }}
        />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await sanity.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );
  const paths = response.map((slug) => ({ params: { slug } }));

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const post = await sanity.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
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
    { slug }
  );

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}
