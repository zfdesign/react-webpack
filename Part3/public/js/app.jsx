// Part 3:: /js/app.jsx
import React from 'react';
import ReactDOM from 'react-dom';

const NameInput = (props) => {
  return (
    <div> 
      <label>{props.labelText}</label>
      <input type="text" id="name"/>
    </div>
  );
};

const EmailInput = (props) => {
  return (
    <div>
      <label>{props.labelText}</label>
      <input type="email" id="email"/>
    </div>
  );
};

// Using React.createClass
const Form = React.createClass({
  render () {
    return (
      <form>
        <NameInput labelText="Name: "/>
        <EmailInput labelText="Email: "/>
      </form>
    );
  }
});

const rootNode = document.getElementById('root');
ReactDOM.render(<Form/>, rootNode);