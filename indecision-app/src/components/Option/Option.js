import React from 'react';

export default class Option extends React.Component {

    constructor(props) {
        super(props);
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

    handleDeleteOneOption = () => {
        this.props.handleDeleteOneOption(this.props.index);
    }

}