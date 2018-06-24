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
                <div className="widget-header">
                    <h3 className="widget-header__title">Your options</h3>
                    <button onClick={this.props.handleDeleteOptions} className="button button--link">Remove all</button>
                </div>
                {this.props.options.length === 0 && <div><p className="widget__message">"Please add some options"</p></div>}
                {
                    this.props.options.map((option, index) =>
                        <Option key={index} option={option} index={index} handleDeleteOneOption={this.props.handleDeleteOneOption} />
                    )
                }
            </div>
        );
    }

}


