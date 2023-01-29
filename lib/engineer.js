// import Employee constructor
const Employee = require("./Employee");

// creats engineer employee profile
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);

        this.github = github; 
    }

    // return github
    getGithub () {
        return this.github;
    }

     
    getRole () {
        return "Engineer";
    }
}

// export Engineer
module.exports = Engineer; 