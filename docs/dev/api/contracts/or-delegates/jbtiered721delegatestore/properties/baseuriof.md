# baseUriOf

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

**The common base for the 'tokenUri's.**

#### Definition

```
/**
  @notice
  The common base for the tokenUri's

  _nft The NFT for which the base URI applies.
*/
mapping(address => string) public override baseUriOf;
```

- Arguments:
  - `_nft` is the `address` of the NFT for which the base URI applies.
- The resulting view function can be accessed externally by anyone.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
