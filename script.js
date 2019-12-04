class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }
  class Manager extends Employee {
      //constructor
      constructor(name, salary, hireDate, descriptionOfJob){
          //super from Employee class
          super(name, salary, hireDate);
          //unique variable
          this.descriptionOfJob = descriptionOfJob;
      }
      // unique method
      jobDescription(){
          console.log(
              "Name: "  + this.name + " Hire Date: " + this.hireDate + " Salary: " + this.salary + " Job Description: " + this.descriptionOfJob
            )
      }
    }
      
    class Designer extends Employee {
      constructor(name, salary, hireDate, experience){
        super(name, salary, hireDate);
        this.experience = experience;
      }
      yearsExperience(){
        console.log("Name: "  + this.name + " Hire Date: " + this.hireDate + " Salary: " + this.salary + " Experience: " + this.experience)
      }
      }
      class salesAssociate extends Employee {
        constructor(name, salary, hireDate, degrees){
          super(name, salary, hireDate);
          this.degrees = degrees;
        }
        degreeCompleted(){
          console.log("Name: "  + this.name + " Hire Date: " + this.hireDate + " Salary: " + this.salary + " Degrees Completed: " + this.degrees)
        }
        }
      
  
//  class Designer extends Employee(){
//   }
//   SalesAssociate extends Employee(){
//   }
  //new instance
  var managerBob = new Manager("Bob", 80000, "01/01/01", "Operations Manager");
  //call class methods
  managerBob.jobDescription();
  var newDesigner = new Designer("Mary", 100000, "02/02/02", "15 Years");
  newDesigner.yearsExperience();
  var degreeEarned = new salesAssociate("Erik", 1000000, "11/25/19", "None");
  degreeEarned.degreeCompleted();



