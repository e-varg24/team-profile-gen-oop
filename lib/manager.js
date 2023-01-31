// import Employee constructor 
const Employee = require('./Employee');

// creates manger profile
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
     
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }
    getRole () {
        return "Manager";
    }
}

// export Manager
module.exports = Manager; 