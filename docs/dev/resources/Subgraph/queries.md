---
sidebar_position: 3
title: Sample Queries
---

## Sample Queries

Below are some sample queries you can use to gather information from the Juicebox contracts. 

You can build your own queries using a [GraphQL Explorer](https://graphiql-online.com/graphiql) and enter your endpoint to limit your queries to the exact data desired.

### Node Metrics
Get the latest metrics for nodes on the network

```graphql
query NodeOverview {
  nodeBalanceCheckpoints(first: 1, orderBy: id, orderDirection: desc) {
    averageFeeForActiveMinipools
    averageNodeRewardClaim
    averageODAORewardClaim
    maximumEffectiveRPL
    minimumEffectiveRPL
    rplStaked
    stakingMinipools
    totalFinalizedMinipools
    stakingUnbondedMinipools
    totalNodeRewardsClaimed
    queuedMinipools
  }
}
```

### Staker Metrics
Get the latest metrics for stakers on the network

```graphql
query StakerOverview {
  networkStakerBalanceCheckpoints(first: 1, orderBy: id) {
    rETHExchangeRate
    stakerETHInProtocol
    stakerETHWaitingInDepositPool
    stakersWithAnRETHBalance
    totalRETHSupply
    totalStakerETHRewards
  }
}
```
