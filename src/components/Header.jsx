import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/products" style={styles.link}>Shop</Link>
      <Link to="/cart" style={styles.link}>
        🛒 Cart ({totalItems})
      </Link>
    </nav>
  );
};

const styles = {
  nav: { display: "flex", justifyContent: "space-around", padding: "10px", background: "#4CAF50" },
  link: { color: "white", textDecoration: "none", fontSize: "20px" },
};

export default Header;
