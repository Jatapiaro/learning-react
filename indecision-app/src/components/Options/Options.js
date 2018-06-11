import React from 'react';
import Error from './../Error/Error';
import Option from './../Option/Option';

export default class Options extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br />
                <button onClick={this.props.handleDeleteOptions} className="btn btn-danger">Remove all</button>
                {this.props.options.length === 0 && <div><br /><Error error="Please add some options" /></div>}
                <ol>
                    {
                        this.props.options.map((option, index) =>
                            <Option key={index} option={option} index={index} handleDeleteOneOption={this.props.handleDeleteOneOption} />
                        )
                    }
                </ol>
            </div>
        );
    }

}


