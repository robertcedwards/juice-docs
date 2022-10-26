# _firstSortIndexOf

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _firstSortIndexOf(address _nft) internal view returns (uint256 index) { ... }
```

- Arguments:
  - `_nft` is the `address` of the NFT to get the first sorted tier index of.
- The view function is private to the contract.
- The function returns:
  - `index` is the first sorted tier `uint256` index.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  The first sorted tier index of an NFT.

  @param _nft The NFT to get the first sorted tier index of.

  @return index The first sorted tier index.
*/
function _firstSortIndexOf(address _nft) internal view returns (uint256 index) {
  index = _tierIdAfter[_nft][0];
  // Start at the first index if nothing is specified.
  if (index == 0) index = 1;
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

