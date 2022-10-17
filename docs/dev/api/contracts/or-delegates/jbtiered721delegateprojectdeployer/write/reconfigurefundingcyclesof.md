# reconfigureFundingCyclesOf

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateProjectDeployer`](/dev/api/contracts/or-delegates/jbtiered721delegateprojectdeployer/)

Interface: [`IJBTiered721DelegateProjectDeployer`](/dev/api/interfaces/ijbtiered721delegateprojectdeployer)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function reconfigureFundingCyclesOf(
  uint256 _projectId,
  JBDeployTiered721DelegateData memory _deployTiered721DelegateData,
  JBReconfigureFundingCyclesData memory _reconfigureFundingCyclesData
)
  external
  override
  requirePermission(
    controller.projects().ownerOf(_projectId),
    _projectId,
    JBOperations.RECONFIGURE
  )
  returns (uint256 configuration)
{ ... }
```

- Arguments:
  - `_projectId` is a `uint256` which denotes the ID of the project having funding cycles reconfigured.
  - `_deployTiered721DelegateData` is a [`JBDeployTiered721DelegateData`](/dev/api/data-structures/jbdeploytiered721delegatedata) necessary to fulfill the transaction to deploy a delegate.
  - `_reconfigureFundingCyclesData` is a [`JBReconfigureFundingCyclesData`](/dev/api/data-structures/jbreconfigurefundingcyclesdata) Data necessary to fulfill the transaction to reconfigure funding cycles for the project.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateProjectDeployer`](/dev/api/interfaces/ijbtiered721delegateprojectdeployer) interface.
- The function returns:
  - `configuration` is a `uint256` which represents the configuration of the funding cycle that was successfully reconfigured.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice
  Reconfigures funding cycles for a project with a delegate attached.

  @dev
  Only a project's owner or a designated operator can configure its funding cycles.

  @param _projectId The ID of the project having funding cycles reconfigured.
  @param _deployTiered721DelegateData Data necessary to fulfill the transaction to deploy a delegate.
  @param _reconfigureFundingCyclesData Data necessary to fulfill the transaction to reconfigure funding cycles for the project.

  @return configuration The configuration of the funding cycle that was successfully reconfigured.
*/
function reconfigureFundingCyclesOf(
  uint256 _projectId,
  JBDeployTiered721DelegateData memory _deployTiered721DelegateData,
  JBReconfigureFundingCyclesData memory _reconfigureFundingCyclesData
)
  external
  override
  requirePermission(
    controller.projects().ownerOf(_projectId),
    _projectId,
    JBOperations.RECONFIGURE
  )
  returns (uint256 configuration)
{
  // Deploy the delegate contract.
  IJBTiered721Delegate _delegate = delegateDeployer.deployDelegateFor(
    _projectId,
    _deployTiered721DelegateData
  );

  // Set the delegate address as the data source of the provided metadata.
  _reconfigureFundingCyclesData.metadata.dataSource = address(_delegate);

  // Set the project to use the data source for its pay function.
  _reconfigureFundingCyclesData.metadata.useDataSourceForPay = true;

  // Reconfigure the funding cycles.
  return _reconfigureFundingCyclesOf(_projectId, _reconfigureFundingCyclesData);
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

