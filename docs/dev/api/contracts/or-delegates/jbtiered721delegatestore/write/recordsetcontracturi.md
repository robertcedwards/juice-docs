# recordSetContractUri

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

**Sets the contract URI.**

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function recordSetContractUri(string calldata _uri) external override { ... }
```

- Arguments:
  - `_uri` is a `string` denoting the contract URI to set.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Sets the contract URI. 

  @param _uri The contract URI to set.
*/
function recordSetContractUri(string calldata _uri) external override {
  contractUriOf[msg.sender] = _uri;
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

