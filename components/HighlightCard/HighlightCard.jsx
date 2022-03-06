import React from "react";
import Image from "next/image";
import styles from "./HighlightCard.module.scss";
import Link from "next/link";

function HighlightCard() {
  return (
    <div className={styles.card}>
      <div className={styles.textArea}>
        <h1>What is Lorem Ipsum?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam
          doloribus earum error facere harum illo ipsa magnam magni molestiae
          numquam odio optio placeat quia recusandae repellendus, reprehenderit
          similique vero?
        </p>
        <div className={styles.row}>
          <span>May 20th, 2020</span>
          <Link href="/">
            <a>Read More</a>
          </Link>
        </div>
      </div>
      <div style={{ width: "100%", position: "relative" }}>
        <Image
          src="/../public/images/image.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default HighlightCard;
