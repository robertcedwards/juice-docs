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

Description: type @entity

| Field          | Type                                     | Description |
| -------------- | ---------------------------------------- | ----------- |
| id             | ID!                                      |             |
| v1             | ProtocolV1Log @derivedFrom(field: "log") |             |
| v2             | ProtocolV2Log @derivedFrom(field: "log"  |             |
| projectsCount  | BigInt!                                  |             |
| volumeRedeemed | BigInt!                                  |             |
| paymentsCount  | Int!                                     |             |
| redeemCount    | Int!                                     |             |
| erc20Count     | Int!                                     |             |

## ProjectCreateEvent

Description: v1.0, v1.1, v2

| Field     | Type     | Description |
| --------- | -------- | ----------- |
| id        | ID!      |             |
| project   | Project! |             |
| projectId | Int!     |             |
| cv        | String!  |             |
| timestamp | Int!     |             |
| txHash    | Bytes!   |             |
| caller    | Bytes!   |             |

## Project

Description: v1.0, v1.1, v2

| Field          | Type    | Description |
| -------------- | ------- | ----------- |
| id             | ID!     | test        |
| projectId      | Int!    |             |
| cv             | String! |             |
| handle         | String  |             |
| metadataUri    | String  |             |
| metadataDomain | BigInt  |             |
| terminal       | Bytes   |             |
| owner          | Bytes!  |             |
| createdAt      | BigInt! |             |
| totalPaid      | BigInt! |             |
| totalRedeemed  | BigInt! |             |
| currentBalance | BigInt! |             |

## Derived fields

| Field                                | Type                                                                   | Description |
| ------------------------------------ | ---------------------------------------------------------------------- | ----------- |
| participants                         | [Participant!]! @derivedFrom(field: "project")                         |             |
| payEvents                            | [PayEvent!]! @derivedFrom(field: "project")                            |             |
| mintTokensEvents                     | [MintTokensEvent!]! @derivedFrom(field: "project")                     |             |
| tapEvents                            | [TapEvent!]! @derivedFrom(field: "project")                            |             |
| redeemEvents                         | [RedeemEvent!]! @derivedFrom(field: "project")                         |             |
| printReservesEvents                  | [PrintReservesEvent!]! @derivedFrom(field: "project")                  |             |
| distributeToPayoutModEvents          | [DistributeToPayoutModEvent!]!@derivedFrom(field: "project")           |             |
| distributeToTicketModEvents          | [DistributeToTicketModEvent!]!@derivedFrom(field: "project")           |             |
| deployedERC20s                       | [DeployedERC20Event!]! @derivedFrom(field: "project")                  |             |
| distributePayoutsEvents              | [DistributePayoutsEvent!]! @derivedFrom(field: "project")              |             |
| distributeToPayoutSplitEvents        | [DistributeToPayoutSplitEvent!]! @derivedFrom(field: "project")        |             |
| distributeReservedTokensEvents       | [DistributeReservedTokensEvent!]! @derivedFrom(field: "project")       |             |
| distributeToReservedTokenSplitEvents | [DistributeToReservedTokenSplitEvent!]! @derivedFrom(field: "project") |             |
| deployedERC20Events                  | [DeployedERC20Event!]! @derivedFrom(field: "project")                  |             |
| useAllowanceEvents                   | [UseAllowanceEvent!]! @derivedFrom(field: "project")                   |             |
| projectEvents                        | [ProjectEvent!]! @derivedFrom(field: "project")                        |             |
| ethErc20ProjectPayers                | [ETHERC20ProjectPayer!]! @derivedFrom(field: "project")                |             |

## ENSNode

Description: v2

| Field     | Type | Description |
| --------- | ---- | ----------- |
| id        | ID!  |             |
| projectId | Int  |             |

## Participant

Description: v1.0, v1.1, v2

| Field             | Type     | Description |
| ----------------- | -------- | ----------- |
| id                | ID!      |             |
| project           | Project! |             |
| projectId         | Int!     |             |
| cv                | String!  |             |
| wallet            | Bytes!   |             |
| totalPaid         | BigInt!  |             |
| lastPaidTimestamp | Int!     |             |
| balance           | BigInt!  |             |
| stakedBalance     | BigInt!  |             |
| unstakedBalance   | BigInt!  |             |

## ProjectEvent

Description: v1.0, v1.1, v2

| Field     | Type     | Description |
| --------- | -------- | ----------- |
| id        | ID!      |             |
| project   | Project! |             |
| projectId | Int!     |             |
| cv        | String!  |             |
| timestamp | Int!     |             |

## Conditional properties. Only one of these properties should exist. This is a helper entity that makes it possible to query all "project events" for a project.

| Field                               | Type                                | Description |
| ----------------------------------- | ----------------------------------- | ----------- |
| payEvent                            | PayEvent                            |             |
| mintTokensEvent                     | MintTokensEvent                     |             |
| tapEvent                            | TapEvent                            |             |
| redeemEvent                         | RedeemEvent                         |             |
| printReservesEvent                  | PrintReservesEvent                  |             |
| distributeToPayoutModEvent          | DistributeToPayoutModEvent          |             |
| distributeToTicketModEvent          | DistributeToTicketModEvent          |             |
| deployedERC20Event                  | DeployedERC20Event                  |             |
| projectCreateEvent                  | ProjectCreateEvent                  |             |
| distributePayoutsEvent              | DistributePayoutsEvent              |             |
| distributeReservedTokensEvent       | DistributeReservedTokensEvent       |             |
| distributeToReservedTokenSplitEvent | DistributeToReservedTokenSplitEvent |             |
| distributeToPayoutSplitEvent        | DistributeToPayoutSplitEvent        |             |
| useAllowanceEvent                   | UseAllowanceEvent                   |             |
| deployETHERC20ProjectPayerEvent     | DeployETHERC20ProjectPayerEvent     |             |

## PayEvent

Description: v1.0, v1.1, v2

| Field            | Type                                                       | Description |
| ---------------- | ---------------------------------------------------------- | ----------- |
| id               | ID!                                                        |             |
| project          | Project!                                                   |             |
| projectId        | Int!                                                       |             |
| cv               | String!                                                    |             |
| timestamp        | Int!                                                       |             |
| txHash           | Bytes!                                                     |             |
| caller           | Bytes!                                                     |             |
| beneficiary      | Bytes!                                                     |             |
| amount           | BigInt!                                                    |             |
| note             | String!                                                    |             |
| feeFromV2Project | Int # Indicates payment is a fee from project with this ID |             |

## MintTokensEvent

Description: v1.0, v1.1, v2

| Field       | Type     | Description |
| ----------- | -------- | ----------- |
| id          | ID!      |             |
| project     | Project! |             |
| projectId   | Int!     |             |
| cv          | String!  |             |
| timestamp   | Int!     |             |
| txHash      | Bytes!   |             |
| beneficiary | Bytes!   |             |
| amount      | BigInt!  |             |
| memo        | String!  |             |
| caller      | Bytes!   |             |

## RedeemEvent

Description: v1.0, v1.1, v2

| Field        | Type     | Description |
| ------------ | -------- | ----------- |
| id           | ID!      |             |
| project      | Project! |             |
| projectId    | Int!     |             |
| cv           | String!  |             |
| timestamp    | Int!     |             |
| txHash       | Bytes!   |             |
| holder       | Bytes!   |             |
| beneficiary  | Bytes!   |             |
| amount       | BigInt!  |             |
| returnAmount | BigInt!  |             |
| caller       | Bytes!   |             |

## DeployedERC20Event

Description: v1.0, v1.1, v2

| Field     | Type                                  | Description |
| --------- | ------------------------------------- | ----------- |
| id        | ID!                                   |             |
| project   | Project!                              |             |
| projectId | Int!                                  |             |
| cv        | String!                               |             |
| timestamp | Int!                                  |             |
| txHash    | Bytes!                                |             |
| symbol    | String!                               |             |
| address   | Bytes # will be empty for v1.x events |             |

## ProtocolV1Log

Description: v1.0, v1.1

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

Description: v1.0, v1.1

| Field                   | Type                                                                    | Description |
| ----------------------- | ----------------------------------------------------------------------- | ----------- |
| id                      | ID!                                                                     |             |
| project                 | Project!                                                                |             |
| projectId               | Int!                                                                    |             |
| timestamp               | Int!                                                                    |             |
| txHash                  | Bytes!                                                                  |             |
| fundingCycleId          | BigInt!                                                                 |             |
| beneficiary             | Bytes!                                                                  |             |
| count                   | BigInt!                                                                 |             |
| beneficiaryTicketAmount | BigInt!                                                                 |             |
| caller                  | Bytes!                                                                  |             |
| distributions           | [DistributeToTicketModEvent!]!@derivedFrom(field: "printReservesEvent") |             |

## DistributeToPayoutModEvent

Description: v1.0, v1.1

| Field             | Type      | Description |
| ----------------- | --------- | ----------- |
| id                | ID!       |             |
| project           | Project!  |             |
| projectId         | Int!      |             |
| timestamp         | Int!      |             |
| txHash            | Bytes!    |             |
| fundingCycleId    | BigInt!   |             |
| modProjectId      | Int!      |             |
| modAllocator      | Bytes!    |             |
| modBeneficiary    | Bytes!    |             |
| modPreferUnstaked | Boolean!  |             |
| modCut            | BigInt!   |             |
| caller            | Bytes!    |             |
| tapEvent          | TapEvent! |             |

## TapEvent

Description: v1.0, v1.1

| Field                     | Type                                                           | Description |
| ------------------------- | -------------------------------------------------------------- | ----------- |
| id                        | ID!                                                            |             |
| project                   | Project!                                                       |             |
| projectId                 | Int!                                                           |             |
| timestamp                 | Int!                                                           |             |
| txHash                    | Bytes!                                                         |             |
| fundingCycleId            | BigInt!                                                        |             |
| beneficiary               | Bytes!                                                         |             |
| amount                    | BigInt!                                                        |             |
| currency                  | BigInt!                                                        |             |
| netTransferAmount         | BigInt!                                                        |             |
| beneficiaryTransferAmount | BigInt!                                                        |             |
| govFeeAmount              | BigInt!                                                        |             |
| caller                    | Bytes!                                                         |             |
| distributions             | [DistributeToPayoutModEvent!]! @derivedFrom(field: "tapEvent") |             |

## DistributeToTicketModEvent

Description: v1.0, v1.1

| Field              | Type                | Description |
| ------------------ | ------------------- | ----------- |
| id                 | ID!                 |             |
| project            | Project!            |             |
| projectId          | Int!                |             |
| timestamp          | Int!                |             |
| txHash             | Bytes!              |             |
| fundingCycleId     | BigInt!             |             |
| modBeneficiary     | Bytes!              |             |
| modPreferUnstaked  | Boolean!            |             |
| modCut             | BigInt!             |             |
| caller             | Bytes!              |             |
| printReservesEvent | PrintReservesEvent! |             |

## ProtocolV2Log

Description: v2

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

Description: v2

| Field                         | Type                                                                          | Description |
| ----------------------------- | ----------------------------------------------------------------------------- | ----------- |
| id                            | ID!                                                                           |             |
| project                       | Project!                                                                      |             |
| projectId                     | Int!                                                                          |             |
| timestamp                     | Int!                                                                          |             |
| txHash                        | Bytes!                                                                        |             |
| fundingCycleConfiguration     | BigInt!                                                                       |             |
| fundingCycleNumber            | Int!                                                                          |             |
| beneficiary                   | Bytes!                                                                        |             |
| amount                        | BigInt!                                                                       |             |
| distributedAmount             | BigInt!                                                                       |             |
| fee                           | BigInt!                                                                       |             |
| beneficiaryDistributionAmount | BigInt!                                                                       |             |
| memo                          | String!                                                                       |             |
| caller                        | Bytes!                                                                        |             |
| splitDistributions            | [DistributeToPayoutSplitEvent!]!@derivedFrom(field: "distributePayoutsEvent") |             |

## DistributeToPayoutSplitEvent

Description: v2

| Field                  | Type                    | Description |
| ---------------------- | ----------------------- | ----------- |
| id:                    | ID!                     |             |
| project                | Project!                |             |
| projectId              | Int!                    |             |
| timestamp              | Int!                    |             |
| txHash                 | Bytes!                  |             |
| domain                 | BigInt!                 |             |
| group                  | BigInt!                 |             |
| amount                 | BigInt!                 |             |
| caller                 | Bytes!                  |             |
| distributePayoutsEvent | DistributePayoutsEvent! |             |
| preferClaimed          | Boolean!                |             |
| preferAddToBalance     | Boolean!                |             |
| percent                | Int!                    |             |
| splitProjectId         | Int!                    |             |
| beneficiary            | Bytes!                  |             |
| lockedUntil            | Int!                    |             |
| allocator              | Bytes!                  |             |

## DistributeReservedTokensEvent

Description: v2

| Field                 | Type                                                                                      | Description |
| --------------------- | ----------------------------------------------------------------------------------------- | ----------- |
| id                    | ID!                                                                                       |             |
| project               | Project!                                                                                  |             |
| projectId             | Int!                                                                                      |             |
| timestamp             | Int!                                                                                      |             |
| txHash                | Bytes!                                                                                    |             |
| fundingCycleNumber    | Int!                                                                                      |             |
| beneficiary           | Bytes!                                                                                    |             |
| tokenCount            | BigInt!                                                                                   |             |
| beneficiaryTokenCount | BigInt!                                                                                   |             |
| memo                  | String!                                                                                   |             |
| caller                | Bytes!                                                                                    |             |
| splitDistributions    | [DistributeToReservedTokenSplitEvent!]!@derivedFrom(field"distributeReservedTokensEvent") |             |

## DistributeToReservedTokenSplitEvent

Description: v2

| Field                         | Type                           | Description |
| ----------------------------- | ------------------------------ | ----------- |
| id                            | ID!                            |             |
| project                       | Project!                       |             |
| projectId                     | Int!                           |             |
| timestamp                     | Int!                           |             |
| txHash                        | Bytes!                         |             |
| tokenCount                    | BigInt!                        |             |
| caller                        | Bytes!                         |             |
| distributeReservedTokensEvent | DistributeReservedTokensEvent! |             |

## Split struct properties below

| Field          | Type     | Description |
| -------------- | -------- | ----------- |
| preferClaimed: | Boolean! |
| percent        | Int!     |             |
| splitProjectId | Int!     |             |
| beneficiary    | Bytes!   |             |
| lockedUntil    | Int!     |             |
| allocator      | Bytes!   |             |

## UseAllowanceEvent

Description: v2

| Field                     | Type     | Description |
| ------------------------- | -------- | ----------- |
| id                        | ID!      |             |
| project                   | Project! |             |
| projectId                 | Int!     |             |
| timestamp                 | Int!     |             |
| txHash                    | Bytes!   |             |
| fundingCycleConfiguration | BigInt!  |             |
| fundingCycleNumber        | Int!     |             |
| beneficiary               | Bytes!   |             |
| amount                    | BigInt!  |             |
| distributedAmount         | BigInt!  |             |
| netDistributedamount      | BigInt!  |             |
| memo                      | String!  |             |
| caller                    | Bytes!   |             |

## DeployETHERC20ProjectPayerEvent

Description: V2

| Field               | Type     | Description |
| ------------------- | -------- | ----------- |
| id                  | ID!      |             |
| project             | Project! |             |
| projectId           | Int!     |             |
| timestamp           | Int!     |             |
| txHash              | Bytes!   |             |
| address             | Bytes!   |             |
| beneficiary         | Bytes!   |             |
| preferClaimedTokens | Boolean! |             |
| preferAddToBalance  | Boolean! |             |
| directory           | Bytes!   |             |
| owner               | Bytes!   |             |
| memo                | String   |             |
| metadata            | Bytes    |             |
| caller              | Bytes!   |             |

## ETHERC20ProjectPayer

Description: V2

| Field               | Type     | Description |
| ------------------- | -------- | ----------- |
| id:                 | ID!      |
| project             | Project! |             |
| projectId           | Int!     |             |
| address             | Bytes!   |             |
| beneficiary         | Bytes!   |             |
| preferClaimedTokens | Boolean! |             |
| preferAddToBalance  | Boolean! |             |
| directory           | Bytes!   |             |
| owner               | Bytes!   |             |
| memo                | String   |             |
| metadata            | Bytes    |             |

## VeNftToken

Description: V2

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
