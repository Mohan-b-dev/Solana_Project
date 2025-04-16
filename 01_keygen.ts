import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log(`This is the Public Key: ${keypair.publicKey.toBase58()}`);
console.log(`This is the Secret Key: ${keypair.secretKey}`);
console.log(`This is the Keypair: ${keypair}`);
console.log(`This is the Keypair finished ---------------------------`);
