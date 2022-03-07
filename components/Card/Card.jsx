import styles from "./Card.module.scss";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../sanity";

function Card(props) {
  const date = new Date(props.publishedAt).toDateString();
  return (
    <div className={styles.card}>
      <div style={{ width: "100%", height: "18rem", position: "relative" }}>
        <Image
          src={urlFor(props.image).url()}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
      <div className={styles.textArea}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className={styles.row}>
          <span>{date}</span>
          <Link href={`/posts/${props.link}`}>
            <a>Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
