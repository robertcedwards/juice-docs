# _storedTierOf

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

**The stored reward tier.**

#### Definition

```
/** 
  @notice
  The stored reward tier. 

  _nft The NFT contract to which the tiers belong.
  _tierId The incremental ID of the tier, starting with 1.
*/
mapping(address => mapping(uint256 => JBStored721Tier)) internal _storedTierOf;
```

- Arguments:
  - `_nft` is the `address` of the NFT contract to which the tiers belong.
  - `_tierId` is the `uint256` incremental ID of the tier, starting with 1.
- The resulting view function is private to this contract.
