# _tierIdAfter

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

**The index that should come after the given index when sorting by contribution floor.**

#### Definition

```
/** 
  @notice
  The index that should come after the given index when sorting by contribution floor.

  @dev
  If empty, assume the next index should come after. 

  _nft The NFT contract to get tier order index from.
  _index The index to get a tier after relative to.
*/
mapping(address => mapping(uint256 => uint256)) internal _tierIdAfter;
```

- Arguments:
  - `_nft` is the `address` of the NFT contract to get tier order index from.
  - `_index` is the `uint256` index to get a tier after relative to.
- The resulting view function is private to this contract.
