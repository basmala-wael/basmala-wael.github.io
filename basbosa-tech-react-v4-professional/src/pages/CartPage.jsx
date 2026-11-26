import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

/* صفحة السلة — كل التعديل (كمية/مسح/تفريغ) بيعدّل الـ State
   في CartContext، وReact بترسم القايمة من الأول لوحدها. */

export default function CartPage() {
  const { cart, totalQty, totalPrice, changeQty, removeItem, clearCart, showToast } = useCart();
  const navigate = useNavigate();

  function goToCheckout() {
    if (cart.length === 0) {
      showToast("Your cart is empty");
      return;
    }
    navigate("/checkout");
  }

  return (
    <section className="container cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <div className="cart-empty-state">
          <span className="cart-empty-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="#16305f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="20" r="1.6"/><circle cx="17" cy="20" r="1.6"/><path d="M2 3h3l2.6 12.4a1.5 1.5 0 0 0 1.5 1.1h7.9a1.5 1.5 0 0 0 1.5-1.2L20.5 7H5.5"/></svg></span>
          <p className="cart-empty-title">Your cart is empty</p>
          <p className="cart-empty-sub">Browse the categories and add something you like.</p>
          <Link className="add-btn cart-empty-cta" to="/categories">Browse products</Link>
        </div>
      ) : (
        <>
          <div id="cart-items" className="cart-list">
            {cart.map((item, index) => (
              <div className="cart-item" key={item.id}>
                <Link className="cart-item-link" to={`/product/${encodeURIComponent(item.id)}`} aria-label={`View ${item.name} details`}>
                  <img src={item.image} alt={item.name} />
                </Link>
                <div className="cart-info">
                  <h3><Link className="cart-item-link" to={`/product/${encodeURIComponent(item.id)}`}>{item.name}</Link></h3>
                  <p className="cart-unit-price">${item.price} each</p>
                  <div className="qty">
                    <button type="button" aria-label={`Decrease quantity of ${item.name}`} onClick={() => changeQty(index, -1)}>−</button>
                    <span aria-label={`Quantity: ${item.qty}`}>{item.qty}</span>
                    <button type="button" aria-label={`Increase quantity of ${item.name}`} onClick={() => changeQty(index, 1)}>+</button>
                  </div>
                </div>
                <p className="cart-line-total">${item.price * item.qty}</p>
                <button className="remove-btn" type="button" aria-label={`Remove ${item.name} from cart`} onClick={() => removeItem(index)}>×</button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="totals">
              <p className="big"><strong>Total Items: </strong><span id="total-items">{totalQty}</span></p>
              <p className="big"><strong>Total Price: </strong><span id="total-price">${totalPrice}</span></p>
            </div>
            <div className="cart-actions">
              <button id="clear-cart" className="cart-action-btn cart-action-secondary" type="button" onClick={() => { clearCart(); showToast("Cart cleared"); }}>Clear Cart</button>
              <button className="cart-action-btn" type="button" onClick={goToCheckout}>Checkout</button>
            </div>
            <p className="demo-note cart-demo-note">Demo store — the cart lives in your browser only. No real orders or payments.</p>
          </div>
        </>
      )}
    </section>
  );
}
