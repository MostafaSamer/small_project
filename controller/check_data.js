const fs = require('fs');

const model_dir = '/home/mostafa/Documents/Projects/node/small_project/model/';

module.exports = function(data) {
    var fileName = model_dir + data.email + '.json'
    fs.readFile(fileName, 'utf8', function(err, readdata) {
        if (err) {
            console.log("User Not Found");
        } else {
            readdata = JSON.parse(readdata);
            if (data.pass == readdata.pass) {
                console.log("Your Name: " + readdata.name);
                console.log("Your Email: " + readdata.email);
                console.log("Your Phone: " + readdata.phone);
                console.log("Your Addresse: " + readdata.address);
            } else {
                console.log("Wrong Password");
            }
        }
    })
}
