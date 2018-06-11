class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: this.props.options
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOneOption = this.handleDeleteOneOption.bind(this);
    }

    componentDidMount() {
        console.log("mounted");
        try {
            let options = JSON.parse(localStorage.getItem('options'));
            if (options) {
                this.setState(() => {
                    return {
                        options: options
                    }
                });
            }
        } catch( e ) {
            console.log(e);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Updated", prevState);
        if ( prevState.options.length != this.state.options ) {
            localStorage.setItem('options', JSON.stringify(this.state.options));
        }
    }

    componentWillUnmount() {
        console.log("Unmount");
    }

    render() {

        return (
            <div className="container">
                <Header
                />
                <Action handlePick = { this.handlePick } 
                    hasOptions = {  this.state.options.length > 0 }
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions = { this.handleDeleteOptions }
                    handleDeleteOneOption = { this.handleDeleteOneOption }
                />
                <br />
                <AddOption handleAddOption = { this.handleAddOption }/>
                <br />
            </div>
        );
    }

    handleDeleteOptions() {
        this.setState((prevState) => {
            return {
                options: []
            }
        });
        localStorage.setItem('options', JSON.stringify([]));
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

    handleDeleteOneOption ( index ) {
        
        this.setState((prevState) => {
            let arr = prevState.options;
            arr.splice(index, 1);
            return {
                options: arr
            }
        });
        //console.log(option);
    }

}

IndecisionApp.defaultProps = {
    options: []
}

const Header = ((props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            { props.description && <h2>{props.description}</h2> }
        </div>
    )
});

Header.defaultProps = {
    title: 'Indecisión',
    description: 'What should I do 5?'
}

/*class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        )
    }
}*/

const Action = ((props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                className="btn btn-success">
                What should I do?
                </button>
            <br />
        </div>
    );
}); 

/*class Action extends React.Component {

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

}*/

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

const Error = ((props) => {
    return (
        <div className="alert alert-danger" role="alert">{props.error}</div>
    );
});

/*class Error extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="alert alert-danger" role="alert">{this.props.error}</div>
        );
    }
}*/

class Options extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br />
                <button onClick={this.props.handleDeleteOptions} className="btn btn-danger">Remove all</button>
                { this.props.options.length === 0 && <div><br /><Error error="Please add some options" /></div> }
                <ol>
                    {
                        this.props.options.map((option, index) =>
                            <Option key={index} option={option} index={index} handleDeleteOneOption = { this.props.handleDeleteOneOption }/>
                        )
                    }
                </ol>
            </div>
        );
    }

}


class Option extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOneOption = this.handleDeleteOneOption.bind(this);
    }

    componentWillUnmount() {
        console.log("Unmout");
    }

    render() {
        return (
            <div>
                <br />
                <li>
                    {this.props.option} &nbsp;
                    <button className="btn btn-danger" onClick={this.handleDeleteOneOption}>x</button>
                </li>
            </div>
        );
    }

    handleDeleteOneOption() {
        this.props.handleDeleteOneOption(this.props.index);
    }

}

const User = (props) => {
    return (
        <div>
            <p>Name: { props.user.name }</p>
            <p>Age: {props.user.age}</p>
        </div>
    );
};


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));