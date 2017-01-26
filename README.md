# React WebPack starter
* _PART 1_

## Create a new directory and `cd` into it
```bash
$ mkdir ReactWebpack && cd $_
```

## Initialise `npm` with defaluts

```bash
$ npm init --yes
```

## Add all `npm` dependencies
```bash 
$ npm install --save webpack react react-dom babel-core babel-loader babel-preset-react babel-preset-es2015
```

Open your editor of choice in this directory

## Add `public/` folder

```bash
$ mkdir public && cd $_
```
## Add `index.html` and `js/app.js` 
```shell
$ mkdir js && touch index.html $_/app.js
```

## Add the app shell in `index.html` file 
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
    <script data-require="ReactJs@15.0.1" data-semver="15.0.1" src="https://fb.me/react-15.0.1.min.js"></script>
    <script data-require="ReactJs@15.0.1" data-semver="15.0.1" src="https://fb.me/react-dom-15.0.1.min.js"></script>
  </head>

  <body>
    <div id="root"></div>
    <script src="script.js"></script>
  </body>
</html>
```
## Add the exqmple code below in `app.js` file
```JavaScript
import React from "react";
import ReactDOM from "react-dom";

var HelloMessage = React.createClass({
  render: function () {
    return <div>Hello {this.props.name}</div>;
  }
});

var mountNode = document.getElementById('container');
ReactDOM.render(<HelloMessage name ="John"/>, mountNode);
```

## Setup WebPack with `webpack.config.js`
```JavaScript
const path = require('path');
module.exports = {
    entry: "./public/js/app.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
```

## Add Bable presets with `.babelrc` 
```JavaScript
{
    "presets": [
        "react", 
        "es2015"
    ]
}
```

## Add a script `dev` line in `package.json`
```JavaScript
// ... replace "test" with "dev"

"scripts": {
    "dev": "webpack -wd"
}
// `-w`- `watch` and `-d` for `dev` mode OR -wd
```

### Run the new `dev` script 
```shell 
$ npm run dev
```
This should create a new bundle
