import { BrowserRouter, Routes, Route, Link } from "react-router";
import { useState } from "react";
import CategorySection from "./CategorySection";

const categories = [
  { name: "Electronics", icon: "📱" },
  { name: "Fashion", icon: "👕" },
  { name: "Shoes", icon: "👟" },
  { name: "Beauty", icon: "✨" },
  { name: "Home & Kitchen", icon: "🏠" },
  { name: "Grocery", icon: "🛒" },
];

const products = [
  { name: "Wireless Headphones", price: "₹1,499", icon: "🎧", tag: "Popular", category: "Electronics" },
  { name: "Smart Watch", price: "₹2,499", icon: "⌚", tag: "Trending", category: "Electronics" },
  { name: "Casual T-Shirt", price: "₹599", icon: "👕", tag: "New", category: "Fashion" },
  { name: "Sneakers", price: "₹1,899", icon: "👟", tag: "Popular", category: "Shoes" },
  { name: "Face Cream", price: "₹399", icon: "✨", tag: "New", category: "Beauty" },
  { name: "Kitchen Set", price: "₹999", icon: "🍽️", tag: "Trending", category: "Home & Kitchen" },
  { name: "Grocery Pack", price: "₹499", icon: "🛒", tag: "Popular", category: "Grocery" },
  { name: "Travel Backpack", price: "₹999", icon: "🎒", tag: "Best Seller", category: "Accessories" },
];

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <Link to="/" className="text-2xl font-extrabold text-pink-500">
            VIDYA<span className="text-red-500">PRODUCT</span>
          </Link>

          <div className="hidden md:flex gap-7 font-medium text-gray-600">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-xl" aria-label="Search">🔍</button>
            <button className="text-xl" aria-label="Cart">🛒</button>
            <button className="bg-indigo-700 text-white px-5 py-2 rounded-full">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-950 to-indigo-700 text-white p-10 md:p-16">
          <p className="text-orange-300 font-semibold mb-4">
            WELCOME TO VIDYA PRODUCT
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
            Everything You Need, All in One Place.
          </h1>

          <p className="text-indigo-100 mt-5 max-w-xl">
            Discover amazing products, great prices and a better shopping experience.
          </p>

          <Link
            to="/shop"
            className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-bold"
          >
            Shop Now →
          </Link>
        </div>
      </section>
    <CategorySection />

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-7">Shop by Category</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-7">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link to="/shop" className="text-indigo-700 font-semibold">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center text-7xl">
                {product.icon}
              </div>

              <div className="p-5">
                <span className="text-xs text-orange-600 font-semibold">
                  {product.tag}
                </span>
                <h3 className="font-bold text-lg mt-2">{product.name}</h3>
                <p className="text-indigo-700 font-bold mt-2">{product.price}</p>
                <button className="w-full mt-4 bg-indigo-700 hover:bg-indigo-800 text-white py-2 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white text-center p-8 mt-12">
        <h2 className="text-xl font-bold">ISHAWAR PRODUCT</h2>
        <p className="text-gray-400 mt-2">
          Your One-Stop Shopping Destination.
        </p>
        <p className="text-gray-500 text-sm mt-5">
          © 2026 Ishawar Product. All rights reserved.
        </p>
      </footer>
    </div>
  );
}


function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Shoes",
    "Beauty",
    "Home & Kitchen",
    "Grocery",
    "Accessories",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-3">
        Explore All Products
      </h1>

      <p className="text-gray-500 mb-8">
        Discover products from all categories.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              selectedCategory === category
                ? "bg-indigo-700 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {filteredProducts.map((product) => (
          <div
            key={product.name}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden"
          >
            <div className="h-48 bg-gray-100 flex items-center justify-center text-7xl">
              {product.icon}
            </div>

            <div className="p-5">
              <span className="text-xs text-orange-600 font-semibold">
                {product.tag}
              </span>

              <h2 className="font-bold text-lg mt-2">
                {product.name}
              </h2>

              <p className="text-gray-500 text-sm">
                {product.category}
              </p>

              <p className="text-indigo-700 font-bold mt-2">
                {product.price}
              </p>

              <button className="w-full mt-4 bg-indigo-700 text-white py-2 rounded-lg hover:bg-indigo-800">
                Add to Cart
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

function About() {
  return <div className="p-10 text-3xl font-bold">About Page</div>;
}

function Contact() {
  return <div className="p-10 text-3xl font-bold">Contact Page</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}