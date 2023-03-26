/** @format */

import { config } from "@onflow/fcl";



config()
  .put("app.detail.title", "Crypto Card Shop")
  .put(
    "app.detail.icon",
    "https://clipground.com/images/placeholder-logo-6.png"
  )
  .put("accessNode.api", "https://rest-mainnet.onflow.org")
  .put("discovery.wallet", "https://fcl-discovery.onflow.org/authn");
  .put("discovery.authn.endpoint", "https://fcl-discovery.onflow.org/testnet/authn")
  .put( "discovery.authn.include",  [
    "0xead892083b3e2c6c", // Dapper Wallet
  ])
//.put("discovery.wallet", "http://localhost:5173/fcl/authn");
//  .put("discovery.wallet", "https://fcl-discovery.onflow.org/authn")
//.put("discovery.wallet", "https://fcl-discovery.onflow.org/api/authn");
//.put('accessNode.api', 'https://rest-mainnet.onflow.org')
// .put('accessNode.api', 'http://localhost:8888')
