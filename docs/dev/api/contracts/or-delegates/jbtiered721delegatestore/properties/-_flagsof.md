# _flagsOf

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

**Flags that influence the behavior of each NFT.**

#### Definition

```
/**
  @notice
  Flags that influence the behavior of each NFT.

  _nft The NFT for which the flags apply.
*/
mapping(address => JBTiered721Flags) internal _flagsOf;
```

- Arguments:
  - `_nft` is the `address` of the NFT for which the flags apply.
- The resulting view function is private to this contract.
