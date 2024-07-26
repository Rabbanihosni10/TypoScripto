"use strict";
class Student {
    constructor(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    agecal() {
        return `I am from public`;
    }
}
class Teacher extends Student {
    constructor(name, age, skill) {
        super(name, age, skill);
    }
    ageCal() {
        return this.name;
    }
}
class Account extends Student {
    constructor(name, age, skill) {
        super(name, age, skill);
    }
}
const student = new Student("Ashraf", 30, true);
console.log(student.agecal());
