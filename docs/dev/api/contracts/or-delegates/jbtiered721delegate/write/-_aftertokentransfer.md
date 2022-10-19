# _afterTokenTransfer

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _afterTokenTransfer(
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
  Transfer voting units after the transfer of a token.

  @param _from The address where the transfer is originating.
  @param _to The address to which the transfer is being made.
  @param _tokenId The ID of the token being transfered.
 */
function _afterTokenTransfer(
  address _from,
  address _to,
  uint256 _tokenId
) internal virtual override {
  // Get a reference to the tier.
  JB721Tier memory _tier = store.tierOfTokenId(address(this), _tokenId);

  // Record the transfer.
  store.recordTransferForTier(_tier.id, _from, _to);

  // Handle any other accounting (ex. account for governance voting units)
  _afterTokenTransferAccounting(_from, _to, _tokenId, _tier);

  super._afterTokenTransfer(_from, _to, _tokenId);
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

