# JBTiered721DelegateDeployer
[Git Source](https://github.com/jbx-protocol/juice-721-delegate/blob/2d5cc8b5e5fa5f9438288f074222da0ada454156/contracts/JBTiered721DelegateDeployer.sol)

**Inherits:**
[IJBTiered721DelegateDeployer](/dev/api/extensions/juice-721-delegate/interfaces/contract.IJBTiered721DelegateDeployer.md)


Deploys a tier delegate.

*
Adheres to -
IJBTiered721DelegateDeployer: General interface for the generic controller methods in this contract that interacts with funding cycles and tokens according to the protocol's rules.*


## State Variables
### globalGovernance

The contract that supports on-chain governance across all tiers.


```solidity
JB721GlobalGovernance public immutable globalGovernance;
```


### tieredGovernance

The contract that supports on-chain governance per-tier.


```solidity
JB721TieredGovernance public immutable tieredGovernance;
```


### noGovernance

The contract that has no on-chain governance.


```solidity
JBTiered721Delegate public immutable noGovernance;
```


## Functions
### constructor


```solidity
constructor(
    JB721GlobalGovernance _globalGovernance,
    JB721TieredGovernance _tieredGovernance,
    JBTiered721Delegate _noGovernance
);
```

### deployDelegateFor


Deploys a delegate.


```solidity
function deployDelegateFor(uint256 _projectId, JBDeployTiered721DelegateData memory _deployTiered721DelegateData)
    external
    override
    returns (IJBTiered721Delegate newDelegate);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_projectId`|`uint256`|The ID of the project this contract's functionality applies to.|
|`_deployTiered721DelegateData`|`JBDeployTiered721DelegateData`|Data necessary to fulfill the transaction to deploy a delegate.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`newDelegate`|`IJBTiered721Delegate`|The address of the newly deployed delegate.|


## Errors
### INVALID_GOVERNANCE_TYPE

```solidity
error INVALID_GOVERNANCE_TYPE();
```

