# recordAddTiers

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

**Adds tiers.**

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function recordAddTiers(JB721TierParams[] memory _tiersToAdd)
  external
  override
  returns (uint256[] memory tierIds)
{ ... }
```

- Arguments:
  - `_tiersToAdd` is a <code>[JB721TierParams](/dev/api/data-structures/jb721tierparams)[]</code> containing the tiers to add.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function returns:
  - `tierIds` is a `uint256[]` containing the IDs of the tiers added.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Adds tiers. 

  @param _tiersToAdd The tiers to add.

  @return tierIds The IDs of the tiers added.
*/
function recordAddTiers(JB721TierParams[] memory _tiersToAdd)
  external
  override
  returns (uint256[] memory tierIds)
{
  // Get a reference to the number of new tiers.
  uint256 _numberOfNewTiers = _tiersToAdd.length;

  // Keep a reference to the greatest tier ID.
  uint256 _currentMaxTierIdOf = maxTierIdOf[msg.sender];

  // Initialize an array with the appropriate length.
  tierIds = new uint256[](_numberOfNewTiers);

  // Keep a reference to the starting sort ID for sorting new tiers if needed.
  // There's no need for sorting if there are currently no tiers.
  // If there's no sort index, start with the first index.
  uint256 _startSortIndex = _currentMaxTierIdOf == 0 ? 0 : _firstSortIndexOf(msg.sender);

  // Keep track of the previous index.
  uint256 _previous;

  // Keep a reference to the tier being iterated on.
  JB721TierParams memory _tierToAdd;

  // Keep a reference to the flags.
  JBTiered721Flags memory _flags = _flagsOf[msg.sender];

  for (uint256 _i; _i < _numberOfNewTiers; ) {
    // Set the tier being iterated on.
    _tierToAdd = _tiersToAdd[_i];

    // Make sure the tier's contribution floor is greater than or equal to the previous contribution floor.
    if (_i != 0 && _tierToAdd.contributionFloor < _tiersToAdd[_i - 1].contributionFloor)
      revert INVALID_PRICE_SORT_ORDER();

    // Make sure there are no voting units set if they're not allowed.
    if (_flags.lockVotingUnitChanges && _tierToAdd.votingUnits != 0)
      revert VOTING_UNITS_NOT_ALLOWED();

    // Make sure a reserved rate isn't set if changes should be locked or if manual minting is allowed.
    if (
      (_flags.lockReservedTokenChanges || _tierToAdd.allowManualMint) &&
      _tierToAdd.reservedRate != 0
    ) revert RESERVED_RATE_NOT_ALLOWED();

    // Make sure manual minting is not set if not allowed.
    if (_flags.lockManualMintingChanges && _tierToAdd.allowManualMint)
      revert MANUAL_MINTING_NOT_ALLOWED();

    // Make sure there is some quantity.
    if (_tierToAdd.initialQuantity == 0) revert NO_QUANTITY();

    // Get a reference to the tier ID.
    uint256 _tierId = _currentMaxTierIdOf + _i + 1;

    // Add the tier with the iterative ID.
    _storedTierOf[msg.sender][_tierId] = JBStored721Tier({
      contributionFloor: uint80(_tierToAdd.contributionFloor),
      lockedUntil: uint48(_tierToAdd.lockedUntil),
      remainingQuantity: uint40(_tierToAdd.initialQuantity),
      initialQuantity: uint40(_tierToAdd.initialQuantity),
      votingUnits: uint16(_tierToAdd.votingUnits),
      reservedRate: uint16(_tierToAdd.reservedRate),
      allowManualMint: _tierToAdd.allowManualMint
    });

    // Set the reserved token beneficiary if needed.
    if (
      _tierToAdd.reservedTokenBeneficiary != address(0) &&
      _tierToAdd.reservedTokenBeneficiary != defaultReservedTokenBeneficiaryOf[msg.sender]
    ) {
      if (_tierToAdd.shouldUseBeneficiaryAsDefault)
        defaultReservedTokenBeneficiaryOf[msg.sender] = _tierToAdd.reservedTokenBeneficiary;
      else _reservedTokenBeneficiaryOf[msg.sender][_tierId] = _tierToAdd.reservedTokenBeneficiary;
    }

    // Set the encodedIPFSUri if needed.
    if (_tierToAdd.encodedIPFSUri != bytes32(0))
      encodedIPFSUriOf[msg.sender][_tierId] = _tierToAdd.encodedIPFSUri;



    if (_startSortIndex != 0) {
      // Keep track of the sort index.
      uint256 _currentSortIndex = _startSortIndex;

      // Initialise a BitmapWord for isRemoved
      JBBitmapWord memory _bitmapWord = _isTierRemoved[msg.sender].readId(_currentSortIndex);

      // Keep a reference to the idex to iterate on next.
      uint256 _next;

      while (_currentSortIndex != 0) {
        // Is the current index outside the currently stored word?
        if (_bitmapWord.refreshBitmapNeeded(_currentSortIndex))
          _bitmapWord = _isTierRemoved[msg.sender].readId(_currentSortIndex);

        // Set the next index.
        _next = _nextSortIndex(msg.sender, _currentSortIndex, _currentMaxTierIdOf);

        // If the contribution floor is less than the tier being iterated on, store the order.
        if (
          _tierToAdd.contributionFloor <
          _storedTierOf[msg.sender][_currentSortIndex].contributionFloor
        ) {
          // If the index being iterated on isn't the next index, set the after.
          if (_currentSortIndex != _tierId + 1)
            _tierIdAfter[msg.sender][_tierId] = _currentSortIndex;

          // If currentSortIndex is the max and it is removed, don't include it in the max tier ID calculation.
          if (
            _currentSortIndex == _currentMaxTierIdOf &&
            _bitmapWord.isTierIdRemoved(_currentSortIndex)
          ) _currentMaxTierIdOf--;

          // If the previous after index was set to something else, set the previous after.
          if (_previous != _tierId - 1 || _tierIdAfter[msg.sender][_previous] != 0)
            // Set the tier after the previous one being iterated on as the tier being added, or 0 if the index is incremented.
            _tierIdAfter[msg.sender][_previous] = _previous == _tierId - 1 ? 0 : _tierId;

          // For the next tier being added, start at this current index.
          _startSortIndex = _currentSortIndex;

          // The tier just added is the previous for the next tier being added.
          _previous = _tierId;

          // Set current to zero to break out of the loop.
          _currentSortIndex = 0;
        }
        // If the tier being iterated on is the last tier, add the tier after it.
        else if (_next == 0) {
          if (_tierId != _currentSortIndex + 1)
            _tierIdAfter[msg.sender][_currentSortIndex] = _tierId;

          // For the next tier being added, start at this current index.
          _startSortIndex = _tierId;

          // Break out.
          _currentSortIndex = 0;
        }
        // Move on to the next index.
        else {
          // Set the previous index to be the current index.
          _previous = _currentSortIndex;

          // Go to the next index.
          _currentSortIndex = _next;
        }
      }
    }

    // Set the tier ID in the returned value.
    tierIds[_i] = _tierId;

    unchecked {
      ++_i;
    }
  }

  maxTierIdOf[msg.sender] = _currentMaxTierIdOf + _numberOfNewTiers;
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

