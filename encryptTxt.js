const config = require("./config.json")
const fs = require('fs');
const inFileText = fs.readFileSync(`./input/${config.encrypt.textFileToEncryptPath}.txt`, { encoding: 'utf8' });

// crypto module
const crypto = require("crypto");

const algorithm = "aes-256-cbc";

// generate 16 bytes of random data
const initVector = crypto.randomBytes(16);

// secret key generate 32 bytes of random data
const Securitykey = crypto.randomBytes(32);

// the cipher function
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

// encrypt the message
// input encoding
// output encoding
let encryptedData = cipher.update(inFileText, "utf-8", "hex");

encryptedData += cipher.final("hex");

// Write out
if (!fs.existsSync('./output')){
    fs.mkdirSync('./output');
}
fs.writeFileSync(`./output/${config.encrypt.textOutFileName}.txt`, encryptedData);
fs.writeFileSync(`./output/SecurityKey.bin`, Securitykey);
fs.writeFileSync(`./output/initVector.bin`, initVector);


console.log(`Message successfully encrypted: output/${config.encrypt.textOutFileName}.txt`);

