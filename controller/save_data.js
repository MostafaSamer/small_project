const fs = require('fs');

const model_dir = '/home/mostafa/Documents/Projects/node/small_project/model/';

module.exports = function(data) {
    var fileName = model_dir + data.email + '.json'
    fs.writeFile(fileName, JSON.stringify(data), 'utf8', function(err) {
        if(err) {
            console.log("Error in saving files");
            return console.log(err);
        }
    })
}
