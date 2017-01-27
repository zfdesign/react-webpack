# JSX 

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
                test: /\.jsx?$/, // NOTE: Change to `jsx`
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


