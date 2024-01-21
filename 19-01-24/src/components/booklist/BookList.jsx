import styles from "./index.module.scss";
import Book from "../book/";
const BookList = ({ bookListData, title }) => {
  return (
    <div className={styles.BookList}>
      <h2 className={styles.title}>Find your {title}</h2>
      <div className={styles.list}>
        {bookListData.map((book) => (
          <Book bookData={book} key={book.ia} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
