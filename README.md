# Full React Course 2020

## Table of Contents

1. [VScode Extensions](#vscode-extensions)
2. [Getting Started](#getting-started)
3. [Hello World](#hello-world)
4. [Basic CSS](#basic-cSS)
5. [JSX CSS](#jsx-css)
6. [Props](#props)
7. [List Map](#list-map)
8. [Event Basics](#event-basics)
9. [Toggle Button](#toggle-button)
10. [useState](#usestate)
11. [Arrays](#arrays)
12. [Counters](#counters)
13. [useEffect](#useeffect)
14. [Cleanup](#cleanup)
15. [Fetch](#fetch)
16. [Short-Circuit](#short-circuit)
17. [Ternary Operator](#ternary-operator)
18. [Forms](#forms)
19. [Multiple Inputs](#multiple-inputs)
20. [useRef](#useref)

## VScode Extensions

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

## Toggle Button

```
<button className="btn" onClick={() => setIsError(!isError)}>Toggle</button>
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
// Add Element example #1
setPeople([...people, person]);
// Add Element example #2
setPeople(people => {
  return [...people, person];
});
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

## Short-Circuit

```
// Short-circuit Example #1 - falsy variable
const [text, setText] = useState('');
// falsy OR 'hello world' = 'hello world'
const firstValue = text || 'hello world';
// falsy AND 'hello world' = null
const secondValue = text && 'hello world';

// Short-circuit Example #2 - truthy variable
const [text, setText] = useState('Hi');
// truthy OR 'hello world' = 'Hi'
const firstValue = text || 'hello world';
// truthy AND 'hello world' = 'Hi'
const secondValue = text && 'hello world';
```

## Ternary Operator

```
{isError ? <p>TRUE</p> : <p>FALSE</p>}
```

## Forms

```
// Submit Example #1
<form className="form" onSubmit={handleSubmit}>
    <label htmlFor="firstName">Name: </label>
    <input type="text" id="firstName" name="firstName"/>
  <button type='submit'>Add</button>
</form>

// Submit Example #2
<form className="form">
    <label htmlFor="firstName">Name: </label>
    <input type="text" id="firstName" name="firstName"/>
  <button type='submit' onClick={handleSubmit}>Add</button>
</form>

// Controlled Inputs
const [firstName, setFirstName] = useState('');

const handleSubmit = e => {
  e.preventDefault();
  console.log(firstName);
}
return <>
  <article>
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="firstName">Name: </label>
        <input type="text" id="firstName" name="firstName" value={firstName}
        onChange={e => setFirstName(e.target.value)}/>
      </div>
      <button type='submit'>Add</button>
    </form>
  </article>
</>;
```

## Multiple Inputs

```
const [person, setPerson] = useState({firstName: '', email: '', age: ''});
const [people, setPeople] = useState([]);

const handleChange = e => {
  const name = e.target.name; // gets property name
  const value = e.target.value; // get property value
  setPerson({...person, [name]: value});
}

const handleSubmit = e => {
  e.preventDefault();
  if(person.firstName && person.email && person.age){
    const newPerson = {...person, id: new Date().getTime().toString()}
    setPeople([...people, newPerson]);
    setPerson({firstName: '', email: '', age: ''});
  }
}
```

## useRef

```
// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

// refContainer references the input value
const refContainer = useRef(null);
// divContainer = <div>Hello World</div>
const divContainer = useRef(null);

useEffect(() => {
  console.log(refContainer.current);
  refContainer.current.focus();
});

return <>
  <form className="form" onSubmit={handleSubmit}>
    <div>
      <input type="text" ref={refContainer}/>
      <button type="submit">submit</button>
    </div>
  </form>
  <div ref={divContainer}>Hello World</div>
</>;
```
