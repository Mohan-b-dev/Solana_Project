import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const address =new PublicKey ("3KvNH5UodtKPfVChrKPPhANc7D84VP22ExaoxTJ8p8j1");

const balance = await connection.getBalance(address);
const solbalance = balance / LAMPORTS_PER_SOL;

console.log(`The balance of the address ${address} is ${balance} lamports or ${solbalance} SOL`);
console.log('✅ Done!');

