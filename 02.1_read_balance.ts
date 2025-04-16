import {
  getKeypairFromEnvironment,
  getKeypairFromFile,
} from "@solana-developers/helpers";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";
import "dotenv/config";

const KeyPair = process.env.KEYPAIR || null;

if (!KeyPair) {
  console.log("❌ KEYPAIR not found in environment variables.");
  process.exit(1);
}

const connection = new Connection(clusterApiUrl("devnet"));
const address = getKeypairFromEnvironment("KEYPAIR");

const balance = await connection.getBalance(address.publicKey);
const solbalance = balance / LAMPORTS_PER_SOL;
console.log(`the balance of ${address.publicKey} is ${solbalance} SOL`);
console.log("✅ Done!");

