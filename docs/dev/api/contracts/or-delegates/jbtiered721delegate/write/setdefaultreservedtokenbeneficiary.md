# setDefaultReservedTokenBeneficiary

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

Interface: [`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function setDefaultReservedTokenBeneficiary(address _beneficiary) external override onlyOwner { ... }
```

- Arguments:
  - `_beneficiary` is the `address` of the default beneificiary of the reserved tokens.
- The resulting function overrides a function definition from the [`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Sets the beneificiary of the reserved tokens for tiers where a specific beneficiary isn't set. 

  @dev
  Only the contract's owner can set the default reserved token beneficiary.

  @param _beneficiary The default beneificiary of the reserved tokens.
*/
function setDefaultReservedTokenBeneficiary(address _beneficiary) external override onlyOwner {
  // Set the beneficiary.
  store.recordSetDefaultReservedTokenBeneficiary(_beneficiary);

  emit SetDefaultReservedTokenBeneficiary(_beneficiary, msg.sender);
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

