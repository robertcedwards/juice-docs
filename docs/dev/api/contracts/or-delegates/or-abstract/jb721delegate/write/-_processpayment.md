# _processPayment

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JB721Delegate`](/dev/api/contracts/or-delegates/or-abstract/jb721delegate/)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _processPayment(JBDidPayData calldata _data) internal virtual { ... }
```

- Arguments:
  - `_data` is the Juicebox standard [`JBDidPayData`](/dev/api/data-structures/jbdidpaydata) project payment data.
- The function is private to this contract.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Process a received payment.

  @param _data The Juicebox standard project payment data.
*/
function _processPayment(JBDidPayData calldata _data) internal virtual {
  _data; // Prevents unused var compiler and natspec complaints.
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
