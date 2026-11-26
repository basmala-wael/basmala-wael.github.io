import ProductCard from "./ProductCard";
import { useSearch } from "../context/SearchContext";

/* شبكة منتجات قسم واحد — بتقرأ كلمة البحث من SearchContext
   وتفلتر الكروت، زي ما البحث في النسخة العادية كان بيعمل. */

export default function ProductGrid({ products }) {
  const { query } = useSearch();
  const q = query.trim().toLowerCase();
  const visible = q ? products.filter(p => p.name.toLowerCase().includes(q)) : products;

  return (
    <div className="products-grid">
      {visible.map(p => (
        <ProductCard key={p.id} id={p.id} name={p.name} price={p.price} image={p.image} />
      ))}
    </div>
  );
}
