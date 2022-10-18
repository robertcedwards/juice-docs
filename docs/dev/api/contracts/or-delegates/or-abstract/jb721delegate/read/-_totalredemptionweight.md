# _totalRedemptionWeight

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JB721Delegate`](/dev/api/contracts/or-delegates/or-abstract/jb721delegate/)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _totalRedemptionWeight() internal view virtual returns (uint256) { ... }
```

- The function is private to this contract.
- The function returns:
  - A `uint256` indicating the cumulative weight that all token IDs have in redemptions.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  The cumulative weight that all token IDs have in redemptions. 

  @return The total weight.
*/
function _totalRedemptionWeight() internal view virtual returns (uint256) {
  return 0;
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

