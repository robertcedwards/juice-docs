# firstOwnerOf

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

**The first owner of each token ID, stored on first transfer out.**

#### Definition

```
/**
  @notice
  The first owner of each token ID, stored on first transfer out.

  _nft The NFT contract to which the token belongs.
  _tokenId The ID of the token to get the stored first owner of.
*/
mapping(address => mapping(uint256 => address)) public override firstOwnerOf;
```

- Arguments:
  - `_nft` is the `address` of the NFT contract to which the token belongs.
  - `_tokenId` is the `uint256` ID of the token to get the stored first owner of.
- The resulting view function can be accessed externally by anyone.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
