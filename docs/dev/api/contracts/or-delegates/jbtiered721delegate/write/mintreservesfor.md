# mintReservesFor

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

Interface: [`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function mintReservesFor(uint256 _tierId, uint256 _count) public override { ... }
```

- Arguments:
  - `_tierId` is the `uint256` ID of the tier to mint within.
  - `_count` is the `uint256` number of reserved tokens to mint. 
- The resulting function overrides a function definition from the [`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Mint reserved tokens within the tier for the provided value.

  @param _tierId The ID of the tier to mint within.
  @param _count The number of reserved tokens to mint. 
*/
function mintReservesFor(uint256 _tierId, uint256 _count) public override {
  // Get a reference to the project's current funding cycle.
  JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(projectId);

  // Minting reserves must not be paused.
  if (
    JBTiered721FundingCycleMetadataResolver.mintingReservesPaused(
      (JBFundingCycleMetadataResolver.metadata(_fundingCycle))
    )
  ) revert RESERVED_TOKEN_MINTING_PAUSED();

  // Record the minted reserves for the tier.
  uint256[] memory _tokenIds = store.recordMintReservesFor(_tierId, _count);

  // Keep a reference to the reserved token beneficiary.
  address _reservedTokenBeneficiary = store.reservedTokenBeneficiaryOf(address(this), _tierId);

  // Keep a reference to the token ID being iterated on.
  uint256 _tokenId;

  for (uint256 _i; _i < _count; ) {
    // Set the token ID.
    _tokenId = _tokenIds[_i];

    // Mint the token.
    _mint(_reservedTokenBeneficiary, _tokenId);

    emit MintReservedToken(_tokenId, _tierId, _reservedTokenBeneficiary, msg.sender);

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

