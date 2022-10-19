# _redemptionWeightOf

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _redemptionWeightOf(uint256[] memory _tokenIds)
  internal
  view
  virtual
  override
  returns (uint256)
{ ... }
```

- Arguments:
  - `_tokenIds` is a `uint256[]` containing the IDs of the tokens to get the cumulative redemption weight of.
- The function is private to this contract.
- The function returns:
  - The `uint256` redemption weight.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  The cumulative weight the given token IDs have in redemptions compared to the `_totalRedemptionWeight`. 

  @param _tokenIds The IDs of the tokens to get the cumulative redemption weight of.

  @return The weight.
*/
function _redemptionWeightOf(uint256[] memory _tokenIds)
  internal
  view
  virtual
  override
  returns (uint256)
{
  return store.redemptionWeightOf(address(this), _tokenIds);
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

