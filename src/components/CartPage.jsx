import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? <p>Your cart is empty.</p> : (
        cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} width="100" />
            <h2>{item.name} - ${item.price} x {item.quantity}</h2>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        ))
      )}
      <h2>Total: ${totalPrice}</h2>
    </div>
  );
};

export default CartPage;
