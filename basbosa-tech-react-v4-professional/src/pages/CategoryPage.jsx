import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { productsByCategory } from "../data/products";

/* صفحة قسم واحدة لكل الأقسام بدل 3 ملفات HTML —
   اسم القسم بيجي من اللينك (useParams).
   الترتيب (sort) بيتعمل على نسخة من القايمة، الكتالوج نفسه مش بيتغير. */

const SORTS = {
  featured: { label: "Featured", fn: null },
  "price-asc": { label: "Price: Low to High", fn: (a, b) => a.price - b.price },
  "price-desc": { label: "Price: High to Low", fn: (a, b) => b.price - a.price },
  name: { label: "Name: A to Z", fn: (a, b) => a.name.localeCompare(b.name) },
};

export default function CategoryPage() {
  const { category } = useParams();
  const [sort, setSort] = useState("featured");
  const products = productsByCategory(category);

  const sorted = [...products];
  const sortFn = SORTS[sort]?.fn;
  if (sortFn) sorted.sort(sortFn);

  return (
    <section className="container">
      <div className="category-header">
        <h2 className="section-title">{category}</h2>
        {products.length > 0 && (
          <label className="sort-control">
            Sort by
            <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
              {Object.entries(SORTS).map(([key, s]) => (
                <option key={key} value={key}>{s.label}</option>
              ))}
            </select>
          </label>
        )}
      </div>
      {products.length ? (
        <ProductGrid products={sorted} />
      ) : (
        <p className="cart-empty">This category is not available.</p>
      )}
    </section>
  );
}
