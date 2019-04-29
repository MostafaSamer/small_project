const fs = require('fs');

const model_dir = '/home/mostafa/Documents/Projects/node/small_project/model/';

module.exports = function(data) {
    var fileName = model_dir + data.email + '.json'
    fs.readFile(fileName, 'utf8', function(err, readdata) {
        if (err) {
            console.log("User Not Found");
        }
        readdata = JSON.parse(readdata);
        if (data.pass == readdata.pass) {
            console.log("Show Data");
        } else {
            console.log("Sho Error");
        }
    })
}
