# balanceOf

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

Interface: [`IERC721`](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function balanceOf(address _owner) public view override returns (uint256 balance) { ... }
```

- Arguments:
  - `_owner` is the `address` to check the balance of.
- The resulting function overrides a function definition from the [`IERC721`](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721) interface.
- The function returns:
  - `balance` is the `uint256` number of tokens owners by the owner across all tiers.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice 
  The total number of tokens owned by the given owner across all tiers. 

  @param _owner The address to check the balance of.

  @return balance The number of tokens owners by the owner accross all tiers.
*/
function balanceOf(address _owner) public view override returns (uint256 balance) {
  return store.balanceOf(address(this), _owner);
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

