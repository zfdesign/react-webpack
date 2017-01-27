/// /js/app.js
// The DOM Native way
const native = document.getElementById('native');
native.innerHTML = `<div class="domNative">DOM Native DIV</div>`;

// React way
const reactContainer = document.getElementById('react');
ReactDOM.render(
    React.createElement(
        'div',
        { className: 'demo' },
        'React Element'
    ),
    reactContainer
);