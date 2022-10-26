# numberOfBurnedFor

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

**The number of tokens that have been burned for each tier.**

#### Definition

```
/**
  @notice 
  The number of tokens that have been burned for each tier. 

  _nft The NFT contract to which the burned data belong.
  _tierId The ID of the tier to get a burned token count for.
 */
mapping(address => mapping(uint256 => uint256)) public override numberOfBurnedFor;
```

- Arguments:
  - `_nft` is the `address` of the NFT contract to which the burned data belong.
  - `_tierId` is the `uint256` ID of the tier to get a burned token count for.
- The resulting view function can be accessed externally by anyone.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
