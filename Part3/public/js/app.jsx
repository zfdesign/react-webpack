// Part 3:: /js/app.jsx
import React from 'react';
import ReactDOM from 'react-dom';

const Form = () => {
  return (
    <form>
        <label>Email:</label>
        <input type="email" id="email"/>
    </form>
  );
};

const rootNode = document.getElementById('root');
ReactDOM.render(<Form/>, rootNode);