import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

/* =========================
   CART CONTEXT
   في النسخة العادية كانت السلة متغير عام في Script.js.
   في React بنحطها في Context: أي صفحة أو مكوّن يقدر يقرأ
   السلة أو يضيف لها، وReact بتحدّث الشاشة لوحدها.
   التخزين لسه localStorage وبنفس المفتاح cart_guest،
   فالسلة القديمة بتفضل موجودة.
========================= */

const CartContext = createContext(null);
const CART_KEY = "cart_guest";

function readCart() {
  try {
    const items = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    return items
      .map(item => ({
        id: item.id || item.name,
        name: String(item.name || ""),
        price: Number(item.price),
        image: item.image || "",
        qty: Number(item.qty) || 1,
      }))
      .filter(item => item.name && Number.isFinite(item.price));
  } catch (e) {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(readCart);
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  function showToast(message) {
    setToast(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2500);
  }

  function addToCart(id, name, price, image, qty = 1) {
    qty = Number(qty) || 1;
    setCart(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        return prev.map(item => (item.id === id ? { ...item, qty: item.qty + qty } : item));
      }
      return [...prev, { id, name, price: Number(price) || 0, image, qty }];
    });
    showToast("Added to cart");
  }

  function changeQty(index, amount) {
    setCart(prev =>
      prev
        .map((item, i) => (i === index ? { ...item, qty: item.qty + amount } : item))
        .filter(item => item.qty > 0)
    );
  }

  function removeItem(index) {
    setCart(prev => prev.filter((_, i) => i !== index));
  }

  function clearCart() {
    setCart([]);
  }

  const value = useMemo(() => ({
    cart,
    addToCart,
    changeQty,
    removeItem,
    clearCart,
    showToast,
    totalQty: cart.reduce((sum, item) => sum + item.qty, 0),
    totalPrice: cart.reduce((sum, item) => sum + item.price * item.qty, 0),
  }), [cart]);

  return (
    <CartContext.Provider value={value}>
      {children}
      <div id="toast" className={"toast" + (toast ? " show" : "")}>{toast}</div>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
