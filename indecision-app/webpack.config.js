const path = require('path');

/* 
* All the configurations details
*/
module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    } 
};