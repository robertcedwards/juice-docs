# JBTiered721FundingCycleMetadataResolver

#### Code

https://github.com/jbx-protocol/juice-nft-rewards/blob/main/contracts/libraries/JBTiered721FundingCycleMetadataResolver.sol

#### Definition

```
library JBTiered721FundingCycleMetadataResolver {
  function transfersPaused(uint256 _data) internal pure returns (bool) {
    return (_data & 1) == 1;
  }

  function mintingReservesPaused(uint256 _data) internal pure returns (bool) {
    return ((_data >> 1) & 1) == 1;
  }

  function changingPricingResolverPaused(uint256 _data) internal pure returns (bool) {
    return ((_data >> 2) & 1) == 1;
  }
}
```
