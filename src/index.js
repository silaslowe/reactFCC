import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";
// Set up vars

 const books = [{
  img: "https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg",
  title: "Room on a Broom",
  author: "Jane Doe" 
},
 {
  img: "https://images-na.ssl-images-amazon.com/images/I/91AQs6qv9ML._AC_UL200_SR200,200_.jpg",
  title: "Untamed",
  author: "Jane Brouex", 
}]
  


const BookList = () => {
  return (
    <section className="booklist">
     {books.map((book) => {
       const {img, title, author} = book;
       return (<div>
          <img src={img} alt={title}/>
         <h2>{title}</h2>
         <h4>{ author}</h4>
         </div>);
     })}
    </section>
  );
};

// This takes the place of using "props" as the parameter.
const Book = ({img, title, author}) => {
  // this is a destructured variable so that you don;t have to repeat the props. in every instance in the component (ie. props.title => title
  // const {img, title, author} = props
  
  return (
    <article className="book">
      <img
    src= {img}
    alt={title}
  />
   <h1>{title}</h1>
   <h4>{author}</h4> 
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById("root"));

// ************************************

// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src="https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg"
//     alt=""
//   />
// );

// const Title = () => (
//   <h1 style={{ color: "#617d98", fontSize: "2rem", margin: "0.25rem" }}>Room on a Broom</h1>
// );

// const Author = () => <h4>Jane Doe</h4>;

// ReactDom.render(<BookList />, document.getElementById("root"));
