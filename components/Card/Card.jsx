import styles from "./Card.module.scss";
import Image from "next/image";
import Link from "next/link";

function Card() {
  return (
    <div className={styles.card}>
      <div style={{ width: "100%", height: "18rem", position: "relative" }}>
        <Image
          src="/../public/images/image.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.textArea}>
        <h3>long established</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          dicta dolor fuga laboriosam minus pariatur porro quia totam veniam
          voluptates.
        </p>
        <div className={styles.row}>
          <span>May 20th, 2020</span>
          <Link href="/">
            <a>Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
