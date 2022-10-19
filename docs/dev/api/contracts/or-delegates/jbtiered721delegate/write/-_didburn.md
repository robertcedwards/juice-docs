# _didBurn

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _didBurn(uint256[] memory _tokenIds) internal override { ... }
```

- Arguments:
  - `_tokenIds` is a `uint256[]` containing the IDs of the tokens that were burned.
- The function is private to this contract.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  A function that will run when a tokens are burned via redemption.

  @param _tokenIds The IDs of the tokens that were burned.
*/
function _didBurn(uint256[] memory _tokenIds) internal override {
  // Add to burned counter.
  store.recordBurn(_tokenIds);
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

