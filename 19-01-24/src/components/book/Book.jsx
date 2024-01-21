import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Book = ({ bookData }) => {
  const { title, cover_id, authors } = bookData;
  const author = authors[0]?.name;

  return (
    <div className={styles.book}>
      <Link to={`book/${title}`}>
        <img
          className={styles.img}
          src={`https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`}
          alt={title}
        />
        <div className={styles.info}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.author}>{author}</p>
        </div>
      </Link>
    </div>
  );
};

export default Book;
