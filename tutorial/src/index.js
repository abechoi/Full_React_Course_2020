import React from 'react';
import ReactDom from 'react-dom';

const Greeting = () => {
  return (
    <div>Hello World</div>
  );
}

// const Greeting = () => {
//   return React.createElement('h1', {}, 'Hello World');
// }

ReactDom.render(<Greeting/>, document.getElementById('root'));