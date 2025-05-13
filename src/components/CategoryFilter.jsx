import { Link, useLocation } from "react-router-dom";

function CategoryFilter() {
  const location = useLocation();

  const categories = [
    { name: "Fiction", path: "fiction" },
    { name: "Non-Fiction", path: "non_fiction" },
    { name: "Science", path: "science" },
    { name: "History", path: "history" },
  ];

  return (
    <div className="category-filter flex flex-col items-center mt-8 sm:mt-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-4 text-center">
        Explore by Genre
      </h2>

      <div className="flex gap-3 sm:gap-4 overflow-x-auto px-2 sm:px-4 pb-2 scrollbar-hide">
        {categories.map((category) => (
          <Link
            key={category.path}
            to={`/books/category/${category.path}`}
            className={`whitespace-nowrap px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300
              ${
                location.pathname.includes(category.path)
                  ? "bg-purple-400 text-purple-800 shadow-purple-300/50 scale-105"
                  : "bg-purple-200 text-purple-700 hover:bg-purple-500 hover:text-purple-800"
              }`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;