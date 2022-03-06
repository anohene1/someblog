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
      <Image
        className={styles.image}
        src={urlFor(props.image).url()}
        width={485}
        height={295}
      />
    </div>
  );
}

export default LatestCard;
