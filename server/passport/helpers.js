const {pbkdf2Sync, randomBytes} = require("crypto");
const jsonWebToken = require("jsonwebtoken");
const {readFileSync} = require("fs");

const PRIV_KEY = readFileSync("id_rsa_priv.pem", "utf8");

function validatePassword(password, hash, salt) {
    let verify = pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === verify;
}

function generateHashSalt(password) {
    let salt = randomBytes(32).toString('hex');
    let hash = pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

    return {salt, hash};
}

function issueJwt(user) {
    const now = Math.floor(new Date().getTime() / 1000);
    const _id = user._id;

    const payload = {
        sub: _id,
        iat: now
    };

    const token = jsonWebToken.sign(payload, PRIV_KEY, {algorithm: 'RS256'});

    return {token};
}

module.exports = {validatePassword, generateHashSalt, issueJwt}