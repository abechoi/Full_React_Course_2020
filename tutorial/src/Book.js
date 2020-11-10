export const Book = (props) => {

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