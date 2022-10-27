# cleanTiers

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

**Removes removed tiers from sequencing.**

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function cleanTiers(address _nft) external override { ... }
```

- Arguments:
  - `_nft` is the `address` of the NFT contract to clean tiers for.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Removes removed tiers from sequencing.

  @param _nft The NFT contract to clean tiers for.
*/
function cleanTiers(address _nft) external override {
  // Keep a reference to the greatest tier ID.
  uint256 _maxTierIdOf = maxTierIdOf[_nft];

  // Get a reference to the index being iterated on, starting with the starting index.
  uint256 _currentSortIndex = _firstSortIndexOf(_nft);

  // Keep track of the previous non-removed index.
  uint256 _previous;

  // Initialise a BitmapWord for isRemoved.
  JBBitmapWord memory _bitmapWord = _isTierRemoved[_nft].readId(_currentSortIndex);

  // Make the sorted array.
  while (_currentSortIndex != 0) {
    // Is the current index outside the currently stored word?
    if (_bitmapWord.refreshBitmapNeeded(_currentSortIndex))
      _bitmapWord = _isTierRemoved[_nft].readId(_currentSortIndex);

    if (!_bitmapWord.isTierIdRemoved(_currentSortIndex)) {
      // If the current index being iterated on isn't an increment of the previous, set the correct tier after if needed.
      if (_currentSortIndex != _previous + 1) {
        if (_tierIdAfter[_nft][_previous] != _currentSortIndex)
          _tierIdAfter[_nft][_previous] = _currentSortIndex;
        // Otherwise if the current index is an increment of the previous and the after index isn't 0, set it to 0.
      } else if (_tierIdAfter[_nft][_previous] != 0) _tierIdAfter[_nft][_previous] = 0;

      // Set the previous index to be the current index.
      _previous = _currentSortIndex;
    }
    // Set the next sort index.
    _currentSortIndex = _nextSortIndex(_nft, _currentSortIndex, _maxTierIdOf);
  }

  emit CleanTiers(_nft, msg.sender);
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

