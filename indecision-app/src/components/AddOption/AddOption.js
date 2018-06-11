import React from 'react';
import Error from './../Error/Error';

export default class AddOption extends React.Component {

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
                    this.state.error && <Error error={this.state.error} />
                }
                <form onSubmit={this.addOption} >
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