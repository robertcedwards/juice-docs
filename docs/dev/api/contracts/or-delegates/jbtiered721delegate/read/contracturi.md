# contractURI

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

Interface: [`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function contractURI() external view override returns (string memory) { ... }
```

- The function does not have any arguments.
- The resulting function overrides a function definition from the [`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate) interface.
- The function returns:
  - The contract's `string` metadata URI.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Returns the URI where contract metadata can be found. 

  @return The contract's metadata URI.
*/
function contractURI() external view override returns (string memory) {
  return store.contractUriOf(address(this));
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

