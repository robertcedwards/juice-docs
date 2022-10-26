# isTierRemoved

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function isTierRemoved(address _nft, uint256 _tierId) external view override returns(bool) { ... }
```

- Arguments:
  - `_nft` is the `address` of the NFT for which the removed tier is queried.
  - `_tierId` is the `uint256` tier ID.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function returns:
  - A `bool` which is true if the tier has been removed.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Tier removed from the current tiering

  @param _nft The NFT for which the removed tier is queried
  @param _tierId The tier ID

  @return True if the tier has been removed
*/
function isTierRemoved(address _nft, uint256 _tierId) external view override returns(bool) {
  JBBitmapWord memory _bitmapWord = _isTierRemoved[_nft].readId(_tierId);
  
  return _bitmapWord.isTierIdRemoved(_tierId);
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

