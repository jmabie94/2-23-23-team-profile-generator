const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email, fact, office) {
        super (name, id, email, fact);
        this.office = office;
    }

    getOffice () {
        return this.office;
    }

    getRole () {
        return "Manager";
    }
};

module.exports = Manager;