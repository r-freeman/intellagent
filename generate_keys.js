const crypto = require('crypto');
const fs = require('fs');

(function generateKeys() {
    const keyPair = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        }
    });

    fs.writeFileSync('./id_rsa_pub.pem', keyPair.publicKey);
    fs.writeFileSync('./id_rsa_priv.pem', keyPair.privateKey);
}());