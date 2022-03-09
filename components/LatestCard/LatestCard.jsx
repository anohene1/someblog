import styles from "./LatestCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../sanity";

function LatestCard(props) {
  const date = new Date(props.publishedAt).toDateString();
  return (
    <div className={styles.card}>
      <div className={styles.textArea}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className={styles.row}>
          <span>{date}</span>
          <Link href={`/posts/${props.link}`}>
            <a>Read More</a>
          </Link>
        </div>
      </div>
      <div style={{ width: "100%", height: "34.5rem", position: "relative" }}>
        <Image
          src={urlFor(props.image).url()}
          layout="fill"
          objectFit="cover"
          alt={props.title}
        />
      </div>
    </div>
  );
}

export default LatestCard;
