var fs = require('fs')

// fs.readFile('./lorem.txt', function (err, content) {
//     fs.writeFile('./cantidad.txt', content.length, function (err) {
//         console.log(content.length);
//     })
// })

function readFile(name) {
    console.log(`Leyendo ${name}`);
    return new Promise(function(resolve, reject) {
        fs.readFile(name, function (err, content) {
            if (err) {
                return reject(err)
            }
            console.log(`Finalió lectura ${name}`);
            resolve(content)
        })
    });
}

function writeFile(name, content, ) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(name, content, function (err) {
            if (err) {
                return reject(err)
            }
            resolve()
        })
    });
}

Promise.all([
    readFile('./lorem.txt'),
    readFile('./cantidad.txt'),
    readFile('./main.js')
]).then(responses => console.log(responses.length))



// readFile('./lorem.txt')
// .then(content => writeFile('cantidad.txt', content.length))
// .catch(err => console.log(`Hubo un error ${err}`))
