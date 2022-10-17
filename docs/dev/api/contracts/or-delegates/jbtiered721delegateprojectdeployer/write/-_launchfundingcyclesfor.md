# _launchFundingCyclesFor

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateProjectDeployer`](/dev/api/contracts/or-delegates/jbtiered721delegateprojectdeployer/)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _launchFundingCyclesFor(
  uint256 _projectId,
  JBLaunchFundingCyclesData memory _launchFundingCyclesData
) internal returns (uint256) { ... }
```

- Arguments:
  - `_projectId` is the `uint256` ID of the project having funding cycles launched.
  - `_launchFundingCyclesData` is the [`JBLaunchFundingCyclesData`](/dev/api/data-structures/jblaunchfundingcyclesdata) data necessary to fulfill the transaction to launch funding cycles for the project.
- The function is private to this contract.
- The function returns:
  - A `uint256` which represents the configuration of the funding cycle that was successfully created.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice
  Launches funding cycles for a project.

  @param _projectId The ID of the project having funding cycles launched.
  @param _launchFundingCyclesData Data necessary to fulfill the transaction to launch funding cycles for the project.

  @return configuration The configuration of the funding cycle that was successfully created.
*/
function _launchFundingCyclesFor(
  uint256 _projectId,
  JBLaunchFundingCyclesData memory _launchFundingCyclesData
) internal returns (uint256) {
  return
    controller.launchFundingCyclesFor(
      _projectId,
      _launchFundingCyclesData.data,
      _launchFundingCyclesData.metadata,
      _launchFundingCyclesData.mustStartAtOrAfter,
      _launchFundingCyclesData.groupedSplits,
      _launchFundingCyclesData.fundAccessConstraints,
      _launchFundingCyclesData.terminals,
      _launchFundingCyclesData.memo
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

