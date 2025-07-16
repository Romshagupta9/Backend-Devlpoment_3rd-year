let users=[{
    name:"John",
    age:30,
    address:"delhi",
},
{
    name:"Jane",
    age:25,
    address:"mumbai",
}
];
const fs = require('fs');
// fs.writeFile("../user.txt", JSON.stringify(users),function(err) {
//     if (err) {
//        return console.error(err);
//     } else {
//        return console.log('✅ Users data written successfully to file');
//     }
// });

//java script object notation :json
//function--> stringify :converts object into strings..(keys and values both)


fs.writeFile("../user.txt", JSON.stringify(users),function(err) {
    if (err) {
       return console.error(err);
    } else {
       return console.log('✅ Users data written successfully to file');
    }
});