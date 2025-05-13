import { useState } from "react";

function Search({ booksData, filterFunction }) {
  const [searchText, setSearchText] = useState("");

  function handleSearch(e) {
    const text = e.target.value;
    setSearchText(text);
    const filteredBooks = booksData.filter(
      (book) =>
        book.title.toLowerCase().includes(text.toLowerCase()) ||
        book.author.toLowerCase().includes(text.toLowerCase())
    );
    filterFunction(filteredBooks);
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-16 bg-purple-100 md:ml-64" role="region" aria-label="Search books">
      <h2 className="text-3xl font-bold text-purple-400 text-center mb-6">🔍 Search Stories</h2>
      <div className="max-w-2xl mx-auto bg-purple-50/50 backdrop-blur-md p-4 rounded-xl shadow-lg">
        <div className="flex items-center">
          <input
            type="text"
            className="flex-1 bg-purple-100 text-purple-800 px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
            placeholder="Search by title or author..."
            value={searchText}
            onChange={handleSearch}
            aria-label="Search books"
          />
          <button className="bg-gradient-to-r from-purple-300 to-purple-500 text-purple-800 px-6 py-2 rounded-r-full font-bold hover:from-purple-500 hover:to-purple-300 transition-all duration-300">
            Search
          </button>
        </div>
        {searchText && (
          <div className="mt-2 bg-purple-200 p-2 rounded-lg">
            <p className="text-purple-600 text-sm">Suggestions: "{searchText}" in titles or authors</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;