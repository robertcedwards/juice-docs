---
sidebar_position: 2
title: Subgraph Entities
---

# Entities

- Token
- Cancellation
- Stream
- StreamToSalary
- StreamTransaction
- Withdrawal

Notes:

- Events used for both v1 and v2 contracts include a `cv` (contracts version) property, which allows querying events for a specific contracts version.
- `project.id` is string concatenated from multiple properties. `projectId` represents an integer id of the project.

# Data Preview

You can see sample records of the various entities to faimilarize yourself with [GraphLooker](https://graphlooker.com/explore?uri=https%3A%2F%2Fgateway.thegraph.com%2Fapi%2F7ba063459ec88c336425c0847b9368a1%2Fsubgraphs%2Fid%2FFVmuv3TndQDNd2BWARV8Y27yuKKukryKXPzvAS5E7htC&e=ProtocolLog&efd=protocolLogs).

## ProtocolLog

Description: High level view of the Juicebox Protocol
Applicable Versions: v1.0, v1.1, v2

| Field                  | Type                                     | Description                               |
| ---------------------- | ---------------------------------------- | ----------------------------------------- |
| id                     | ID!                                      | Entity ID (currently "1")                 |
| v1                     | ProtocolV1Log @derivedFrom(field: "log") | Sub-entity for v1 logs                    |
| v2                     | ProtocolV2Log @derivedFrom(field: "log") | Sub-entity for v2 logs                    |
| projectsCount          | BigInt!                                  | Total Project Count for Juicebox          |
| volumeRedeemed         | BigInt!                                  | Total Volume Redeemed across all projects |
| paymentsCount          | Int!                                     | Total Payment Count across all projects   |
| redeemCount            | Int!                                     | Total Redeem Count across all projects    |
| erc20Count             | Int!                                     | Total ERC20's deployed from JBX projects  |
| oldestTrendingPayEvent | PayEvent                                 |                                           |

## ProjectCreateEvent

Description: Entity detailing info about the creation of a project
Applicable Versions: v1.0, v1.1, v2

| Field     | Type     | Description                                       |
| --------- | -------- | ------------------------------------------------- |
| id        | ID!      | Contract Version - Project ID - Transaction Hash  |
| project   | Project! | Sub-entity linking to a project                   |
| projectId | Int!     | projectId expressed as integer                    |
| cv        | String!  | Contract Version of the project                   |
| timestamp | Int!     | Unix timestamp for when the project was created   |
| txHash    | Bytes!   | Transaction hash for when the project was created |
| caller    | Bytes!   | The wallet address that created the project       |

## Project

Description:
Applicable Versions: v1.0, v1.1, v2

| Field                                | Type                                                                   | Description                           |
| ------------------------------------ | ---------------------------------------------------------------------- | ------------------------------------- |
| id                                   | ID!                                                                    |                                       |
| projectId                            | Int!                                                                   |                                       |
| cv                                   | String!                                                                | Contract Version of the project       |
| handle                               | String                                                                 | Project Name                          |
| metadataUri                          | String                                                                 | URI for Project Metadata              |
| metadataDomain                       | BigInt                                                                 |                                       |
| terminal                             | Bytes                                                                  |                                       |
| owner                                | Bytes!                                                                 | Address that owns the project         |
| createdAt                            | Int!                                                                   | Timestamp for when the                |
| totalPaid                            | BigInt!                                                                | Total amount paid to the project      |
| totalRedeemed                        | BigInt!                                                                | Total amount redeemed by the project  |
| currentBalance                       | BigInt!                                                                | Current total balance for the project |
| participants                         | [Participant!]! @derivedFrom(field: "project")                         | Derived field to lead to sub-entity   |
| payEvents                            | [PayEvent!]! @derivedFrom(field: "project")                            | Derived field to lead to sub-entity   |
| mintTokensEvents                     | [MintTokensEvent!]! @derivedFrom(field: "project")                     | Derived field to lead to sub-entity   |
| tapEvents                            | [TapEvent!]! @derivedFrom(field: "project")                            | Derived field to lead to sub-entity   |
| redeemEvents                         | [RedeemEvent!]! @derivedFrom(field: "project")                         | Derived field to lead to sub-entity   |
| printReservesEvents                  | [PrintReservesEvent!]! @derivedFrom(field: "project")                  | Derived field to lead to sub-entity   |
| distributeToPayoutModEvents          | [DistributeToPayoutModEvent!]!@derivedFrom(field: "project")           | Derived field to lead to sub-entity   |
| distributeToTicketModEvents          | [DistributeToTicketModEvent!]!@derivedFrom(field: "project")           | Derived field to lead to sub-entity   |
| deployedERC20s                       | [DeployedERC20Event!]! @derivedFrom(field: "project")                  | Derived field to lead to sub-entity   |
| distributePayoutsEvents              | [DistributePayoutsEvent!]! @derivedFrom(field: "project")              | Derived field to lead to sub-entity   |
| distributeToPayoutSplitEvents        | [DistributeToPayoutSplitEvent!]! @derivedFrom(field: "project")        | Derived field to lead to sub-entity   |
| distributeReservedTokensEvents       | [DistributeReservedTokensEvent!]! @derivedFrom(field: "project")       | Derived field to lead to sub-entity   |
| distributeToReservedTokenSplitEvents | [DistributeToReservedTokenSplitEvent!]! @derivedFrom(field: "project") | Derived field to lead to sub-entity   |
| deployedERC20Events                  | [DeployedERC20Event!]! @derivedFrom(field: "project")                  | Derived field to lead to sub-entity   |
| useAllowanceEvents                   | [UseAllowanceEvent!]! @derivedFrom(field: "project")                   | Derived field to lead to sub-entity   |
| projectEvents                        | [ProjectEvent!]! @derivedFrom(field: "project")                        | Derived field to lead to sub-entity   |
| ethErc20ProjectPayers                | [ETHERC20ProjectPayer!]! @derivedFrom(field: "project")                | Derived field to lead to sub-entity   |

## ENSNode

Description:
Applicable Versions: v2

| Field     | Type | Description |
| --------- | ---- | ----------- |
| id        | ID!  |             |
| projectId | Int  |             |

## Participant

Description: A users participation with a project. This is the M:M link between users:projects
Applicable Versions: v1.0, v1.1, v2

| Field             | Type     | Description                                                    |
| ----------------- | -------- | -------------------------------------------------------------- |
| id                | ID!      | Concatenated string of CV - projectId - walletAddress          |
| project           | Project! | Sub entity leading to the project                              |
| projectId         | Int!     | Project id as an Integer                                       |
| cv                | String!  | Contract Version of the project                                |
| wallet            | Bytes!   | Wallet address                                                 |
| totalPaid         | BigInt!  | Total paid to the project                                      |
| lastPaidTimestamp | Int!     | Time stamp for the most recent payment to the project          |
| balance           | BigInt!  | Balance of the ERC20 in the users wallet (staked and unstaked) |
| stakedBalance     | BigInt!  | Balance of the ERC20 staked in juicebox                        |
| unstakedBalance   | BigInt!  | Balance of the ERC20 that is not staked in juicebox            |

## ProjectEvent

Description:
Applicable Versions: v1.0, v1.1, v2

| Field                               | Type                                | Description                                                     |
| ----------------------------------- | ----------------------------------- | --------------------------------------------------------------- |
| id                                  | ID!                                 |                                                                 |
| project                             | Project!                            | Sub entity leading to the project                               |
| projectId                           | Int!                                | Project id as an Integer                                        |
| cv                                  | String!                             | Contract Version of the project                                 |
| timestamp                           | Int!                                | timestamp of the event                                          |
| payEvent                            | PayEvent                            | Sub-entity to query "project events"                            |
| mintTokensEvent                     | MintTokensEvent                     | Sub-entity to query "mint tokens events"                        |
| tapEvent                            | TapEvent                            | Sub-entity to query "tap events"                                |
| redeemEvent                         | RedeemEvent                         | Sub-entity to query "redeem events"                             |
| printReservesEvent                  | PrintReservesEvent                  | Sub-entity to query "print reserves events"                     |
| distributeToPayoutModEvent          | DistributeToPayoutModEvent          | Sub-entity to query "distribute to payout mod events"           |
| distributeToTicketModEvent          | DistributeToTicketModEvent          | Sub-entity to query "distribute to ticket mod events"           |
| deployedERC20Event                  | DeployedERC20Event                  | Sub-entity to query "deployed ERC20 events"                     |
| projectCreateEvent                  | ProjectCreateEvent                  | Sub-entity to query "project creation events"                   |
| distributePayoutsEvent              | DistributePayoutsEvent              | Sub-entity to query "distribute payout events"                  |
| distributeReservedTokensEvent       | DistributeReservedTokensEvent       | Sub-entity to query "distribute reserved tokens events"         |
| distributeToReservedTokenSplitEvent | DistributeToReservedTokenSplitEvent | Sub-entity to query "distribute to reserved token split events" |
| distributeToPayoutSplitEvent        | DistributeToPayoutSplitEvent        | Sub-entity to query "distribute to payout split events"         |
| useAllowanceEvent                   | UseAllowanceEvent                   | Sub-entity to query "allowance use events"                      |
| deployETHERC20ProjectPayerEvent     | DeployETHERC20ProjectPayerEvent     | Sub-entity to query "deploy ETH ERC20 project payer events"     |

## PayEvent

Description:
Applicable Versions: v1.0, v1.1, v2

| Field            | Type     | Description                                          |
| ---------------- | -------- | ---------------------------------------------------- |
| id               | ID!      |                                                      |
| project          | Project! | Sub entity leading to the project                    |
| projectId        | Int!     | Project id as an Integer                             |
| cv               | String!  | Contract Version of the project                      |
| timestamp        | Int!     |                                                      |
| txHash           | Bytes!   |                                                      |
| caller           | Bytes!   | The wallet address that paid the project             |
| beneficiary      | Bytes!   |                                                      |
| amount           | BigInt!  |                                                      |
| note             | String!  |                                                      |
| feeFromV2Project | Int      | Indicates payment is a fee from project with this ID |

## MintTokensEvent

Description:
Applicable Versions: v1.0, v1.1, v2

| Field       | Type     | Description                           |
| ----------- | -------- | ------------------------------------- |
| id          | ID!      |                                       |
| project     | Project! | Sub entity leading to the project     |
| projectId   | Int!     | Project id as an Integer              |
| cv          | String!  | Contract Version of the project       |
| timestamp   | Int!     |                                       |
| txHash      | Bytes!   |                                       |
| beneficiary | Bytes!   |                                       |
| amount      | BigInt!  |                                       |
| memo        | String!  |                                       |
| caller      | Bytes!   | The wallet address that minted tokens |

## RedeemEvent

Description:
Applicable Versions: v1.0, v1.1, v2

| Field        | Type     | Description                                      |
| ------------ | -------- | ------------------------------------------------ |
| id           | ID!      |                                                  |
| project      | Project! | Sub entity leading to the project                |
| projectId    | Int!     | Project id as an Integer                         |
| cv           | String!  | Contract Version of the project                  |
| timestamp    | Int!     |                                                  |
| txHash       | Bytes!   |                                                  |
| holder       | Bytes!   |                                                  |
| beneficiary  | Bytes!   |                                                  |
| amount       | BigInt!  |                                                  |
| returnAmount | BigInt!  |                                                  |
| caller       | Bytes!   | The wallet address that initiated the redemption |

## DeployedERC20Event

Description:
Applicable Versions: v1.0, v1.1, v2

| Field     | Type     | Description                       |
| --------- | -------- | --------------------------------- |
| id        | ID!      |                                   |
| project   | Project! | Sub entity leading to the project |
| projectId | Int!     | Project id as an Integer          |
| cv        | String!  | Contract Version of the project   |
| timestamp | Int!     |                                   |
| txHash    | Bytes!   |                                   |
| symbol    | String!  |                                   |
| address   | Bytes    | will be empty for v1.x events     |

## ProtocolV1Log

Description:
Applicable Versions: v1.0, v1.1

| Field          | Type         | Description |
| -------------- | ------------ | ----------- |
| id             | ID!          |             |
| log            | ProtocolLog! |             |
| projectsCount  | Int!         |             |
| volumePaid     | BigInt!      |             |
| volumeRedeemed | BigInt!      |             |
| paymentsCount  | Int!         |             |
| redeemCount    | Int!         |             |
| erc20Count     | Int!         |             |

## PrintReservesEvent

Description:
Applicable Versions: v1.0, v1.1

| Field                   | Type                                                                    | Description                                 |
| ----------------------- | ----------------------------------------------------------------------- | ------------------------------------------- |
| id                      | ID!                                                                     |                                             |
| project                 | Project!                                                                | Sub entity leading to the project           |
| projectId               | Int!                                                                    | Project id as an Integer                    |
| timestamp               | Int!                                                                    |                                             |
| txHash                  | Bytes!                                                                  |                                             |
| fundingCycleId          | BigInt!                                                                 |                                             |
| beneficiary             | Bytes!                                                                  |                                             |
| count                   | BigInt!                                                                 |                                             |
| beneficiaryTicketAmount | BigInt!                                                                 |                                             |
| caller                  | Bytes!                                                                  | The wallet address that initiated the event |
| distributions           | [DistributeToTicketModEvent!]!@derivedFrom(field: "printReservesEvent") |                                             |

## DistributeToPayoutModEvent

Description:
Applicable Versions: v1.0, v1.1

| Field             | Type      | Description                                        |
| ----------------- | --------- | -------------------------------------------------- |
| id                | ID!       |                                                    |
| project           | Project!  | Sub entity leading to the project                  |
| projectId         | Int!      | Project id as an Integer                           |
| timestamp         | Int!      |                                                    |
| txHash            | Bytes!    |                                                    |
| fundingCycleId    | BigInt!   |                                                    |
| modProjectId      | Int!      |                                                    |
| modAllocator      | Bytes!    |                                                    |
| modBeneficiary    | Bytes!    |                                                    |
| modPreferUnstaked | Boolean!  |                                                    |
| modCut            | BigInt!   |                                                    |
| caller            | Bytes!    | The wallet address that initiated the distribution |
| tapEvent          | TapEvent! |                                                    |

## TapEvent

Description:
Applicable Versions: v1.0, v1.1

| Field                     | Type                                                           | Description                               |
| ------------------------- | -------------------------------------------------------------- | ----------------------------------------- |
| id                        | ID!                                                            |                                           |
| project                   | Project!                                                       | Sub entity leading to the project         |
| projectId                 | Int!                                                           | Project id as an Integer                  |
| timestamp                 | Int!                                                           |                                           |
| txHash                    | Bytes!                                                         |                                           |
| fundingCycleId            | BigInt!                                                        |                                           |
| beneficiary               | Bytes!                                                         |                                           |
| amount                    | BigInt!                                                        |                                           |
| currency                  | BigInt!                                                        |                                           |
| netTransferAmount         | BigInt!                                                        |                                           |
| beneficiaryTransferAmount | BigInt!                                                        |                                           |
| govFeeAmount              | BigInt!                                                        |                                           |
| caller                    | Bytes!                                                         | The wallet address that initiated the tap |
| distributions             | [DistributeToPayoutModEvent!]! @derivedFrom(field: "tapEvent") |                                           |

## DistributeToTicketModEvent

Description:
Applicable Versions: v1.0, v1.1

| Field              | Type                | Description                                        |
| ------------------ | ------------------- | -------------------------------------------------- |
| id                 | ID!                 |                                                    |
| project            | Project!            | Sub entity leading to the project                  |
| projectId          | Int!                | Project id as an Integer                           |
| timestamp          | Int!                |                                                    |
| txHash             | Bytes!              |                                                    |
| fundingCycleId     | BigInt!             |                                                    |
| modBeneficiary     | Bytes!              |                                                    |
| modPreferUnstaked  | Boolean!            |                                                    |
| modCut             | BigInt!             |                                                    |
| caller             | Bytes!              | The wallet address that initiated the distribution |
| printReservesEvent | PrintReservesEvent! |                                                    |

## ProtocolV2Log

Description:
Applicable Versions: v2

| Field          | Type         | Description |
| -------------- | ------------ | ----------- |
| id             | ID!          |             |
| log            | ProtocolLog! |             |
| projectsCount  | Int!         |             |
| volumePaid     | BigInt!      |             |
| volumeRedeemed | BigInt!      |             |
| paymentsCount  | Int!         |             |
| redeemCount    | Int!         |             |
| erc20Count     | Int!         |             |

## DistributePayoutsEvent

Description:

Applicable Versions: v2

| Field                         | Type                                                                          | Description                                        |
| ----------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------- |
| id                            | ID!                                                                           |                                                    |
| project                       | Project!                                                                      | Sub entity leading to the project                  |
| projectId                     | Int!                                                                          | Project id as an Integer                           |
| timestamp                     | Int!                                                                          |                                                    |
| txHash                        | Bytes!                                                                        |                                                    |
| fundingCycleConfiguration     | BigInt!                                                                       |                                                    |
| fundingCycleNumber            | Int!                                                                          |                                                    |
| beneficiary                   | Bytes!                                                                        |                                                    |
| amount                        | BigInt!                                                                       |                                                    |
| distributedAmount             | BigInt!                                                                       |                                                    |
| fee                           | BigInt!                                                                       |                                                    |
| beneficiaryDistributionAmount | BigInt!                                                                       |                                                    |
| memo                          | String!                                                                       |                                                    |
| caller                        | Bytes!                                                                        | The wallet address that initiated the distribution |
| splitDistributions            | [DistributeToPayoutSplitEvent!]!@derivedFrom(field: "distributePayoutsEvent") |                                                    |

## DistributeToPayoutSplitEvent

Description:

Applicable Versions: v2

| Field                  | Type                    | Description                                              |
| ---------------------- | ----------------------- | -------------------------------------------------------- |
| id:                    | ID!                     |                                                          |
| project                | Project!                | Sub entity leading to the project                        |
| projectId              | Int!                    | Project id as an Integer                                 |
| timestamp              | Int!                    |                                                          |
| txHash                 | Bytes!                  |                                                          |
| domain                 | BigInt!                 |                                                          |
| group                  | BigInt!                 |                                                          |
| amount                 | BigInt!                 |                                                          |
| caller                 | Bytes!                  | The wallet address that initiated the distribution split |
| distributePayoutsEvent | DistributePayoutsEvent! |                                                          |
| preferClaimed          | Boolean!                |                                                          |
| preferAddToBalance     | Boolean!                |                                                          |
| percent                | Int!                    |                                                          |
| splitProjectId         | Int!                    |                                                          |
| beneficiary            | Bytes!                  |                                                          |
| lockedUntil            | Int!                    |                                                          |
| allocator              | Bytes!                  |                                                          |

## DistributeReservedTokensEvent

Description:

Applicable Versions: v2

| Field                 | Type                                                                                      | Description                                                |
| --------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| id                    | ID!                                                                                       |                                                            |
| project               | Project!                                                                                  | Sub entity leading to the project                          |
| projectId             | Int!                                                                                      | Project id as an Integer                                   |
| timestamp             | Int!                                                                                      |                                                            |
| txHash                | Bytes!                                                                                    |                                                            |
| fundingCycleNumber    | Int!                                                                                      |                                                            |
| beneficiary           | Bytes!                                                                                    |                                                            |
| tokenCount            | BigInt!                                                                                   |                                                            |
| beneficiaryTokenCount | BigInt!                                                                                   |                                                            |
| memo                  | String!                                                                                   |                                                            |
| caller                | Bytes!                                                                                    | The wallet address that initiated the reserve distribution |
| splitDistributions    | [DistributeToReservedTokenSplitEvent!]!@derivedFrom(field"distributeReservedTokensEvent") |                                                            |

## DistributeToReservedTokenSplitEvent

Description:

Applicable Versions: v2

| Field                         | Type                           | Description                       |
| ----------------------------- | ------------------------------ | --------------------------------- |
| id                            | ID!                            |                                   |
| project                       | Project!                       | Sub entity leading to the project |
| projectId                     | Int!                           | Project id as an Integer          |
| timestamp                     | Int!                           |                                   |
| txHash                        | Bytes!                         |                                   |
| tokenCount                    | BigInt!                        |                                   |
| caller                        | Bytes!                         |                                   |
| distributeReservedTokensEvent | DistributeReservedTokensEvent! |                                   |
| preferClaimed:                | Boolean!                       | Split struct properties           |
| percent                       | Int!                           | Split struct properties           |
| splitProjectId                | Int!                           | Split struct properties           |
| beneficiary                   | Bytes!                         | Split struct properties           |
| lockedUntil                   | Int!                           | Split struct properties           |
| allocator                     | Bytes!                         | Split struct properties           |

## UseAllowanceEvent

Description:

Applicable Versions: v2

| Field                     | Type     | Description                                     |
| ------------------------- | -------- | ----------------------------------------------- |
| id                        | ID!      |                                                 |
| project                   | Project! | Sub entity leading to the project               |
| projectId                 | Int!     | Project id as an Integer                        |
| timestamp                 | Int!     |                                                 |
| txHash                    | Bytes!   |                                                 |
| fundingCycleConfiguration | BigInt!  |                                                 |
| fundingCycleNumber        | Int!     |                                                 |
| beneficiary               | Bytes!   |                                                 |
| amount                    | BigInt!  |                                                 |
| distributedAmount         | BigInt!  |                                                 |
| netDistributedamount      | BigInt!  |                                                 |
| memo                      | String!  |                                                 |
| caller                    | Bytes!   | The wallet address that initiated the allowance |

## DeployETHERC20ProjectPayerEvent

Description:

Applicable Versions: V2

| Field               | Type     | Description                                |
| ------------------- | -------- | ------------------------------------------ |
| id                  | ID!      |                                            |
| project             | Project! | Sub entity leading to the project          |
| projectId           | Int!     | Project id as an Integer                   |
| timestamp           | Int!     |                                            |
| txHash              | Bytes!   |                                            |
| address             | Bytes!   |                                            |
| beneficiary         | Bytes!   |                                            |
| preferClaimedTokens | Boolean! |                                            |
| preferAddToBalance  | Boolean! |                                            |
| directory           | Bytes!   |                                            |
| owner               | Bytes!   |                                            |
| memo                | String   |                                            |
| metadata            | Bytes    |                                            |
| caller              | Bytes!   | The wallet address that deployed the ERC20 |

## ETHERC20ProjectPayer

Description:

Applicable Versions: V2

| Field               | Type     | Description                       |
| ------------------- | -------- | --------------------------------- |
| id:                 | ID!      |                                   |
| project             | Project! | Sub entity leading to the project |
| projectId           | Int!     | Project id as an Integer          |
| address             | Bytes!   |                                   |
| beneficiary         | Bytes!   |                                   |
| preferClaimedTokens | Boolean! |                                   |
| preferAddToBalance  | Boolean! |                                   |
| directory           | Bytes!   |                                   |
| owner               | Bytes!   |                                   |
| memo                | String   |                                   |
| metadata            | Bytes    |                                   |

## VeNftToken

Description:

Applicable Versions: V2

| Field                    | Type         | Description |
| ------------------------ | ------------ | ----------- |
| id                       | ID!          |             |
| tokenId                  | Int!         |             |
| tokenUri                 | String!      |             |
| createdAt                | Int!         |             |
| redeemedAt               | Int          |             |
| owner                    | Bytes!       |             |
| participant              | Participant! |             |
| lockAmount               | BigInt!      |             |
| lockEnd                  | Int!         |             |
| lockDuration             | Int!         |             |
| lockUseJbToken           | Boolean!     |             |
| lockAllowPublicExtension | Boolean!     |             |
| unlockedAt               | Int!         |             |
