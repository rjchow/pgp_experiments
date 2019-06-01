const openpgp = require('openpgp');
const fs = require('fs')

let m = openpgp.message.fromText('hello world')

let options = { message: m, passwords: [ 'password' ], armor: true }


openpgp.encrypt(options)
	.then(cipherText => fs.writeFileSync("out", cipherText.data))
