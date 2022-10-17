# JBTiered721FundingCycleMetadata

#### Code

https://github.com/jbx-protocol/juice-nft-rewards/blob/main/contracts/structs/JBTiered721FundingCycleMetadata.sol

#### Definition

```
/** 
  @member pauseTransfers A flag indicating if the token transfer functionality should be paused during the funding cycle.
  @member pauseMintingReserves A flag indicating if voting unit expectations can change over time by adding new tiers with voting units.
  @member pausePricingResolverChanges A flag indicating if the pricing resolver changes can change.
*/
struct JBTiered721FundingCycleMetadata {
  bool pauseTransfers;
  bool pauseMintingReserves;
  bool pausePricingResolverChanges;
}
```
