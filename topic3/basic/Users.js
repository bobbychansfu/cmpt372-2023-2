class User {
    constructor(fname, lname, age) {
      this.fname = fname;
      this.lname = lname;
      this.age = age;
    }
  
    fullName() {
      console.log(this.fname + ' ' + this.lname);
    }
  }
  
  module.exports = User;
  