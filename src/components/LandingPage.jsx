import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <img src="/images/landing.jpg" alt="Houseplants" style={styles.image} />
      <h1 style={styles.title}>Welcome to Green Haven</h1>
      <p style={styles.description}>Your home for beautiful, thriving houseplants!</p>
      <Link to="/products">
        <button style={styles.button}>Get Started</button>
      </Link>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  image: { width: "80%", borderRadius: "10px" },
  title: { fontSize: "2rem", margin: "20px 0" },
  button: { padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" },
};

export default LandingPage;
