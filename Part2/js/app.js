/// /js/app.js

// Wrap in `render` function and call every 1s
const render = () => {

    // The DOM Native way
    const native = document.getElementById('native');
    native.innerHTML = `
        <div class="domNative">DOM Native DIV</div>
        <input type="text" />
        <p>${new Date()}</p>
    `;

    // React way
    const reactContainer = document.getElementById('react');
    ReactDOM.render(
        React.createElement(
            'div',
            { className: 'demo' },
            'React Element',
            React.createElement("input"),
            React.createElement(
                "p",
                null,
                new Date().toString()
            )
        ),
        reactContainer
    );
};

setInterval(render, 1000);
// TIP: try typing in the input boxes
// Inspect the DOM updates in Chrome Dev Tools