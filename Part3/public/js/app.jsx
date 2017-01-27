// Part 3:: /js/app.jsx
import React from 'react';
import ReactDOM from 'react-dom';

const EmailInput = () => {
  return (
    <div> // Note: the wrapping div
      <label>Email:</label>
      <input type="email" id="email"/>
    </div>
  );
};

const Form = () => {
  return (
    <form>
      <EmailInput/>
    </form>
  );
};

const rootNode = document.getElementById('root');
ReactDOM.render(<Form/>, rootNode);