// Part 3:: /js/app.jsx
import React from 'react';
import ReactDOM from 'react-dom';

class NameInput extends React.Component {
  render () {
    return (
      <div> 
        <label>{this.props.labelText}</label>
        <input type="text" id={this.props.name}/>
      </div>
    );
  };
};

class EmailInput extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.labelText}</label>
        <input type="email" id="email"/>
      </div>
    );
  }
};

// Using React.createClass
const Form = React.createClass({
  render () {
    return (
      <form>
        <NameInput labelText="First name: " name="firstName"/>
        <NameInput labelText="Last name: " name="lastName"/>
        <EmailInput labelText="Email: "/>
      </form>
    );
  }
});

const rootNode = document.getElementById('root');
ReactDOM.render(<Form/>, rootNode);