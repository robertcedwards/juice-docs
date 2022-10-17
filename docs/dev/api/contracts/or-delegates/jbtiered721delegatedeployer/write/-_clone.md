# _clone

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateDeployer`](/api/contracts/or-delegates/jbtiered721delegatedeployer/)

Interface: [`IJBTiered721DelegateDeployer`](/dev/api/interfaces/ijbtiered721delegatedeployer)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _clone(address _targetAddress) internal returns (address _out) { ... }
```

- Arguments:
  - `_targetAddress` is the `address` of the contract to be cloned.
- The function is private to this contract.
- The function returns:
  - `_out` is the `address` of the newly cloned contract.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice Clone and redeploy the bytecode of a given address

  @dev Runtime bytecode needs a constructor -> we append this one
       to the bytecode, which is a minimalistic one only returning the runtime bytecode

       See https://github.com/drgorillamd/clone-deployed-contract/blob/master/readme.MD for details
 */
function _clone(address _targetAddress) internal returns (address _out) {
  assembly {
    // Get deployed/runtime code size
    let _codeSize := extcodesize(_targetAddress)

    // Get a bit of freemem to land the bytecode, not updated as we'll leave this scope right after create(..)
    let _freeMem := mload(0x40)

    // Shift the length to the length placeholder, in the constructor
    let _mask := mul(_codeSize, 0x100000000000000000000000000000000000000000000000000000000)

    // Insert the length in the correct sport (after the PUSH3 / 0x62)
    let _initCode := or(_mask, 0x62000000600081600d8239f3fe00000000000000000000000000000000000000)

    // Store the deployment bytecode
    mstore(_freeMem, _initCode)

    // Copy the bytecode (our initialise part is 13 bytes long)
    extcodecopy(_targetAddress, add(_freeMem, 13), 0, _codeSize)

    // Deploy the copied bytecode
    _out := create(0, _freeMem, _codeSize)
  }
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

