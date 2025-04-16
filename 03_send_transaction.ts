import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  clusterApiUrl,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import "dotenv/config";

// Optional: Patch fetch for older Node versions
import fetch from "node-fetch";
if (!globalThis.fetch) globalThis.fetch = fetch;

(async () => {
  const KeyPair = process.env.KEYPAIR || null;

  if (!KeyPair) {
    console.log("❌ KEYPAIR not found in environment variables.");
    process.exit(1);
  }

  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const sender = getKeypairFromEnvironment("KEYPAIR");

  // Replace with a valid wallet address
  const receiveraddress = new PublicKey(
    "AddressLookupTab1e1111111111111111111111111"
  );

  const amount = 1; // 0.01 SOL
  const transaction = new Transaction();

  const transferInstruction = SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey: receiveraddress,
    lamports: amount * LAMPORTS_PER_SOL,
  });

  transaction.add(transferInstruction);

  try {
    const signature = await sendAndConfirmTransaction(connection, transaction, [
      sender,
    ]);
    console.log(
      `✅ Tx successful: Sent ${amount} SOL to ${receiveraddress.toBase58()}`
    );
    console.log(`🔗 Transaction Signature: ${signature}`);
  } catch (err) {
    console.error("❌ Transaction failed:", err);
  }
})();
