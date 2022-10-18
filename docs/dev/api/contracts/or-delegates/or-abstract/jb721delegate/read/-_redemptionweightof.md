# _redemptionWeightOf

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JB721Delegate`](/dev/api/contracts/or-delegates/or-abstract/jb721delegate/)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _redemptionWeightOf(uint256[] memory _tokenIds) internal view virtual returns (uint256) { ... }
```

- Arguments:
  - `_tokenIds` is a `uint256[]` representing the IDs of the tokens to get the cumulative redemption weight of.
- The function is private to this contract.
- The function returns:
  - A `uint256` indicating the cumulative weight the given token IDs have in redemptions compared to the `totalRedemptionWeight`. 

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  The cumulative weight the given token IDs have in redemptions compared to the `totalRedemptionWeight`. 

  @param _tokenIds The IDs of the tokens to get the cumulative redemption weight of.

  @return The weight.
*/
function _redemptionWeightOf(uint256[] memory _tokenIds) internal view virtual returns (uint256) {
  _tokenIds; // Prevents unused var compiler and natspec complaints.
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

