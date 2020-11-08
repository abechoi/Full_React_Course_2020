import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth'
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81GeAcdMCsL._AC_UL200_SR200,200_.jpg',
    title: 'Humans',
    author: 'Brandon Stanton'
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91AQs6qv9ML._AC_UL200_SR200,200_.jpg',
    title: 'Untamed',
    author: 'Glennon Doyle'
  }
];

const BookList = () => {
  return (
    <section className="booklist">
      
      {books.map(book => {
        return (
          <Book key={book.id} {...book}/>
        );
      })}

    </section>
  );
}

const Book = (props) => {

  // attribute, eventHandler
  // onClick, onMouseOver

  const {img, title, author} = props;

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('Hello World!');
  }

  const complexExample = (author) => {
    console.log(author);
  }

  return (
    <article className="book" onMouseOver={() => console.log(title)}>
      <img src={img} alt=""/>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Click Here
      </button>
      <button type="button" onClick={() => complexExample(author)}>Complex Example</button>
    </article>
  );
}

ReactDom.render(<BookList/>, document.getElementById('root'));