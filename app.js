import { Crypto } from "./utils/crypto.js";

const crypto = new Crypto(2, 5);

console.log(crypto.encrypt(2));
console.log(crypto.decrypt(8));
