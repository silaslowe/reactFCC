import React from 'react'

const Book = ({img, title, author}) => {

  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
alert("hello Werld")
  }
  const complexExample = (author) => {
console.log(author)
  }
  return (
    <article className="book" onMouseOver={() => {
      console.log(title)
    }}>
      <img
    src= {img}
    alt={title}
  />
   <h1 onClick={() => console.log(title)}>{title}</h1>
   <h4>{author}</h4> 
   <button type="button" onClick={clickHandler}>Example</button>
   <button type="button" onClick={() => complexExample(author)}>Example2</button>
    </article>
  );
};

export default Book

