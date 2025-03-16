import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ProductListing from "./components/ProductListing";
import CartPage from "./components/CartPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
