// function add(a,b){
//     return {
//          sum:a+b
        
        
//     };
// }
// const sum1=add(6,5);
// console.log(sum1);
// function employee(name,salary,experience,department){
//     return {
//         name,
//         salary,
//         experience,
//         department
//     };
// }
// const employee1=employee("john",15000,5,"engineering");
// const employee2=employee("jane",15000,5,"engineering");
// const employee3=employee("slacey",15000,5,"engineering");
// console.log(employee1);
// console.log(employee2);
// console.log(employee3);
const fullname= {
    firstname:"john",
    lastname:"smith",
        get name(){
        return `${fullname.firstname} ${fullname.lastname}`;},
        set person(values){
            const parts=values.split(' ');
            this.firstname=parts[0];
            this.lastname=parts[1];
        
    }
};
// console.log(fullname)
fullname.person="aarti dhiman";
    console.log(fullname.name);