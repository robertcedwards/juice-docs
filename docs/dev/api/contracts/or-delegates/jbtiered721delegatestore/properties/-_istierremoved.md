# _isTierRemoved

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

#### Definition

```
/** 
  @notice
  For each tier ID, a flag indicating if the tier has been removed. 

  _nft The NFT contract to which the tier belong.
  _depth The bitmap row
  _word The row content
*/
mapping(address => mapping(uint256 => uint256)) internal _isTierRemoved;
```

- Arguments:
  - `_nft` is the `address` of the NFT contract to which the tier belongs.
  - `_depth` is a `uint256` which represents the bitmap row.
  - `_word` is the row content.
- The resulting view function is private to this contract.
