import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

/* Checkout تجريبي: لو السلة فاضية منعرضش الفورم.
   التأكيد بيفرّغ السلة وبيطلع رسالة واضحة إنها تجريبية. */

export default function CheckoutPage() {
  const { cart, totalQty, totalPrice, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    clearCart();
    setPlaced(true);
  }

  if (placed) {
    return (
      <section className="container checkout">
        <div className="order-success-card">
          <span className="order-success-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="52" height="52"><circle cx="12" cy="12" r="12" fill="#16a34a"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          <h1>Order placed</h1>
          <p className="order-success">Demo order complete — no real order or payment was made.</p>
          <button type="button" className="add-btn order-success-cta" onClick={() => navigate("/")}>Back to home</button>
        </div>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="container checkout">
        <h1>Checkout</h1>
        <p className="cart-empty">Your cart is empty.</p>
        <p className="checkout-back"><Link className="add-btn" to="/">Back to shopping</Link></p>
      </section>
    );
  }

  return (
    <section className="container checkout checkout-wide">
      <h1>Checkout</h1>
      <div className="checkout-grid">
        <form id="checkout-form" onSubmit={handleSubmit}>
          <label htmlFor="co-name">Full name</label>
          <input id="co-name" name="name" type="text" placeholder="Full Name" autoComplete="name" required />
          <label htmlFor="co-email">Email</label>
          <input id="co-email" name="email" type="email" placeholder="Email" autoComplete="email" required />
          <label htmlFor="co-address">Address</label>
          <input id="co-address" name="address" type="text" placeholder="Address" autoComplete="street-address" required />
          <label htmlFor="co-phone">Phone</label>
          <input id="co-phone" name="phone" type="tel" placeholder="Phone" autoComplete="tel" required />
          <button type="submit">Place Order</button>
          <p className="demo-note">Demo checkout — no real order or payment is processed.</p>
        </form>

        <aside className="order-summary" aria-label="Order summary">
          <h2>Order summary</h2>
          <ul className="order-summary-items">
            {cart.map((item) => (
              <li key={item.id}>
                <span className="order-summary-name">{item.name} <span className="order-summary-qty">× {item.qty}</span></span>
                <span className="order-summary-price">${item.price * item.qty}</span>
              </li>
            ))}
          </ul>
          <div className="order-summary-totals">
            <p><span>Total items</span><strong>{totalQty}</strong></p>
            <p className="order-summary-grand"><span>Total</span><strong>${totalPrice}</strong></p>
          </div>
        </aside>
      </div>
    </section>
  );
}
