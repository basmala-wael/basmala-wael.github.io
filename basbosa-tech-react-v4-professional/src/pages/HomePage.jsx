import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { productsByCategory } from "../data/products";

/* الصفحة الرئيسية: السلايدر + الهيرو + الأقسام.
   السلايدر كان setInterval بيغيّر كلاسات — هنا بقى State (index)
   وuseEffect بيظبط التايمر. */

const SLIDES = [
  {
    title: "New Season Offers",
    text: "Up to 50% off on smartphones",
    btn: "Shop Phones",
    to: "/category/Smartphones",
    img: "images/iPhone 17 Pro Max.jpg",
    alt: "iPhone 17 Pro Max",
  },
  {
    title: "Latest Laptops",
    text: "MacBook & HP deals",
    btn: "Shop Laptops",
    to: "/category/Laptops",
    img: "images/MacBook Air M2.jpg",
    alt: "MacBook Air M2",
  },
  {
    title: "Smart Watches Sale",
    text: "Apple & Samsung deals",
    btn: "View Deals",
    to: "/category/Smart Watches",
    img: "images/Apple Watch Series 9.jpg",
    alt: "Apple Watch Series 9",
  },
];

export default function HomePage() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(current => (current + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="promo-slider">
        <div className="slides">
          {SLIDES.map((s, i) => (
            <div className={"promo-slide" + (i === slide ? " active" : "")} key={s.title}>
              <div className="promo-content">
                <h1>{s.title}</h1>
                <p>{s.text}</p>
                <Link to={s.to} className="promo-btn">{s.btn}</Link>
              </div>
              <img src={s.img} className="promo-img" alt={s.alt} />
            </div>
          ))}
        </div>

        <button
          className="slider-btn prev"
          type="button"
          onClick={() => setSlide(current => (current - 1 + SLIDES.length) % SLIDES.length)}
        >
          &#10094;
        </button>
        <button
          className="slider-btn next"
          type="button"
          onClick={() => setSlide(current => (current + 1) % SLIDES.length)}
        >
          &#10095;
        </button>

        <div className="slider-dots">
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              className={"dot" + (i === slide ? " active" : "")}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setSlide(i)}
            ></button>
          ))}
        </div>
      </section>

      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <h1>Your Destination for Smart Electronics</h1>
            <p>Explore a wide range of smartphones, laptops, smart watches, and accessories designed for performance and reliability.</p>
            <div className="hero-actions">
              <Link to="/category/Smartphones" className="btn primary">Shop Smartphones</Link>
              <Link to="/categories" className="btn outline">Browse Categories</Link>
            </div>
          </div>
          <div className="hero-media">
            <img src="images/tech-pink-set.jpg" alt="Pink gadgets" />
          </div>
        </div>
      </section>

      <section className="categories container">
        <div className="cat-grid">
          <Link to="/category/Smartphones" className="cat-item">
            <img src="images/SmarPhone.jpg" alt="phones" />
            <span><strong>Smartphones</strong></span>
          </Link>
          <Link to="/category/Laptops" className="cat-item">
            <img src="images/Laptop.jpg" alt="laptops" />
            <span><strong>Laptops</strong></span>
          </Link>
          <Link to="/category/Smart Watches" className="cat-item">
            <img src="images/Smartwatch.jpg" alt="watches" />
            <span><strong>Smart Watches</strong></span>
          </Link>
        </div>
      </section>

      {["Smartphones", "Smart Watches", "Laptops"].map(category => (
        <section className="container" key={category}>
          <h2 className="section-title">{category}</h2>
          <ProductGrid products={productsByCategory(category, { featuredOnly: true })} />
        </section>
      ))}
    </>
  );
}
