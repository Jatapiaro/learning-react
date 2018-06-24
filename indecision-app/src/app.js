import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hy, my name is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(oldSyntax.getGreeting());
//console.log(getGreeting());

class NewSyntax {
    name = 'Jan';
    getGreeting = () => {
        return `Hy, my name is ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
const getGreetingN = newSyntax.getGreeting;
console.log(newSyntax.getGreeting());
console.log(getGreetingN());
