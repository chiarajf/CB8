import { useParams } from "react-router-dom";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";

export default function Product() {
  const { productId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className={styles.singleProduct}>
      <h1>{product.title}</h1>
      <h3>{product.brand}</h3>
      <p className={styles.category}>{product.category}</p>
      <p className={styles.description}>{product.description}</p>
      <img src={product.thumbnail} alt={product.title} />
      <p className={styles.price}>
        <strong>{product.price} $</strong> -
        <strong>{product.discountPercentage} %</strong>{" "}
      </p>
      {product.images &&
        product.images.map((image) => (
          <img src={image} alt={image} key={image} />
        ))}
    </div>
  );
}
