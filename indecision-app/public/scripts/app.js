"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: _this.props.options
        };
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOneOption = _this.handleDeleteOneOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("mounted");
            try {
                var options = JSON.parse(localStorage.getItem('options'));
                if (options) {
                    this.setState(function () {
                        return {
                            options: options
                        };
                    });
                }
            } catch (e) {
                console.log(e);
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            console.log("Updated", prevState);
            if (prevState.options.length != this.state.options) {
                localStorage.setItem('options', JSON.stringify(this.state.options));
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log("Unmount");
        }
    }, {
        key: "render",
        value: function render() {

            var data = {
                title: "Indecision",
                description: "Let's do something"
            };

            var user = {
                name: 'Jacobo',
                age: 23
            };

            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(Header, null),
                React.createElement(Action, { handlePick: this.handlePick,
                    hasOptions: this.state.options.length > 0
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOneOption: this.handleDeleteOneOption
                }),
                React.createElement("br", null),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption }),
                React.createElement("br", null)
            );
        }
    }, {
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function (prevState) {
                return {
                    options: []
                };
            });
            localStorage.setItem('options', JSON.stringify([]));
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var option = Math.random() * this.state.options.length;
            option = Math.floor(option);
            var o = this.state.options[option];
            console.log("Do: " + o);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            option = option.trim();
            if (!option) {
                return "Enter a valid value to add the item";
            }
            if (this.state.options.indexOf(option) > -1) {
                return "This option already exists";
            }

            this.setState(function (prevState) {
                return {
                    // concat duplicates!
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: "handleDeleteOneOption",
        value: function handleDeleteOneOption(index) {

            this.setState(function (prevState) {
                var arr = prevState.options;
                arr.splice(index, 1);
                return {
                    options: arr
                };
            });
            //console.log(option);
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.description && React.createElement(
            "h2",
            null,
            props.description
        )
    );
};

Header.defaultProps = {
    title: 'Indecisión',
    description: 'What should I do?'

    /*class Header extends React.Component {
        render() {
            return (
                <div>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                </div>
            )
        }
    }*/

};var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions,
                className: "btn btn-success" },
            "What should I do?"
        ),
        React.createElement("br", null)
    );
};

/*class Action extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <button 
                    onClick= { this.props.handlePick } 
                    disabled = { !this.props.hasOptions } 
                    className="btn btn-success"> 
                    What should I do? 
                </button>
                <br />
            </div>
        );
    }

}*/

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.addOption = _this2.addOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(Error, { error: this.state.error }),
                React.createElement(
                    "form",
                    { onSubmit: this.addOption },
                    React.createElement(
                        "div",
                        { className: "input-group mx-sm-3 mb-2" },
                        React.createElement("input", { name: "option", type: "text", className: "form-control", placeholder: "Insert Your Option", "aria-label": "Insert Your Option", "aria-describedby": "basic-addon2" }),
                        React.createElement(
                            "div",
                            { className: "input-group-append" },
                            React.createElement(
                                "button",
                                { className: "btn btn-primary" },
                                "Add Option"
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: "addOption",
        value: function addOption(e) {

            e.preventDefault();
            var option = e.target.elements.option.value;
            var error = this.props.handleAddOption(option);
            if (error) {
                this.setState(function (prevState) {
                    return {
                        error: error
                    };
                });
            } else {
                this.setState(function (prevState) {
                    return {
                        error: error
                    };
                });
                e.target.elements.option.value = '';
            }
        }
    }]);

    return AddOption;
}(React.Component);

var Error = function Error(props) {
    return React.createElement(
        "div",
        { className: "alert alert-danger", role: "alert" },
        props.error
    );
};

/*class Error extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="alert alert-danger" role="alert">{this.props.error}</div>
        );
    }
}*/

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options(props) {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            var _this4 = this;

            return React.createElement(
                "div",
                null,
                React.createElement("br", null),
                React.createElement(
                    "button",
                    { onClick: this.props.handleDeleteOptions, className: "btn btn-danger" },
                    "Remove all"
                ),
                this.props.options.length === 0 && React.createElement(
                    "div",
                    null,
                    React.createElement("br", null),
                    React.createElement(Error, { error: "Please add some options" })
                ),
                React.createElement(
                    "ol",
                    null,
                    this.props.options.map(function (option, index) {
                        return React.createElement(Option, { key: index, option: option, index: index, handleDeleteOneOption: _this4.props.handleDeleteOneOption });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component4) {
    _inherits(Option, _React$Component4);

    function Option(props) {
        _classCallCheck(this, Option);

        var _this5 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

        _this5.handleDeleteOneOption = _this5.handleDeleteOneOption.bind(_this5);
        return _this5;
    }

    _createClass(Option, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log("Unmout");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement("br", null),
                React.createElement(
                    "li",
                    null,
                    this.props.option,
                    " \xA0",
                    React.createElement(
                        "button",
                        { className: "btn btn-danger", onClick: this.handleDeleteOneOption },
                        "x"
                    )
                )
            );
        }
    }, {
        key: "handleDeleteOneOption",
        value: function handleDeleteOneOption() {
            this.props.handleDeleteOneOption(this.props.index);
        }
    }]);

    return Option;
}(React.Component);

var User = function User(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            "Name: ",
            props.user.name
        ),
        React.createElement(
            "p",
            null,
            "Age: ",
            props.user.age
        )
    );
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
