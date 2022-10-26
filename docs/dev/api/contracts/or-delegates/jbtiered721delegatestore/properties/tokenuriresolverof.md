# tokenUriResolverOf

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

#### Definition

```
/**
  @notice
  Custom token URI resolver, superceeds base URI.

  _nft The NFT for which the token URI resolver applies.
*/
mapping(address => IJBTokenUriResolver) public override tokenUriResolverOf;
```

- Arguments:
  - `_nft` is the `address` of the NFT for which the token URI resolver applies.
- The resulting view function can be accessed externally by anyone.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
