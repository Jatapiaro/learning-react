'use strict';

console.log("works2");

// JSX - JavaScript XML
var app = {
    title: 'Some title',
    subtitle: 'Subtitle of some title',
    items: ['Item A', 'Item B', 'Item C']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            '1'
        ),
        React.createElement(
            'li',
            null,
            '1'
        ),
        React.createElement(
            'li',
            null,
            '1'
        )
    )
);

var user = {
    name: 'Jacobo',
    age: 23,
    location: 'Mexico City'
};

function renderAttribute(attribute, value) {
    return value ? React.createElement(
        'p',
        null,
        attribute,
        ': ',
        value
    ) : undefined;
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    renderAttribute("Age", user.age),
    renderAttribute("Location", user.location)
);

ReactDOM.render(templateTwo, document.getElementById("app"));
