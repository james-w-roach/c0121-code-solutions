import React from 'react';
import ReactDOM from 'react-dom';
const div = document.querySelector('#root');

const element = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDOM.render(element, div);
