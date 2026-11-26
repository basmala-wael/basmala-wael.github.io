// PRODUCT CATALOG — نفس فكرة النسخة العادية: مصدر واحد لكل بيانات المنتجات.
// في React بقى ده module بتستورده أي صفحة محتاجاه.
// description وspecs بتظهر في صفحة التفاصيل تلقائيًا.

export const PRODUCTS = {
  "iphone-14": {
    name: "iPhone 14", price: 899, image: "images/iPhone 14.jpg", category: "Smartphones", categoryPage: "/category/Smartphones",
    description: "Apple's 6.1-inch iPhone with the A15 Bionic chip and a capable dual-camera system.",
    specs: ["6.1-inch Super Retina XDR display", "A15 Bionic chip", "Dual 12MP camera system"],
  },
  "iphone-14-plus": {
    featured: false, name: "iPhone 14 Plus", price: 999, image: "images/iPhone 14 Plus.jpg", category: "Smartphones", categoryPage: "/category/Smartphones",
    description: "The same iPhone 14 experience on a larger 6.7-inch display with bigger battery life.",
    specs: ["6.7-inch Super Retina XDR display", "A15 Bionic chip", "Dual 12MP camera system"],
  },
  "iphone-14-pro-max": {
    name: "iPhone 14 Pro Max", price: 1099, image: "images/iPhone 14 Pro Max.jpg", category: "Smartphones", categoryPage: "/category/Smartphones",
    description: "The 2022 Pro flagship with the Dynamic Island, a 48MP main camera and an always-on display.",
    specs: ["6.7-inch Super Retina XDR display with ProMotion", "A16 Bionic chip", "48MP main camera with 3x telephoto"],
  },
  "iphone-13-pro-max": {
    name: "iPhone 13 Pro Max", price: 799, image: "images/iPhone 13 Pro Max.jpg", category: "Smartphones", categoryPage: "/category/Smartphones",
    description: "A previous-generation Pro iPhone with a triple-camera system and ProMotion display.",
    specs: ["6.7-inch Super Retina XDR display with ProMotion", "A15 Bionic chip", "Triple 12MP Pro camera system"],
  },
  "iphone-13": {
    name: "iPhone 13", price: 699, image: "images/iPhone 13.jpg", category: "Smartphones", categoryPage: "/category/Smartphones",
    description: "A compact iPhone with the A15 Bionic chip and diagonal dual-camera layout.",
    specs: ["6.1-inch Super Retina XDR display", "A15 Bionic chip", "Dual 12MP camera system"],
  },
  "iphone-17": {
    featured: false, name: "iPhone 17", price: 1199, image: "images/iPhone 17.jpg", category: "Smartphones", categoryPage: "/category/Smartphones",
    description: "The latest standard iPhone with a 6.3-inch display and 48MP Fusion dual cameras.",
    specs: ["6.3-inch Super Retina XDR display", "A19 chip", "Dual 48MP Fusion camera system"],
  },
  "iphone-17-pro-max": {
    featured: false, name: "iPhone 17 Pro Max", price: 1399, image: "images/iPhone 17 Pro Max.jpg", category: "Smartphones", categoryPage: "/category/Smartphones",
    description: "Apple's top iPhone with an aluminum unibody, full-width camera plateau and the longest iPhone zoom.",
    specs: ["6.9-inch Super Retina XDR display", "A19 Pro chip", "Triple 48MP Fusion cameras with 8x optical-quality zoom"],
  },
  "iphone-15-pro": {
    name: "iPhone 15 Pro", price: 599, image: "images/iPhone 15 Pro.jpg", category: "Smartphones", categoryPage: "/category/Smartphones",
    description: "A titanium Pro iPhone with the A17 Pro chip and a 48MP main camera.",
    specs: ["6.1-inch Super Retina XDR display with ProMotion", "A17 Pro chip", "48MP main camera with 3x telephoto"],
  },
  "galaxy-a35": {
    name: "Galaxy A35", price: 349, image: "images/Galaxy A35.jpg", category: "Smartphones", categoryPage: "/category/Smartphones",
    description: "Samsung's mid-range pick with a smooth 120Hz AMOLED display and a 50MP main camera.",
    specs: ["6.6-inch Super AMOLED display, 120Hz", "Exynos 1380 processor", "50MP main camera with OIS"],
  },
  "galaxy-a53-5g": {
    name: "Galaxy A53 5G", price: 429, image: "images/Galaxy A53 5G.jpg", category: "Smartphones", categoryPage: "/category/Smartphones",
    description: "A 5G mid-ranger with a 120Hz AMOLED screen and a 64MP main camera.",
    specs: ["6.5-inch Super AMOLED display, 120Hz", "Exynos 1280 processor", "64MP main camera with OIS"],
  },
  "redmi-note-10s": {
    name: "Redmi Note 10s", price: 199, image: "images/Redmi Note 10s.jpg", category: "Smartphones", categoryPage: "/category/Smartphones",
    description: "A budget favorite with an AMOLED display and a 64MP quad-camera setup.",
    specs: ["6.43-inch AMOLED display", "MediaTek Helio G95 processor", "64MP quad camera"],
  },
  "redmi-note-13-pro": {
    name: "Redmi Note 13 Pro", price: 299, image: "images/Redmi Note 13Pro.jpg", category: "Smartphones", categoryPage: "/category/Smartphones",
    description: "A value flagship-killer with a 200MP main camera and a sharp AMOLED display.",
    specs: ["6.67-inch AMOLED display", "MediaTek Helio G99 Ultra processor", "200MP main camera with OIS"],
  },
  "samsung-galaxy-s23": {
    name: "Samsung Galaxy S23 Ultra", price: 899, image: "images/Samsung Galaxy S23.jpg", category: "Smartphones", categoryPage: "/category/Smartphones",
    description: "Samsung's 2023 Ultra flagship with a 200MP camera and a built-in S Pen.",
    specs: ["6.8-inch QHD+ Dynamic AMOLED 2X display", "Snapdragon 8 Gen 2 for Galaxy", "200MP main camera, S Pen included"],
  },
  "samsung-ultra-s24": {
    name: "Samsung Ultra S24", price: 1199, image: "images/Samsung Ultra S24.jpg", category: "Smartphones", categoryPage: "/category/Smartphones",
    description: "The titanium 2024 Ultra with Galaxy AI features and a 200MP camera.",
    specs: ["6.8-inch QHD+ Dynamic AMOLED 2X display", "Snapdragon 8 Gen 3 for Galaxy", "200MP main camera with 5x optical zoom"],
  },
  "xiaomi-13-pro": {
    name: "Xiaomi 13 Pro", price: 999, image: "images/Xiaomi 13 Pro.jpg", category: "Smartphones", categoryPage: "/category/Smartphones",
    description: "A Leica-co-engineered flagship with triple 50MP cameras and fast charging.",
    specs: ["6.73-inch AMOLED display, 120Hz", "Snapdragon 8 Gen 2 processor", "Leica triple 50MP camera system"],
  },
  "macbook-air-m2": {
    name: "MacBook Air M2", price: 999, image: "images/MacBook Air M2.jpg", category: "Laptops", categoryPage: "/category/Laptops",
    description: "Apple's thin and light laptop with the M2 chip and all-day battery life.",
    specs: ["13.6-inch Liquid Retina display", "Apple M2 chip with 8-core CPU", "Up to 18 hours of battery life"],
  },
  "hp-omen-16": {
    name: "HP Omen 16", price: 1599, image: "images/HP Omen 16.jpg", category: "Laptops", categoryPage: "/category/Laptops",
    description: "A 16.1-inch gaming laptop with a high-refresh display and RGB backlit keyboard.",
    specs: ["16.1-inch high-refresh-rate display", "Dedicated NVIDIA GeForce graphics", "RGB backlit gaming keyboard"],
  },
  "apple-watch-series-9": {
    name: "Apple Watch Series 9", price: 399, image: "images/Apple Watch Series 9.jpg", category: "Smart Watches", categoryPage: "/category/Smart Watches",
    description: "Apple's 2023 watch with the S9 chip, a brighter display and the Double Tap gesture.",
    specs: ["Always-On Retina display", "S9 SiP chip", "Double Tap gesture and watchOS"],
  },
  "galaxy-watch-6": {
    name: "Galaxy Watch 6", price: 349, image: "images/Galaxy Watch 6.jpg", category: "Smart Watches", categoryPage: "/category/Smart Watches",
    description: "Samsung's Wear OS watch with advanced sleep and fitness tracking.",
    specs: ["Super AMOLED display with sapphire crystal", "Wear OS powered by Samsung", "Advanced sleep and body-composition tracking"],
  },
};

export function productsByCategory(category, { featuredOnly = false } = {}) {
  // featuredOnly: بتستبعد المنتجات اللي متعلم عليها featured: false
  // (بتظهر في صفحة قسمها بس مش في الرئيسية، زي النسخة الأصلية)
  return Object.entries(PRODUCTS)
    .filter(([, p]) => p.category === category)
    .filter(([, p]) => !featuredOnly || p.featured !== false)
    .map(([id, p]) => ({ id, ...p }));
}
