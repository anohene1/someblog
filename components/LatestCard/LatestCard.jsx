import styles from "./LatestCard.module.scss";
import Link from "next/link";
import Image from "next/image";

function LatestCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.textArea}>
        <h2>long established</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad at
          delectus doloribus eaque earum eligendi, error exercitationem fugiat
          harum illo impedit incidunt mollitia nam nesciunt nulla officiis
          perspiciatis porro quaerat quis.
        </p>
        <div className={styles.row}>
          <span>May 20th, 2020</span>
          <Link href="/">
            <a>Read More</a>
          </Link>
        </div>
      </div>
      <Image
        className={styles.image}
        src="/../public/images/image.png"
        width={485}
        height={295}
      />
    </div>
  );
}

export default LatestCard;
