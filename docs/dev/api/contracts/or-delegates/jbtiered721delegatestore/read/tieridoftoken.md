# tierIdOfToken

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function tierIdOfToken(uint256 _tokenId) public pure override returns (uint256) { ... }
```

- Arguments:
  - `_tokenId` is the `uint256` ID of the token to get the tier number of. 
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function returns:
  - The tier number of the specified token ID as a `uint256`.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  The tier number of the provided token ID. 

  @dev
  Tier's are 1 indexed from the `tiers` array, meaning the 0th element of the array is tier 1.

  @param _tokenId The ID of the token to get the tier number of. 

  @return The tier number of the specified token ID.
*/
function tierIdOfToken(uint256 _tokenId) public pure override returns (uint256) {
  // The tier ID is in the first 16 bits.
  return uint256(uint16(_tokenId));
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

