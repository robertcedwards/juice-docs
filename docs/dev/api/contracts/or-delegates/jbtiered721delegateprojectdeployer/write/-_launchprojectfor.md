# _launchProjectFor

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateProjectDeployer`](/dev/api/contracts/or-delegates/jbtiered721delegateprojectdeployer/)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _launchProjectFor(address _owner, JBLaunchProjectData memory _launchProjectData)
  internal
{ ... }
```

- Arguments:
  - `_owner` is the `address` to set as the owner of the project. 
  - `_launchProjectData` is the [`JBLaunchProjectData`](/dev/api/data-structures/jblaunchprojectdata) data necessary to fulfill the transaction to launch the project.
- The function is private to this contract.
- The function doesn't return anything.


#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Launches a project.

  @param _owner The address to set as the owner of the project. 
  @param _launchProjectData Data necessary to fulfill the transaction to launch the project.
*/
function _launchProjectFor(address _owner, JBLaunchProjectData memory _launchProjectData)
  internal
{
  controller.launchProjectFor(
    _owner,
    _launchProjectData.projectMetadata,
    _launchProjectData.data,
    _launchProjectData.metadata,
    _launchProjectData.mustStartAtOrAfter,
    _launchProjectData.groupedSplits,
    _launchProjectData.fundAccessConstraints,
    _launchProjectData.terminals,
    _launchProjectData.memo
  );
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

