import React from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";
import {data} from './books'
import Book from './Book'
import {greeting} from './testing/testing.js'
// Set up vars

  
const BookList = () => {
  console.log(greeting)
  return (
    <section className="booklist">
     {data.map((book) => {
       return(
       <Book key={book.id} {...book} />
       )
     })}
    </section>
  );
};



ReactDom.render(<BookList />, document.getElementById("root"));



