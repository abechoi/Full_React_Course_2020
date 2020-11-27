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

## Arrays

```
// Filter example - remove item on click
const removeItem = (id) => {
  setPeople(people.filter(person => person.id !== id));
}
// Alternative example - more explicit
const removeItem = (id) => {
  let newPeople = people.filter(person => person.id !== id);
  setPeople(newPeople);
}
```

## Counters

```
// basic counter button
<button className='btn' onClick={() => setValue(value + 1)}>+</button>

// delayed counter function - gets value from state
// this function will not account for multiple clicks within 3 seconds
const complexIncrease = () => {
  setTimeout(() => {
    setValue(value + 1);
  }, 3000);
}

// delayed counter function - gets value from prev parameter
// this function will accounts for multiple clicks within 3 seconds
const complexIncrease = () => {
  setTimeout(() => {
    setValue(prev => {
      return prev + 1;
    });
  }, 3000);
}
```

## useEffect

```
// useEffect basic example
useEffect(() => {
  console.log("Call useEffect");
  document.title = `New Messages(${value})`;
});

// good conditional hook example
useEffect(() => {
  if(value > 1){
    document.title = `New Messages(${value})`;
  }
});

// empty array as a second parameter
// indicates that useEffect will only run once
useEffect(() => {
  if(value >= 1){
    document.title = `New Messages(${value})`;
  }
}, []);

// value array as a second parameter
// indicates that useEffect will only run everytime value changes
useEffect(() => {
  if(value >= 1){
    document.title = `New Messages(${value})`;
  }
}, [value]);
```

## Cleanup

```
// Remove the listener to prevent memory leaks
useEffect(() => {
  window.addEventListener('resize', checkSize)
  return () => {
    console.log('cleanup');
    window.removeEventListener('resize', checkSize);
  }
});
```

## Fetch

```
// Fetching with async/await
const getUsers = async() => {
  const response = await fetch(url);
  const users = await response.json();
  // WARNING: INFINITE LOOP, add dependency array to useEffect to fix this.
  setUsers(users);
}

useEffect(() => {
  getUsers();
}, []);

// Fetching multiple returns
useEffect(() => {
  fetch(url)
    .then(res => {
      if(res.status >= 200 && res.status <= 299){
        return res.json();
      }else{
        setIsLoading(false);
        setIsError(true);
        throw new Error(res.statusText)
      }
    })
    .then(user => {
      const {login} = user;
      setUser(login);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
}, [])
```
