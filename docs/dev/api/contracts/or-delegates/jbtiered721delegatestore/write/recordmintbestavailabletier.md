# recordMintBestAvailableTier

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

**Mints a token in the best available tier.**

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function recordMintBestAvailableTier(uint256 _amount)
  external
  override
  returns (
    uint256 tokenId,
    uint256 tierId,
    uint256 leftoverAmount
  )
{ ... }
```

- Arguments:
  - `_amount` is the `uint256` amount to base the mint on.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function returns:
  - `tokenId` is the minted token's `uint256` ID.
  - `tierId` is the `uint256` ID of the tier minted from.
  - `leftoverAmount` is the `uint256` amount leftover after the mint. 

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Mints a token in the best available tier.

  @param _amount The amount to base the mint on.

  @return tokenId The token ID minted.
  @return tierId The ID of the tier minted from.
  @return leftoverAmount The amount leftover after the mint. 
*/
function recordMintBestAvailableTier(uint256 _amount)
  external
  override
  returns (
    uint256 tokenId,
    uint256 tierId,
    uint256 leftoverAmount
  )
{
  // Keep a reference to the greatest tier ID.
  uint256 _maxTierIdOf = maxTierIdOf[msg.sender];

  // Keep a reference to the tier being iterated on.
  JBStored721Tier memory _storedTier;

  // Keep a reference to the starting sort ID for sorting new tiers if needed.
  // There's no need for sorting if there are currently no tiers.
  // If there's no sort index, start with the first index.
  uint256 _currentSortIndex = _firstSortIndexOf(msg.sender);

  // Keep a reference to the best contribution floor.
  uint256 _bestContributionFloor;

  // Initialise a BitmapWord to read isRemoved
  JBBitmapWord memory _bitmapWord = _isTierRemoved[msg.sender].readId(_currentSortIndex);

  while (_currentSortIndex != 0) {
    // Set the tier being iterated on. Tier's are 1 indexed.
    _storedTier = _storedTierOf[msg.sender][_currentSortIndex];

    // Is the current index outside the currently stored word?
    if (_bitmapWord.refreshBitmapNeeded(_currentSortIndex))
      _bitmapWord = _isTierRemoved[msg.sender].readId(_currentSortIndex);

    // If the contribution floor has gone over, break out of the loop.
    if (_storedTier.contributionFloor > _amount) _currentSortIndex = 0;
    else {
      // If the tier is not removed, check to see if it's optimal.
      // Set the tier as the best available so far if there is still a remaining quantity.
      if (
        !_bitmapWord.isTierIdRemoved(_currentSortIndex) &&
        _storedTier.contributionFloor > _bestContributionFloor &&
        (_storedTier.remainingQuantity -
          _numberOfReservedTokensOutstandingFor(msg.sender, _currentSortIndex, _storedTier)) !=
        0
      ) {
        tierId = _currentSortIndex;
        _bestContributionFloor = _storedTier.contributionFloor;
      }

      // Set the next sort index.
      _currentSortIndex = _nextSortIndex(msg.sender, _currentSortIndex, _maxTierIdOf);
    }
  }

  // If there's no best tier, return.
  if (tierId == 0) leftoverAmount = _amount;
  else {
    // Keep a reference to the best tier.
    JBStored721Tier storage _bestStoredTier = _storedTierOf[msg.sender][tierId];

    // Make the token ID.
    unchecked {
      // Keep a reference to the token ID.
      tokenId = _generateTokenId(
        tierId,
        _bestStoredTier.initialQuantity -
          --_bestStoredTier.remainingQuantity +
          numberOfBurnedFor[msg.sender][tierId]
      );
    }

    // Set the leftover amount.
    leftoverAmount = _amount - _bestContributionFloor;
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

