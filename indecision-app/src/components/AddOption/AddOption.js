import React from 'react';
import Error from './../Error/Error';

export default class AddOption extends React.Component {

    state = {
        error: undefined
    }

    constructor(props) {
        super(props);
    }

    render() {
        var buttonStyle = {
            'z-index': 0
        }
        return (
            <div>
                {
                    this.state.error && <p className="add-option__error"> {this.state.error} </p>
                }
                <form className="add-option__form" onSubmit={this.addOption} >
                    <div>
                        <input className="add-option__input" name="option" />
                        <button className="button">Add Option</button>
                    </div>
                </form>
            </div>
        );
    }

    addOption = (e) => {

        e.preventDefault();
        let option = e.target.elements.option.value;
        let error = this.props.handleAddOption(option);
        if (error) {
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