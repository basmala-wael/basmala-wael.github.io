import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import { CartProvider } from "./context/CartContext";
import { SearchProvider, useSearch } from "./context/SearchContext";
import { useEffect } from "react";

/* HashRouter بدل BrowserRouter عشان نسخة المعاينة dist/index.html
   تشتغل بفتح الملف مباشرة (file://) من غير سيرفر. */

function Shell() {
  const location = useLocation();
  const { setQuery } = useSearch();

  // صفحات فيها منتجات (البحث بيظهر فيها بس) — زي النسخة العادية
  const hasProducts =
    location.pathname === "/" ||
    location.pathname.startsWith("/category/") && location.pathname !== "/categories" ||
    location.pathname.startsWith("/product/");

  // نرجّع فوق أول ما نغيّر الصفحة، ونفضّي البحث
  useEffect(() => {
    window.scrollTo(0, 0);
    setQuery("");
  }, [location.pathname]);

  return (
    <>
      <Header hasProducts={hasProducts} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <CartProvider>
        <SearchProvider>
          <Shell />
        </SearchProvider>
      </CartProvider>
    </HashRouter>
  );
}
