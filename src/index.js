import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);

const Title = () => (
  <h1 style={{ color: "#617d98", fontSize: "2rem", margin: "0.25rem" }}>Room on a Broom</h1>
);

const Author = () => <h4>Jane Doe</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
