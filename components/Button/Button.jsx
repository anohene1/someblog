import React from "react";
import styles from "./Button.module.scss";

function Button(props) {
  return (
    <a className={styles.button}>
      {props.text}{" "}
      {props.icon ?? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99999 1.66663C14.6 1.66663 18.3333 5.39996 18.3333 9.99996C18.3333 14.6 14.6 18.3333 9.99999 18.3333C5.39999 18.3333 1.66666 14.6 1.66666 9.99996C1.66666 5.39996 5.39999 1.66663 9.99999 1.66663ZM10.8333 9.99996V6.66663H9.16666V9.99996H6.66666L9.99999 13.3333L13.3333 9.99996H10.8333Z"
            fill="white"
          />
        </svg>
      )}
    </a>
  );
}

export default Button;
