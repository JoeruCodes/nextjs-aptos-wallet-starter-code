"use client"
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design"; // wallet selector
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css"; // css for the wallet button 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WalletSelector />
    </main>
  );
}
