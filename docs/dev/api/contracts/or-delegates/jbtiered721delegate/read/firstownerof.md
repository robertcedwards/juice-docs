# firstOwnerOf

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

Interface: [`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function firstOwnerOf(uint256 _tokenId) external view override returns (address) { ... }
```

- Arguments:
  - `_tokenId` is the `uint256` ID of the token to get the first owner of.
- The resulting function overrides a function definition from the [`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate) interface.
- The function returns:
  - Returns the `address` first owner of the token.


#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice
  The first owner of each token ID, which corresponds to the address that originally contributed to the project to receive the NFT.

  @param _tokenId The ID of the token to get the first owner of.

  @return The first owner of the token.
*/
function firstOwnerOf(uint256 _tokenId) external view override returns (address) {
  // Get a reference to the first owner.
  address _storedFirstOwner = store.firstOwnerOf(address(this), _tokenId);

  // If the stored first owner is set, return it.
  if (_storedFirstOwner != address(0)) return _storedFirstOwner;

  // Otherwise, the first owner must be the current owner.
  return _owners[_tokenId];
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

