# adjustTiers

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

Interface: [`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function adjustTiers(JB721TierParams[] calldata _tiersToAdd, uint256[] calldata _tierIdsToRemove)
  external
  override
  onlyOwner
{ ... }
```

- Arguments:
  - `_tiersToAdd` is a <code>[JB721TierParams](/dev/api/data-structures/jb721tierparams)[]</code> of tier data to add.
  - `_tierIdsToRemove` is a `uint256[]` of tier IDs to remove.
- The resulting function overrides a function definition from the [`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Adjust the tiers mintable through this contract, adhering to any locked tier constraints. 

  @dev
  Only the contract's owner can adjust the tiers.

  @param _tiersToAdd An array of tier data to add.
  @param _tierIdsToRemove An array of tier IDs to remove.
*/
function adjustTiers(JB721TierParams[] calldata _tiersToAdd, uint256[] calldata _tierIdsToRemove)
  external
  override
  onlyOwner
{
  // Get a reference to the number of tiers being added.
  uint256 _numberOfTiersToAdd = _tiersToAdd.length;

  // Get a reference to the number of tiers being removed.
  uint256 _numberOfTiersToRemove = _tierIdsToRemove.length;

  // Remove the tiers.
  if (_numberOfTiersToRemove != 0) {
    // Record the removed tiers.
    store.recordRemoveTierIds(_tierIdsToRemove);

    // Emit events for each removed tier.
    for (uint256 _i; _i < _numberOfTiersToRemove; ) {
      emit RemoveTier(_tierIdsToRemove[_i], msg.sender);
      unchecked {
        ++_i;
      }
    }
  }

  // Add the tiers.
  if (_numberOfTiersToAdd != 0) {
    // Record the added tiers in the store.
    uint256[] memory _tierIdsAdded = store.recordAddTiers(_tiersToAdd);

    // Emit events for each added tier.
    for (uint256 _i; _i < _numberOfTiersToAdd; ) {
      emit AddTier(_tierIdsAdded[_i], _tiersToAdd[_i], msg.sender);
      unchecked {
        ++_i;
      }
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

