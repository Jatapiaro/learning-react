class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    render() {

        const data = {
            title: "Indecision",
            description: "Let's do something",
        }

        return (
            <div className="container">
                <Header
                    title={data.title}
                    description={data.description}
                />
                <Action handlePick = { this.handlePick } 
                    hasOptions = {  this.state.options.length > 0 }
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions = { this.handleDeleteOptions }
                />
                <br />
                <AddOption handleAddOption = { this.handleAddOption }/>
            </div>
        );
    }

    handleDeleteOptions() {
        this.setState((prevState) => {
            return {
                options: []
            }
        });
    }

    handlePick() {
        let option = Math.random() * this.state.options.length;
        option = Math.floor(option);
        let o = this.state.options[option];
        console.log("Do: "+o);
    }

    handleAddOption( option ) {
        option = option.trim();
        if ( !option ) {
            return "Enter a valid value to add the item";
        }
        if ( this.state.options.indexOf(option) > -1 ) {
            return "This option already exists";
        }

        this.setState((prevState) => {
            return {
                // concat duplicates!
                options: prevState.options.concat(option)
            }
        });
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

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <button 
                    onClick= { this.props.handlePick } 
                    disabled = { !this.props.hasOptions } 
                    className="btn btn-success"> 
                    What should I do? 
                </button>
                <br />
            </div>
        );
    }

}

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    render() {
        return (
            <div>
                { 
                    this.state.error && <Error error = { this.state.error }/>
                }
                <form onSubmit= { this.addOption } >
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
        let option = e.target.elements.option.value;
        let error = this.props.handleAddOption(option);

        if ( error ) {
            this.setState((prevState) => {
                return {
                    error: error
                }
            });
        } else {
            this.setState((prevState) => {
                return {
                    error: error
                }
            });
            e.target.elements.option.value = '';
        }

    }
}

class Error extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="alert alert-danger" role="alert">{this.props.error}</div>
        );
    }
}

class Options extends React.Component {

    constructor(props) {
        super(props);
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
                <button onClick={this.props.handleDeleteOptions} className="btn btn-danger">Remove all</button>
            </div>
        );
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