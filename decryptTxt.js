// the decipher function
const config = require("./config.json")
const crypto = require("crypto");
const fs = require('fs');

// Crypto settings
const algorithm = "aes-256-cbc";
const Securitykey = fs.readFileSync(`./input/SecurityKey.bin`)
const initVector = fs.readFileSync(`./input/initVector.bin`)
const dataToDecrypt = fs.readFileSync(`./input/${config.decrypt.textFileToDecrypt}.txt`, { encoding: 'utf8' })

const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
let decryptedData = decipher.update(dataToDecrypt, "hex", "utf-8");

decryptedData += decipher.final("utf8");
fs.writeFileSync(`./output/${config.decrypt.textOutFileName}.txt`, decryptedData);

console.log(`Decrypted message saved: output/${config.decrypt.textOutFileName}.txt`);
