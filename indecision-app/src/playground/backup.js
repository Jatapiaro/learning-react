class IndecisionApp extends React.Component {
    render() {

        const data = {
            title: "Indecision",
            description: "Let's do something",
            options: ["Thing One", "Thing Two", "Thing Three"]
        }

        return (
            <div className="container">
                <Header
                    title={data.title}
                    description={data.description}
                />
                <Action />
                <Options
                    options={data.options}
                />
                <br />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    /*
    * React components needs to
    * overwrite a render method
    */
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.handlePick} className="btn btn-success"> What should I do? </button>
                <br />
            </div>
        );
    }

    handlePick() {
        console.log("Click");
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.addOption} >
                    <div className="input-group mx-sm-3 mb-2">
                        <input name="option" type="text" className="form-control" placeholder="Insert Your Option" aria-label="Insert Your Option" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary">Add Option</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    addOption(e) {
        e.preventDefault();
        //console.log(e.target.elements);
        let option = e.target.elements.option.value;
        option.trim();
        if (option) {
            console.log("Added option", option);
            e.target.elements.option.value = '';
        }
    }
}

class Options extends React.Component {

    constructor(props) {
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }

    render() {
        console.log(this.props.options);
        return (
            <div>
                <ol>
                    {
                        this.props.options.map((option) =>
                            <Option key={option} option={option} />
                        )
                    }
                </ol>
                <button onClick={this.removeAll} className="btn btn-danger">Remove all</button>
            </div>
        );
    }

    removeAll() {
        console.log(this.props);
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.option}</li>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));