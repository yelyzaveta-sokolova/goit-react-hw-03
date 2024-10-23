import styles from "./SearchBox.module.css";

export default function SearchBox({ filter, searchFilter }) {
  return (
    <div className={styles.search}>
      <p>Find contacts by name</p>
      <input
        className={styles.inputSearch}
        value={filter}
        type="text"
        onChange={(evt) => searchFilter(evt.target.value)}
        placeholder="Name or Surname"
      ></input>
    </div>
  );
}