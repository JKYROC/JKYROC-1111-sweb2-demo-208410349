import {students, sdata } from './data_49.js';

console.log('sdata original', sdata);

sdata.sort( function(a,b){return b-a});
console.log('sdata sorted',sdata);
console.log(`The hightest score ${sdata[0]}`);
console.log(`The lowest score ${sdata[sdata.length-1]}`);

console.log('students', students);

const students2 = students.map( (student) =>{
    // student.role = 'student';
    return {... student,role:'student'};
});

console.log('students2 original', students2);

students2.sort(function(a,b){return a.score - b.score});
console.log('students2 sorted',students2);
console.log(`The lowest score ${students2[0].score}`);
console.log(`The hightest score ${students2[students2.length-1].score}`);

const average = students2.reduce( (total,students2,index) =>{
    console.log('index total', index,total);
    return total + students2.score;
},0) / students2.length;
console.log('average', average);