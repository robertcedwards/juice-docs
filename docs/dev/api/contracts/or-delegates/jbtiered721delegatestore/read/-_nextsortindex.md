# _nextSortIndex

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _nextSortIndex(
  address _nft,
  uint256 _index,
  uint256 _max
) internal view returns (uint256) { ... }
```

- Arguments:
  - `_nft` the `address` of the NFT for which the sort index applies.
  - `_index` is the `uint256` index relative to which the next sorted index will be returned.
  - `_max` is the maximum possible `uint256` index.
- The view function is private to the contract.
- The function returns:
  - The index as a `uint256`.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice 
  The next sorted index. 

  @param _nft The NFT for which the sort index applies.
  @param _index The index relative to which the next sorted index will be returned.
  @param _max The maximum possible index.

  @return The index.
*/
function _nextSortIndex(
  address _nft,
  uint256 _index,
  uint256 _max
) internal view returns (uint256) {
  // Update the current index to be the one saved to be after, if it exists.
  uint256 _storedNext = _tierIdAfter[_nft][_index];
  if (_storedNext != 0) return _storedNext;
  // Otherwise if this is the last tier, set current to zero to break out of the loop.
  else if (_index >= _max) return 0;
  // Otherwise increment the current.
  else return _index + 1;
}
```

</TabItem>

<TabItem value="Errors" label="Errors">

|String|Description|
|-|-|
|**``**||

</TabItem>

<TabItem value="Bug bounty" label="Bug bounty">

</TabItem>
</Tabs>

