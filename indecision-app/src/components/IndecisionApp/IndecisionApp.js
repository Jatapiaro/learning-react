import React from 'react';

import Action from './../Action/Action';
import AddOption from './../AddOption/AddOption';
import Header from './../Header/Header';
import Options from './../Options/Options';

export default class IndecisionApp extends React.Component {

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
        } catch (e) {
            console.log(e);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Updated", prevState);
        if (prevState.options.length != this.state.options) {
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
                <Action handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOneOption={this.handleDeleteOneOption}
                />
                <br />
                <AddOption handleAddOption={this.handleAddOption} />
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
        console.log("Do: " + o);
    }

    handleAddOption(option) {
        option = option.trim();
        if (!option) {
            return "Enter a valid value to add the item";
        }
        if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }

        this.setState((prevState) => {
            return {
                // concat duplicates!
                options: prevState.options.concat(option)
            }
        });
    }

    handleDeleteOneOption(index) {

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
