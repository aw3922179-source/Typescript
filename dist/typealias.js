let employee1 = {
    id: 1,
    name: 'Abdul Wasay',
    designation: 'Software Developer',
    salary: 200000,
    info() {
        console.log(`Employee Id : ${this.id} \nName : ${this.name} \nDesignation : ${this.designation} \nSalary : ${this.salary}`);
    }
};
let employee2 = {
    id: 2,
    name: 'Ali Ahmed',
    designation: 'Web Developer',
    salary: 100000,
    info() {
        console.log(`Employee Id : ${this.id} \nName : ${this.name} \nDesignation : ${this.designation} \nSalary : ${this.salary}`);
    }
};
employee1.info();
employee2.info();
export {};
//# sourceMappingURL=typealias.js.map