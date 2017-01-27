# JSX and React Components

## Initial setup

### Copy all files from Part 1 and ignore `node_modules` and `README.md` file
```Shell
$ npm install
```

### Update `app.js` name to `app.jsx` and its contents to: 
```JavaScript
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
```

### Update `webpack.config.js` updating the `entry` Line with new `app.jsx` file name and `test` Line ability to handle `.jsx` files 
```JavaScript
const path = require('path');

module.exports = {
    entry: './public/js/app.jsx', // NOTE: change to `jsx`
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/, // NOTE: Change to `jsx`
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
```
_This part tripped me over a bit with no clear explantion on the two changes above_

### Generate the `bundle.js` 

```Shell
$ npm run dev
```

### In a new Shell window, start `serve` and preview in Browser
```Shell
$ serve
```
At this point there should be the new Form rendered on the screen. 


## React Components

The part in the `app.jsx` below is a representation of React Component
```JavaScript
const Form = () => {
  return (
    <form>
        <label>Email:</label>
        <input type="email" id="email"/>
    </form>
  );
};
```
That can be later referred to as `<Form/>`. However it is not all plain `HTML` see below.

### Element attributes in `.jsx`
> Since JSX is closer to JavaScript than HTML, 
React DOM uses camelCase property naming convention 
instead of HTML attribute names.
For example, `class` becomes `className` in JSX, 
and `tabindex` becomes `tabIndex`.

[Reference](https://facebook.github.io/react/docs/introducing-jsx.html#specifying-children-with-jsx)


### Reusable React components
Lets extract the `label` and `input` elements in `app.jsx` as follows
```JavaScript
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
```
* Note: The new wrapping `<div>` element in the `EmailInput` tags. 
This is because there cannot be multiple `React.createElement`

## Passing data back to the Component - `props` 

Compare the changes from previous commit in this section. 
Important changes are highlighted in comments below
```JavaScript
// Part 3:: /js/app.jsx
///...

const NameInput = (props) => {
  // NOTE: referring to the data passed through `props` argument
  return (
    <div> 
      <label>{props.labelText}</label>
      <input type="text" id="name"/>
    </div>
  );
};

// ...

const Form = () => {
  // NOTE: Using custom attributes to pass as data
  return (
    <form>
      <NameInput labelText="Name: "/>
      <EmailInput labelText="Email: "/>
    </form>
  );
};

// ...
```
