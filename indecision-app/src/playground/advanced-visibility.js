class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visibility: false,
        };
        this.handleVisibility = this.handleVisibility.bind(this);
    }

    render() {
        return (
            <div className="container">
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibility}>
                    {(this.state.visibility) ? 'Hide Details' : 'Show Details'}
                </button>
                <br />
                {this.state.visibility && <VisibleElement />}
            </div>
        );
    }

    handleVisibility() {
        this.setState((prevState) => {
            let state = {
                visibility: !prevState.visibility,
            }
            return state;
        });
    }

}

class VisibleElement extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p> Hey this are some details you can see! </p>
            </div>
        );
    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
