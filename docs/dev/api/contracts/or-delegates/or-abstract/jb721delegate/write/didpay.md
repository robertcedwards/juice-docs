# didPay

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JB721Delegate`](/dev/api/contracts/or-delegates/or-abstract/jb721delegate/)

Interface: [`IJBPayDelegate`](/dev/api/interfaces/ijbpaydelegate/)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function didPay(JBDidPayData calldata _data) external payable virtual override { ... }
```

- Arguments:
  - `_data` is the Juicebox standard [`JBPayParamsData`](/dev/api/data-structures/jbpayparamsdata) project payment data.
- The resulting function overrides a function definition from the [`IJBPayDelegate`](/dev/api/interfaces/ijbpaydelegate) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice 
  Part of IJBPayDelegate, this function gets called when the project receives a payment. It will mint an NFT to the contributor (_data.beneficiary) if conditions are met.

  @dev 
  This function will revert if the contract calling is not one of the project's terminals. 

  @param _data The Juicebox standard project payment data.
*/
function didPay(JBDidPayData calldata _data) external payable virtual override {
  // Make sure the caller is a terminal of the project, and the call is being made on behalf of an interaction with the correct project.
  if (
    msg.value != 0 ||
    !directory.isTerminalOf(projectId, IJBPaymentTerminal(msg.sender)) ||
    _data.projectId != projectId
  ) revert INVALID_PAYMENT_EVENT();

  // Process the payment.
  _processPayment(_data);
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

