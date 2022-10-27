# recordMint

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

**Mints a token in all provided tiers.**

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function recordMint(
  uint256 _amount,
  uint16[] calldata _tierIds,
  bool _isManualMint
) external override returns (uint256[] memory tokenIds, uint256 leftoverAmount) { ... }
```

- Arguments:
  - `_amount` is the `uint256` amount to base the mints on. All mints' price floors must fit in this amount.
  - `_tierIds` is a `uint16[]` containing the IDs of the tier to mint from.
  - `_isManualMint` is a `bool` flag indicating if the mint is being made manually by the NFT's owner.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function returns:
  - `tokenIds` is a `uint256[]` containing the IDs of the tokens minted.
  - `leftoverAmount` is a `uint256` represneting the amount leftover after the mint.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Mints a token in all provided tiers.

  @param _amount The amount to base the mints on. All mints' price floors must fit in this amount.
  @param _tierIds The IDs of the tier to mint from.
  @param _isManualMint A flag indicating if the mint is being made manually by the NFT's owner.

  @return tokenIds The IDs of the tokens minted.
  @return leftoverAmount The amount leftover after the mint.
*/
function recordMint(
  uint256 _amount,
  uint16[] calldata _tierIds,
  bool _isManualMint
) external override returns (uint256[] memory tokenIds, uint256 leftoverAmount) {
  // Set the leftover amount as the initial amount.
  leftoverAmount = _amount;

  // Get a reference to the number of tiers.
  uint256 _numberOfTiers = _tierIds.length;

  // Keep a reference to the tier being iterated on.
  JBStored721Tier storage _storedTier;

  // Keep a reference to the tier ID being iterated on.
  uint256 _tierId;

  // Initialize an array with the appropriate length.
  tokenIds = new uint256[](_numberOfTiers);

  // Initialise a BitmapWord for isRemoved.
  JBBitmapWord memory _bitmapWord = _isTierRemoved[msg.sender].readId(_tierIds[0]);

  for (uint256 _i; _i < _numberOfTiers; ) {
    // Set the tier ID being iterated on.
    _tierId = _tierIds[_i];

    // Is the current index outside the currently stored word?
    if (_bitmapWord.refreshBitmapNeeded(_tierId))
      _bitmapWord = _isTierRemoved[msg.sender].readId(_tierId);

    // Make sure the tier hasn't been removed.
    if (_bitmapWord.isTierIdRemoved(_tierId)) revert TIER_REMOVED();

    // Keep a reference to the tier being iterated on.
    _storedTier = _storedTierOf[msg.sender][_tierId];

    // If this is a manual mint, make sure manual minting is allowed.
    if (_isManualMint && !_storedTier.allowManualMint) revert CANT_MINT_MANUALLY();

    // Make sure the provided tier exists.
    if (_storedTier.initialQuantity == 0) revert INVALID_TIER();

    // Make sure the amount meets the tier's contribution floor.
    if (_storedTier.contributionFloor > leftoverAmount) revert INSUFFICIENT_AMOUNT();

    // Make sure there are enough units available.
    if (
      _storedTier.remainingQuantity -
        _numberOfReservedTokensOutstandingFor(msg.sender, _tierId, _storedTier) ==
      0
    ) revert OUT();

    // Mint the tokens.
    unchecked {
      // Keep a reference to the token ID.
      tokenIds[_i] = _generateTokenId(
        _tierId,
        _storedTier.initialQuantity -
          --_storedTier.remainingQuantity +
          numberOfBurnedFor[msg.sender][_tierId]
      );
    }

    // Update the leftover amount;
    leftoverAmount = leftoverAmount - _storedTier.contributionFloor;

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

