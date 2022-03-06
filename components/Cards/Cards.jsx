import styles from "./Cards.module.scss";

function Cards(props) {
  return <div className={styles.cards}>{props.children}</div>;
}

export default Cards;
