class Person {
    
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
        console.log("Constructor");
    }

    getDescription() {
        return `Name: ${this.name}\nAge: ${this.age}`;
    }

    getGretting() {
        return `Hi! ${this.name}`;
    }

}

class Student extends Person {
    constructor(name, age, major = 'NiNi', school) {
        super(name, age);
        this.major = major;
        this.school = school;
    }

    hasSchool() {
        /*
        * If you swithc two times undefined
        * !!undefined it gets false
        */
        return !!this.school;
    }

    getDescription() {
        return super.getDescription()+
            `\nMajor: ${this.major}\nHas School: ${this.hasSchool()}`;
    }
}

let me = new Person("Jacobo", 23);
console.log(me.getDescription());

let other = new Student();
console.log(other.getDescription());