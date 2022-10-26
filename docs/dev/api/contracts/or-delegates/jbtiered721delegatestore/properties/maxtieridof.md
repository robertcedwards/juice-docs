# maxTierIdOf

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

**The biggest tier ID used.**

#### Definition

```
/** 
  @notice
  The biggest tier ID used. 

  @dev
  This may not include the last tier ID if it has been removed.

  _nft The NFT contract to get the number of tiers.
*/
mapping(address => uint256) public override maxTierIdOf;
```

- Arguments:
  - `_nft` is the `address` of the NFT contract to get the number of tiers.
- The resulting view function can be accessed externally by anyone.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
