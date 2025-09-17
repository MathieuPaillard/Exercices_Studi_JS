const fs = require('fs');
const _ = require('lodash');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data.toUpperCase());
});

const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jim', age: 35 },
    { name: 'Jake', age: 28 },
    { name: 'Jill', age: 32 },
    { name: 'Joe', age: 29 }
];

const groupedByAge = _.groupBy(users, user => { return user.age < 30 ? 'Under 30' : '30 and Over'; });
console.log('Grouped by age:', groupedByAge);