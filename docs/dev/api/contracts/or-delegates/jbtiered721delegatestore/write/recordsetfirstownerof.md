# recordSetFirstOwnerOf

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

**Sets the first owner of a token.**

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function recordSetFirstOwnerOf(uint256 _tokenId, address _owner) external override { ... }
```

- Arguments:
  - `_tokenId` is the `uint256` ID of the token having the first owner set.
  - `_owner` is the `address` of the owner to set as the first owner.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Sets the first owner of a token.

  @param _tokenId The ID of the token having the first owner set.
  @param _owner The owner to set as the first owner.
*/
function recordSetFirstOwnerOf(uint256 _tokenId, address _owner) external override {
  firstOwnerOf[msg.sender][_tokenId] = _owner;
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
