import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

/* كارت المنتج — أشهر مثال على فكرة React:
   المكوّن ده بيتكتب مرة واحدة، وبنستخدمه لكل منتج.
   بيستقبل بيانات المنتج كـ props. */

export default function ProductCard({ id, name, price, image }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card" data-id={id}>
      <Link className="product-link" to={`/product/${id}`} aria-label={`View ${name} details`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </Link>
      <p className="price">${price}</p>
      <button
        className="add-btn"
        type="button"
        onClick={() => addToCart(id, name, price, image)}
      >
        Add to Cart
      </button>
    </div>
  );
}
