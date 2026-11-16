const categories = [
  { name: "Electronics", icon: "📱" },
  { name: "Fashion", icon: "👕" },
  { name: "Home & Kitchen", icon: "🏠" },
  { name: "Beauty", icon: "💄" },
  { name: "Grocery", icon: "🛒" },
  { name: "Sports", icon: "⚽" },
  { name: "Books", icon: "📚" },
  { name: "Toys", icon: "🧸" },
];

function CategorySection() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Shop By Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition cursor-pointer"
          >
            <div className="text-4xl mb-3">
              {category.icon}
            </div>

            <h3 className="font-semibold text-gray-800">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;