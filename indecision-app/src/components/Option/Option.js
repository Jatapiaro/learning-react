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
            <div className="option">
                <p className="option__text">{this.props.index + 1}. {this.props.option}</p>
                <button className="button button--link" onClick={this.handleDeleteOneOption}>Remove</button>
            </div>
        );
    }

    handleDeleteOneOption = () => {
        this.props.handleDeleteOneOption(this.props.index);
    }

}