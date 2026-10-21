// type Employee = {
//     id : number ;
//     name : string ;
//     designation : string ;
//     salary : number ;
//     info: () =>  void;
// }
interface Employee {
    id : number ,
    name : string ,
    designation : string ,
    salary : number 
    info: () =>  void
}
let employee1 : Employee = {
    id : 1,
    name : 'Abdul Wasay',
    designation : 'Software Developer',
    salary : 200000,
    info (){
        console.log(`Employee Id : ${this.id} \nName : ${this.name} \nDesignation : ${this.designation} \nSalary : ${this.salary}`);
    }
}
let employee2 : Employee = {
    id : 2,
    name : 'Ali Ahmed',
    designation : 'Web Developer',
    salary : 100000,
    info (){
        console.log(`Employee Id : ${this.id} \nName : ${this.name} \nDesignation : ${this.designation} \nSalary : ${this.salary}`);
    }
}
employee1.info();
employee2.info();

