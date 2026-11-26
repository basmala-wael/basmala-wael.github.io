import { Link } from "react-router-dom";
import { productsByCategory } from "../data/products";

/* صفحة الأقسام — عدد المنتجات بيتجاب من نفس مصدر البيانات
   PRODUCTS، فبيفضل صحيح لو ضفنا أو شلنا منتجات. */

const CATEGORIES = [
  { name: "Smartphones", image: "images/SmarPhone.jpg", blurb: "iPhone, Samsung, Xiaomi and more" },
  { name: "Laptops", image: "images/Laptop.jpg", blurb: "MacBook and gaming laptops" },
  { name: "Smart Watches", image: "images/Smartwatch.jpg", blurb: "Apple Watch and Galaxy Watch" },
];

export default function CategoriesPage() {
  return (
    <section className="categories-page container">
      <h2 className="section-title">Categories</h2>
      <div className="categories-grid">
        {CATEGORIES.map((cat) => {
          const count = productsByCategory(cat.name).length;
          return (
            <Link to={`/category/${encodeURIComponent(cat.name)}`} className="category-card" key={cat.name}>
              <img src={cat.image} alt={cat.name} />
              <div className="category-card-body">
                <h3>{cat.name}</h3>
                <p className="category-blurb">{cat.blurb}</p>
                <p className="category-count">{count} {count === 1 ? "product" : "products"}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
