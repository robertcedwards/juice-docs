# recordSetTokenUriResolver

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

**Sets the token URI resolver.**

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function recordSetTokenUriResolver(IJBTokenUriResolver _resolver) external override { ... }
```

- Arguments:
  - `_resolver` is the [`IJBTokenUriResolver`](/dev/api/interfaces/ijbtokenuriresolver) to set.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Sets the token URI resolver. 

  @param _resolver The resolver to set.
*/
function recordSetTokenUriResolver(IJBTokenUriResolver _resolver) external override {
  tokenUriResolverOf[msg.sender] = _resolver;
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

