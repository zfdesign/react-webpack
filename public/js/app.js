import React from "react";
import ReactDOM from "react-dom";

var HelloMessage = React.createClass({
  render: function () {
    return <div>Hello {this.props.name}</div>;
  }
});

var mountNode = document.getElementById('container');

ReactDOM.render(<HelloMessage name ="John"/>, mountNode);