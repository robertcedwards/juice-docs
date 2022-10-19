# _afterTokenTransferAccounting

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _afterTokenTransferAccounting(
  address _from,
  address _to,
  uint256 _tokenId,
  JB721Tier memory _tier
) internal virtual { ... }
```

- Arguments:
  - `_from` is the `address` of the account to transfer voting units from.
  - `_to` is the `address` of the account to transfer voting units to.
  - `_tokenId` is the `uint256` ID of the token for which voting units are being transfered.
  - `_tier` is the [`JB721Tier`](/dev/api/data-structures/jb721tier) the token ID is part of.
- The function is private to this contract.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice 
  Custom hook to handle token/tier accounting, this way we can reuse the '_tier' instead of fetching it again.

  @param _from The account to transfer voting units from.
  @param _to The account to transfer voting units to.
  @param _tokenId The ID of the token for which voting units are being transfered.
  @param _tier The tier the token ID is part of.
*/
function _afterTokenTransferAccounting(
  address _from,
  address _to,
  uint256 _tokenId,
  JB721Tier memory _tier
) internal virtual {
  _from; // Prevents unused var compiler and natspec complaints.
  _to;
  _tokenId;
  _tier;
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

