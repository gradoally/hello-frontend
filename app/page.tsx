"use client"
import {AllWallets} from "./wallets";
import {THEME, TonConnectButton, TonConnectUIProvider} from "@tonconnect/ui-react";
export default function Home() {
    return ( <main className="mt-5 min-w-full flex flex-col items-center bg-black">
        <TonConnectUIProvider manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
            uiPreferences={{theme:THEME.DARK}} 
            walletsListConfiguration={{includeWallets:AllWallets}} 
            actionsConfiguration={{twaReturnUrl:"https://t.me/tonrotatebot/start"}} >
        <TonConnectButton />
        <h1 className="mt-10">Hello World</h1> </TonConnectUIProvider> </main> ); }
