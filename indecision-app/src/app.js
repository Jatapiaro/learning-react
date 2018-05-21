class IndecisionApp extends React.Component {
    render() {
        
        const data = {
            title: "Indecision",
            description: "Let's do something",
            options: ["Thing One", "Thing Two", "Thing Three"]
        }

        return (
            <div className = "container">
                <Header 
                    title = { data.title }
                    description = { data.description }
                />
                <Action />
                <Options 
                    options = { data.options } 
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
                <button className="btn btn-success"> What should I do? </button>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <div className="input-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" placeholder="Insert Your Option" aria-label="Insert Your Option" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">Add Option</button>
                    </div>
                </div>                
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        console.log(this.props.options);
        return (
            <div>
                <ol>
                {
                    this.props.options.map((option) =>
                        <Option key = {option} option = { option } />
                    )
                }
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <li>{ this.props.option }</li>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));