
const students=[
    {id:21,name:'omor'},
    {id:25,name:'juyel'},
    {id:31,name:'mamun'},
    {id:20,name:'nirob'}
];

// const output=[];
// for(let i=0;i<students.length;i++){
//    const element=students[i];
//    const result=element.name;
//    output.push(result); 
// }
// console.log(output);

const names=students.map(s=>s.name);
const ids=students.map(s=>s.id);
const bigger=students.filter(x=>x.id>20);
const biggerone=students.find(x=>x.id>30);
console.log(ids);
console.log(names);
console.log(bigger);
console.log(biggerone);