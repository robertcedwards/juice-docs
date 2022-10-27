# recordBurn

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

**Records burned tokens.**

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function recordBurn(uint256[] memory _tokenIds) external override { ... }
```

- Arguments:
  - `_tokenIds` is a `uint256[]` containing the IDs of the tokens burned.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Records burned tokens.

  @param _tokenIds The IDs of the tokens burned.
*/
function recordBurn(uint256[] memory _tokenIds) external override {
  // Get a reference to the number of token IDs provided.
  uint256 _numberOfTokenIds = _tokenIds.length;

  // Keep a reference to the token ID being iterated on.
  uint256 _tokenId;

  // Iterate through all tokens to increment the burn count.
  for (uint256 _i; _i < _numberOfTokenIds; ) {
    // Set the token's ID.
    _tokenId = _tokenIds[_i];

    uint256 _tierId = tierIdOfToken(_tokenId);

    // Increment the number burned for the tier.
    numberOfBurnedFor[msg.sender][_tierId]++;

    _storedTierOf[msg.sender][_tierId].remainingQuantity++;

    unchecked {
      ++_i;
    }
  }
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

