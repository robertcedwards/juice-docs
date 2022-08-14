---
title: Gnosis Safe
sidebar_position: 2
---

# Using Gnosis Safe With Juicebox

## What's Gnosis Safe?

Most Ethereum wallets are secured with a private key, which can be transformed into a 12 word “seed phrase”. If that private key is compromised in any way, the funds can be stolen.

Gnosis Safe is a smart contract wallet running on Ethereum that requires a minimum number of people to approve a transaction before it can occur (M-of-N). If for example you have 3 main stakeholders in your business, you are able to set up the wallet to require approval from all 3 people before the transaction is sent. This assures that no single person could compromise the funds.

## Why Use a Multisig?

A multisig (like Gnosis Safe) protects you and your community.
- If your wallet becomes compromised, the attacker cannot take over your Juicebox project.
- You (or another Safe signer) could not unilaterally execute malicious transactions affecting your Juicebox project.

A multisig is an extra shield to protect your projects from harmful or faulty reconfigurations. It does come with risks though—if you cannot meet the Safe's threshold, you will lose access to everything inside of it.

## Deploy a Gnosis Safe

1. Visit [gnosis-safe.io](https://gnosis-safe.io/) and click `Open app` in the upper right-hand corner.
2. Connect your wallet and click `+ Create new Safe`.
3. Click `Continue` to create your Safe on Ethereum, and click `Continue` again once you have named your Safe.
4. When configuring Owners and Confirmations, you should have:
  - More than one owner.
  - A threshold higher than one.
  - A threshold lower than the number of owners. Therefore, even if one owner loses access to their account, the Safe can still be accessed.
5. Click `Create` and confirm the transaction to deploy your Safe. Then click `Get Started`.

## Send your Juicebox Project to a Safe

Juicebox Projects are controlled by a [Juicebox NFT](https://etherscan.io/token/0xd8b4359143eda5b2d763e127ed27c77addbc47d3), held in the wallet you used to deploy your project. To transfer your project to a multisig, send your `Juicebox Projects` NFT to the multisig's address using a tool like [gem.xyz/send](https://www.gem.xyz/send). You can find your multisig's address on [gnosis-safe.io](https://gnosis-safe.io/).

## Deploy your Juicebox Project from a Safe

To deploy your Juicebox Project from a Gnosis Safe, open the `Apps` page in the left-hand menu on [gnosis-safe.io/](https://gnosis-safe.io/). Search for the Juicebox app and open it. From there, you can follow standard [creation guides](/user/)—instead of deploying your project at the end, a transaction to deploy your project will be queued, and other multisig owners will have to sign that transaction.

Someone will have to pay gas fees and execute the transaction once it reaches the required number of signatures.
