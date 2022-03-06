import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>SomeBlog</h1>
      <div className={styles.searchBox}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0258 13.8475L18.595 17.4159L17.4158 18.595L13.8475 15.0259C12.5198 16.0902 10.8683 16.6691 9.16666 16.6667C5.02666 16.6667 1.66666 13.3067 1.66666 9.16669C1.66666 5.02669 5.02666 1.66669 9.16666 1.66669C13.3067 1.66669 16.6667 5.02669 16.6667 9.16669C16.6691 10.8684 16.0902 12.5198 15.0258 13.8475ZM13.3542 13.2292C14.4118 12.1416 15.0024 10.6837 15 9.16669C15 5.94335 12.3892 3.33335 9.16666 3.33335C5.94333 3.33335 3.33333 5.94335 3.33333 9.16669C3.33333 12.3892 5.94333 15 9.16666 15C10.6837 15.0024 12.1416 14.4118 13.2292 13.3542L13.3542 13.2292Z"
            fill="black"
          />
        </svg>
        <input
          className={styles.searchField}
          type="text"
          placeholder="Search..."
        />
      </div>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/">
          <a className={styles.link}>Articles</a>
        </Link>
        <a href="">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
              fill="#454444"
            />
          </svg>
        </a>
        <a href="">
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.162 2.65599C20.3986 2.99368 19.589 3.21546 18.76 3.31399C19.6337 2.79142 20.2877 1.969 20.6 0.999988C19.78 1.48799 18.881 1.82999 17.944 2.01499C17.3146 1.34157 16.4804 0.894951 15.5709 0.744572C14.6615 0.594194 13.7279 0.748479 12.9153 1.18344C12.1026 1.6184 11.4564 2.30967 11.0771 3.14978C10.6978 3.98989 10.6067 4.93177 10.818 5.82899C9.1551 5.74564 7.52832 5.31351 6.04328 4.56065C4.55823 3.80779 3.24812 2.75104 2.19799 1.45899C1.82628 2.09744 1.63095 2.82321 1.63199 3.56199C1.63199 5.01199 2.36999 6.29299 3.49199 7.04299C2.828 7.02208 2.17862 6.84277 1.59799 6.51999V6.57199C1.59819 7.53769 1.93236 8.4736 2.54384 9.22105C3.15532 9.96849 4.00647 10.4815 4.95299 10.673C4.33661 10.84 3.6903 10.8646 3.06299 10.745C3.32986 11.5762 3.85 12.3032 4.55058 12.8241C5.25117 13.345 6.09712 13.6338 6.96999 13.65C6.10247 14.3313 5.10917 14.835 4.04687 15.1322C2.98458 15.4293 1.87412 15.5142 0.778992 15.382C2.69069 16.6114 4.91609 17.2641 7.18899 17.262C14.882 17.262 19.089 10.889 19.089 5.36199C19.089 5.18199 19.084 4.99999 19.076 4.82199C19.8949 4.23016 20.6016 3.49701 21.163 2.65699L21.162 2.65599Z"
              fill="#454444"
            />
          </svg>
        </a>
        <a href="">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.335 18.339H15.67V14.162C15.67 13.166 15.65 11.884 14.28 11.884C12.891 11.884 12.679 12.968 12.679 14.089V18.339H10.013V9.75H12.573V10.92H12.608C12.966 10.246 13.836 9.533 15.136 9.533C17.836 9.533 18.336 11.311 18.336 13.624V18.339H18.335ZM7.003 8.575C6.79956 8.57526 6.59806 8.53537 6.41006 8.45761C6.22207 8.37984 6.05127 8.26574 5.90746 8.12184C5.76365 7.97793 5.64965 7.80706 5.57201 7.61901C5.49437 7.43097 5.4546 7.22944 5.455 7.026C5.4552 6.71983 5.54618 6.4206 5.71644 6.16615C5.8867 5.91169 6.12859 5.71343 6.41153 5.59645C6.69447 5.47947 7.00574 5.44902 7.30598 5.50894C7.60622 5.56886 7.88196 5.71648 8.09831 5.93311C8.31466 6.14974 8.46191 6.42566 8.52145 6.72598C8.58099 7.0263 8.55013 7.33753 8.43278 7.62032C8.31543 7.9031 8.11687 8.14474 7.86219 8.31467C7.60751 8.4846 7.30817 8.5752 7.002 8.575H7.003ZM8.339 18.339H5.666V9.75H8.34V18.339H8.339ZM19.67 3H4.329C3.593 3 3 3.58 3 4.297V19.703C3 20.42 3.594 21 4.328 21H19.666C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3H19.669H19.67Z"
              fill="#454444"
            />
          </svg>
        </a>
      </nav>
    </header>
  );
}
