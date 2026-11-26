import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";

/* الهيدر الموحّد — نفس شكل النسخة العادية.
   - عدّاد السلة بيتحدّث لوحده لأنه بيقرأ من CartContext.
   - المنيو والبحث والـDropdown بقت State بدل classList.toggle. */

export default function Header({ hasProducts }) {
  const { totalQty } = useCart();
  const { query, setQuery } = useSearch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">

        <Link to="/" className="header-left">
          <img src="images/Logo.jpg" alt="Basbosa Tech logo" />
          <span className="site-name">Basbosa<span>Tech</span></span>
        </Link>

        <nav className={"header-nav" + (menuOpen ? " open" : "")} id="main-nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <div className={"dropdown" + (dropdownOpen ? " open" : "")}>
            <button
              className="dropbtn"
              type="button"
              onClick={e => { e.stopPropagation(); setDropdownOpen(open => !open); }}
            >
              Categories
            </button>
            <div className="dropdown-content">
              <Link to="/category/Smartphones" onClick={() => setMenuOpen(false)}>Smartphones</Link>
              <Link to="/category/Laptops" onClick={() => setMenuOpen(false)}>Laptops</Link>
              <Link to="/category/Smart Watches" onClick={() => setMenuOpen(false)}>Smart Watches</Link>
            </div>
          </div>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
        </nav>

        <div className="header-icons">
          {hasProducts && (
            <button
              className="icon"
              id="search-toggle"
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen(open => !open)}
            >
              <svg viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="16" y1="16" x2="22" y2="22"></line>
              </svg>
            </button>
          )}

          <Link to="/cart" className="icon" aria-label="Cart">
            <svg viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="18" cy="21" r="1"></circle>
              <path d="M1 1h4l2.5 13h11l2-8H6"></path>
            </svg>
            <span className="cart-count">{totalQty}</span>
          </Link>

          <button
            className="icon menu-toggle"
            id="menu-toggle"
            type="button"
            aria-label="Menu"
            onClick={() => setMenuOpen(open => !open)}
          >
            <svg viewBox="0 0 24 24">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {hasProducts && searchOpen && (
        <div className="container search-bar" id="search-bar">
          <input
            type="search"
            id="search-input"
            placeholder="Search products..."
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      )}
    </header>
  );
}
