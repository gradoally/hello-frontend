"use client"

import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";
import {TonConnectButton} from "@tonconnect/ui-react";

interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home() {

  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData)
    }
  }, [])

  return (
    <main className="p-4">
      {
        userData ? (
          <>
            <TonConnectButton />
            <h1 className="text-2xl text-white font-bold mb-4">User Data</h1>
            <ul className="text-white">
              <li>ID: {userData.id}</li>
              <li>First Name: {userData.first_name}</li>
              <li>Last Name: {userData.last_name}</li>
              <li>Username: {userData.username}</li>
              <li>Language code: {userData.language_code}</li>
              <li>Is Premium: {userData.is_premium ? "Yes" : "No"}</li>
            </ul>
          </>
        ) : (
          <div>Loading ...</div>
        )
      }
    </main>
  );
}
