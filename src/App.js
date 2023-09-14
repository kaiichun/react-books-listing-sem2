import React, { useState, useEffect, useMemo } from "react";
import { bookData } from "./data/books";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = useMemo(() => {
    let options = [];
    /* Instruction: Get all categories from books */
    bookData.forEach((book) => {
      book.categories.forEach((category) => {
        if (!options.includes(category)) {
          options.push(category);
        }
      });
    });
    return options;
  }, []);

  useEffect(() => {
    /* instruction: load books from the books data */
    setBooks(bookData);
  }, []);

  useEffect(() => {
    /* Instruction: filter books by selectedCategory */
    /* Instruction: set filtered books to books state */
    /* Instruction: set books to all books if selectedCategory is empty */
  }, [selectedCategory]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <select onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* instruction: list books using .map() */}
      <div className="row">
        {books.map((book) => (
          <div className="col-4 col-md-6 col-sm-12 my-5" key={book.title}>
            <div className="card">
              <img
                src="../images/book.jpg"
                alt={book.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h2 className="card-text">{book.title}</h2>
                <p className="card-text">Author: {book.author}</p>
                <p className="card-text">
                  <span>
                    Category:
                    {book.categories.length > 0 &&
                      ` ${book.categories.join(", ")}`}
                  </span>
                </p>
                <p className="card-text">Year: {book.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
