// Part 3:: /js/app.jsx
import React from 'react';
import ReactDOM from 'react-dom';

const NameInput = (props) => {
  // Note: the wrapping div
  return (
    <div> 
      <label>{props.labelText}</label>
      <input type="text" id="name"/>
    </div>
  );
};

const EmailInput = (props) => {
  // Note: the wrapping div
  return (
    <div>
      <label>{props.labelText}</label>
      <input type="email" id="email"/>
    </div>
  );
};

const Form = () => {
  return (
    <form>
      <NameInput labelText="Name: "/>
      <EmailInput labelText="Email: "/>
    </form>
  );
};

const rootNode = document.getElementById('root');
ReactDOM.render(<Form/>, rootNode);