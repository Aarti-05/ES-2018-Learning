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

///********************onject creation using constructor**************************** */
function Person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}
const person1=new Person("Ria","Mehra");
console.log(`${person1.firstName} ${person1.lastName}`)