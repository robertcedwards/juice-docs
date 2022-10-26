# _numberOfReservedTokensOutstandingFor

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _numberOfReservedTokensOutstandingFor(
  address _nft,
  uint256 _tierId,
  JBStored721Tier memory _storedTier
) internal view returns (uint256) { ... }
```

- Arguments:
  - `_nft` is the `address` of the NFT to get reserved tokens outstanding from.
  - `_tierId` is the `uint256` ID of the tier to get a number of reserved tokens outstanding from.
  - `_storedTier` is a [`JBStored721Tier`](/dev/api/data-structures/jbstored721tier) to get a number of reserved tokens outstanding from.
- The view function is private to the contract.
- The function returns:
  - `numberReservedTokensOutstanding` is the outstanding number of reserved tokens within the tier as a `uint256`.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  The number of reserved tokens that can currently be minted within the tier. 

  @param _nft The NFT to get reserved tokens outstanding.
  @param _tierId The ID of the tier to get a number of reserved tokens outstanding.
  @param _storedTier The tier to get a number of reserved tokens outstanding.

  @return numberReservedTokensOutstanding The outstanding number of reserved tokens within the tier.
*/
function _numberOfReservedTokensOutstandingFor(
  address _nft,
  uint256 _tierId,
  JBStored721Tier memory _storedTier
) internal view returns (uint256) {
  // Invalid tier or no reserved rate?
  if (_storedTier.initialQuantity == 0 || _storedTier.reservedRate == 0) return 0;

  // No token minted yet? Round up to 1.
  if (_storedTier.initialQuantity == _storedTier.remainingQuantity) return 1;

  // The number of reserved tokens of the tier already minted.
  uint256 _reserveTokensMinted = numberOfReservesMintedFor[_nft][_tierId];

  // If only the reserved token (from the rounding up) has been minted so far, return 0.
  if (_storedTier.initialQuantity - _reserveTokensMinted == _storedTier.remainingQuantity)
    return 0;

  // Get a reference to the number of tokens already minted in the tier, not counting reserves or burned tokens.
  uint256 _numberOfNonReservesMinted = _storedTier.initialQuantity -
    _storedTier.remainingQuantity -
    _reserveTokensMinted;

  // Store the numerator common to the next two calculations.
  uint256 _numerator = uint256(_numberOfNonReservesMinted * _storedTier.reservedRate);

  // Get the number of reserved tokens mintable given the number of non reserved tokens minted. This will round down.
  uint256 _numberReservedTokensMintable = _numerator / JBConstants.MAX_RESERVED_RATE;

  // Round up.
  if (_numerator - JBConstants.MAX_RESERVED_RATE * _numberReservedTokensMintable > 0)
    ++_numberReservedTokensMintable;

  // Return the difference between the amount mintable and the amount already minted.
  return _numberReservedTokensMintable - _reserveTokensMinted;
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

