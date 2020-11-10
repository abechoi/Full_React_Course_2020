# Full React Course 2020

## VScode - Settings & Extensions

- Prettier - Code formatter
  Settings > Text Editor > Formatting
  Check "Format On Paste" and "Format On Save"

- Enable Emmet for JS
  Settings > Extensions > Emmet > Edit in settings.json

  ```
  "emmet.includeLanguages": {
        "javascript": "javascriptreact"
  }
  ```

- ES7 React/Redux/GraphQL/React-Native snippets

## Getting Started

```
npx create-react-app tutorial
```

## Hello World

index.js

```
import React from 'react';
import ReactDom from 'react-dom';

// example 1 - cleaner version
const Greeting = () => {
  return (
    <div>Hello World</div>
  );
}

// example 2 - messy when nesting
const Greeting = () => {
  return React.createElement('h1', {}, 'Hello World');
}

ReactDom.render(<Greeting/>, document.getElementById('root'));
```

## Basic CSS

index.css

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

index.js

```
import './index.css';
```

## JSX CSS

```
const Author = () => <h4 style={{ color: '#617d98', fontSize: '0.75rem' }}>Amelia Hepworth</h4>;
```

## Props

```
const title = 'I Love You to the Moon and Back';
const author = 'Amelia Hepworth';

const BookList = () => {
  return (
    <section className="booklist">
      <Book title={title} author={author}/>
    </section>
  );
}

const Book = (props) => {

  return <article className="book">
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  </article>
}

// Destructuring Props Example #1 - a different option
const Book = (props) => {

  const {title, author} = props;

  return <article className="book">
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
}

// Destructuring Props Example #2 - a different option
const Book = ({ title, author }) => {

  return <article className="book">
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
}

```

## List Map

```
const books = [
  { id: 1, title: 'I Love You to the Moon and Back' },
  { id: 2, title: 'Humans' }
];

// Map Example #1 - Implementing manually
{books.map(book => (
  <Book key={book.id} title={book.title} />
))}
const Book = (props) => {

  return (<article className="book">
    <h1>{book.title}</h1>
  </article>);
}

// Map Example #2 - Passing the book element
{books.map(book => {
  return (
    <Book key={book.id} book={book}/>
  );
})}
const Book = (props) => {

  const {id, title} = props.book;

  return (<article className="book">
    <h1>{title}</h1>
  </article>);
}

// Map Example #3 - Spread operator
{books.map(book => {
  return (
    <Book key={book.id} {...book}/>
  );
})}
const Book = (props) => {

  const {id, title} = props;

  return (<article className="book">
    <h1>{title}</h1>
  </article>);
}
```

## Event Basics

```
const clickHandler = (e) => {
  console.log(e);
  console.log(e.target);
  alert('Hello World!');
}

const complexExample = (author) => {
  console.log(author);
}

return (
  // Mouseover Event
  <article className="book" onMouseOver={() => console.log(title)}>
    // OnClick Event by inline
    <h1 onClick={() => console.log(title)}>{title}</h1>
    // OnClick Event by reference
    <button type="button" onClick={clickHandler}>
      CLICK
    </button>
    // Dynamic OnClick Event
    <button type="button" onClick={() => complexExample(author)}>Complex Example</button>
  </article>
);

```

## useState

```
// useState basic example
const [text, setText] = useState("Random Title");

const handleClick = () => {
  if(text === "Random Title"){
    setText("Hello World");
  }else {
    setText("Random Title");
  }
}

return <React.Fragment>
  <h2>{text}</h2>
  <button type="button" className="btn" onClick={handleClick}>
    Change Text
  </button>
</React.Fragment>
```
