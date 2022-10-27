# recordRemoveTierIds

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

**Remove tiers.**

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function recordRemoveTierIds(uint256[] calldata _tierIds) external override { ... }
```

- Arguments:
  - `_tierIds` is a `uint256[]` containing the tiers IDs to remove.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Remove tiers. 

  @param _tierIds The tiers IDs to remove.
*/
function recordRemoveTierIds(uint256[] calldata _tierIds) external override {
  // Get a reference to the number of tiers being removed.
  uint256 _numTiers = _tierIds.length;

  // Keep a reference to the tier ID being iterated on.
  uint256 _tierId;

  for (uint256 _i; _i < _numTiers; ) {
    // Set the tier being iterated on, 0-indexed
    _tierId = _tierIds[_i];

    // If the tier is locked throw an error.
    if (_storedTierOf[msg.sender][_tierId].lockedUntil >= block.timestamp) revert TIER_LOCKED();

    // Set the tier as removed.
    _isTierRemoved[msg.sender].removeTier(_tierId);

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

