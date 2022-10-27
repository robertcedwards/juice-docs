# recordMintReservesFor

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

**Mint a token within the tier for the provided value.**

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function recordMintReservesFor(uint256 _tierId, uint256 _count)
  external
  override
  returns (uint256[] memory tokenIds)
{ ... }
```

- Arguments:
  - `_tierId` is the `uint256` ID of the tier to mint within.
  - `_count` is the `uint256` number of reserved tokens to mint. 
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function returns:
  - `tokenIds` is a `uint256[]` containing the IDs of the tokens being minted as reserves.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Mint a token within the tier for the provided value.

  @dev
  Only a project owner can mint tokens.

  @param _tierId The ID of the tier to mint within.
  @param _count The number of reserved tokens to mint. 

  @return tokenIds The IDs of the tokens being minted as reserves.
*/
function recordMintReservesFor(uint256 _tierId, uint256 _count)
  external
  override
  returns (uint256[] memory tokenIds)
{
  // Get a reference to the tier.
  JBStored721Tier storage _storedTier = _storedTierOf[msg.sender][_tierId];

  // Get a reference to the number of reserved tokens mintable for the tier.
  uint256 _numberOfReservedTokensOutstanding = _numberOfReservedTokensOutstandingFor(
    msg.sender,
    _tierId,
    _storedTier
  );

  // Can't mint more reserves than expected.
  if (_count > _numberOfReservedTokensOutstanding) revert INSUFFICIENT_RESERVES();

  // Increment the number of reserved tokens minted.
  numberOfReservesMintedFor[msg.sender][_tierId] += _count;

  // Initialize an array with the appropriate length.
  tokenIds = new uint256[](_count);

  // Keep a reference to the number of burned in the tier.
  uint256 _numberOfBurnedFromTier = numberOfBurnedFor[msg.sender][_tierId];

  for (uint256 _i; _i < _count; ) {
    // Generate the tokens.
    tokenIds[_i] = _generateTokenId(
      _tierId,
      _storedTier.initialQuantity - --_storedTier.remainingQuantity + _numberOfBurnedFromTier
    );

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

