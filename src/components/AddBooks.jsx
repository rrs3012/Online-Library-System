import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../utils/booksSlice";

function AddBooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [pages, setPages] = useState("");
  const [rating, setRating] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [error, setError] = useState("");

  // Form validation
  const validateForm = () => {
    if (!title || !author || !description || !pages || !rating || !coverImage) {
      setError("Please fill in all story details!");
      return false;
    }
    if (isNaN(pages) || isNaN(rating)) {
      setError("Pages and rating should be numbers.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Create a new book object
      const newBook = {
        id: Date.now(),
        title,
        author,
        description,
        pages,
        rating,
        coverImage,
      };

      dispatch(addBook(newBook));
      navigate("/browsebook");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100 text-purple-800">
      <div className="w-full max-w-lg bg-purple-200 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">📚 Share a New Story</h1>

        {/* Error Message */}
        {error && <p className="text-purple-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block font-semibold">Title:</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-purple-50 text-purple-800 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Author */}
          <div>
            <label className="block font-semibold">Author:</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-purple-50 text-purple-800 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold">Description:</label>
            <textarea
              className="w-full px-4 py-2 bg-purple-50 text-purple-800 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Pages */}
          <div>
            <label className="block font-semibold">Pages:</label>
            <input
              type="number"
              className="w-full px-4 py-2 bg-purple-50 text-purple-800 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block font-semibold">Rating:</label>
            <input
              type="number"
              step="0.1"
              className="w-full px-4 py-2 bg-purple-50 text-purple-800 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          {/* Cover Image URL */}
          <div>
            <label className="block font-semibold">Cover Image URL:</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-purple-50 text-purple-800 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-300 to-purple-500 text-purple-800 py-2 rounded-lg font-semibold shadow-md hover:from-purple-500 hover:to-purple-300 hover:shadow-purple-300/50 transform hover:scale-105 transition-all duration-300"
          >
            Share Story
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBooks;