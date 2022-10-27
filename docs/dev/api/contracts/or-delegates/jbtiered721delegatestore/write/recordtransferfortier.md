# recordTransferForTier

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

**Record a token transfer.**

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function recordTransferForTier(
  uint256 _tierId,
  address _from,
  address _to
) external override { ... }
```

- Arguments:
  - `_tierId` is the `uint256` ID the tier being transfered.
  - `_from` is the sender `address` of the token.
  - `_to` is the recipient `address` of the token.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Record a token transfer.

  @param _tierId The ID the tier being transfered
  @param _from The sender of the token.
  @param _to The recipient of the token.
*/
function recordTransferForTier(
  uint256 _tierId,
  address _from,
  address _to
) external override {
  // If this is not a mint then subtract the tier balance from the original holder.
  if (_from != address(0))
    // decrease the tier balance for the sender
    --tierBalanceOf[msg.sender][_from][_tierId];

  // if this is a burn the balance is not added
  if (_to != address(0)) {
    unchecked {
      // increase the tier balance for the beneficiary
      ++tierBalanceOf[msg.sender][_to][_tierId];
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

