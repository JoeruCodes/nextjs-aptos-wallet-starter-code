# Getting Started

1. **Install Dependencies**

   Run the following command to install the required dependencies:

   ```bash
   npm install

# Usage
## Integrate the Wallet Selector

  To enable users to connect their wallet, include the WalletSelector component and its associated CSS in your application:
   ```jsx
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

   ```
  

## Access the Wallet

Use the useWallet hook to access wallet functionality within your React component:
   ```jsx
  export default function Home() {
    const wallet = useWallet();
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <WalletSelector />
      </main>
    );
  }

   ```


