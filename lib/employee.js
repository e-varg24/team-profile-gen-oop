// Main page creator for employee
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    // return name
    getName () {
        return this.name;
    }

    // return ID
    getId () {
        return this.id;
    }   

    // return email
    getEmail () {
        return this.email;
    }

    // return employee type
    getRole () {
        return 'Employee'; 
    }
};

// exports Employee
module.exports = Employee; 