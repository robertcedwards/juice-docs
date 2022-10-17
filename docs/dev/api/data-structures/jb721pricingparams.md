# JB721PricingParams

#### Code

https://github.com/jbx-protocol/juice-nft-rewards/blob/main/contracts/structs/JB721PricingParams.sol

#### Definition

```
/**
  @member tiers The tiers to set.
  @member currency The currency that the tier contribution floors are denoted in.
  @member decimals The number of decimals included in the tier contribution floor fixed point numbers.
  @member prices A contract that exposes price feeds that can be used to resolved the value of a contributions that are sent in different currencies. Set to the zero address if payments must be made in `currency`.
*/
struct JB721PricingParams {
  JB721TierParams[] tiers;
  uint256 currency;
  uint256 decimals;
  IJBPrices prices;
}
```
