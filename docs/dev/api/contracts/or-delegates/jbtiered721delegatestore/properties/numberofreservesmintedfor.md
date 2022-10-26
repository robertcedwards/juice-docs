# numberOfReservesMintedFor

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

**The number of reserved tokens that have been minted for each tier.**

#### Definition

```
/**
  @notice 
  The number of reserved tokens that have been minted for each tier. 

  _nft The NFT contract to which the reserve data belong.
  _tierId The ID of the tier to get a minted reserved token count for.
 */
mapping(address => mapping(uint256 => uint256)) public override numberOfReservesMintedFor;
```

- Arguments:
  - `_nft` is the `address` of the NFT contract to which the reserve data belong.
  - `_tierId` is the `uint256` ID of the tier to get a minted reserved token count for.
- The resulting view function can be accessed externally by anyone.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
