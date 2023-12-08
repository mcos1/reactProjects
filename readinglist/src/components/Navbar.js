import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);

  const bookLength = () => {
    if (books.length === 1) {
      return `${books.length} book to get through.`;
    } else if (books.length) {
      return `${books.length} books to get through`;
    } else {
      return "0 books to get through";
    }
  };

  return (
    <div className="navbar">
      <h1>Reading List</h1>
      <p>Currently you have {bookLength()}</p>
    </div>
  );
};

export default Navbar;
