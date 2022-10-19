# _beforeTokenTransfer

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _beforeTokenTransfer(
  address _from,
  address _to,
  uint256 _tokenId
) internal virtual override { ... }
```

- Arguments:
  - `_from` is the `address` where the transfer is originating.
  - `_to` is the `address` to which the transfer is being made.
  - `_tokenId` is the `uint256` ID of the token being transfered.
- The function is private to this contract.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice
  User the hook to register the first owner if it's not yet regitered.

  @param _from The address where the transfer is originating.
  @param _to The address to which the transfer is being made.
  @param _tokenId The ID of the token being transfered.
*/
function _beforeTokenTransfer(
  address _from,
  address _to,
  uint256 _tokenId
) internal virtual override {
  // Transfered must not be paused when not minting or burning.
  if (_from != address(0)) {
    // Transfers must not be paused.
    if (store.flagsOf(address(this)).pausable) {
      // Get a reference to the project's current funding cycle.
      JBFundingCycle memory _fundingCycle = fundingCycleStore.currentOf(projectId);

      if (
        _to != address(0) &&
        JBTiered721FundingCycleMetadataResolver.transfersPaused(
          (JBFundingCycleMetadataResolver.metadata(_fundingCycle))
        )
      ) revert TRANSFERS_PAUSED();
    }

    // If there's no stored first owner, and the transfer isn't originating from the zero address as expected for mints, store the first owner.
    if (store.firstOwnerOf(address(this), _tokenId) == address(0))
      store.recordSetFirstOwnerOf(_tokenId, _from);
  }

  super._beforeTokenTransfer(_from, _to, _tokenId);
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

