const fs = require('fs')
const file_path = process.argv[2]
fs.readFile(file_path, 'utf8', processFile);

function processFile(err, content) {
    if (err) return console.error(err)
    const number = content.split('\n').length - 1
    console.log(number)
}
