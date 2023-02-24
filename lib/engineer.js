const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, fact, github) {
        super (name, id, email, fact);
        this.github = github;
    }

    getGithub () {
        return this.github;
    }

    getRole () {
        return "Engineer";
    }
};

module.exports = Engineer;