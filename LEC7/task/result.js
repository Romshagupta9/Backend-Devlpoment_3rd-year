
// // // Parse the JSON content into arrays
// const arr1 = JSON.parse(data1);
// const arr2 = JSON.parse(data2);

// Combine both arrays into one
// let users = [...arr1, ...arr2];

// // Write combined JSON to result.txt
// fs.writeFileSync('result.txt', JSON.stringify(users, null, 2));


// console.log('✅ Data combined and written to result.txt');


//sync func ko async bnane k lie sirf do hi chiz use hoti hia callback ya promise..


//to do application:
//user se input lena h from console.--title and description..

const fs = require("fs");

fs.readFile("../user.txt", "utf-8", function(err, data){   
    if(err) console.log(err);
    let users = JSON.parse(data)
    fs.readFile("../task.txt", "utf-8", function(err, data){   
        if(err) return console.log(err);  
        let users2 = JSON.parse(data)

        let allUsers = users.concat(users2);
        fs.writeFile("../result.txt", JSON.stringify(allUsers), function(err, data){
            if(err) console.log(err);
            console.log("All users written");
        });

        
    });
});