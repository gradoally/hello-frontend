"use client"
import {AllWallets} from "./wallets";
import {THEME, TonConnectButton, TonConnectUIProvider} from "@tonconnect/ui-react";
export default function Home() {
    return ( <main className="min-w-full min-h-screen flex flex-col items-center bg-black text-white">
        <TonConnectUIProvider manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
            uiPreferences={{theme:THEME.DARK}} 
            walletsListConfiguration={{includeWallets:AllWallets}} 
            actionsConfiguration={{twaReturnUrl:"https://t.me/tonrotatebot/start"}} >
        <TonConnectButton className="mt-5" />
        <h1 className="mt-10">Hello World</h1> </TonConnectUIProvider> </main> ); }
