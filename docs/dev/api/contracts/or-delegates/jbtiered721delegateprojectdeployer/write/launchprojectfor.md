# launchProjectFor

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateProjectDeployer`](/dev/api/contracts/or-delegates/jbtiered721delegateprojectdeployer/)

Interface: [`IJBTiered721DelegateProjectDeployer`](/dev/api/interfaces/ijbtiered721delegateprojectdeployer)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function launchProjectFor(
  address _owner,
  JBDeployTiered721DelegateData memory _deployTiered721DelegateData,
  JBLaunchProjectData memory _launchProjectData
) external override returns (uint256 projectId) { ... }
```

- Arguments:
  - `_owner` is the `address` to set as the owner of the project. The project ERC-721 will be owned by this address.
  - `_deployTiered721DelegateData` is the [`JBDeployTiered721DelegateData`](/dev/api/data-structures/jbdeploytiered721delegatedata) data necessary to fulfill the transaction to deploy a delegate.
  - `_launchProjectData is the [`JBLaunchProjectData`](/dev/api/data-structures/jblaunchprojectdata) data necessary to fulfill the transaction to launch a project.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateProjectDeployer`](/dev/api/interfaces/ijbtiered721delegateprojectdeployer) interface.
- The function returns:
  - `projectId` is the `uint256` ID of the newly configured project.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice 
  Launches a new project with a tiered NFT rewards data source attached.

  @param _owner The address to set as the owner of the project. The project ERC-721 will be owned by this address.
  @param _deployTiered721DelegateData Data necessary to fulfill the transaction to deploy a delegate.
  @param _launchProjectData Data necessary to fulfill the transaction to launch a project.

  @return projectId The ID of the newly configured project.
*/
function launchProjectFor(
  address _owner,
  JBDeployTiered721DelegateData memory _deployTiered721DelegateData,
  JBLaunchProjectData memory _launchProjectData
) external override returns (uint256 projectId) {
  // Get the project ID, optimistically knowing it will be one greater than the current count.
  projectId = controller.projects().count() + 1;

  // Deploy the delegate contract.
  IJBTiered721Delegate _delegate = delegateDeployer.deployDelegateFor(
    projectId,
    _deployTiered721DelegateData
  );

  // Set the delegate address as the data source of the provided metadata.
  _launchProjectData.metadata.dataSource = address(_delegate);

  // Set the project to use the data source for its pay function.
  _launchProjectData.metadata.useDataSourceForPay = true;

  // Launch the project.
  _launchProjectFor(_owner, _launchProjectData);
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

