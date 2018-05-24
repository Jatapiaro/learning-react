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
            options: []
        };
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "render",
        value: function render() {

            var data = {
                title: "Indecision",
                description: "Let's do something"
            };

            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(Header, {
                    title: data.title,
                    description: data.description
                }),
                React.createElement(Action, { handlePick: this.handlePick,
                    hasOptions: this.state.options.length > 0
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions
                }),
                React.createElement("br", null),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
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
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",

        /*
        * React components needs to
        * overwrite a render method
        */
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "p",
                    null,
                    this.props.description
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action(props) {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    {
                        onClick: this.props.handlePick,
                        disabled: !this.props.hasOptions,
                        className: "btn btn-success" },
                    "What should I do?"
                ),
                React.createElement("br", null)
            );
        }
    }]);

    return Action;
}(React.Component);

var AddOption = function (_React$Component4) {
    _inherits(AddOption, _React$Component4);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this4 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this4.addOption = _this4.addOption.bind(_this4);
        _this4.state = {
            error: undefined
        };
        return _this4;
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

var Error = function (_React$Component5) {
    _inherits(Error, _React$Component5);

    function Error(props) {
        _classCallCheck(this, Error);

        return _possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).call(this, props));
    }

    _createClass(Error, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "alert alert-danger", role: "alert" },
                this.props.error
            );
        }
    }]);

    return Error;
}(React.Component);

var Options = function (_React$Component6) {
    _inherits(Options, _React$Component6);

    function Options(props) {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            console.log(this.props.options);
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "ol",
                    null,
                    this.props.options.map(function (option) {
                        return React.createElement(Option, { key: option, option: option });
                    })
                ),
                React.createElement(
                    "button",
                    { onClick: this.props.handleDeleteOptions, className: "btn btn-danger" },
                    "Remove all"
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component7) {
    _inherits(Option, _React$Component7);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "li",
                    null,
                    this.props.option
                )
            );
        }
    }]);

    return Option;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
