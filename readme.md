# Crypto Encryption

## Encryption
1. Save your file \<file-to-encrypt>.txt in root/input/
2. Edit encrypt section of root/config.json 
3. Execute
```
node encryptTxt.js
```

## Decryption
1. Save the following files in root/input/
```
<file-to-encrypt>.txt
initVector.bin
SecurityKey.bin
```
2. Edit decrypt section of root/config.json
3. Execute
```
node decrpytTxt.js
```