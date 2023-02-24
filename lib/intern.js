const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, id, email, fact, school) {
        super (name, id, email, fact);
        this.school = school;
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
};

module.exports = Intern;