---
title: Snapshot
sidebar_position: 1
---

# Using Snapshot With Juicebox

## WTF is Snapshot?

From the [Snapshot Docs](https://docs.snapshot.org/):
> Snapshot is a decentralized voting system. It provides flexibility on how voting power is calculated for a vote. Snapshot supports various voting types to cater to the needs of organizations. Creating proposals and voting on Snapshot is user-friendly and does not cost gas as the process is performed off-chain.
>
> In short, Snapshot is an off-chain gasless multi-governance client with easy to verify and hard to contest results.

You can easily set up [Snapshot](https://snapshot.org/) voting with a Juicebox project token by using the strategies below. Make sure you follow the TODO notes, and delete the notes once you do. If you need help customizing your parameters, send a message in the [Juicebox Discord](https://discord.gg/juicebox).

## Strategies For v2 Projects

### Project Token Voting

*This strategy takes both claimed ERC-20s and unclaimed tokens into account.*

1. Use a `contract-call` strategy.
2. Use these parameters:

```json
{
	"args": [
		"%{address}",
		"0x01" // TODO: REPLACE WITH YOUR PROJECT ID HEX ENCODED.
	],
	"symbol": "JBX", // TODO: REPLACE WITH YOUR TOKEN SYMBOL.
	"address": "0xCBB8e16d998161AdB20465830107ca298995f371",
	"decimals": 18,
	"methodABI": {
	"name": "balanceOf",
	"type": "function",
	"inputs": [
		{
			"name": "",
			"type": "address",
			"internalType": "address"
		},
		{
			"name": "",
			"type": "uint256",
			"internalType": "uint256"
		}
	],
	"outputs": [
		{
			"name": "",
			"type": "uint256",
			"internalType": "uint256"
		}
	],
	"stateMutability": "view"
	}
}
```

### Project Token Delegation

*This strategy takes both claimed ERC-20s and unclaimed tokens into account.*

1. Use a `delegation` strategy.
2. Use these parameters:

```json
{
  "symbol": "JBX (delegated)", // TODO: REPLACE WITH YOUR TOKEN SYMBOL.
  "strategies": [
    {
      "name": "contract-call",
      "params": {
        "args": [
          "%{address}",
          "0x01" // TODO: REPLACE WITH YOUR PROJECT ID HEX ENCODED.
        ],
        "symbol": "JBX", // TODO: REPLACE WITH YOUR TOKEN SYMBOL.
        "address": "0xCBB8e16d998161AdB20465830107ca298995f371",
        "decimals": 18,
        "methodABI": {
          "name": "balanceOf",
          "type": "function",
          "inputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        }
      }
    }
  ]
}
```

## Strategies For v1 Projects

### Project Token Voting
1. Choose "contract-call".
2. Stick this in 

```json
{
	"args": [
		"%{address}",
		"0x01" // TODO: REPLACE WITH YOUR PROJECT ID HEX ENCODED.
	],
	"symbol": "JBX", // TODO: REPLACE WITH YOUR TOKEN SYMBOL.
	"address": "0xee2eBCcB7CDb34a8A822b589F9E8427C24351bfc",
	"decimals": 18,
	"methodABI": {
	"name": "balanceOf",
	"type": "function",
	"inputs": [
		{
			"name": "",
			"type": "address",
			"internalType": "address"
		},
		{
			"name": "",
			"type": "uint256",
			"internalType": "uint256"
		}
	],
	"outputs": [
		{
			"name": "",
			"type": "uint256",
			"internalType": "uint256"
		}
	],
	"stateMutability": "view"
	}
}
```

### Project Token Delegation

*This strategy takes both claimed ERC-20s and unclaimed tokens into account.*

1. Use a `delegation` strategy.
2. Use these parameters:

```json
{
  "symbol": "JBX (delegated)", // TODO: REPLACE WITH YOUR TOKEN SYMBOL.
  "strategies": [
    {
      "name": "contract-call",
      "params": {
        "args": [
          "%{address}",
          "0x01" // TODO: REPLACE WITH YOUR PROJECT ID HEX ENCODED.
        ],
        "symbol": "JBX", // TODO: REPLACE WITH YOUR TOKEN SYMBOL.
        "address": "0xee2eBCcB7CDb34a8A822b589F9E8427C24351bfc",
        "decimals": 18,
        "methodABI": {
          "name": "balanceOf",
          "type": "function",
          "inputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        }
      }
    }
  ]
}
```
