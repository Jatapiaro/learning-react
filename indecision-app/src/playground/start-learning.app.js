const app = document.getElementById("app");

// JSX - JavaScript XML
let appData = {
    title: 'Some title',
    subtitle: 'Subtitle of some title',
    items: [
    ],
    showDetails: false,
}



/* This is also valid
const listItems = appData.items.map((item) => {
    return <li key={item}> {item} </li>
});
*/

const renderItems = () => {
    let itemsDiv = (
        <div>
            <p>This are your options: </p>
            <ol>
                {
                    appData.items.map((item) =>
                        <li key={item}> {item} </li>
                    )
                }
            </ol>
        </div>
    );
    return (appData.items.length > 0) ? itemsDiv : undefined;
};

const addItem = (e) => {

    e.preventDefault();
    /* 
    * This gets the elements of the form and 'option'
    * is the name of the input
    */

    let option = e.target.elements.option.value;
    if (option) {
        appData.items.push(option);
        console.log("Add item", appData.items);
        e.target.elements.option.value = '';
        render();
    } else {
        console.log("Empty option");
    }

};


const removeAllItems = () => {
    appData.items = [];
    render();
};

const onMakeDecision = () => {
    if (appData.items.length > 0) {
        let randomNumber = Math.random() * appData.items.length;
        randomNumber = Math.floor(randomNumber);
        console.log(appData.items[randomNumber]);
    }
}

const toggleDetails = () => {
    appData.showDetails = !appData.showDetails;
    render();
}

const render = () => {

    var template = (
        <div className="container">
            <h1>{appData.title}</h1>
            <button onClick={toggleDetails}>{(appData.showDetails) ? 'Hide details' : 'Show Details'}</button>
            {appData.showDetails && (
                <div>
                    <p>{appData.subtitle}</p>
                </div>
            )}
            <br />
            <button disabled={appData.items.length == 0} onClick={onMakeDecision}>Make decision</button>
            {renderItems()}
            <form onSubmit={addItem}>
                <input name="option" type="text"></input>
                <button className="btn btn-primary">Add option</button>
            </form>
            <button onClick={removeAllItems}>Remove all</button>
        </div>
    );

    ReactDOM.render(template, app);
}

render();

