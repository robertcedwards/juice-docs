# setContractUri

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

Interface: [`IJB721Delegate`](/dev/api/interfaces/ijb721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function setContractUri(string calldata _contractUri) external override onlyOwner { ... }
```

- Arguments:
  - `_contractUri` is a `string` which is the new contract URI.
- The resulting function overrides a function definition from the [`IJB721Delegate`](/dev/api/interfaces/ijb721delegate) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice
  Set a contract metadata URI to contain opensea-style metadata.

  @dev
  Only the contract's owner can set the contract URI.

  @param _contractUri The new contract URI.
*/
function setContractUri(string calldata _contractUri) external override onlyOwner {
  // Store the new value.
  store.recordSetContractUri(_contractUri);

  emit SetContractUri(_contractUri, msg.sender);
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

