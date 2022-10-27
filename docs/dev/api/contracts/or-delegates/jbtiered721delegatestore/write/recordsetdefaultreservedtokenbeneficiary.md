# recordSetDefaultReservedTokenBeneficiary

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

**Sets the reserved token beneficiary.**

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function recordSetDefaultReservedTokenBeneficiary(address _beneficiary) external override { ... }
```

- Arguments:
  - `_beneficiary` is the `address` of the reserved token beneficiary.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Sets the reserved token beneficiary.

  @param _beneficiary The reservd token beneficiary.
*/
function recordSetDefaultReservedTokenBeneficiary(address _beneficiary) external override {
  defaultReservedTokenBeneficiaryOf[msg.sender] = _beneficiary;
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

