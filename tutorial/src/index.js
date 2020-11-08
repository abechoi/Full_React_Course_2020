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
  }
];

const BookList = () => {
  return (
    <section className="booklist">
      
      {books.map(book => (
        <Book key={book.id} img={book.img} title={book.title} author={book.author}/>
      ))}

    </section>
  );
}

const Book = (props) => {

  const {img, title, author} = props;

  return <article className="book">
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    {props.children}
  </article>
}

ReactDom.render(<BookList/>, document.getElementById('root'));