# launchFundingCyclesFor

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateProjectDeployer`](/dev/api/contracts/or-delegates/jbtiered721delegateprojectdeployer/)

Interface: [`IJBTiered721DelegateProjectDeployer`](/dev/api/interfaces/ijbtiered721delegateprojectdeployer)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function launchFundingCyclesFor(
  uint256 _projectId,
  JBDeployTiered721DelegateData memory _deployTiered721DelegateData,
  JBLaunchFundingCyclesData memory _launchFundingCyclesData
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
  - `_projectId` is the `uint256` ID of the project having funding cycles launched.
  - `_deployTiered721DelegateData` is the [`JBDeployTiered721DelegateData`](/dev/api/data-structures/jbdeploytiered721delegatedata) data necessary to fulfill the transaction to deploy a delegate.
  - `_launchFundingCyclesData` is the [`JBLaunchFundingCyclesData`](/dev/api/data-structures/jblaunchfundingcyclesdata) data necessary to fulfill the transaction to launch funding cycles for the project.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateProjectDeployer`](/dev/api/interfaces/ijbtiered721delegateprojectdeployer) interface.
- The function returns:
  - `configuration` the is a `uint256` which represents the configuration of the funding cycle that was successfully created.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice
  Launches funding cycle's for a project with a delegate attached.

  @dev
  Only a project owner or operator can launch its funding cycles.

  @param _projectId The ID of the project having funding cycles launched.
  @param _deployTiered721DelegateData Data necessary to fulfill the transaction to deploy a delegate.
  @param _launchFundingCyclesData Data necessary to fulfill the transaction to launch funding cycles for the project.

  @return configuration The configuration of the funding cycle that was successfully created.
*/
function launchFundingCyclesFor(
  uint256 _projectId,
  JBDeployTiered721DelegateData memory _deployTiered721DelegateData,
  JBLaunchFundingCyclesData memory _launchFundingCyclesData
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
  _launchFundingCyclesData.metadata.dataSource = address(_delegate);

  // Set the project to use the data source for its pay function.
  _launchFundingCyclesData.metadata.useDataSourceForPay = true;

  // Launch the funding cycles.
  return _launchFundingCyclesFor(_projectId, _launchFundingCyclesData);
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

