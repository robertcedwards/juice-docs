# _totalRedemptionWeight

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _totalRedemptionWeight() internal view virtual override returns (uint256) { ... }
```

- The function has no arguments.
- The function is private to this contract.
- The function returns:
  - The cumulative weight that all token IDs have in redemptions as a `uint256`.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  The cumulative weight that all token IDs have in redemptions. 

  @return The total weight.
*/
function _totalRedemptionWeight() internal view virtual override returns (uint256) {
  return store.totalRedemptionWeight(address(this));
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

