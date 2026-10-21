//union
let age : number | string = 16 ;
age = 'sixteen';
//intersection
type student = {
    name : string,
    age : number
}
type Person = {
    skills:string[],
    batches:string[]
}
let AbdulWasay : student & Person = {
    name : 'Abdul Wasay',
    age : 16,
    skills : ['Html','CSS','Js'],
    batches : ['2505E3']
}
type direction = 'North' | 'East' | 'West' | 'South';
type dice = 1 | 2 | 3 | 4 | 5 | 6;

let shipdir : direction = 'South';
let diceface : dice = 4;