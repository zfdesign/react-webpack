# A Demo of ReactDOM render

Part 2

## Start by creating a new folder and adding a couple of files
```Shell
$ mkdir Part2 && cd $_
$ mkdir js && index.html $_/app.js
```

## Add the HTML content in `index.html`
```HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Demo app - React Webpack</title>
    <link rel="stylesheet" href="/css/app.css" />
    <script data-require="ReactJs@15.0.1" data-semver="15.0.1" src="https://fb.me/react-15.0.1.min.js"></script>
    <script data-require="ReactJs@15.0.1" data-semver="15.0.1" src="https://fb.me/react-dom-15.0.1.min.js"></script>
</head>
<body>
    <div id="native"></div>
    <div id="react"></div>
    <script src="/js/app.js"></script>
</body>
</html>
```

## Follow the commit history marked as `Part2`

Steps outlined below:
1. First will render a native DOM div element
2. Render simillar element with React
3. Add some style for readability of new elements
4. Display time at load. Native and React
5. Add `<input>` element and wrap the code in a `render` function
6. Set `render` function to execute every 1 second and _observe DOM node changes_

This example demonstrates React ability to update DOM tree 
with only the parts that have changed. 

When comapred to the native DOM method, that re-renders the whole node every time `render` is called! 