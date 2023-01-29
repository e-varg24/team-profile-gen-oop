// import Employee constructor 
const Employee = require('./Employee');

// creates manger profile
class Manager extends Employee {
    constructor (name, id, email, Number) {
     
        super (name, id, email); 
        
        this.Number = Number; 
    }
    getRole () {
        return "Manager";
    }
}

// export Manager
module.exports = Manager; 