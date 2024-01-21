import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.scss";
import { HTTP_GET } from "../../utils/http";
import { Link } from "react-router-dom";

export default function Book() {
  const { bookId } = useParams();
  const [bookInfo, setBookInfo] = useState([]);

  useEffect(() => {
    HTTP_GET(`/search.json?q=${bookId.replace(" ", "+")}`).then((data) =>
      setBookInfo(data.docs[0])
    );
  }, []);
  return (
    <div className={styles.container}>
      <Link to="/">Back to Home</Link>
      <div className={styles.book}>
        {bookInfo.isbn && (
          <>
            <div className={styles.imgContainer}>
              <img
                className={styles.img}
                src={`https://covers.openlibrary.org/b/id/${bookInfo.cover_i}-M.jpg`}
                alt={bookInfo?.title}
              />
            </div>
            <h1 className={styles.title}>{bookId.replaceAll("+", " ")}</h1>
            <h3 className={styles.author}>{bookInfo.author_name}</h3>
            <div className={styles.info}>
              <h5>
                Rating:<br></br> {bookInfo.ratings_count + "⭐"}
              </h5>
              <h5>
                {" "}
                Language:<br></br>
                {bookInfo.language[0]}
              </h5>
            </div>
            <h4>Whats about?</h4>
            <p>{bookInfo.first_sentence[0] + "[...]"}</p>
          </>
        )}
      </div>
    </div>
  );
}
