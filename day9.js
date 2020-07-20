/*************************object oriented programming******************************** */
const person={   /******************* define object using object literals*********************** */
first_name:"Ria",
last_name:"Mehra",
getfunction:()=>console.log(`${first_name} ${last_name}`), /******method in object******* */
  phoneNumber:  {
        phone_no:9456235689    /**************object inside object************** */
    }
}
person["first_name"]="tia"
console.log(person.phoneNumber.phone_no)
console.log(Object.keys(person).length)

///********************onject creation using constructor**************************** */
function Person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}
const person1=new Person("Ria","Mehra");
const person2=Object.create(Person);
person2.firstName="tia";
person2.lastName="khan";
console.log(`${person2.firstName} ${person2.lastName}`)
console.log(`${person1.firstName} ${person1.lastName}`)
//***************************object prototype inheritance*************************************** */
function Employee(name,salary){
    this.name=name;
    this.salary=salary;
}
Employee.prototype.slogan=function(){
    return (`This company is best`)
}
const emp1=new Employee("Rahul",15000)
console.log(emp1.slogan())
function Programmer(name,salary,language){
    Employee.call(this,name,salary);
    this.language=language;
}
Programmer.prototype=Object.create(Employee.prototype);/**************prototype inheritance from previous object to use functions *********** */
const emp2=new Programmer("Ria",140000,"JavaScript")
console.log(emp2.slogan())

//***********************class************************************** */
class Vehicle{
    constructor(name,model,engine){
        this.name=name;
        this.model=model;
        this.engine=engine;
    }
getResult(){
    return (`best vehicle ever`)
}
}
const v1=new Vehicle("honda",2000,"120cc")
console.log(v1.getResult())

/******************************************************************** */
class Car extends Vehicle {
    constructor(name,model,cost){
        super(name,model)
        this.cost=cost;
    }


}
const car1=new Car("verna",2016,6000000)
console.log(car1)
console.log(car1.getResult())

/**********************encapsulation************************** */
class Emp {
    setEmpDetails(name,salary){
    this.name=name;
    this.salary=salary;
}
getEmpName(){
    return (this.name);
    
}
getEmpSalary(){
    return this.salary;
}}
const emp3=new Emp()
console.log(emp3.setEmpDetails("JOHN",200000));
console.log(emp3.getEmpName())
console.log(emp3.getEmpSalary())

/*****************polymorphism******************* */
class Car1 extends Vehicle {
    constructor(name,model,cost){
        super(name,model)
        this.cost=cost;}
        getResult(){
            return (`best carrrr ever`)
        }
    
    }
    let car2=new Car1()
    console.log(car2.getResult())
