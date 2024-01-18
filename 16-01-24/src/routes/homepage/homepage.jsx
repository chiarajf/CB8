import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

export default function Homepage() {
  const [selectedCategory, setSelectedCategory] = useState("smartphones");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.products.filter(
            (product) => product.category === selectedCategory
          )
        )
      );
  }, [selectedCategory]);
  return (
    <div className={styles.containerProduct}>
      <ul>
        <li>
          <button onClick={() => setSelectedCategory("smartphones")}>
            Smartphone
          </button>
        </li>
        <li>
          <button onClick={() => setSelectedCategory("laptops")}>
            Laptops
          </button>
        </li>
      </ul>
      {products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <div className={styles.product}>
            <h3>{product.title}</h3>
            <img src={product.thumbnail} alt={product.title} />
          </div>
        </Link>
      ))}
    </div>
  );
}
