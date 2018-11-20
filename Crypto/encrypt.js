
let crypto;
let cipher;
module.exports = encrypt;


function encrypt( plaintext,passwort) {
     crypto = require('crypto');
     cipher = crypto.createCipher('aes192', passwort);

    let encrypted = cipher.update(plaintext, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log(encrypted);

    return encrypted;
}

