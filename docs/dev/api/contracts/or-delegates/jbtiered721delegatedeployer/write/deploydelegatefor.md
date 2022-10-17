# deployDelegateFor

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateDeployer`](/api/contracts/or-delegates/jbtiered721delegatedeployer/)

Interface: [`IJBTiered721DelegateDeployer`](/dev/api/interfaces/ijbtiered721delegatedeployer)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function deployDelegateFor(
  uint256 _projectId,
  JBDeployTiered721DelegateData memory _deployTiered721DelegateData
) external override returns (IJBTiered721Delegate) { ... }
```


- Arguments:
  - `_projectId` is the `uint256` ID of the project this contract's functionality applies to.
  - `_deployTiered721DelegateData` is the [`JBDeployTiered721DelegateData`](/dev/api/data-structures/jbdeploytiered721delegatedata) data necessary to fulfill the transaction to deploy a delegate.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateDeployer`](/dev/api/interfaces/ijbtiered721delegatedeployer) interface.
- The function returns:
  - `newDelegate` is the newly deployed [`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate).

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Deploys a delegate.

  @param _projectId The ID of the project this contract's functionality applies to.
  @param _deployTiered721DelegateData Data necessary to fulfill the transaction to deploy a delegate.

  @return newDelegate The address of the newly deployed delegate.
*/
function deployDelegateFor(
  uint256 _projectId,
  JBDeployTiered721DelegateData memory _deployTiered721DelegateData
) external override returns (IJBTiered721Delegate) {
  // Deploy the governance variant that was requested
  address codeToCopy;
  if (_deployTiered721DelegateData.governanceType == JB721GovernanceType.NONE)
    codeToCopy = address(noGovernance);
  else if (_deployTiered721DelegateData.governanceType == JB721GovernanceType.TIERED)
    codeToCopy = address(tieredGovernance);
  else if (_deployTiered721DelegateData.governanceType == JB721GovernanceType.GLOBAL)
    codeToCopy = address(globalGovernance);
  else revert INVALID_GOVERNANCE_TYPE();

  JB721GlobalGovernance newDelegate = JB721GlobalGovernance(_clone(codeToCopy));
  newDelegate.initialize(
    _projectId,
    _deployTiered721DelegateData.directory,
    _deployTiered721DelegateData.name,
    _deployTiered721DelegateData.symbol,
    _deployTiered721DelegateData.fundingCycleStore,
    _deployTiered721DelegateData.baseUri,
    _deployTiered721DelegateData.tokenUriResolver,
    _deployTiered721DelegateData.contractUri,
    _deployTiered721DelegateData.pricing,
    _deployTiered721DelegateData.store,
    _deployTiered721DelegateData.flags
  );

  // Transfer the ownership to the specified address.
  if (_deployTiered721DelegateData.owner != address(0))
    newDelegate.transferOwnership(_deployTiered721DelegateData.owner);

  emit DelegateDeployed(_projectId, newDelegate, _deployTiered721DelegateData.governanceType);

  return newDelegate;
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

