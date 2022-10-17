# JBTiered721DelegateProjectDeployer

*Deploys a project with a tiered tier delegate.*

#### Code

https://github.com/jbx-protocol/juice-nft-rewards/blob/main/contracts/JBTiered721DelegateProjectDeployer.sol

#### Addresses

Ethereum Mainnet: *Not deployed*

Goerli Testnet: *Not deployed*

#### Interfaces

|Name|Description|
|-|-|
|[**`IJBTiered721DelegateProjectDeployer`**](/dev/api/interfaces/ijbtiered721delegateprojectdeployer)|General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.|

#### Inheritance

|Contract|Description|
|-|-|
|[**`JBOperatable `**](/dev/api/contracts/or-abstract/jboperatable/)|Modifiers to allow access to functions based on the message sender's operator status.|

#### Constructor

```
/**
  @param _controller The controller with which new projects should be deployed. 
  @param _delegateDeployer The deployer of delegates.
  @param _operatorStore A contract storing operator assignments.
*/
constructor(
  IJBController _controller,
  IJBTiered721DelegateDeployer _delegateDeployer,
  IJBOperatorStore _operatorStore
) JBOperatable(_operatorStore) {
  controller = _controller;
  delegateDeployer = _delegateDeployer;
}
```

#### Properties

|Name|Definition|
|-|-|
|[**`controller`**](.)|**Traits**<ul><li>`immutable`</li></ul>**Returns**<ul><li>[`IJBController`](/dev/api/interfaces/ijbcontroller)</li></ul>|
|[**`delegateDeployer`**](.)|**Traits**<ul><li>`immutable`</li></ul>**Returns**<ul><li>[`IJBTiered721DelegateDeployer`](/dev/api/interfaces/ijbtiered721delegatedeployer)</li></ul>|

#### Write

|Function|Definition|
|-|-|
|[**`launchProjectFor`**](.)|**Params**<ul><li>`address _owner`</li><li>[`JBDeployTiered721DelegateData`](/dev/api/data-structures/jbdeploytiered721delegatedata) `memory _deployTiered721DelegateData`</li><li>[`JBLaunchProjectData`](/dev/api/data-structures/jblaunchprojectdata) `memory _launchProjectData`</li></ul>**Returns**<ul><li>`uint256 projectId`</li></ul>|
|[**`launchFundingCyclesFor`**](.)|**Traits**<ul><li>`requirePermission(controller.projects().ownerOf(_projectId), _projectId, JBOperations.RECONFIGURE)`</li></ul>**Params**<ul><li>`uint256 _projectId`</li><li>[`JBDeployTiered721DelegateData`](/dev/api/data-structures/jbdeploytiered721delegatedata) `memory _deployTiered721DelegateData`</li><li>[`JBLaunchFundingCyclesData`](/dev/api/data-structures/jblaunchfundingcyclesdata) `memory _launchFundingCyclesData`</li></ul>**Returns**<ul><li>`uint256 configuration`</li></ul>|
|[**`reconfigureFundingCyclesOf`**](.)|**Traits**<ul><li>`requirePermission(controller.projects().ownerOf(_projectId), _projectId, JBOperations.RECONFIGURE)`</li></ul>**Params**<ul><li>`uint256 _projectId,`</li><li>[`JBDeployTiered721DelegateData`](/dev/api/data-structures/jbdeploytiered721delegatedata) `memory _deployTiered721DelegateData,`</li><li>[`JBReconfigureFundingCyclesData`](/dev/api/data-structures/jbreconfigurefundingcyclesdata) `memory _reconfigureFundingCyclesData`</li></ul>**Returns**<ul><li>`uint256 configuration`</li></ul>|
