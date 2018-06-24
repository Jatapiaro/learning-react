import React from 'react';

import Action from './../Action/Action';
import AddOption from './../AddOption/AddOption';
import Header from './../Header/Header';
import Options from './../Options/Options';
import OptionModal from './../OptionModal/OptionModal';

export default class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        options: this.props.options,
        selectedOption: undefined
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
        if (prevState.options.length != this.state.options) {
            localStorage.setItem('options', JSON.stringify(this.state.options));
        }
    }

    componentWillUnmount() {
        console.log("Unmount");
    }

    render() {

        return (
            <div>
                <Header
                />
                <div className="container">
                    <Action handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}
                />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOneOption={this.handleDeleteOneOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                    <br />
                </div>
                <OptionModal 
                    selectedOption = { this.state.selectedOption }
                    handleUnpick = { this.handleUnpick }
                />
            </div>
        );
    }

    handleDeleteOptions = () => {
        this.setState((prevState) => {
            return {
                options: []
            }
        });
        localStorage.setItem('options', JSON.stringify([]));
    }

    handlePick = () => {
        let option = Math.random() * this.state.options.length;
        option = Math.floor(option);
        let o = this.state.options[option];
        this.setState((prevState) => {
            return {
                selectedOption: o,
            }
        })
    }

    handleUnpick = () => {
        this.setState((prevState) => {
            return {
                selectedOption: undefined,
            }
        });
    }

    handleAddOption = (option) => {
    
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

    handleDeleteOneOption = (index) => {

        this.setState((prevState) => {
            let arr = prevState.options;
            arr.splice(index, 1);
            return {
                options: arr
            }
        });
    }

}

IndecisionApp.defaultProps = {
    options: []
}
