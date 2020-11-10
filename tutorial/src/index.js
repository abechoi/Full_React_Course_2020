import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

// Components
import {books} from './books';
import {Book} from './Book';

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

ReactDom.render(<BookList/>, document.getElementById('root'));