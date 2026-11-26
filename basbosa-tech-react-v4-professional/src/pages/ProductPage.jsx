import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { PRODUCTS, productsByCategory } from "../data/products";
import { useCart } from "../context/CartContext";

/* صفحة تفاصيل المنتج.
   في النسخة العادية كانت بتقرأ ?id= من اللينك — هنا الـ id
   بيبقى جزء من المسار نفسه /product/iphone-14 (أنضف).
   لو كتبتي description أو specs للمنتج في الكتالوج بتظهر هنا تلقائيًا. */

export default function ProductPage() {
  const { id } = useParams();
  const product = PRODUCTS[id];
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(1);
    if (product) document.title = "Basbosa Tech — " + product.name;
  }, [id]);

  if (!product) {
    return (
      <main className="container product-page">
        <div className="product-container">
          <div className="product-not-found">
            <p className="cart-empty">This product is not available.</p>
            <Link className="add-btn" to="/">Back to home</Link>
          </div>
        </div>
      </main>
    );
  }

  const related = productsByCategory(product.category).filter(p => p.id !== id);

  return (
    <main className="container product-page">
      <div className="product-container" id="product-container">
        <Link className="product-back" to={product.categoryPage}>&larr; Back to {product.category}</Link>
        <div className="product-details">
          <div className="product-details-media">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-details-info">
            <span className="product-category">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="price product-details-price">${product.price}</p>
            {product.description && <p className="product-description">{product.description}</p>}
            {Array.isArray(product.specs) && product.specs.length > 0 && (
              <ul className="product-specs">
                {product.specs.map(spec => <li key={spec}>{spec}</li>)}
              </ul>
            )}
            <div className="product-qty">
              <button type="button" aria-label="Decrease quantity" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
              <span id="qty-value">{qty}</span>
              <button type="button" aria-label="Increase quantity" onClick={() => setQty(q => q + 1)}>+</button>
            </div>
            <button
              className="add-btn product-details-add"
              type="button"
              onClick={() => addToCart(id, product.name, product.price, product.image, qty)}
            >
              Add to Cart
            </button>
            <p className="product-demo-note">Demo store: adds to your demo cart only. No real orders or payments.</p>
          </div>
        </div>
        {related.length > 0 && (
          <>
            <h2 className="section-title">More {product.category}</h2>
            <ProductGrid products={related} />
          </>
        )}
      </div>
    </main>
  );
}
