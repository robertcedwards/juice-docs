# _reconfigureFundingCyclesOf

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateProjectDeployer`](/dev/api/contracts/or-delegates/jbtiered721delegateprojectdeployer/)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _reconfigureFundingCyclesOf(
  uint256 _projectId,
  JBReconfigureFundingCyclesData memory _reconfigureFundingCyclesData
) internal returns (uint256) { ... }
```

- Arguments:
  - `_projectId` is the `uint256` ID of the project having funding cycles launched.
  - `_reconfigureFundingCyclesData` is the [`JBReconfigureFundingCyclesData`](/dev/api/data-structures/jbreconfigurefundingcyclesdata) data necessary to fulfill the transaction to launch funding cycles for the project.
- The function is private to this contract.
- The function returns:
  - A `uint256` which represents the configuration of the funding cycle that was successfully reconfigured.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice
  Reconfigure funding cycles for a project.

  @param _projectId The ID of the project having funding cycles launched.
  @param _reconfigureFundingCyclesData Data necessary to fulfill the transaction to launch funding cycles for the project.

  @return The configuration of the funding cycle that was successfully reconfigured.
*/
function _reconfigureFundingCyclesOf(
  uint256 _projectId,
  JBReconfigureFundingCyclesData memory _reconfigureFundingCyclesData
) internal returns (uint256) {
  return
    controller.reconfigureFundingCyclesOf(
      _projectId,
      _reconfigureFundingCyclesData.data,
      _reconfigureFundingCyclesData.metadata,
      _reconfigureFundingCyclesData.mustStartAtOrAfter,
      _reconfigureFundingCyclesData.groupedSplits,
      _reconfigureFundingCyclesData.fundAccessConstraints,
      _reconfigureFundingCyclesData.memo
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

