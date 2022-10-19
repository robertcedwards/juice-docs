# setBaseUri

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

Interface: [`IJB721Delegate`](/dev/api/interfaces/ijb721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function setBaseUri(string memory _baseUri) external override onlyOwner { ... }
```

- Arguments:
  - `_baseUri` is a `string` which is the new base URI.
- The resulting function overrides a function definition from the [`IJB721Delegate`](/dev/api/interfaces/ijb721delegate) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice
  Set a base token URI.

  @dev
  Only the contract's owner can set the base URI.

  @param _baseUri The new base URI.
*/
function setBaseUri(string memory _baseUri) external override onlyOwner {
  // Store the new value.
  store.recordSetBaseUri(_baseUri);

  emit SetBaseUri(_baseUri, msg.sender);
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

