import { createContext, useContext, useState } from "react";

/* البحث: في النسخة العادية كان شريط البحث بيفلتر كروت الصفحة.
   هنا نفس الفكرة: الـ Header بيكتب الكلمة هنا، وأي صفحة
   فيها منتجات بتقرأها وتفلتر بيها. */

const SearchContext = createContext(null);

export function SearchProvider({ children }) {
  const [query, setQuery] = useState("");
  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
