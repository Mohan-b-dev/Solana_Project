import { getExplorerLink, getKeypairFromEnvironment } from "@solana-developers/helpers";
import { createMint } from "@solana/spl-token";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import "dotenv/config";

const KeyPair = process.env.KEYPAIR || null;

if (!KeyPair) {
  console.log("please provide a keypair");
  console.log("❌ Failed");
  process.exit(1);
}

const connection = new Connection(clusterApiUrl("devnet"));
const OWNER = getKeypairFromEnvironment("KEYPAIR");

const token = await createMint(connection, OWNER, OWNER.publicKey, null, 2);
const link = getExplorerLink('address', token.toString(), 'devnet')

console.log(`✅ Done! created a token${link}`);

console.log(`✅ Token created: ${token.toString()}`);
