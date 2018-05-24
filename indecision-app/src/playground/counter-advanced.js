class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.subtractOne = this.subtractOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0,
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.subtractOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }

    addOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            }
        });
        console.log("Add one");
    }

    subtractOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count - 1
            }
        });
        console.log("subtract one");
    }

    reset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
        console.log("Reset");
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"));