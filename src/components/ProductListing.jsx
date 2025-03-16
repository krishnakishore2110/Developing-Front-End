import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const products = [
  { id: 1, name: "Aloe Vera", price: 10, image: "/images/aloe.jpg" },
  { id: 2, name: "Snake Plant", price: 15, image: "/images/snake.jpg" },
  { id: 3, name: "Peace Lily", price: 12, image: "/images/peace.jpg" },
  { id: 4, name: "Spider Plant", price: 10, image: "/images/spider.jpg" },
  { id: 5, name: "Fiddle Leaf Fig", price: 25, image: "/images/fig.jpg" },
  { id: 6, name: "Cactus", price: 8, image: "/images/cactus.jpg" },
];

const ProductListing = () => {
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={product.image} alt={product.name} width="150" height="150" />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))} style={styles.button}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", padding: "20px" },
  card: { border: "1px solid #ccc", padding: "10px", textAlign: "center", borderRadius: "5px" },
  button: { backgroundColor: "#4CAF50", color: "white", border: "none", padding: "8px 12px" },
};

export default ProductListing;
