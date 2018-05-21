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

/*
This was just another example

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
*/

let count = 0;
const someId = "add-btn";
const addOne = () => { 
    count++;
    console.log("Count", count);
    renderTemplate();
};

const subtractOne = () => {
    count--;
    console.log("Count", count);
    renderTemplate();
};

const reset = () => {
    count = 0;
    console.log("Count", count);
    renderTemplate();
}


const renderTemplate = () => {
    const templateTwo = (

        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} id={someId} className="btn btn-primary">Add One To Count</button>
            <button onClick={subtractOne} className="add-btn">Subtract One To Count</button>
            <button onClick={reset} className="add-btn">Reset</button>
        </div>

    );
    ReactDOM.render(templateTwo, document.getElementById("app"));
}

renderTemplate();

