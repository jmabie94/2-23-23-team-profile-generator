class Employee {
    constructor (name, id, email, fact) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.fact = fact
    }

    getName () {
        return this.name;
    }

    getID () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getFact () {
        return this.fact;
    }

    getRole () {
        return "Employee"
    }
};

module.exports = Employee;