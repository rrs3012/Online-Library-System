import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/booksSlice";
import { useNavigate } from "react-router-dom";

function AddBooks() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    description: "",
    pages: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const validationErrors = {};
    if (!bookData.title) validationErrors.title = "Title is required.";
    if (!bookData.author) validationErrors.author = "Author is required.";
    if (!bookData.description) validationErrors.description = "Description is required.";
    if (!bookData.pages || isNaN(bookData.pages) || bookData.pages <= 0)
      validationErrors.pages = "Please enter a valid page count.";
    if (!bookData.rating || isNaN(bookData.rating) || bookData.rating < 1 || bookData.rating > 5)
      validationErrors.rating = "Please provide a rating between 1 and 5.";

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    dispatch(addBook(bookData));
    navigate("/browsebook");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">📖 Add a New Book</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div>
          <label className="block font-medium text-gray-700">Author</label>
          <input
            type="text"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500"
          />
          {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
        </div>

        <div>
          <label className="block font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={bookData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        <div>
          <label className="block font-medium text-gray-700">Pages</label>
          <input
            type="number"
            name="pages"
            value={bookData.pages}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500"
            min="1"
          />
          {errors.pages && <p className="text-red-500 text-sm">{errors.pages}</p>}
        </div>

        <div>
          <label className="block font-medium text-gray-700">Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            value={bookData.rating}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500"
            min="1"
            max="5"
          />
          {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
        </div>

        <button 
          type="submit" 
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-md transition-all duration-300"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBooks;