# recordFlags

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

**Sets flags.**

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function recordFlags(JBTiered721Flags calldata _flags) external override { ... }
```

- Arguments:
  - `_flags` is a [`JBTiered721Flags`](/dev/api/data-structures/jbtiered721flags) containing the flags to set.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Sets flags. 

  @param _flags The flag to sets.
*/
function recordFlags(JBTiered721Flags calldata _flags) external override {
  _flagsOf[msg.sender] = _flags;
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

