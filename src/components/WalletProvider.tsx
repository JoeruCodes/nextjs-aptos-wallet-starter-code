"use client";

import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { PropsWithChildren } from "react";
import { Network } from "@aptos-labs/ts-sdk";
import { useAutoConnect } from "./AutoConnectProvider";

export const WalletProvider = ({ children }: PropsWithChildren) => {
  const { autoConnect } = useAutoConnect();

  const wallets: any[] = [
    new PetraWallet()
  ];

  return (
    <AptosWalletAdapterProvider
      plugins={wallets}
      autoConnect={autoConnect}
      dappConfig={{ network: Network.DEVNET, aptosConnectDappId: "57fa42a9-29c6-4f1e-939c-4eefa36d9ff5" }}
      onError={(error) => {
        console.log(error)
      }}
    >
      {children}
    </AptosWalletAdapterProvider>
  );
};