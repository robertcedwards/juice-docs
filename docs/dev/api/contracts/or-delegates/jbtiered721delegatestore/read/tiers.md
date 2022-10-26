# tiers

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function tiers(
  address _nft,
  uint256 _startingId,
  uint256 _size
) external view override returns (JB721Tier[] memory _tiers) { ... }
```

- Arguments:
  - `_nft` is the `address` of the NFT contract to get tiers for.
  - `_startingId` is the `uint256` start index of the array of tiers sorted by contribution floor. Send 0 to start at the beginning.
  - `_size` is the `uint256` number of tiers to include.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function returns:
  `_tiers` is all the tiers as a <code>[JB721Tier](/dev/api/data-structures/jb721tier)[]</code>.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Gets an array of all the active tiers. 

  @param _nft The NFT contract to get tiers for.
  @param _startingId The start index of the array of tiers sorted by contribution floor. Send 0 to start at the beginning.
  @param _size The number of tiers to include.

  @return _tiers All the tiers.
*/
function tiers(
  address _nft,
  uint256 _startingId,
  uint256 _size
) external view override returns (JB721Tier[] memory _tiers) {
  // Keep a reference to the max tier ID.
  uint256 _maxTierIdOf = maxTierIdOf[_nft];

  // Initialize an array with the appropriate length.
  _tiers = new JB721Tier[](_size);

  // Count the number of included tiers.
  uint256 _numberOfIncludedTiers;

  // Get a reference to the index being iterated on, starting with the starting index.
  uint256 _currentSortIndex = _startingId != 0 ? _startingId : _firstSortIndexOf(_nft);

  // Keep a referecen to the tier being iterated on.
  JBStored721Tier memory _storedTier;

  // Initialise a BitmapWord for isRemoved
  JBBitmapWord memory _bitmapWord = _isTierRemoved[_nft].readId(_currentSortIndex);

  // Make the sorted array.
  while (_currentSortIndex != 0 && _numberOfIncludedTiers < _size) {
    // Is the current index outside the currently stored word for isRemoved?
    if (_bitmapWord.refreshBitmapNeeded(_currentSortIndex))
      _bitmapWord = _isTierRemoved[_nft].readId(_currentSortIndex);

    if (!_bitmapWord.isTierIdRemoved(_currentSortIndex)) {
      _storedTier = _storedTierOf[_nft][_currentSortIndex];
      // Add the tier to the array being returned.
      _tiers[_numberOfIncludedTiers++] = JB721Tier({
        id: _currentSortIndex,
        contributionFloor: _storedTier.contributionFloor,
        lockedUntil: _storedTier.lockedUntil,
        remainingQuantity: _storedTier.remainingQuantity,
        initialQuantity: _storedTier.initialQuantity,
        votingUnits: _storedTier.votingUnits,
        reservedRate: _storedTier.reservedRate,
        reservedTokenBeneficiary: reservedTokenBeneficiaryOf(_nft, _currentSortIndex),
        encodedIPFSUri: encodedIPFSUriOf[_nft][_currentSortIndex],
        allowManualMint: _storedTier.allowManualMint
      });
    }

    // Set the next sort index.
    _currentSortIndex = _nextSortIndex(_nft, _currentSortIndex, _maxTierIdOf);
  }

  // Resize the array if there are removed tiers
  if (_numberOfIncludedTiers != _size)
    assembly ("memory-safe"){
      mstore(_tiers, _numberOfIncludedTiers)
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

