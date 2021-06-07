const EC = require('elliptic').ec;


// You can use any elliptic curve you want
const ec = new EC('secp256k1');

// Generate a new key pair and convert them to hex-strings
const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const  privateKey = key.getPrivate('hex');


export class Key{
       constructor(){
        this.publicKey = publicKey;
        this.privateKey = privateKey;
       }
}