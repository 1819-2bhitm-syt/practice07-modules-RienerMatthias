let plaintext = "You will never guess this text!";
let passwort = "passwort12345678";
let encrypted;
let encrypt;
let decrypt;




console.log("Der Verschlüsselungscode lautet");
 encrypt = require("./encrypt.js");
encrypted = encrypt(plaintext, passwort);

console.log("");

console.log("Der entschlüsselte Code lautet:");
 decrypt = require("./decrypt.js");
decrypt(encrypted, passwort);