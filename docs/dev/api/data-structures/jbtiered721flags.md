# JBTiered721Flags

#### Code

https://github.com/jbx-protocol/juice-nft-rewards/blob/main/contracts/structs/JBTiered721Flags.sol

#### Definition

```
/** 
  @member lockReservedTokenChanges A flag indicating if reserved tokens can change over time by adding new tiers with a reserved rate.
  @member lockVotingUnitChanges A flag indicating if voting unit expectations can change over time by adding new tiers with voting units.
*/
struct JBTiered721Flags {
  bool lockReservedTokenChanges;
  bool lockVotingUnitChanges;
}
```
