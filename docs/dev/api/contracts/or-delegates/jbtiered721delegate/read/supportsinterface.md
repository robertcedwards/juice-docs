# supportsInterface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

Interface: [`IERC165`](https://docs.openzeppelin.com/contracts/2.x/api/introspection#IERC165)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function supportsInterface(bytes4 _interfaceId) public view override returns (bool) { ... }
```

- Arguments:
  - `_interfaceId` is the `bytes4` ID of the interface to check for adherance to.
- The resulting function overrides a function definition from the [`IERC165`](https://docs.openzeppelin.com/contracts/2.x/api/introspection#IERC165) interface.
- The function returns:
  - A `bool` indicating whether this contract adheres to the specified interface.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice
  Indicates if this contract adheres to the specified interface.

  @dev
  See {IERC165-supportsInterface}.

  @param _interfaceId The ID of the interface to check for adherance to.
*/
function supportsInterface(bytes4 _interfaceId) public view override returns (bool) {
  return
    _interfaceId == type(IJBTiered721Delegate).interfaceId ||
    super.supportsInterface(_interfaceId);
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

