console.log("works2");

// JSX - JavaScript XML
var app = {
    title: 'Some title',
    subtitle: 'Subtitle of some title',
    items: [
        'Item A',
        'Item B',
        'Item C'
    ],
}
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ol>
    </div>
);

let user = {
    name: 'Jacobo',
    age: 23,
    location: 'Mexico City'
};

function renderAttribute( attribute, value ) {
    return (value)? <p>{attribute}: {value}</p> : undefined;
}

var templateTwo = (
    <div>
        <h1>{ (user.name)? user.name : 'Anonymous'}</h1>
        {renderAttribute("Age" ,user.age)}
        {renderAttribute("Location", user.location)}
    </div>
);

ReactDOM.render(templateTwo, document.getElementById("app"));