import { useState, useEffect } from "react";
import { HTTP_GET } from "../../utils/http";
import styles from "./index.module.scss";
import BookList from "../../components/booklist";

export default function Homepage() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    Promise.all([
      HTTP_GET("/subjects/love.json"),
      HTTP_GET("/subjects/war.json"),
      HTTP_GET("/subjects/adventure.json"),
    ]).then((data) => setLists(data));
  }, []);

  return (
    <div className={styles.homepage}>
      {lists.map((list) => (
        <BookList
          bookListData={list.works}
          title={list.name}
          key={list.works[0].ia}
        />
      ))}
    </div>
  );
}
